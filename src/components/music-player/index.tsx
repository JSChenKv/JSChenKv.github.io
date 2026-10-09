import { useEffect, useId, useRef, useState } from 'react';
import {
  RiMusic2Line,
  RiPauseFill,
  RiPlayFill,
  RiVolumeUpLine,
} from 'react-icons/ri';
import { SanitizedMusic } from '../../interfaces/sanitized-config';
import SoundVisualizer, { AudioGraph } from './sound-visualizer';

const PREFERENCES_KEY = 'gitprofile-tavern-radio';

interface Preferences {
  src: string;
  volume: number;
}

const initialPreferences = (music: SanitizedMusic): Preferences => {
  const defaults = { src: music.tracks[0].src, volume: music.initialVolume };
  try {
    const saved = JSON.parse(
      localStorage.getItem(PREFERENCES_KEY) || 'null',
    ) as Partial<Preferences> | null;
    return {
      src:
        music.tracks.find((track) => track.src === saved?.src)?.src ||
        defaults.src,
      volume:
        typeof saved?.volume === 'number' && Number.isFinite(saved.volume)
          ? Math.min(1, Math.max(0, saved.volume))
          : defaults.volume,
    };
  } catch {
    return defaults;
  }
};

const savePreferences = (preferences: Preferences) => {
  try {
    localStorage.setItem(PREFERENCES_KEY, JSON.stringify(preferences));
  } catch {
    // Playback still works when browser storage is unavailable.
  }
};

const audioUrl = (src: string) =>
  /^(https?:|data:|blob:)/i.test(src)
    ? src
    : `${import.meta.env.BASE_URL}${src.replace(/^\/+/, '')}`;

const MusicPlayer = ({ music }: { music: SanitizedMusic }) => {
  const [preferences, setPreferences] = useState(() =>
    initialPreferences(music),
  );
  // Later source changes happen in the click handler so React does not reload
  // the same source and interrupt the play request during a track switch.
  const [initialAudioUrl] = useState(() => audioUrl(preferences.src));
  const [playing, setPlaying] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const [error, setError] = useState('');
  const audioRef = useRef<HTMLAudioElement>(null);
  const graphRef = useRef<AudioGraph | null>(null);
  const playRequest = useRef(0);
  const trackId = useId();
  const volumeId = useId();
  const track =
    music.tracks.find((item) => item.src === preferences.src) ||
    music.tracks[0];

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = preferences.volume;
  }, [preferences.volume]);

  useEffect(() => {
    return () => {
      const graph = graphRef.current;
      if (!graph) return;
      graph.source.disconnect();
      graph.analyser.disconnect();
      void graph.context.close().catch(() => {});
      graphRef.current = null;
    };
  }, []);

  const prepareVisualizer = (audio: HTMLAudioElement) => {
    if (typeof AudioContext === 'undefined') return;
    try {
      if (!graphRef.current) {
        const context = new AudioContext();
        const analyser = context.createAnalyser();
        analyser.fftSize = 512;
        analyser.smoothingTimeConstant = 0.8;
        const source = context.createMediaElementSource(audio);
        source.connect(analyser);
        analyser.connect(context.destination);
        graphRef.current = { context, source, analyser };
      }
      // Resume in the click handler, before awaiting media playback.
      void graphRef.current.context.resume().catch(() => {});
    } catch {
      // Keep the ordinary player available when Web Audio is unsupported.
    }
  };

  const startPlaying = async (audio: HTMLAudioElement) => {
    const request = ++playRequest.current;
    setError('');
    setWaiting(true);
    try {
      prepareVisualizer(audio);
      await audio.play();
    } catch {
      if (request === playRequest.current) {
        setWaiting(false);
        setPlaying(false);
        setError(
          "This tune couldn't start. Try play again or choose another track.",
        );
      }
    }
  };

  const togglePlayback = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (!audio.paused) {
      ++playRequest.current;
      audio.pause();
    } else {
      void startPlaying(audio);
    }
  };

  const changeTrack = (src: string) => {
    const audio = audioRef.current;
    const resume = audio && !audio.paused;
    ++playRequest.current;
    if (audio) {
      audio.pause();
      audio.src = audioUrl(src);
    }
    const next = { ...preferences, src };
    setPreferences(next);
    savePreferences(next);
    setError('');
    setWaiting(false);
    if (resume && audio) void startPlaying(audio);
  };

  const changeVolume = (volume: number) => {
    const next = { ...preferences, volume };
    if (audioRef.current) audioRef.current.volume = volume;
    setPreferences(next);
    savePreferences(next);
  };

  return (
    <section
      aria-label={music.title}
      className="card shadow-lg card-sm border border-primary/20 bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10"
    >
      <div className="card-body gap-4 p-6">
        <div className="flex items-center gap-3">
          <div
            className={`rounded-full bg-primary/10 p-3 text-primary ${playing ? 'motion-safe:animate-pulse' : ''}`}
          >
            <RiMusic2Line className="h-5 w-5" aria-hidden="true" />
          </div>
          <div className="flex-1">
            <h2 className="font-semibold text-base-content">{music.title}</h2>
            <p className="text-xs text-base-content/60">
              Take a seat. Stay a while.
            </p>
          </div>
          <span className="badge badge-ghost badge-sm" aria-live="polite">
            {waiting ? 'Loading' : playing ? 'Playing' : 'Quiet'}
          </span>
        </div>
        <div>
          <label htmlFor={trackId} className="sr-only">
            Background music track
          </label>
          <select
            id={trackId}
            className="select select-bordered select-sm w-full bg-base-100"
            value={track.src}
            onChange={(event) => changeTrack(event.target.value)}
          >
            {music.tracks.map((item) => (
              <option key={item.src} value={item.src}>
                {item.title}
              </option>
            ))}
          </select>
          <p className="mt-2 text-xs text-base-content/60">
            {track.mood || 'A little music for your visit.'}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="btn btn-primary btn-sm min-w-24"
            onClick={togglePlayback}
            aria-label={playing ? 'Pause music' : 'Play music'}
            aria-pressed={playing}
          >
            {playing ? (
              <RiPauseFill aria-hidden="true" />
            ) : (
              <RiPlayFill aria-hidden="true" />
            )}
            {playing ? 'Pause' : 'Play'}
          </button>
          <RiVolumeUpLine
            className="shrink-0 text-base-content/60"
            aria-hidden="true"
          />
          <label htmlFor={volumeId} className="sr-only">
            Music volume
          </label>
          <input
            id={volumeId}
            type="range"
            min="0"
            max="1"
            step="0.01"
            className="range range-primary range-xs min-w-0 flex-1"
            value={preferences.volume}
            onChange={(event) => changeVolume(Number(event.target.value))}
            aria-valuetext={`${Math.round(preferences.volume * 100)} percent`}
          />
          <span className="w-8 text-right text-xs tabular-nums text-base-content/60">
            {Math.round(preferences.volume * 100)}%
          </span>
        </div>
        <SoundVisualizer graphRef={graphRef} playing={playing} />
        {error && (
          <p role="alert" className="text-xs text-error">
            {error}
          </p>
        )}
        <div className="flex justify-end text-xs text-base-content/50">
          <span>
            {track.sourceUrl ? (
              <a
                className="link link-hover"
                href={track.sourceUrl}
                target="_blank"
                rel="noreferrer"
              >
                {track.artist || 'Music source'}
              </a>
            ) : (
              track.artist
            )}
            {track.license && (
              <>
                {' · '}
                {track.licenseUrl ? (
                  <a
                    className="link link-hover"
                    href={track.licenseUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {track.license}
                  </a>
                ) : (
                  track.license
                )}
              </>
            )}
          </span>
        </div>
        <audio
          ref={audioRef}
          crossOrigin="anonymous"
          src={initialAudioUrl}
          preload="none"
          loop
          onPlay={() => setPlaying(true)}
          onPlaying={() => setWaiting(false)}
          onWaiting={() => setWaiting(true)}
          onPause={() => {
            setPlaying(false);
            setWaiting(false);
          }}
          onError={() => {
            setPlaying(false);
            setWaiting(false);
            setError(
              "This tune couldn't be loaded. Please choose another track.",
            );
          }}
        />
      </div>
    </section>
  );
};

export default MusicPlayer;
