// Portfolio Data for Cyprian Wetende
// Navigation Items
export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' }
];

// Social Links
export const socialLinks = [
  {
    platform: 'linkedin',
    url: 'https://www.linkedin.com/in/cyprian-wetende-289921324/',
    icon: 'fab fa-linkedin'
  },
  {
    platform: 'github',
    url: 'https://github.com/Wetende',
    icon: 'fab fa-github'
  },
  {
    platform: 'email',
    url: 'mailto:cyprianwetende@gmail.com',
    icon: 'fas fa-envelope'
  },
  {
    platform: 'phone',
    url: 'tel:+254713906025',
    icon: 'fas fa-phone'
  }
];

// Hero Section Data
export const heroData = {
  name: 'Cyprian Wetende',
  title: 'Software Engineer & IT Systems Specialist',
  tagline: 'Bridging complex technical infrastructure and real-world business needs with AI & Fintech solutions.',
  socialLinks
};

// About Section Data
export const aboutData = {
  bio: 'With a comprehensive background spanning IT engineering, enterprise architecture, and AI integrations, I design and deliver practical digital platforms that solve complex operational problems. My work focuses on high-availability system reliability, secure cross-border fintech workflows, and transforming technical requirements into scalable, real-world solutions.',
  yearsExperience: 5,
  specializations: [
    'Frontend & Product Design',
    'JavaScript / React.js SPA',
    'AI Workflow & Automation',
    'Fintech & API Design',
    'IT Systems & Support',
    'Technical Communication'
  ]
};

// Skills Data (card-based layout - zero image)
export const skillsData = [
  {
    icon: 'fas fa-code',
    title: 'Frontend & Product Design',
    description: 'Building responsive Single-Page Applications (SPAs) and product interfaces using JavaScript (ES6+), React.js, Vite, modern CSS, and custom CMS/LMS platforms.'
  },
  {
    icon: 'fas fa-robot',
    title: 'AI Workflow & Automation',
    description: 'AI agent orchestration, Zapier/Make automations, LLM integration, and Retrieval-Augmented Generation (RAG) using vector embeddings and custom knowledge bases.'
  },
  {
    icon: 'fas fa-wallet',
    title: 'Fintech & API Design',
    description: 'Engineering secure payment rails including Paystack, DPO, M-Pesa APIs, RESTful API design, EVM wallets, and USSD cross-border remittances.'
  },
  {
    icon: 'fas fa-server',
    title: 'IT & Systems Management',
    description: 'Enterprise hardware & software management, IT help desk leadership, system troubleshooting, infrastructure deployment, and cloud governance.'
  },
  {
    icon: 'fas fa-database',
    title: 'Data & AI Operations',
    description: 'Detailed data annotation, image labeling, NLP dataset validation, process mapping, and machine learning pipeline evaluation ensuring high accuracy.'
  },
  {
    icon: 'fas fa-file-alt',
    title: 'Technical Communication',
    description: 'Translating intricate business requirements into clear technical specifications, system architecture guidelines, SOPs, and executive presentations.'
  }
];

// Projects Data
export const projectsData = [
  {
    id: '1',
    slug: 'zadepay',
    title: 'ZadePay – Crypto Onramp & African Fiat Gateway',
    category: ['Fintech Solutions', 'Backend Systems', 'Full-Stack Development', 'API Design', 'Web3 / Smart Contracts'],
    icon: 'fas fa-wallet',
    metric: 'Sub-Second Remittance · 20+ Blockchains',
    description: 'A payment gateway platform filling the gaps Transak left in Africa by combining crypto onramps (20+ blockchains, 500+ cryptocurrencies) with Stripe-like instant fiat remittances via M-Pesa, MTN mobile money, and USSD feature phone rails.',
    techStack: [
      { name: 'Python', color: '#3776AB' },
      { name: 'FastAPI', color: '#009688' },
      { name: 'Vue', color: '#4FC08D' },
      { name: 'PostgreSQL', color: '#336791' },
      { name: 'Web3', color: '#8C8C8C' }
    ]
  },
  {
    id: '2',
    slug: 'crossview',
    title: 'CrossView – Canonical LMS Engine',
    category: ['Full-Stack Development', 'Backend Systems', 'Containerization', 'Web Infrastructure', 'LMS Engine'],
    icon: 'fas fa-graduation-cap',
    metric: 'Canonical Shared Engine · Scalable Architecture',
    description: 'Canonical parent LMS shared engine and educational academy platform governing course builder architectures, student progression tracking, prerequisites, drip access scheduling, and unified institute assessment pipelines.',
    techStack: [
      { name: 'Python', color: '#3776AB' },
      { name: 'Django', color: '#092E20' },
      { name: 'Inertia.js', color: '#9553E9' },
      { name: 'PostgreSQL', color: '#336791' },
      { name: 'Docker', color: '#2496ED' }
    ]
  },
  {
    id: '3',
    slug: 'digikatech',
    title: 'DigiKaTech – Technical Career & EdTech Platform',
    category: ['Full-Stack Development', 'Frontend UI/UX', 'Fintech Solutions', 'EdTech Systems'],
    icon: 'fas fa-laptop-code',
    metric: 'Unified SPA · Instant M-Pesa Checkout',
    description: 'Modern digital technical institute platform providing public edtech pathways, instant M-Pesa and Paystack payment checkout, interactive student learning progression, and unified single-page application navigation.',
    techStack: [
      { name: 'Django', color: '#092E20' },
      { name: 'Inertia.js', color: '#9553E9' },
      { name: 'React', color: '#61DAFB' },
      { name: 'M-Pesa API', color: '#10B981' },
      { name: 'Vite', color: '#646CFF' }
    ]
  },
  {
    id: '4',
    slug: 'airads',
    title: 'AirAds – Educational Institute & LMS Laboratory',
    category: ['Full-Stack Development', 'Backend Systems', 'API Testing', 'Product Design'],
    icon: 'fas fa-university',
    metric: 'Active Engine Lab · Paystack Commerce',
    description: 'Active educational institute and LMS innovation laboratory governing course builder architectures, automated Paystack commerce, campus enrollment workflows, and high-availability student portals.',
    techStack: [
      { name: 'Python', color: '#3776AB' },
      { name: 'Django', color: '#092E20' },
      { name: 'PostgreSQL', color: '#336791' },
      { name: 'Inertia.js', color: '#9553E9' },
      { name: 'Paystack API', color: '#00C3F7' }
    ]
  },
  {
    id: '5',
    slug: 'kyrochat',
    title: 'KyroChat – AI Agent & Automation Platform',
    category: [
      'AI/ML Integration',
      'AI Automation',
      'Product Design',
      'API Design',
      'Full-Stack Development',
      'Backend Systems',
      'Web Infrastructure'
    ],
    icon: 'fas fa-robot',
    metric: 'Shared Bot Core · Omnichannel RAG',
    description: 'Enterprise AI agent and automation platform for customer support and operations, built around a shared bot core with custom knowledge vector retrieval, guardrails, and multi-channel adapters (Website Widget, WhatsApp, Slack).',
    techStack: [
      { name: 'Python', color: '#3776AB' },
      { name: 'FastAPI', color: '#009688' },
      { name: 'JavaScript / ES6+', color: '#F7DF1E' },
      { name: 'React / Next.js', color: '#61DAFB' },
      { name: 'AI Automation', color: '#FF6F00' },
      { name: 'Vector Retrieval', color: '#E91E63' }
    ]
  }
];

// Contact Section Data
export const contactData = {
  phone: '+254 713 906 025',
  email: 'cyprianwetende@gmail.com',
  linkedInUrl: 'https://www.linkedin.com/in/cyprian-wetende-289921324/',
  githubUrl: 'https://github.com/Wetende',
  ctaText: "Let's build innovative solutions together?"
};

// Footer Data
export const footerData = {
  copyright: `© ${new Date().getFullYear()} Cyprian Wetende. All rights reserved.`,
  tagline: 'Contact me at: +254 713 906 025 · cyprianwetende@gmail.com',
  socialLinks
};

// Export all data as a single object for convenience
export const portfolioData = {
  navItems,
  socialLinks,
  heroData,
  aboutData,
  skillsData,
  projectsData,
  contactData,
  footerData
};

export default portfolioData;
