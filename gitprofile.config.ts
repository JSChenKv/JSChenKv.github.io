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

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
