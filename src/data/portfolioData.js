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
  bio: 'I build full-stack applications, agentic AI systems, and reproducible computational workflows using Python and JavaScript/TypeScript. My work spans consultant and tender-staffing platforms, scientific data processing, AI customer support, digital learning, and secure fintech integrations. I bring hands-on customer support experience into the systems I build, with a focus on practical business needs, reliable delivery, and verifiable results.',
  yearsExperience: 5,
  specializations: [
    'Frontend & Product Design',
    'Python / TypeScript / Next.js',
    'AI Workflow & Automation',
    'Fintech & API Design',
    'AWS & IT Systems',
    'Technical Communication'
  ]
};

export const recentExperience = [
  {
    role: 'Full-Stack Developer',
    organization: 'T4G Lab',
    period: 'May 2026 – Present',
    description: 'Delivering full-stack consulting applications and agentic AI workflows. Built T4G Impact Roster for consultant staffing, automated opportunity evaluation, and bid-assessment drafting.'
  },
  {
    role: 'Scientific AI Systems & Research Engineer',
    organization: 'Daystar University',
    url: 'https://new.daystar.ac.ke/',
    period: 'Dec 2025 – Apr 2026',
    description: 'Built Python pipelines for multi-omics data validation and LLM evaluation, modernized the React web experience, and implemented AWS Cognito authentication for the e-learning portal.'
  }
];

// Skills Data (card-based layout - zero image)
export const skillsData = [
  {
    icon: 'fas fa-code',
    title: 'Frontend & Product Design',
    description: 'Building responsive applications and product interfaces using JavaScript/TypeScript, React.js, Next.js, Vite, modern CSS, and custom CMS/LMS platforms.'
  },
  {
    icon: 'fas fa-robot',
    title: 'AI Workflow & Automation',
    description: 'Agentic AI and multi-agent orchestration, Claude API integration, LLM/RAG workflows, vector embeddings, and automated opportunity fetching, evaluation, and bid-assessment drafting.'
  },
  {
    icon: 'fas fa-wallet',
    title: 'Fintech & API Design',
    description: 'Engineering secure payment rails including Paystack, DPO, M-Pesa APIs, RESTful API design, EVM wallets, and USSD cross-border remittances.'
  },
  {
    icon: 'fas fa-server',
    title: 'Cloud & IT Systems',
    description: 'AWS Amplify Gen 2, Cognito, DynamoDB, Lambda, EC2, S3, RDS, IAM, Route 53, and CloudFront; Docker environments, infrastructure deployment, and IT systems support.'
  },
  {
    icon: 'fas fa-database',
    title: 'Data & AI Evaluation',
    description: 'Python scientific workflows, multi-omics data validation, LLM evaluation and benchmarking, verifiable ground-truth creation, Jest, and unit/integration testing.'
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
    id: '6',
    slug: 't4g-impact-roster',
    title: 'T4G Impact Roster – Consultant Roster & Tender Staffing',
    category: ['AI Automation', 'Full-Stack Development', 'API Design', 'Backend Systems', 'AI/ML Integration'],
    icon: 'fas fa-users',
    metric: 'Opportunity Evaluation · AI Bid Assessments',
    description: 'Built T4G Impact Roster, a consultant roster and tender-staffing platform. Delivered automated DevelopmentAid opportunity fetching and evaluation, Claude-drafted bid assessments, and admin notifications.',
    url: 'https://roster.t4gimpact.com/website',
    techStack: [
      { name: 'Next.js', color: '#111827' },
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'AWS Amplify Gen 2', color: '#C56800' },
      { name: 'Cognito', color: '#8C4FFF' },
      { name: 'DynamoDB', color: '#4053D6' },
      { name: 'Lambda', color: '#C56800' },
      { name: 'Claude API', color: '#B5654A' }
    ]
  },
  {
    id: '8',
    slug: 'daystar-university',
    title: 'Daystar University – Web & E-Learning Modernization',
    category: ['Full-Stack Development', 'Frontend UI/UX', 'AI Automation', 'Web Infrastructure'],
    icon: 'fas fa-university',
    description: 'Built the Daystar University website using React and consolidated scattered projects into a unified codebase. Implemented AWS Cognito authentication for the e-learning portal, with AI-driven virtual assistance and automated content delivery workflows.',
    url: 'https://new.daystar.ac.ke/',
    techStack: [
      { name: 'React', color: '#61DAFB' },
      { name: 'AWS Cognito', color: '#8C4FFF' },
      { name: 'AI Integration', color: '#C56800' }
    ]
  },
  {
    id: '1',
    slug: 'zadepay',
    url: 'https://zadepay.com/',
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
    description: 'AI customer support and automation platform built after handling recurring order, delivery, refund, and payment issues at Soko Kijiji. Uses Python, Django/DRF, and LLM/RAG workflows for backend orchestration, task automation, and knowledge retrieval across support channels.',
    techStack: [
      { name: 'Python', color: '#3776AB' },
      { name: 'Django', color: '#092E20' },
      { name: 'Django REST Framework', color: '#A30000' },
      { name: 'JavaScript / ES6+', color: '#F7DF1E' },
      { name: 'React / Next.js', color: '#61DAFB' },
      { name: 'AI Automation', color: '#FF6F00' },
      { name: 'Vector Retrieval', color: '#E91E63' }
    ]
  },
  {
    id: '4',
    slug: 'airads',
    url: 'https://airads.ac.ke/',
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
    id: '3',
    slug: 'digikatech',
    url: 'https://digikatech.com/',
    title: 'DigiKaTech – Technical Career & EdTech Platform',
    category: ['Full-Stack Development', 'Frontend UI/UX', 'Fintech Solutions', 'EdTech Systems'],
    icon: 'fas fa-laptop-code',
    metric: 'Unified SPA · Instant M-Pesa Checkout',
    description: 'Technical career and EdTech platform with dynamic content built using Next.js, digital learning pathways, and M-Pesa and Paystack payment integrations.',
    techStack: [
      { name: 'Next.js', color: '#111827' },
      { name: 'React', color: '#61DAFB' },
      { name: 'M-Pesa API', color: '#10B981' },
      { name: 'Paystack API', color: '#00C3F7' }
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
    id: '7',
    slug: 'writeminds-pro',
    title: 'Writeminds-Pro – Order Management Platform',
    category: ['Full-Stack Development', 'Backend Systems', 'API Design', 'Product Design'],
    icon: 'fas fa-tasks',
    description: 'Developed an order management platform using FastAPI and React, connecting the user interface with backend services and order workflows.',
    techStack: [
      { name: 'Python', color: '#3776AB' },
      { name: 'FastAPI', color: '#009688' },
      { name: 'React', color: '#61DAFB' }
    ]
  }
];

// Contact Section Data
export const contactData = {
  phone: '+254 713 906 025',
  email: 'cyprianwetende@gmail.com',
  linkedInUrl: 'https://www.linkedin.com/in/cyprian-wetende-289921324/',
  githubUrl: 'https://github.com/Wetende',
  cvUrl: `${import.meta.env.BASE_URL}Cyprian_Wetende_CV.pdf`,
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
