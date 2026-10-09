<br/>

<p align="center">
  <img src="https://user-images.githubusercontent.com/45073703/177566625-9b84e793-4559-4475-ba54-8d3d5f4123d4.png" width="35%">

  <h4 align="center">Your GitHub-synced portfolio — easy to set up, updates itself!</h4>

  <p align="center">
    <a href="https://codeclimate.com/github/arifszn/gitprofile/maintainability"><img src="https://api.codeclimate.com/v1/badges/c60f42d7d0b61bd33e98/maintainability" /></a>
    <a href="https://github.com/arifszn/gitprofile/actions/workflows/deploy.yml"><img src="https://github.com/arifszn/gitprofile/actions/workflows/deploy.yml/badge.svg" /></a>
    <a href="https://github.com/arifszn/gitprofile/issues"><img src="https://img.shields.io/github/issues/arifszn/gitprofile"/></a>
    <a href="https://github.com/arifszn/gitprofile/stargazers"><img src="https://img.shields.io/github/stars/arifszn/gitprofile"/></a>
    <a href="https://github.com/arifszn/gitprofile/network/members"><img src="https://img.shields.io/github/forks/arifszn/gitprofile"/></a>
    <a href="https://github.com/arifszn/gitprofile/commits/main"><img src="https://img.shields.io/github/last-commit/arifszn/gitprofile/main"/></a>
    <a href="https://github.com/arifszn/gitprofile/blob/main/CONTRIBUTING.md"><img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat"/></a>
    <a href="https://github.com/arifszn/gitprofile/blob/main/LICENSE"><img src="https://img.shields.io/github/license/arifszn/gitprofile"/></a>
  </p>

  <p align="center">
    <a href="https://arifszn.github.io/gitprofile">View Demo</a>
    ·
    <a href="https://github.com/arifszn/gitprofile/issues">Report Bug</a>
    ·
    <a href="https://github.com/arifszn/gitprofile/discussions">Request Feature</a>
  </p>
</p>

<p align="center">
  <a href="https://arifszn.github.io/gitprofile">
    <img src="https://github.com/arifszn/gitprofile/assets/45073703/eb6c38a4-ac92-4006-869b-e4e24f6f5cf6" alt="Preview" width="60%"/>
  </a>
  <br/>
  <img src="https://github.com/arifszn/gitprofile/assets/45073703/4d2ccd45-e566-4743-bf61-cadc03ece54c" width="50%" alt="Shadow"/>
</p>

**GitProfile** is a powerful portfolio builder that allows you to create a stunning and personalized portfolio site in minutes, even if you have no coding experience. Simply provide your GitHub username, and GitProfile will automatically generate a portfolio. Best of all, you can easily deploy your portfolio to GitHub Pages with just a few clicks, making it accessible to the world in no time.

**Features:**

✓ [Easy to Setup](#-installation--setup)  
✓ [36 Themes](#themes)  
✓ [Google Analytics](#google-analytics)  
✓ [Hotjar](#hotjar)  
✓ [SEO](#seo)  
✓ [PWA](#pwa)  
✓ [Avatar and Bio](#avatar-and-bio)  
✓ [Social Links](#social-links)  
✓ [Skill Section](#skills)  
✓ [Experience Section](#experience)  
✓ [Certification Section](#certifications)  
✓ [Education Section](#education)  
✓ [Projects Section](#projects)  
✓ [Publication Section](#publications)  
✓ [Blog Posts Section](#blog-posts)

To view a live example, **[click here](https://arifszn.github.io/gitprofile)**.

<p align="center">
  <img src="https://github.com/arifszn/gitprofile/assets/45073703/406e8368-415a-42ef-89c5-d43cc8bbeb19" alt="Themes">
</p>

## 🛠 Installation & Setup

There are three ways to use **GitProfile**. Use any.

- [Forking this repo _(recommended)_](#forking-this-repo)
- [Setting up locally](#setting-up-locally)
- [Letting an AI agent do it](#letting-an-ai-agent-do-it)

### Forking this repo

These instructions will get you a copy of the project and deploy your portfolio online using GitHub Pages!

- **Fork repo:** Click [here](https://github.com/arifszn/gitprofile/fork) to fork the repo so you have your own project to customize. A "fork" is a copy of a repository.
- **Rename repo:**
  - If you want to host your portfolio at `https://<USERNAME>.github.io`, rename your forked repository to `username.github.io` in GitHub, where `username` is your GitHub username (or organization name).
  - If you want to host your portfolio at `https://<USERNAME>.github.io/<REPO_NAME>` (e.g. `https://<USERNAME>.github.io/portfolio`), rename your forked repository to `<REPO_NAME>` (e.g. `portfolio`) in GitHub.
- **Enable workflows:** Go to your repo's **Actions** tab and enable workflows.

  ![Workflows](https://github.com/arifszn/gitprofile/assets/45073703/7e82f7d4-900c-4cb9-83f9-bcaa1ca2b910)

- **Base Value:** Open `gitprofile.config.ts`, and change `base`'s value.
  - If you are deploying to `https://<USERNAME>.github.io`, set `base` to `'/'`.

  - If you are deploying to `https://<USERNAME>.github.io/<REPO_NAME>` (e.g. `https://<USERNAME>.github.io/portfolio`), then set `base` to `'/<REPO_NAME>/'` (e.g. `'/portfolio/'`).

  ```ts
  // gitprofile.config.ts
  {
    base: '/',
    // ...
  }
  ```

- **Commit the changes:** Now commit to your **main** branch with your changes. Wait a few minutes so that the CI/CD pipeline can publish your website to GitHub Pages. You can check the progress in the [Actions](https://github.com/arifszn/gitprofile/actions) tab.

Your portfolio website will be live shortly. Any time you commit a change to the **main** branch, the website will be automatically updated. If you face any issue viewing the website, double-check the `base` value in the `gitprofile.config.ts` file. Also, check if **Source** is set to **GitHub Actions** in **Settings** ➜ **Pages** ➜ **Build and deployment**.

If you wish to add a custom domain, no CNAME file is required. Just add it to your repo's **Settings** ➜ **Pages** ➜ **Custom domain**.

As this is a Vite project, you can also host your website to Netlify, Vercel, Heroku, or other popular services. Please refer to this [doc](https://vitejs.dev/guide/static-deploy.html) for a detailed deployment guide to other services.

> [!NOTE]
> If you are going to deploy using **Vercel**, remember to set the `base` as `/`.
>
> ```ts
> // gitprofile.config.ts
> {
>   base: '/',
>   // ...
> }
> ```

[**Not working?**](https://github.com/arifszn/gitprofile/discussions/548)

### Setting up locally

> Requires Node.js `20+`.

- Clone the project and change directory.

  ```shell
  git clone https://github.com/arifszn/gitprofile.git
  cd gitprofile
  ```

- Install dependencies.

  ```shell
  npm install
  ```

- Run dev server.

  ```shell
  npm run dev
  ```

- Finally, visit `http://localhost:5173/gitprofile/` from your browser.

> Alternatively, you can set up and run the project using Docker with **[Vail](https://github.com/arifszn/vail)**, a powerful tool for local development of JavaScript/TypeScript Apps.

### Letting an AI agent do it

If you use Claude Code, Codex, Cursor, Gemini CLI, or any other coding agent, it can fork the repo, fill in your details, and deploy it for you. Just tell your agent to install it — paste:

```
Fetch and follow the install instructions from
https://raw.githubusercontent.com/arifszn/gitprofile/refs/heads/main/INSTALL.md
```

The agent will ask you what to put on your portfolio, then handle the config and deployment. With the [GitHub CLI](https://cli.github.com) authenticated it deploys to GitHub Pages; without it, it deploys to Surge, Vercel, or Netlify instead.

## 🎨 Customization

All the magic happens in the file `gitprofile.config.ts`. Open it and modify it according to your preference.

You can leave most of the sections empty if you don't want to display them on your portfolio.

```ts
// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'JSChenKv', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Selected Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Facade Crack Synthesis and Generative Rendering',
          description:
            'Nanjing University | July - September 2026. Built a two-stage synthetic-data pipeline for UAV-based facade crack analysis using facade-conditioned Conditional Flow Matching and a fine-tuned FLUX.1-Fill-dev LoRA. Produced approximately 100,000 aligned training samples, grouped splits by source image to prevent data leakage, and implemented topology-aware donor retrieval and compositing that preserves pixels outside the target mask.',
          imageUrl: '',
          link: '/CV_Jingsong_Chen.pdf#page=1',
        },
        {
          title: 'Multi-Tenant Retrieval-Augmented Generation',
          description:
            'CIMER. Co | July - September 2025. Built a RAG system with strict tenant isolation in Weaviate, multi-format document ingestion, semantic chunking, vector clustering, and source citations. Delivered dynamic switching between local Ollama, Gemini, and OpenAI providers, with frontend settings synchronized to the backend and Weaviate generative configuration.',
          imageUrl: '',
          link: '/CV_Jingsong_Chen.pdf#page=1',
        },
        {
          title: 'Transformer-Based Jet Classification',
          description:
            'May - June 2025. Built a PyTorch Transformer encoder for variable-length particle-feature sequences, achieving approximately 77% validation accuracy on Large Hadron Collider jet classification. Preprocessed 50,000 ATLAS simulation events with dynamic padding and trained a Random Forest classifier on pooled Transformer embeddings.',
          imageUrl:
            'https://static.scientificamerican.com/sciam/cache/file/DD98722D-6734-4403-86E6AEF1EF47798C_source.jpg?w=1200',
          link: 'https://github.com/JSChenKv/PHYS417-Labs',
        },
        {
          title: 'AutoML-Agent: LLM-Driven Dynamic Model Trainer',
          description:
            'May - June 2025. Developed a Python machine-learning agent using PyTorch and Hugging Face Transformers to automate dataset analysis and model selection. Integrated a local LLM to interpret natural-language requests and recommend architectures, then dynamically trained custom convolutional and fully connected networks on benchmark datasets.',
          imageUrl: '',
          link: '/CV_Jingsong_Chen.pdf#page=2',
        },
        {
          title: 'Medical Imaging PCA and Body Fat Dynamics',
          description:
            'January - March 2025. Applied PCA to 64-channel silicon-photomultiplier detector data, reducing dimensionality to 9 while preserving signal fidelity. Modeled body-fat regulation with nonlinear ODEs and analyzed stability using Jacobians and phase portraits, exploring spiral and node behavior across metabolic parameters.',
          imageUrl:
            'https://sigmanutrition.com/wp-content/uploads/2020/11/CICO-1024x1024.png',
          link: 'https://drive.google.com/file/d/1scULpsUAQRRrUAAnBETNfKOOY6pK6Xml/view?usp=sharing',
        },
        {
          title: 'Cancer Care Interactive Information System',
          description:
            'January - March 2025. Developed an interactive visualization platform for exploring cancer treatments, survival rates, and regional healthcare disparities. Used SQL to clean, merge, and enrich multi-country incidence, mortality, and economic-cost datasets, enabling dynamic filtering and comparisons of healthcare access and disease burden.',
          imageUrl:
            'https://www.nfcr.org/wp-content/webp-express/webp-images/uploads/2024/06/Cancer-Info-Graphic-1.png.webp',
          link: 'https://observablehq.com/d/e08bf4e8f23c440e',
        },
      ],
    },
  },
  seo: {
    title: 'Jingsong Chen | Machine Learning and Generative AI',
    description:
      'Jingsong Chen, a Computer Science and Engineering MS student at UC San Diego and University of Washington ACMS graduate. Projects in generative AI, retrieval-augmented generation, machine learning, and data visualization.',
    imageURL: '',
  },
  social: {
    linkedin: '',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: 'https://jschenkv.github.io/',
    phone: '9135130189',
    email: 'jic253@ucsd.edu',
  },
  resume: {
    fileUrl: '/CV_Jingsong_Chen.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Java',
    'C++',
    'SQL',
    'OCaml',
    'Scheme',
    'Ruby',
    'PyTorch',
    'scikit-learn',
    'Transformers',
    'CNNs',
    'Random Forest',
    'PCA',
    'Clustering',
    'Diffusers',
    'FLUX',
    'LoRA',
    'RAG',
    'Weaviate',
    'Hugging Face Transformers',
    'NumPy',
    'FastAPI',
    'Docker',
    'Matplotlib',
    'Jupyter Notebook',
    'Observable Vega-Lite',
    'Git',
  ],
  experiences: [
    {
      company: 'Nanjing University',
      position: 'Data Engineer',
      from: 'July 2026',
      to: 'September 2026',
      companyLink: '',
    },
    {
      company: 'CIMER. Co',
      position: 'Software Engineer',
      from: 'July 2025',
      to: 'September 2025',
      companyLink: '',
    },
  ],
  certifications: [],
  educations: [
    {
      institution: 'University of California, San Diego',
      degree: 'Master of Science in Computer Science and Engineering',
      from: 'September 2026',
      to: 'Present',
    },
    {
      institution: 'University of Washington, Seattle',
      degree:
        'BS in Applied and Computational Math Sciences: Discrete Math and Algorithms (GPA: 3.92)',
      from: 'September 2022',
      to: 'March 2026',
    },
  ],
  publications: [
    {
      title: 'Retrosynthesis of undescribed sesquiterpene lactone',
      conferenceName:
        'The 3rd International Conference on Applied Chemistry and Industrial Catalysis',
      journalName: 'CRC Press',
      authors: 'Lujie Pu, Jingsong Chen, Weichen Tang, Jiawei Li, Haozhe Xu',
      link: 'https://www.taylorfrancis.com/chapters/edit/10.1201/9781003308553-39/retrosynthesis-undescribed-sesquiterpene-lactone-lujie-pu-jingsong-chen-weichen-tang-jiawei-li-haozhe-xu',
      description:
        'Designed and analyzed three feasible retrosynthetic routes for a bioactive sesquiterpene lactone extracted from Centipeda minima, focusing on practicality, starting-material availability, and intermediate stability',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'light',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional background music. Playback starts only after a visitor clicks play.
  music: {
    enabled: true,
    title: 'Tavern Radio',
    initialVolume: 0.2,
    tracks: [
      {
        title: "The Bard's Tale",
        artist: 'RandomMind',
        mood: 'Lute, flute, and a seat by the hearth.',
        src: 'music/the-bards-tale.mp3',
        sourceUrl: 'https://opengameart.org/content/medieval-the-bards-tale',
        license: 'CC0',
        licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
      },
      {
        title: 'Crowded Pub',
        artist: 'Bobjt',
        mood: 'A lively little inn, on repeat.',
        src: 'music/crowded-pub.mp3',
        sourceUrl: 'https://opengameart.org/content/crowded-pub',
        license: 'CC0',
        licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
      },
      {
        title: 'Harvest Season',
        artist: 'RandomMind',
        mood: 'A cheerful folk tune after a long quest.',
        src: 'music/harvest-season.mp3',
        sourceUrl: 'https://opengameart.org/content/medieval-harvest-season',
        license: 'CC0',
        licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
      },
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
```

### Background music

The optional Tavern Radio player has play/pause, track selection, looping, a volume slider, and a live music frequency spectrum. Playback starts only after a click. The browser remembers the selected track and volume, but does not automatically resume music on a new visit. The spectrum stops when paused or when the page is hidden, and respects reduced-motion preferences.

Set `music.enabled` to `false` to hide the player. Set `music.initialVolume` between 0 and 1. Put audio files in `public/music/` and use a source such as `music/my-track.mp3`; local paths follow the deployment base. HTTPS audio URLs are also supported when the host permits cross-origin playback with CORS headers. The player loads audio on demand.

Each track accepts `title`, `artist`, `mood`, `src`, `sourceUrl`, `license`, and `licenseUrl`. The included recordings are marked CC0 by their authors; sources and download links are recorded in [public/music/CREDITS.md](public/music/CREDITS.md).

### Themes

There are 36 themes available that can be selected from the dropdown.

The default theme can be specified. Removing a theme from `themes` takes it out of the dropdown.

```ts
// gitprofile.config.ts
const CONFIG = {
  // ...
  themeConfig: {
    defaultTheme: 'light',

    // Hides the switch in the navbar.
    // Useful if you want to support a single color mode.
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme.
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture.
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude it from here.
    themes: ['light', 'dark', 'nord'],
  },
};
```

<p align="center">
  <img src="https://github.com/arifszn/gitprofile/assets/45073703/91a2d9e6-67e5-47b4-9752-1881ac0f907f" alt="Theme Dropdown" width="50%">
</p>

You can create your own custom theme by modifying the CSS variables in `src/assets/index.css`. Theme `procyon` is defined as a custom theme.

```css
/* src/assets/index.css */
@plugin "daisyui/theme" {
  name: 'procyon';
  color-scheme: light;

  --color-base-100: #e3e3ed;
  --color-base-200: #d1d1db;
  --color-base-300: #bfbfc9;
  --color-base-content: #2a2730;
  --color-primary: #fc055b;
  --color-primary-content: #ffffff;
  --color-secondary: #219aaf;
  --color-secondary-content: #ffffff;
}
```

### Google Analytics

**GitProfile** supports both GA3 and GA4. If you do not want to use Google Analytics, keep the `id` empty.

```ts
// gitprofile.config.ts
const CONFIG = {
  // ...
  googleAnalytics: { id: 'G-XXXXXXXXX' },
};
```

Besides tracking visitors, it will track `click events` on projects and blog posts, and send them to Google Analytics.

### Hotjar

**GitProfile** supports [hotjar](https://www.hotjar.com) to track visitor interaction and behavior. If you do not want to use Hotjar, keep the `id` empty.

```ts
// gitprofile.config.ts
const CONFIG = {
  // ...
  hotjar: { id: '', snippetVersion: 6 },
};
```

### SEO

You can customize the meta tags for SEO in `seo`.

```ts
// gitprofile.config.ts
const CONFIG = {
  // ...
  seo: { title: 'Portfolio of Ariful Alam', description: '', imageURL: '' },
};
```

### PWA

GitProfile is PWA enabled. The site can be installed as a Progressive Web App. To turn it off, set `enablePWA` to `false`.

![PWA](https://github.com/arifszn/gitprofile/assets/45073703/9dc7cc5c-4262-4445-a7a5-1e3566ef43fa)

### Avatar and Bio

Your avatar and bio will be fetched from GitHub automatically.

### Social Links

You can link your social media services you're using, including LinkedIn, X, Mastodon, ResearchGate, Facebook, Instagram, Reddit, Threads, YouTube, Udemy, Dribbble, Behance, Medium, dev, Stack Overflow, Discord, Telegram, personal website, phone and email.

```ts
// gitprofile.config.ts
const CONFIG = {
  // ...
  social: {
    linkedin: 'ariful-alam',
    x: 'arif_szn',
    mastodon: 'arifszn@mastodon.social',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: '',
  },
};
```

### Resume

Link a downloadable resume in `resume`. An empty `fileUrl` hides the `Download Resume` button.

```ts
// gitprofile.config.ts
const CONFIG = {
  // ...
  resume: { fileUrl: 'https://example.com/resume.pdf' },
};
```

### Skills

To showcase your skills provide them here.

```ts
// gitprofile.config.ts
const CONFIG = {
  // ...
  skills: ['JavaScript', 'React.js'],
};
```

Empty array will hide the skills section.

### Experience

Provide your job history in `experiences`.

```ts
// gitprofile.config.ts
const CONFIG = {
  // ...
  experiences: [
    {
      company: 'Company Name',
      position: 'Position',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'Company Name',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    },
  ],
};
```

Empty array will hide the experience section.

### Education

Provide your education history in `educations`.

```ts
// gitprofile.config.ts
const CONFIG = {
  // ...
  educations: [
    {
      institution: 'Institution name 1',
      degree: 'Bachelor of Science',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'Institution name 2',
      degree: 'Higher Secondary Certificate (HSC)',
      from: '2012',
      to: '2014',
    },
  ],
};
```

Empty array will hide the education section.

### Certifications

Provide your industry certifications in `certifications`.

```ts
// gitprofile.config.ts
const CONFIG = {
  // ...
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
};
```

Empty array will hide the certifications section.

### Projects

#### Github Projects

- **Automatic Mode:** Seamlessly showcase your top GitHub projects based on stars or last updated date.
- **Manual Mode:** Choose specific repositories to highlight.

```ts
// gitprofile.config.ts
const CONFIG = {
  // ...
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
  },
};
```

#### External Projects

- **Highlight Projects Beyond GitHub:** Feature projects hosted on other platforms or personal websites.
- **Control over Content:** Provide custom titles, descriptions, images, and links for each external project.

```ts
// gitprofile.config.ts
const CONFIG = {
  // ...
  projects: {
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
};
```

### Publications

Provide your academic publishing in `publications`.

```ts
// gitprofile.config.ts
const CONFIG = {
  // ...
  publications: [
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
    },
  ],
};
```

Empty array will hide the publications section.

### Blog Posts

If you have [medium](https://medium.com) or [dev](https://dev.to) account, you can show your recent blog posts in here just by providing your medium/dev username. You can limit how many posts to display (Max is `10`).

```ts
// gitprofile.config.ts
const CONFIG = {
  // ...
  blog: { source: 'dev', username: 'arifszn', limit: 5 },
};
```

![Blog](https://github.com/arifszn/gitprofile/assets/45073703/410124f2-a3c2-48f1-8ec8-0c6fae74ae3d)

The posts are fetched by [blog.js](https://github.com/arifszn/blog.js).

### Footer

An optional footer, supporting plain text or HTML. Keep it empty to hide the footer.

```ts
// gitprofile.config.ts
const CONFIG = {
  // ...
  footer: `Made with <a
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};
```

## 💖 Support

<p>You can show your support by starring this project. ★</p>
<a href="https://github.com/arifszn/gitprofile/stargazers">
  <img src="https://img.shields.io/github/stars/arifszn/gitprofile?style=social" alt="Github Star">
</a>

## 💡 Contribute

To contribute, see the [Contributing guide](https://github.com/arifszn/gitprofile/blob/main/CONTRIBUTING.md).

## 📄 License

[MIT](https://github.com/arifszn/gitprofile/blob/main/LICENSE)
