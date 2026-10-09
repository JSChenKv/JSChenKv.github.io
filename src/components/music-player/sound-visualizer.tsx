import { RefObject, useEffect, useRef } from 'react';

export interface AudioGraph {
  context: AudioContext;
  source: MediaElementAudioSourceNode;
  analyser: AnalyserNode;
}

const BAR_COUNT = 32;

const SoundVisualizer = ({
  graphRef,
  playing,
}: {
  graphRef: RefObject<AudioGraph | null>;
  playing: boolean;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const bars = svgRef.current?.querySelectorAll('rect');
    if (!bars) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const samples = new Uint8Array(256);
    let frame = 0;

    const reset = () => {
      bars.forEach((bar) => {
        bar.setAttribute('height', '2');
        bar.setAttribute('y', '36');
        bar.setAttribute('opacity', '0.3');
      });
    };

    const draw = () => {
      const analyser = graphRef.current?.analyser;
      if (!analyser || !playing || reducedMotion.matches || document.hidden) {
        reset();
        return;
      }
      analyser.getByteFrequencyData(samples);
      // Logarithmic bands give bass and midrange notes room in a small display.
      bars.forEach((bar, index) => {
        const start = Math.floor(2 ** ((index / BAR_COUNT) * 7));
        const end = Math.max(
          start + 1,
          Math.floor(2 ** (((index + 1) / BAR_COUNT) * 7)),
        );
        let peak = 0;
        for (let bin = start; bin < end; bin++)
          peak = Math.max(peak, samples[bin]);
        const level = peak / 255;
        const height = 2 + level * 34;
        bar.setAttribute('height', height.toFixed(2));
        bar.setAttribute('y', (38 - height).toFixed(2));
        bar.setAttribute('opacity', (0.3 + level * 0.7).toFixed(2));
      });
      frame = requestAnimationFrame(draw);
    };

    const restart = () => {
      cancelAnimationFrame(frame);
      draw();
    };
    restart();
    reducedMotion.addEventListener('change', restart);
    document.addEventListener('visibilitychange', restart);
    return () => {
      cancelAnimationFrame(frame);
      reducedMotion.removeEventListener('change', restart);
      document.removeEventListener('visibilitychange', restart);
      reset();
    };
  }, [graphRef, playing]);

  return (
    <div className="rounded-xl bg-base-200/50 px-3 py-2 text-primary">
      <svg
        ref={svgRef}
        viewBox="0 0 160 40"
        preserveAspectRatio="none"
        className="h-10 w-full"
        role="img"
        aria-label="Music frequency spectrum"
      >
        {Array.from({ length: BAR_COUNT }, (_, index) => (
          <rect
            key={index}
            x={index * 5 + 1}
            y="36"
            width="3"
            height="2"
            rx="1.5"
            fill="currentColor"
            opacity="0.3"
          />
        ))}
      </svg>
    </div>
  );
};

export default SoundVisualizer;
