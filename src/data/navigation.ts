export type NavItemLink = {
  title: string;
  description: string;
  href: string;
  icon: string;
};

export type NavColumn = {
  heading: string;
  items: NavItemLink[];
  cta?: { title: string; href: string };
};

export type ProductCategory = {
  id: string;
  label: string;
  headline: string;
  intro: string;
  items: { title: string; description: string; href: string }[];
};

export const serviceColumns: NavColumn[] = [
  {
    heading: 'AI, ML & Data Services',
    items: [
      { title: 'AI', description: 'Automate decisions and accelerate growth.', href: '/services', icon: 'brain' },
      { title: 'ML', description: 'Train models for real business outcomes.', href: '/services', icon: 'cpu' },
      { title: 'Data Analytics', description: 'Turn raw data into clear insights.', href: '/services', icon: 'line-chart' },
      { title: 'Data Engineering', description: 'Reliable pipelines ready for scale.', href: '/services', icon: 'database' },
      { title: 'AI Product Service', description: 'Ship AI products from idea to launch.', href: '/services', icon: 'sparkles' },
      { title: 'Chatbot / Interactive', description: 'Conversational support for customers 24/7.', href: '/services', icon: 'bot' },
    ],
  },
  {
    heading: 'Software Services',
    items: [
      { title: 'UI & UX Service', description: 'Intuitive interfaces users love.', href: '/services', icon: 'pencil-ruler' },
      { title: 'Web Sites + E-Commerce', description: 'High-converting sites and storefronts.', href: '/services', icon: 'shopping-cart' },
      { title: 'Web App Development', description: 'Secure, scalable web applications.', href: '/services', icon: 'app-window' },
      { title: 'Mobile App Development', description: 'Native and cross-platform apps.', href: '/services', icon: 'smartphone' },
      { title: 'Integration Service', description: 'Connect systems into one workflow.', href: '/services', icon: 'boxes' },
      { title: 'Custom Software & Consulting', description: 'Software tailored to your business.', href: '/services', icon: 'code-2' },
    ],
  },
  {
    heading: 'IT Support & Solutions',
    items: [
      { title: 'IT Consulting & Technology', description: 'Guidance for architecture and delivery.', href: '/services', icon: 'handshake' },
      { title: 'IT Infrastructure Service', description: 'Stronger servers, networks, and cloud.', href: '/services', icon: 'server' },
      { title: 'IT Managed Service', description: 'Monitored systems with less friction.', href: '/services', icon: 'monitor-search' },
      { title: 'Startup IT Service', description: 'Right tech stack from day one.', href: '/services', icon: 'rocket' },
      { title: 'IT Support & Management', description: 'Fast, reliable ongoing IT support.', href: '/services', icon: 'users' },
      { title: 'Redesign & Development', description: 'Modernize legacy products with care.', href: '/services', icon: 'refresh-cw' },
    ],
  },
  {
    heading: 'Digital Marketing & Branding',
    items: [
      { title: 'Lead Generation', description: 'Convert prospects into qualified leads.', href: '/services', icon: 'contact' },
      { title: 'Brand Positioning', description: 'Stand out with a clearer message.', href: '/services', icon: 'sparkles' },
      { title: 'Email Marketing', description: 'Campaigns that drive real action.', href: '/services', icon: 'mail' },
      { title: 'SEO Service', description: 'Grow visibility and organic traffic.', href: '/services', icon: 'trending-up' },
      { title: 'Paid Marketing', description: 'Maximize reach and campaign return.', href: '/services', icon: 'bar-chart-3' },
      { title: 'Social Media Marketing', description: 'Grow engagement across social channels.', href: '/services', icon: 'globe' },
    ],
  },
];

export const technologyColumns: NavColumn[] = [
  {
    heading: 'Frontend',
    items: [
      { title: 'React JS', description: 'Fast development & native feel.', href: '/technologies', icon: 'atom' },
      { title: 'Angular', description: 'Smooth interactive SPAs.', href: '/technologies', icon: 'hexagon' },
      { title: 'Next JS', description: 'Server-rendered web apps.', href: '/technologies', icon: 'next' },
    ],
    cta: { title: 'Work with CodeLink', href: '/company' },
  },
  {
    heading: 'Backend',
    items: [
      { title: 'Node JS', description: 'Scalable server-side apps.', href: '/technologies', icon: 'server' },
      { title: 'PHP', description: 'Powerful, versatile web apps.', href: '/technologies', icon: 'code-2' },
      { title: 'Python', description: 'Scalable backend services.', href: '/technologies', icon: 'terminal' },
    ],
  },
  {
    heading: 'Frameworks and CMS',
    items: [
      { title: 'Shopify', description: 'E-commerce built to scale.', href: '/technologies', icon: 'globe' },
      { title: '.Net', description: 'Build, connect, innovate.', href: '/technologies', icon: 'boxes' },
      { title: 'Woo Commerce', description: 'Scalable online storefronts.', href: '/technologies', icon: 'store' },
      { title: 'Wordpress', description: 'Flexible CMS made simple.', href: '/technologies', icon: 'newspaper' },
    ],
  },
  {
    heading: 'Mobility',
    items: [
      { title: 'iOS', description: 'Polished native iOS apps.', href: '/technologies', icon: 'smartphone' },
      { title: 'Android', description: 'Powerful Android experiences.', href: '/technologies', icon: 'tablet-smartphone' },
      { title: 'Flutter', description: 'High-performance cross-platform.', href: '/technologies', icon: 'layers' },
      { title: 'React Native', description: 'Fast builds, native performance.', href: '/technologies', icon: 'atom' },
    ],
  },
  {
    heading: 'AI / ML',
    items: [
      { title: 'TensorFlow', description: 'Production deep learning models.', href: '/technologies', icon: 'brain' },
      { title: 'PyTorch', description: 'Flexible neural networks at scale.', href: '/technologies', icon: 'cpu' },
      { title: 'OpenAI & LLMs', description: 'Chatbots, copilots, and content.', href: '/technologies', icon: 'sparkles' },
      { title: 'LangChain', description: 'AI agents and RAG pipelines.', href: '/technologies', icon: 'bot' },
    ],
  },
];

export const companyItems: NavItemLink[] = [
  { title: 'About Us', description: 'Find out what makes CodeLink unique', href: '/company', icon: 'user-round' },
  { title: 'Partnership', description: 'Grow together through strategic technology partnerships', href: '/partners', icon: 'handshake' },
  { title: 'Case Study', description: 'See how we deliver measurable results for clients', href: '/solutions', icon: 'newspaper' },
  { title: 'Engagement Model', description: 'Find the best engagement model for your project', href: '/company', icon: 'layers' },
  { title: 'Career', description: 'Become a part of something extraordinary', href: '/company', icon: 'briefcase' },
];

export const companyFeatured = {
  title: 'Explore Our Company Portfolio',
  description: 'Results of our dedication, creativity, and commitment to excellence.',
  cta: 'Explore Now',
  href: '/solutions',
};

export const productCategories: ProductCategory[] = [
  {
    id: 'featured',
    label: 'Featured Products',
    headline: 'Featured Products',
    intro: 'Get started with one of these featured platforms or browse all.',
    items: [
      { title: 'Restolinkz', description: 'Cloud-based restaurant management for POS, inventory, staff, and loyalty.', href: '/products' },
      { title: 'Crmlinkz', description: 'Enterprise CRM and sales automation to close deals faster.', href: '/products' },
      { title: 'Advocatelinkz', description: 'Legal case management with documents, time tracking, and billing.', href: '/products' },
      { title: 'Erplinkz', description: 'Unified ERP for finance, procurement, inventory, and reporting.', href: '/products' },
      { title: 'Fieldlinkz', description: 'Field service dispatch, technician tracking, and mobile work orders.', href: '/products' },
    ],
  },
  {
    id: 'commerce',
    label: 'Restaurant',
    headline: 'Restaurant',
    intro: 'Run the dining room, kitchen, and guest loyalty from one stack.',
    items: [
      { title: 'Restolinkz', description: 'End-to-end restaurant operations including POS, inventory, and loyalty.', href: '/products' },
    ],
  },
  {
    id: 'customer',
    label: 'Customer Platforms',
    headline: 'Customer Platforms',
    intro: 'Give sales teams a pipeline they can actually close.',
    items: [
      { title: 'Crmlinkz', description: 'Pipelines, lead scoring, and automation for high-performing sales teams.', href: '/products' },
    ],
  },
  {
    id: 'operations',
    label: 'Operations',
    headline: 'Operations',
    intro: 'Connect the back office and the field on one operating layer.',
    items: [
      { title: 'Erplinkz', description: 'Finance, procurement, inventory, and reporting in one ERP.', href: '/products' },
      { title: 'Fieldlinkz', description: 'Dispatch, live tracking, and work orders for field teams.', href: '/products' },
      { title: 'Advocatelinkz', description: 'Matter tracking, secure documents, and client portals for law firms.', href: '/products' },
    ],
  },
];
