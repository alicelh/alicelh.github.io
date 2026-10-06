// ─────────────────────────────────────────────────────────────
// Single source of truth for the site's content.
// Edit this file (not the components) to update the website.
// Facts here follow 背景说明_Linhao_Meng.md and the finalized CVs.
// ─────────────────────────────────────────────────────────────

export const person = {
  name: 'Linhao Meng',
  roles: ['Software Engineer @ ByteDance', 'PhD in Computer Science, TU/e'],
  location: 'Hangzhou, China',
  email: 'l.menglh@outlook.com',
  tagline:
    'I build data and interaction tools that help people understand, evaluate, and work alongside AI.',
  intro: [
    'I am a software engineer at ByteDance, building developer tools for an AI model platform and creative tools where people and AI make content together.',
    'Before that, I spent five years at Eindhoven University of Technology (PhD and postdoc) building algorithms and interactive tools that help people understand, compare, and debug AI models — and studying how they actually use them, from ML practitioners to clinicians.',
  ],
  links: [
    { label: 'GitHub', href: 'https://github.com/alicelh' },
    { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=vv6CYB0AAAAJ&hl=en' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/linhao-meng/' },
    { label: 'X / Twitter', href: 'https://twitter.com/linhao_meng' },
  ],
};

export const stats = [
  { value: '9', label: 'publications' },
  { value: '4', label: 'first-authored' },
  { value: '8+', label: 'years building data & AI tools' },
];

// ── What I'm doing now ────────────────────────────────────────
export const now = [
  {
    kicker: 'Developer tooling',
    title: 'ArkCLI',
    body: 'I own the model fine-tuning, pricing, and usage modules of ArkCLI — the command-line tool for Volcano Engine Ark, ByteDance’s Model-as-a-Service (MaaS) platform. These are ArkCLI’s most-called modules. I also built ArkCLI’s skill library, which lets AI agents call ArkCLI directly.',
    tags: ['CLI', 'MaaS', 'Agent skills'],
  },
  {
    kicker: 'Human + AI creation',
    title: 'AI-assisted video creation',
    body: 'I owned end-to-end development of the 3D module (Three.js), where creators set up virtual cameras in 3D scenes and produce videos together with AI. I also built the platform’s script editing module.',
    tags: ['Three.js', 'Creative tools', 'Human–AI'],
  },
];

export const next = {
  title: 'Where I want to go next: human–AI collaboration.',
  body: 'Building tools where people and AI create together, and earlier studying how clinicians use AI tools in practice, left me with one question I keep coming back to: how can people and AI agents create, reason, and make decisions together? That is the research direction I want to pursue next.',
};

// ── Selected work (cards with images) ─────────────────────────
// `image` refers to a file in src/assets/work/
export type Work = {
  id: string;
  title: string;
  short: string;
  what: string;
  venue: string;
  year: string;
  role: string;
  image?: string;
  links: { label: string; href: string }[];
  size?: 'wide' | 'normal';
};

export const works: Work[] = [
  {
    id: 'modelwise',
    title: 'ModelWise',
    short: 'Compare models, find why they fail',
    what: 'An interactive multi-model comparison tool that helps ML practitioners diagnose performance gaps, spot failure patterns, and choose models. Validated through user studies with practitioners.',
    venue: 'EuroVis 2022 / Computer Graphics Forum',
    year: '2022',
    role: 'First author',
    image: 'modelwise',
    links: [
      { label: 'Paper', href: 'https://onlinelibrary.wiley.com/doi/full/10.1111/cgf.14525' },
      { label: 'Code', href: 'https://github.com/alicelh/ModelWise' },
      { label: 'Demo', href: 'https://modelwise.onrender.com/' },
      { label: 'Video', href: 'https://vimeo.com/696132887' },
    ],
  },
  {
    id: 'cct-sne',
    title: 'Class-Constrained t‑SNE',
    short: 'Class-aware maps of ML datasets',
    what: 'A dimensionality reduction algorithm that combines data features with class probabilities, so a single 2D map shows both what the data looks like and what the model thinks — scaling to millions of points.',
    venue: 'IEEE TVCG / VIS 2023',
    year: '2024',
    role: 'First author',
    image: 'class-constrained-t-sne',
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2308.13837' },
      { label: 'Code', href: 'https://github.com/alicelh/class-constrained-t-SNE' },
    ],
  },
  {
    id: 'vadaf',
    title: 'VADAF',
    short: 'Spotting abnormal clients in federated learning',
    what: 'A visual analytics tool for detecting and explaining abnormal clients in federated learning — without access to their private data.',
    venue: 'ACM TiiS',
    year: '2021',
    role: 'First author',
    image: 'flvis',
    links: [{ label: 'Paper', href: '/VADAF_LinhaoMeng.pdf' }],
  },
  {
    id: 'visbol',
    title: 'SynBioHub Sequence View',
    short: 'Google Summer of Code, NRNB',
    what: 'A JavaScript sequence visualization layer for DNA designs, following the SBOL Visual standard and integrated into the SynBioHub production platform.',
    venue: 'ACS Synthetic Biology (VisBOL2)',
    year: '2021',
    role: 'Open-source contributor',
    image: 'visbol',
    links: [
      { label: 'Code', href: 'https://github.com/alicelh/sequence-view-plugin' },
      { label: 'Wiki', href: 'https://github.com/alicelh/sequence-view-plugin/wiki' },
      { label: 'Paper', href: 'https://pubs.acs.org/doi/10.1021/acssynbio.1c00147' },
    ],
  },
  {
    id: 'od',
    title: 'Visual Abstraction of OD Movement',
    short: 'Millions of trips, one readable map',
    what: 'A geospatial visualization system that abstracts and renders millions of origin–destination movement records. Second author and core team member.',
    venue: 'IEEE TVCG / VAST 2018',
    year: '2018',
    role: 'Second author',
    image: 'linesample',
    links: [
      { label: 'Paper', href: 'https://ieeexplore.ieee.org/abstract/document/8440039' },
      { label: 'Video', href: 'https://vimeo.com/300464586' },
    ],
  },
];

// Three angles on the same question (shown above the project cards)
export const themes = [
  {
    title: 'Data & evaluation tools',
    body: 'Tools for finding what is wrong in the data and models behind AI: hard instances, abnormal clients in federated learning, long-running training experiments, and side-by-side model comparison.',
    where: 'PhD & postdoc, TU/e · Oxford e-Research Centre · Zhejiang University',
  },
  {
    title: 'Interaction & human–AI collaboration',
    body: 'Interactive systems and user studies: how clinicians and ML practitioners use AI tools, what-if questions with counterfactuals, LLM-written explanations of data, and creative tools where people and AI make content together.',
    where: 'EU SmartCHANGE · ELLIIT, Linköping · ByteDance',
  },
  {
    title: 'Platforms & developer tooling',
    body: 'Developer tools for an AI model platform, and earlier, dashboards, a visualization component library, and open-source visualization for SynBioHub.',
    where: 'ByteDance · Cisco · Zhejiang University · Google Summer of Code',
  },
];

// Recent research without a thumbnail (shown as text cards)
export const recent = [
  {
    title: 'Difficulty-aware analysis of DNNs',
    what: 'Visual tools to find and characterize the hard instances in a dataset — the samples deep neural networks struggle with — pointing to targeted model improvements.',
    venue: 'IEEE VIS 2025 Short Paper',
  },
  {
    title: 'Glyphs for longitudinal ML experiments',
    what: 'A glyph-based visual analytics system for monitoring model pruning experiments over time, surfacing multi-metric trends across runs. Developed during a research visit to the Oxford e-Research Centre.',
    venue: 'Under review',
  },
  {
    title: 'Counterfactual & what-if analysis',
    what: 'Interactive tools for probing AI model behavior, built in the EU project SmartCHANGE together with clinicians and ML researchers.',
    venue: 'Postdoc, TU/e',
  },
  {
    title: 'LangLasso',
    what: 'Integrating LLMs into visual analytics so that people get natural-language descriptions of the data clusters they select. A collaboration that began at the ELLIIT Focus Period in Sweden.',
    venue: 'VIS 2025 VISxGenAI Workshop',
  },
];

// ── Publications ──────────────────────────────────────────────
export type Pub = {
  title: string;
  authors: string; // use **L. Meng** to mark my name
  venue: string;
  year: number | 'review';
  first: boolean;
  kind: 'journal' | 'conference' | 'workshop' | 'preprint';
  link?: string;
};

export const publications: Pub[] = [
  {
    title: 'Glyph-based Visualization with Highlighting for Analyzing Longitudinal Machine Learning Experiments',
    authors: '**L. Meng**, J. Chakraborty, S. van den Elzen, A. Vilanova, M. Chen',
    venue: 'Under review · Preprint on SSRN',
    year: 'review',
    first: true,
    kind: 'preprint',
  },
  {
    title: 'Towards Difficulty-Aware Analysis of Deep Neural Networks',
    authors: '**L. Meng**, S. van den Elzen, A. Vilanova',
    venue: 'IEEE VIS Short Papers',
    year: 2025,
    first: true,
    kind: 'conference',
  },
  {
    title: 'LangLasso: Interactive Cluster Descriptions through LLM Explanation',
    authors: 'R. Buchmüller, **L. Meng**, et al.',
    venue: 'VIS 2025 VISxGenAI Workshop',
    year: 2025,
    first: false,
    kind: 'workshop',
  },
  {
    title: 'Class-Constrained t-SNE: Combining Data Features and Class Probabilities',
    authors: '**L. Meng**, S. van den Elzen, N. Pezzotti, A. Vilanova',
    venue: 'IEEE TVCG 30(1) · VIS 2023',
    year: 2024,
    first: true,
    kind: 'journal',
    link: 'https://arxiv.org/abs/2308.13837',
  },
  {
    title: 'Visual Reasoning for Uncertainty in Spatio-temporal Events of Historical Figures',
    authors: 'W. Zhang, S. Tan, S. Chen, **L. Meng**, T. Zhang, R. Zhu, W. Chen',
    venue: 'IEEE TVCG 29(6)',
    year: 2023,
    first: false,
    kind: 'journal',
    link: 'https://ieeexplore.ieee.org/document/9695348',
  },
  {
    title: 'ModelWise: Interactive Model Comparison for Model Diagnosis, Improvement and Selection',
    authors: '**L. Meng**, S. van den Elzen, A. Vilanova',
    venue: 'Computer Graphics Forum 41(3) · EuroVis 2022',
    year: 2022,
    first: true,
    kind: 'journal',
    link: 'https://onlinelibrary.wiley.com/doi/full/10.1111/cgf.14525',
  },
  {
    title: 'VADAF: Visualization for Abnormal Client Detection and Analysis in Federated Learning',
    authors: '**L. Meng**, Y. Wei, R. Pan, S. Zhou, J. Zhang, W. Chen',
    venue: 'ACM TiiS 11(3–4)',
    year: 2021,
    first: true,
    kind: 'journal',
    link: '/VADAF_LinhaoMeng.pdf',
  },
  {
    title: 'VisBOL2: Improving Web-Based Visualization for Synthetic Biology Designs',
    authors: 'B. Hatch, **L. Meng**, J. Mante, J. A. McLaughlin, J. Scott-Brown, C. J. Myers',
    venue: 'ACS Synthetic Biology 10(8)',
    year: 2021,
    first: false,
    kind: 'journal',
    link: 'https://pubs.acs.org/doi/10.1021/acssynbio.1c00147',
  },
  {
    title: 'Bubble Storytelling with Automated Animation: A Brexit Hashtag Activism Case Study',
    authors: 'N. Chotisarn, J. Lu, L. Ma, J. Xu, **L. Meng**, B. Lin, Y. Xu, X. Luo, W. Chen',
    venue: 'Journal of Visualization 24(1)',
    year: 2021,
    first: false,
    kind: 'journal',
    link: 'https://doi.org/10.1007/s12650-020-00690-7',
  },
  {
    title: 'Visual Abstraction of Large Scale Geospatial Origin-Destination Movement Data',
    authors: 'Z. Zhou, **L. Meng**, C. Tang, Y. Zhao, Z. Guo, M. Hu, W. Chen',
    venue: 'IEEE TVCG · VAST 2018',
    year: 2018,
    first: false,
    kind: 'journal',
    link: 'https://ieeexplore.ieee.org/abstract/document/8440039',
  },
];

// ── Journey (timeline) ────────────────────────────────────────
// Dates as decimal years: 2020.67 ≈ Sep 2020. `end: null` = present.
export type Span = {
  lane: 'study' | 'research' | 'industry' | 'events';
  label: string;
  org: string;
  start: number;
  end: number | null;
  detail: string;
};
export type Mark = { lane: Span['lane']; label: string; at: number; detail: string; kind?: 'visit' | 'talk' };

export const lanes: { id: Span['lane']; label: string }[] = [
  { id: 'study', label: 'Study' },
  { id: 'research', label: 'Research' },
  { id: 'events', label: 'Highlights' },
  { id: 'industry', label: 'Industry' },
];

export const spans: Span[] = [
  { lane: 'study', label: 'B.S. GIScience', org: 'Zhejiang University', start: 2014.67, end: 2018.5, detail: 'B.S. in Geographic Information Science' },
  { lane: 'study', label: 'M.S.E.', org: 'Zhejiang University', start: 2018.67, end: 2020.5, detail: 'M.S.E. in Software Engineering' },
  { lane: 'study', label: 'Ph.D.', org: 'TU Eindhoven', start: 2020.67, end: 2025.25, detail: 'Ph.D. in Computer Science, Visualization Cluster, supervised by Prof. Anna Vilanova' },
  { lane: 'research', label: 'Research Engineer', org: 'ZJU Visual Analytics & Intelligence Group', start: 2018.08, end: 2020.46, detail: 'With Prof. Wei Chen: VADAF, OD movement visualization, banking dashboards' },
  { lane: 'research', label: 'PhD Researcher', org: 'TU Eindhoven', start: 2020.67, end: 2025.25, detail: 'Class-Constrained t-SNE, ModelWise, glyph-based analytics, LangLasso, difficulty-aware analysis' },
  { lane: 'research', label: 'Postdoc', org: 'TU Eindhoven · EU SmartCHANGE', start: 2025.25, end: 2025.96, detail: 'Counterfactual and what-if analysis tools; studying how clinicians use AI tools' },
  { lane: 'industry', label: 'Cisco', org: 'Software Engineer Intern, DevNet', start: 2019.58, end: 2020.29, detail: 'Project-progress dashboard: React frontend, REST API, data model' },
  { lane: 'industry', label: 'GSoC', org: 'NRNB / University of Utah', start: 2020.33, end: 2020.62, detail: 'Open-source contributor: SynBioHub sequence visualization (VisBOL2)' },
  { lane: 'industry', label: 'ByteDance', org: 'Software Engineer, Data-AML', start: 2026.17, end: null, detail: 'Developer tools for an AI model platform; human–AI creative tools' },
];

export const marks: Mark[] = [
  { lane: 'events', kind: 'visit', label: 'Oxford', at: 2024.38, detail: 'Research visit, Oxford e-Research Centre, May–Jun 2024' },
  { lane: 'events', kind: 'visit', label: 'ELLIIT', at: 2025.29, detail: 'Invited Visiting Scholar, ELLIIT Focus Period, Linköping University, Apr–May 2025' },
  { lane: 'events', label: 'PhD defense', at: 2025.84, detail: 'PhD thesis defended, Nov 2025' },
  { lane: 'events', label: 'EuroVis ’21', at: 2021.46, detail: 'Student volunteer, EuroVis 2021, Jun 2021' },
  { lane: 'events', label: 'ICT Open', at: 2022.29, detail: 'Poster, ICT Open 2022, Apr 2022' },
  { lane: 'events', label: 'EuroVis ’22', at: 2022.46, detail: 'Paper presentation (ModelWise), EuroVis 2022, Rome, Jun 2022' },
  { lane: 'events', label: 'VIS ’23', at: 2023.8, detail: 'Paper presentation (Class-Constrained t-SNE), IEEE VIS 2023, Melbourne, Oct 2023' },
  { lane: 'events', label: 'VIS ’25', at: 2025.84, detail: 'Paper presentation (difficulty-aware analysis of DNNs), IEEE VIS 2025, Vienna, Nov 2025' },
];

// ── Community ─────────────────────────────────────────────────
export const visits = [
  { when: 'Apr–May 2025', what: 'Invited Visiting Scholar, ELLIIT Focus Period on Visualization-Empowered Human-in-the-Loop AI', where: 'Linköping University, Sweden' },
  { when: 'May–Jun 2024', what: 'Research visit — visual design and analysis of model pruning experiments', where: 'Oxford e-Research Centre, University of Oxford, UK' },
];

export const talks = [
  { when: '2025', what: 'Paper presentation', where: 'IEEE VIS · Vienna' },
  { when: '2023', what: 'Paper presentation', where: 'IEEE VIS · Melbourne' },
  { when: '2022', what: 'Paper presentation', where: 'EuroVis · Rome' },
  { when: '2022', what: 'Poster', where: 'ICT Open' },
  { when: '2021', what: 'Student volunteer', where: 'EuroVis' },
];

export const awards = [
  { when: '2019', what: 'Chinese National Scholarship' },
  { when: '2019', what: '2nd Prize, ZJU AI Innovation Competition' },
  { when: '2016', what: 'Zhejiang Provincial Scholarship' },
];

export const skills = [
  { group: 'Data & evaluation', items: ['Model evaluation & diagnosis', 'Experiment tracking', 'Explainability (counterfactuals, what-if)', 'Dimensionality reduction (t-SNE, UMAP, PCA)', 'Data modeling'] },
  { group: 'Interaction & research', items: ['User research & usability studies', 'Interactive visualization', 'Dashboard design', 'Rapid prototyping'] },
  { group: 'AI', items: ['LLM application development', 'Agent workflows', 'Tool / skill integration', 'Model fine-tuning'] },
  { group: 'Build', items: ['TypeScript / JavaScript', 'Python', 'React', 'Vue', 'Svelte', 'Three.js / WebGL', 'D3.js', 'REST API design'] },
];
