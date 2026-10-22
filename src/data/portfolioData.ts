import type { Project, ExperienceItem, ToolItem, ThoughtItem } from '../types';

export const personalInfo = {
  name: 'Sai Kiran Ommi',
  role: 'Full Stack Developer',
  headline: 'Full Stack Developer | 3+ Years Experience',
  summary:
    'Accomplished Full Stack Developer with 3+ years of professional software engineering experience architecting, deploying, and maintaining scalable web applications across the MERN stack (React, Node.js, Express, MongoDB) and TypeScript. Founder of RapidRoot (rapidroot.in), demonstrating strong technical leadership, modular microservices architecture, and end-to-end product delivery.',
  location: 'Visakhapatnam, Andhra Pradesh, India',
  email: 'saikiran11471@gmail.com',
  phone: '+91 8639384979',
  website: 'https://rapidroot.in/',
  websiteDisplay: 'rapidroot.in',
  github: 'https://github.com/saikiranommi',
  linkedin: 'https://linkedin.com/in/saikiranommi',
  avatar: '/saikiran.jpg',
  availability: 'Available for new projects',
  experienceYears: '+3',
  projectsCount: '+15',
  apisBuiltCount: '40+',
};

export const ecosystemLinks = {
  rapidroot: 'https://rapidroot.in/',
  whatsapp: 'https://app.rapidroot.in/',
  hostels: 'https://hostels.rapidroot.in/login',
  realestate: 'https://realestate.rapidroot.in/',
};

export const projectsData: Project[] = [
  {
    id: 'rapidroot-core',
    title: 'RapidRoot Platform',
    subtitle: 'Enterprise-grade multi-tenant SaaS foundation',
    category: 'Core Ecosystem',
    description:
      'Multi-tenant web platform featuring modular customer workspaces, role-based access control (RBAC), and subscription billing flows with strict organizational data isolation.',
    longDescription:
      'RapidRoot (rapidroot.in) is an enterprise SaaS infrastructure engineered from the ground up to support high-throughput multi-tenancy. Built with React, TypeScript, Node.js, Express, and MongoDB, the system provides turnkey tenant isolation, subscription lifecycle state machines, automated onboarding KYC, and unified request context across all microservices.',
    tags: ['React.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'RBAC', 'Multi-Tenancy'],
    metrics: ['99.9% Service Reliability', 'Strict Tenant Data Isolation', 'Multi-Tenant RBAC'],
    architecturePoints: [
      'Modular customer workspace architecture with fine-grained role-based permissions',
      'High-throughput REST APIs with automated regression test suites in Postman',
      'Webhook listener pipeline with idempotent event handling and session security',
      'Engineered canonical product registry, subscription billing, and trial state machines'
    ],
    gradient: 'from-[#c5ff41]/25 via-[#1c1a19] to-[#151312]',
    featured: true,
    link: 'https://rapidroot.in/',
  },
  {
    id: 'rapidroot-real-estate',
    title: 'RapidRoot Real Estate',
    subtitle: 'Property management & CRM platform',
    category: 'Full-Stack Application',
    description:
      'Comprehensive property management and CRM web application featuring client-server architecture, token-based JWT authentication, and real-time inventory management.',
    longDescription:
      'Engineered an end-to-end property management ecosystem supporting brokers, landlords, and tenants. Features include dynamic lead assignment algorithms, secure token-based JWT route guards, encrypted communications, and Docker containerized microservices for effortless deployment.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT Auth', 'Docker', 'CRM Engine'],
    metrics: ['Real-Time Lead Tracking', 'Microservices Containerized', 'Encrypted API Security'],
    architecturePoints: [
      'Separated client-server architecture built with React functional components and Tailwind CSS',
      'Robust JWT authentication with refresh token rotation and role-based route guards',
      'Real-time inquiry and lead distribution data pipelines for sales agents',
      'Docker & Docker Compose containerization for standardized staging and production environments'
    ],
    gradient: 'from-[#f46c38]/25 via-[#1c1a19] to-[#151312]',
    featured: true,
    link: 'https://realestate.rapidroot.in/',
  },
  {
    id: 'rapidroot-whatsapp',
    title: 'RapidRoot WhatsApp & Comms',
    subtitle: 'Cloud communication engine & Meta API automation',
    category: 'Enterprise Automation',
    description:
      'WhatsApp Cloud API integration engine featuring Meta Embedded Signup, resilient webhook message queues, connection health audits, and conversational automation.',
    longDescription:
      'A mission-critical communications layer facilitating two-way customer messaging through WhatsApp Cloud API. Engineered with Meta Embedded Signup flows, queue reliability workers, session auditing, and AI assistant wiring for instantaneous customer engagement.',
    tags: ['Meta Cloud API', 'WhatsApp Business', 'Webhooks', 'Redis Queue', 'Node.js', 'AI Bots'],
    metrics: ['Zero Message Drop Guarantee', 'Meta Embedded Signup', 'Sub-second Webhook Dispatch'],
    architecturePoints: [
      'Meta Embedded Signup lifecycle integration for instant tenant onboarding',
      'Reliable message queue with retry exponential backoff and connection health monitors',
      'OIDC and Redis session audits preventing cross-tenant message leakage',
      'Production-grade automated test pipelines validating message deliverability'
    ],
    gradient: 'from-[#c5ff41]/20 via-[#f46c38]/15 to-[#151312]',
    featured: true,
    link: 'https://app.rapidroot.in/',
  },
  {
    id: 'rapidroot-hostels',
    title: 'RapidRoot Hostels Management',
    subtitle: 'Tenant & accommodation management SaaS',
    category: 'Tenant & Booking SaaS',
    description:
      'Comprehensive hostel accommodation ERP platform built for property managers and residents featuring room inventory allocation, student KYC, and automated monthly billing.',
    longDescription:
      'Engineered an end-to-end hostel and PG operations ecosystem. Features include room availability state machines, automated fee reminders, digital KYC verification, maintenance ticket tracking, and secure tenant authentication.',
    tags: ['React.js', 'Node.js', 'Express', 'MongoDB', 'JWT Auth', 'KYC Verification', 'Billing Engine'],
    metrics: ['Automated Rent & Fee Workflows', 'Role-Based Warden & Student Access', 'Real-time Occupancy Telemetry'],
    architecturePoints: [
      'Interactive room matrix and bed allocation engine with instant availability indicators',
      'Secure token-based tenant portal with digital agreement signing and payment history',
      'Automated recurring billing cycles with notification dispatch across WhatsApp and SMS',
      'Warden role-based management dashboard for gate pass approvals and maintenance tickets'
    ],
    gradient: 'from-[#c5ff41]/20 via-[#1c1a19] to-[#151312]',
    featured: true,
    link: 'https://hostels.rapidroot.in/login',
  },
  {
    id: 'rapidroot-ci-dashboard',
    title: 'RapidRoot CI & Health Dashboard',
    subtitle: 'Microservices observability & system audit',
    category: 'DevOps & Tooling',
    description:
      'Real-time continuous integration dashboard and microservices telemetry monitor providing system audit logging, release phase gates, and performance benchmarks.',
    longDescription:
      'A centralized control tower for monitoring distributed services across the RapidRoot ecosystem. Provides developers with live visibility into API endpoint latency, database indexing bottlenecks, automated test passes, and production deployment health.',
    tags: ['React.js', 'TypeScript', 'Postman Automated Tests', 'System Metrics', 'Tailwind CSS'],
    metrics: ['Live Telemetry', '40+ Automated Endpoints', 'Pre-Release Phase Auditing'],
    architecturePoints: [
      'Interactive visual dashboard tracking microservices uptime and health status',
      'Integration with Postman collections for automated continuous regression runs',
      'Structured error tracking and audit logs across multi-tenant API boundaries'
    ],
    gradient: 'from-blue-500/15 via-[#1c1a19] to-[#151312]',
  },
  {
    id: 'rapidroot-music',
    title: 'RapidRoot Music Engine',
    subtitle: 'Modern audio streaming & playback platform',
    category: 'Media & Web Application',
    description:
      'High-performance audio streaming web application featuring responsive player controls, dynamic playlist curation, and fluid UI animations.',
    longDescription:
      'Built as part of the RapidRoot entertainment suite, this media player leverages Web Audio APIs, responsive state management, and Framer Motion micro-interactions to deliver a silky-smooth listening experience across desktop and mobile devices.',
    tags: ['React.js', 'Web Audio API', 'Framer Motion', 'Tailwind CSS', 'State Management'],
    metrics: ['Zero Playback Latency', 'Fluid Spring Animations', 'Adaptive Mobile Player'],
    architecturePoints: [
      'Custom audio controller supporting gapless playback and volume attenuation',
      'Dynamic queue management with optimistic state updates',
      'Glassmorphic dark aesthetic optimized for high-refresh display devices'
    ],
    gradient: 'from-purple-500/15 via-[#1c1a19] to-[#151312]',
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'spotmis',
    role: 'Full Stack Developer',
    company: 'Spotmis Private Limited',
    period: '2023 – 2026 (3 Years)',
    location: 'India',
    description:
      'Spearheaded full-stack engineering of scalable commercial applications across the MERN stack, driving significant improvements in reliability, performance, and release speed.',
    highlights: [
      'Architected, built, and maintained commercial web applications using React, TypeScript, Node.js, and MongoDB, supporting high-reliability user transactions.',
      'Designed, built, and deployed 40+ production-grade REST API endpoints in Express.js; automated comprehensive functional and regression test suites in Postman, accelerating release cycles and reducing integration bugs by 35%.',
      'Spearheaded UI modernization utilizing Tailwind CSS and reusable React functional components, slashing page load times by 30% and ensuring seamless cross-browser consistency.',
      'Structured and optimized MongoDB schemas and compound indexes, resolving query bottlenecks and improving data retrieval speeds on high-volume database operations.',
      'Championed strict TypeScript adoption across frontend and backend modules to prevent runtime exceptions; collaborated in Agile sprints and managed code reviews via Git and GitHub.'
    ],
    skills: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Postman', 'Git', 'Agile'],
  },
  {
    id: 'rapidroot-venture',
    role: 'Founder & Full Stack Architect',
    company: 'RapidRoot (rapidroot.in)',
    period: '2023 – Present',
    location: 'Visakhapatnam, India',
    description:
      'Founded and engineered the RapidRoot software ecosystem, designing enterprise-grade multi-tenant architectures, customer workspaces, and automated communication pipelines.',
    highlights: [
      'Engineered an enterprise-grade multi-tenant web platform featuring modular customer workspaces, role-based access control (RBAC), and subscription billing flows.',
      'Built a fast, reactive single-page interface using React, TypeScript, and Tailwind CSS; applied SEO best practices (semantic HTML5, meta optimizations, and performance tuning) for search visibility.',
      'Developed high-throughput REST APIs using Node.js and Express.js; structured multi-tenant data schemas in MongoDB with strict organizational isolation.',
      'Implemented webhook listeners, secure session handling, and API automated test suites using Postman to ensure 99.9% service reliability.',
      'Authored detailed architecture blueprints, API documentation, and technical guides for onboarding and system scaling.'
    ],
    skills: ['System Architecture', 'Multi-Tenancy', 'RBAC', 'MongoDB', 'Node.js', 'React.js', 'REST APIs', 'SEO'],
  },
  {
    id: 'masai',
    role: 'Full Stack Web Development & System Design',
    company: 'Masai School',
    period: '2021 – 2023',
    location: 'Remote',
    description:
      'Completed an intensive software engineering program focusing on modern MERN stack development, computer science fundamentals, and scalable system design.',
    highlights: [
      'Mastered Data Structures & Algorithms, object-oriented programming, and relational & document database concepts.',
      'Built complex full-stack web applications with end-to-end user authentication, state management, and responsive layouts.',
      'Trained in collaborative software delivery, Git branching strategies, and test-driven development.'
    ],
    skills: ['MERN Stack', 'Data Structures & Algorithms', 'System Design', 'JavaScript', 'HTML5/CSS3'],
  },
  {
    id: 'andhra-uni',
    role: 'B.Com (Computers)',
    company: 'Andhra University',
    period: '2024 – 2027',
    location: 'Visakhapatnam, India',
    description:
      'Higher education coursework concentrating on Computer Applications, Database Management Systems, and Web Information Technology.',
    highlights: [
      'Coursework: Computer Applications, Database Management Systems, Web Systems & Information Technology.',
      'Gained grounded analytical thinking and business systems context complementary to software architecture.'
    ],
    skills: ['Database Management', 'Web Systems', 'Computer Applications', 'Information Technology'],
  },
];

export const toolsData: ToolItem[] = [
  { name: 'React.js', category: 'Frontend Architecture', level: 'Expert', iconName: 'Atom', color: '#61DAFB' },
  { name: 'TypeScript', category: 'Type Safety & Scale', level: 'Advanced', iconName: 'Code2', color: '#3178C6' },
  { name: 'Node.js', category: 'Backend Runtime', level: 'Advanced', iconName: 'Server', color: '#5FA04E' },
  { name: 'Express.js', category: 'REST API Framework', level: 'Advanced', iconName: 'Cpu', color: '#c5ff41' },
  { name: 'MongoDB', category: 'Database & Indexing', level: 'Advanced', iconName: 'Database', color: '#47A248' },
  { name: 'Tailwind CSS', category: 'Design Systems & UI', level: 'Expert', iconName: 'Palette', color: '#38BDF8' },
  { name: 'Postman', category: 'API Testing & Collections', level: 'Advanced', iconName: 'Send', color: '#FF6C37' },
  { name: 'Docker', category: 'Containerization Basics', level: 'Intermediate', iconName: 'Box', color: '#2496ED' },
  { name: 'Git & GitHub', category: 'Version Control & CI', level: 'Advanced', iconName: 'GitBranch', color: '#F05032' },
  { name: 'SEO & Performance', category: 'Web Optimization', level: 'Advanced', iconName: 'Zap', color: '#c5ff41' },
  { name: 'JWT & Security', category: 'Auth & Data Protection', level: 'Advanced', iconName: 'ShieldCheck', color: '#f46c38' },
  { name: 'Webhooks & APIs', category: 'Integration Pipelines', level: 'Advanced', iconName: 'Layers', color: '#A855F7' },
];

export const thoughtsData: ThoughtItem[] = [
  {
    id: 'multi-tenant-architecture',
    title: 'Architecting Scalable Multi-Tenant Web Apps with Strict Isolation',
    slug: 'architecting-scalable-multi-tenant-web-apps',
    date: 'Sep 2026',
    readTime: '6 min read',
    excerpt:
      'How we structured RapidRoot database schemas and middleware to achieve watertight tenant isolation, preventing accidental data leaks while keeping query speeds lightning-fast.',
    tags: ['Architecture', 'MongoDB', 'Multi-Tenancy', 'Node.js'],
    content: [
      'When designing multi-tenant software, security and data isolation must be enforced at the foundation rather than as an afterthought in route handlers.',
      'In RapidRoot, we implemented tenant-scoped database queries through express middleware injection, guaranteeing that every database lookup is scoped to the authenticated organization identifier.',
      'Additionally, compound indexes combining organizational IDs with document timestamps reduced query scan ratios from O(N) to O(log N).'
    ],
  },
  {
    id: 'slashing-page-load-times',
    title: 'Slashing Web Page Load Times by 30% with Tailwind & React Patterns',
    slug: 'slashing-page-load-times-with-tailwind-react',
    date: 'Aug 2026',
    readTime: '5 min read',
    excerpt:
      'Practical techniques deployed at Spotmis Private Limited to eliminate unnecessary re-renders, optimize critical CSS bundles, and deliver immediate first contentful paints.',
    tags: ['Performance', 'React.js', 'Tailwind CSS', 'Optimization'],
    content: [
      'Modern web applications often suffer from bundle bloat and cascading re-renders. By refactoring component hierarchies into pure functional components, we isolated state updates.',
      'Leveraging Tailwind CSS purged unused styles, resulting in a microscopic critical CSS payload and instantaneous layout stability on mobile devices.'
    ],
  },
  {
    id: 'automated-api-testing-postman',
    title: 'Preventing Integration Breakages with Automated Postman Regression Suites',
    slug: 'preventing-integration-breakages-postman',
    date: 'Jul 2026',
    readTime: '7 min read',
    excerpt:
      'How engineering 40+ automated Postman test scripts eliminated 35% of integration bugs and enabled rapid, fearless production deployments.',
    tags: ['API Testing', 'Postman', 'Express.js', 'CI/CD'],
    content: [
      'Manual API endpoint validation quickly breaks down as routes multiply. By parameterizing collection tests and asserting schema contracts, we caught regressions before they hit staging.',
      'Automating authentication token handshakes in pre-request scripts streamlined developer workflows and ensured 99.9% API reliability.'
    ],
  },
];
