const email = 'cyprianwetende@gmail.com';

export const navItems = [
  { id: 'home', label: 'Overview' },
  { id: 'proof', label: 'Proof of work' },
  { id: 'stack', label: 'Systems stack' },
  { id: 'process', label: 'Delivery process' },
  { id: 'contact', label: 'Contact' }
];

export const socialLinks = [
  {
    platform: 'linkedin',
    url: 'https://www.linkedin.com/in/cyprian-wetende-289921324/',
    icon: 'fab fa-linkedin-in'
  },
  {
    platform: 'github',
    url: 'https://github.com/Wetende',
    icon: 'fab fa-github'
  },
  {
    platform: 'email',
    url: `mailto:${email}`,
    icon: 'fas fa-envelope'
  }
];

export const heroData = {
  eyebrow: 'AI Automation Specialist & RevOps',
  title: 'I build the operational layer between CRM, automation, AI, and the people using it.',
  summary: 'Technical executor with hands-on experience configuring HubSpot workflows, building multi-step Make.com scenarios, connecting Claude and business platforms, and documenting systems so teams can maintain them.',
  availability: 'Available for a consistent four-hour block within 9:00 AM–5:00 PM ET',
  primaryAction: {
    label: 'Review selected systems',
    target: 'proof'
  },
  secondaryAction: {
    label: 'Contact Cyprian',
    url: `mailto:${email}?subject=${encodeURIComponent('AI Automation Specialist & RevOps')}`
  },
  systemFlow: [
    { label: 'Capture', detail: 'Forms · Webhooks' },
    { label: 'Route', detail: 'HubSpot · Make' },
    { label: 'Reason', detail: 'Claude · RAG' },
    { label: 'Act', detail: 'Slack · Monday' },
    { label: 'Document', detail: 'Trainual · SOPs' }
  ]
};

export const profileData = {
  statement: 'My strongest work sits where business operations meet technical implementation: translating a defined process into reliable fields, triggers, routes, API calls, safeguards, and documentation.',
  facts: [
    { value: '5+', label: 'Years across IT, systems, and data work' },
    { value: '4', label: 'HubSpot and Make certifications' },
    { value: '3', label: 'Working languages' },
    { value: 'ET', label: 'Working-hour overlap available' }
  ],
  certifications: [
    'HubSpot Sales Hub Software',
    'HubSpot Service Hub Software',
    'Make Intermediate',
    'Make Foundation'
  ]
};

export const projectsData = [
  {
    id: 'airads-revops',
    index: '01',
    title: 'AIRADS College — Enquiry and Operations Automation',
    role: 'IT Specialist · 2025–Present',
    category: 'CRM & RevOps',
    description: 'A connected operating flow for handling student enquiries, sharing course information, and moving website data into college administration workflows.',
    contribution: 'Configured HubSpot-powered customer-support workflows and used Make.com to maintain data flow between the college website and internal administrative systems.',
    operationalValue: 'Supports more consistent enquiry handling, clearer handoffs, and faster access to the information staff and prospective students need.',
    workflow: [
      'Website enquiry',
      'HubSpot record',
      'Workflow routing',
      'Course response',
      'Admin follow-up'
    ],
    evidence: [
      'HubSpot workflow configuration',
      'Website-to-administration data flow',
      'Ongoing troubleshooting and maintenance'
    ],
    tools: ['HubSpot', 'Make.com', 'Web forms', 'CRM workflows']
  },
  {
    id: 'kyrochat-ai',
    index: '02',
    title: 'KyroChat — Context-Aware Support Across Channels',
    role: 'Technical Consultant & IT Systems Developer',
    category: 'AI Implementation',
    description: 'An AI customer-support architecture designed to provide grounded answers from a maintained knowledge source across customer communication channels.',
    contribution: 'Architected the integration of Claude with retrieval-augmented generation and vector embeddings across web, WhatsApp, and Slack touchpoints.',
    operationalValue: 'Creates a reusable support layer while keeping channel delivery separate from retrieval and response orchestration.',
    workflow: [
      'Web · WhatsApp · Slack',
      'Channel adapter',
      'Context retrieval',
      'Claude response',
      'Support handoff'
    ],
    evidence: [
      'Multi-channel integration design',
      'RAG and vector retrieval workflow',
      'Shared response-orchestration model'
    ],
    tools: ['Claude', 'RAG', 'Vector embeddings', 'Python', 'APIs']
  },
  {
    id: 'business-stack-mcp',
    index: '03',
    title: 'Connected AI Workspace — MCP and Business Tools',
    role: 'Technical Consultant & IT Systems Developer',
    category: 'Systems Integration',
    description: 'A practical connection layer enabling an AI assistant to work with communication, file, and project-management systems under controlled permissions.',
    contribution: 'Configured and supported MCP server connections linking Claude with Slack, Google Drive, and Monday.com, with supporting configuration notes and process documentation.',
    operationalValue: 'Reduces context switching while keeping access, configuration, and troubleshooting steps explicit for the operating team.',
    workflow: [
      'Claude request',
      'MCP connection',
      'Permission check',
      'Business platform',
      'Structured result'
    ],
    evidence: [
      'MCP connection configuration',
      'Cross-platform context flow',
      'Permission and connection troubleshooting'
    ],
    tools: ['Claude', 'MCP', 'Slack', 'Google Drive', 'Monday.com']
  },
  {
    id: 'zadepay-integrations',
    index: '04',
    title: 'ZadePay — Payment and API Integration Architecture',
    role: 'Custom Code & API Systems',
    category: 'API Engineering',
    description: 'A payment-integration architecture connecting digital asset workflows with African mobile-money and checkout providers.',
    contribution: 'Worked across Python services, REST APIs, JSON payloads, authentication, payment gateways, mobile-money connectivity, and webhook-driven transaction flows.',
    operationalValue: 'Demonstrates the custom-code path used when a visual automation tool cannot safely cover transformation, authentication, or transaction logic.',
    workflow: [
      'Client request',
      'API validation',
      'Provider routing',
      'Webhook status',
      'Reconciled result'
    ],
    evidence: [
      'REST and webhook integration patterns',
      'JSON transformation and validation',
      'Cross-provider payment routing'
    ],
    tools: ['Python', 'REST APIs', 'JSON', 'Webhooks', 'Paystack · DPO']
  }
];

export const skillsData = [
  {
    number: '01',
    title: 'HubSpot CRM',
    description: 'Workflows, pipelines, lifecycle stages, lead routing, custom properties, customer handoffs, and reporting foundations.',
    keywords: ['Sales Hub', 'Service Hub', 'Data mapping']
  },
  {
    number: '02',
    title: 'Make.com Orchestration',
    description: 'Multi-step scenarios using filters, routers, iterators, transformations, API calls, and structured error-handling paths.',
    keywords: ['Scenarios', 'Webhooks', 'Error handling']
  },
  {
    number: '03',
    title: 'Claude, RAG & MCP',
    description: 'Grounded LLM workflows, vector retrieval, structured outputs, and MCP connections to live business platforms.',
    keywords: ['Claude', 'RAG', 'MCP']
  },
  {
    number: '04',
    title: 'Custom API Support',
    description: 'Python and JavaScript modules, REST APIs, OAuth and authentication, JSON parsing, webhooks, and request tracing.',
    keywords: ['Python', 'JavaScript', 'REST']
  },
  {
    number: '05',
    title: 'Business Platforms',
    description: 'Connected workflows spanning Monday.com, Trainual, Slack, Google Workspace, learning systems, and payment platforms.',
    keywords: ['Monday.com', 'Trainual', 'Slack']
  },
  {
    number: '06',
    title: 'Documentation & Reliability',
    description: 'SOPs, build notes, process maps, maintenance instructions, data-quality checks, and troubleshooting guides.',
    keywords: ['SOPs', 'QA', 'Process maps']
  }
];

export const deliveryData = {
  title: 'From specification to maintainable system',
  introduction: 'I work best as a technical execution partner: clarify the requirement, build within the agreed architecture, surface risks early, and leave the system easier to operate than I found it.',
  steps: [
    {
      number: '01',
      title: 'Map',
      description: 'Confirm the trigger, source of truth, field ownership, expected output, and failure conditions.'
    },
    {
      number: '02',
      title: 'Build',
      description: 'Configure the workflow or integration in small, inspectable stages with clear naming.'
    },
    {
      number: '03',
      title: 'Test',
      description: 'Exercise happy paths, missing data, duplicate records, authentication failures, and retries.'
    },
    {
      number: '04',
      title: 'Document',
      description: 'Record logic, dependencies, ownership, maintenance instructions, and troubleshooting steps.'
    },
    {
      number: '05',
      title: 'Monitor',
      description: 'Review failures, communicate risks early, and improve the system from operating evidence.'
    }
  ],
  documentation: [
    'Trainual courses and onboarding materials',
    'Workflow build notes and maintenance instructions',
    'System architecture diagrams and process maps',
    'Troubleshooting guides for staff and operators'
  ]
};

export const contactData = {
  phone: '+254 713 906 025',
  email,
  linkedInUrl: 'https://www.linkedin.com/in/cyprian-wetende-289921324/',
  githubUrl: 'https://github.com/Wetende',
  location: 'Nairobi, Kenya',
  availability: 'Four-hour daily block within 9:00 AM–5:00 PM ET'
};

export const footerData = {
  copyright: `© ${new Date().getFullYear()} Cyprian Wetende`,
  tagline: 'AI automation · RevOps · systems integration',
  socialLinks
};

export default {
  navItems,
  socialLinks,
  heroData,
  profileData,
  projectsData,
  skillsData,
  deliveryData,
  contactData,
  footerData
};
