// All site content lives here so you can edit copy without touching page layouts.

export type Service = {
  slug: string;
  title: string;
  summary: string;
  points: string[];
  stack: string[];
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "product-development",
    title: "Product Development",
    summary: "Web apps, mobile apps and MVPs built to ship fast and grow without rewrites.",
    points: ["MVP scoping & delivery", "Web & mobile applications", "Design systems & UI engineering", "Payments, auth & dashboards"],
    stack: ["React", "Next.js", "TypeScript", "Node.js", "React Native"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Laptop showing code on a desk",
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    summary: "LLM-powered features, agents and workflows that remove repetitive work.",
    points: ["AI assistants & copilots", "Document & data pipelines", "Workflow automation", "Evaluation & monitoring"],
    stack: ["Python", "FastAPI", "LLM APIs", "Vector DBs"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "White robot representing AI automation",
  },
  {
    slug: "cloud-engineering",
    title: "Cloud & Engineering",
    summary: "Backends, APIs and infrastructure that stay reliable as traffic grows.",
    points: ["API & backend design", "CI/CD pipelines", "Containerisation", "Cost & performance tuning"],
    stack: ["AWS", "Docker", "Kubernetes", "PostgreSQL", "Terraform"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Server racks in a data center",
  },
  {
    slug: "consulting-support",
    title: "Consulting & Support",
    summary: "Technical guidance, code audits and ongoing maintenance for existing products.",
    points: ["Architecture reviews", "Code & security audits", "Fractional CTO support", "Maintenance retainers"],
    stack: ["Audits", "Roadmaps", "SLAs"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Team planning at a whiteboard",
  },
];

export const values = [
  { title: "Startup-minded", text: "We plan around runway and milestones, not billable hours." },
  { title: "Engineering depth", text: "Senior engineers own every project from architecture to deployment." },
  { title: "Built to scale", text: "Clean architecture from day one so version two isn't a rewrite." },
  { title: "Remote by default", text: "Async-first collaboration across time zones with clear weekly updates." },
];

export const stackLayers = [
  { layer: "Interface", items: ["React", "Next.js", "Tailwind CSS", "React Native"] },
  { layer: "Application", items: ["Node.js", "TypeScript", "Python", "GraphQL / REST"] },
  { layer: "AI & Services", items: ["LLM APIs", "Agents", "Vector search", "Queues & workers"] },
  { layer: "Cloud", items: ["AWS", "Docker", "Kubernetes", "PostgreSQL"] },
];

export const projectStatus = [
  { name: "Fintech dashboard", status: "Live" },
  { name: "Clinic booking app", status: "Building" },
  { name: "E-commerce API", status: "Deployed" },
  { name: "Support AI agent", status: "Agent" },
  { name: "Invoice workflow", status: "Workflow completed" },
];

export type Project = {
  slug: string;
  title: string;
  industry: string;
  summary: string;
  result: string;
  tags: string[];
  image: string;
  imageAlt: string;
};

export const projects: Project[] = [
  {
    slug: "learnloop",
    title: "LearnLoop",
    industry: "EdTech",
    summary: "An adaptive learning platform with course authoring, progress tracking and live classes.",
    result: "Launched MVP in 10 weeks; 12k students in the first semester.",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Students learning together on laptops",
  },
  {
    slug: "cartwise",
    title: "Cartwise",
    industry: "E-commerce",
    summary: "Headless storefront and inventory API serving multiple sales channels.",
    result: "Page load time cut by 58%, conversion up 21%.",
    tags: ["Next.js", "AWS", "Stripe"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Customer paying at a store checkout",
  },
  {
    slug: "careline",
    title: "CareLine",
    industry: "Healthcare",
    summary: "Appointment booking and patient messaging app for a network of clinics.",
    result: "No-shows reduced by 30% with automated reminders.",
    tags: ["React Native", "Python", "Twilio"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Doctor using a tablet in a clinic",
  },
  {
    slug: "ledgerly",
    title: "Ledgerly",
    industry: "SaaS",
    summary: "AI assistant that reads invoices and reconciles them against bank feeds.",
    result: "Saves finance teams ~15 hours per month.",
    tags: ["Python", "LLM", "Docker"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Analytics dashboard on a laptop screen",
  },
];

export type Job = {
  slug: string;
  title: string;
  summary: string;
  type: string;
  location: string;
  about: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
};

export const jobs: Job[] = [
  {
    slug: "client-consultant",
    title: "Client Consultant — Software Projects",
    summary: "Guide clients from first call to signed proposal and keep projects aligned with their goals.",
    type: "Full-time · Commission + base",
    location: "Remote · Worldwide",
    about:
      "You'll be the first person new clients talk to. You'll understand their business problem, work with our engineers to shape a solution, and stay involved as a trusted point of contact through delivery.",
    responsibilities: [
      "Run discovery calls with founders and business owners",
      "Translate business needs into clear project scopes with the engineering team",
      "Prepare proposals, estimates and timelines",
      "Maintain long-term client relationships",
    ],
    requirements: [
      "2+ years in client-facing roles (sales, account management or consulting)",
      "Comfortable discussing software projects at a non-technical level",
      "Excellent written and spoken English",
    ],
    niceToHave: ["Experience selling agency or SaaS services", "Network in the startup ecosystem"],
  },
  {
    slug: "junior-full-stack-developer",
    title: "Junior Full-Stack Developer",
    summary: "Build features across React front-ends and Node.js APIs alongside senior engineers.",
    type: "Full-time",
    location: "Remote · Worldwide",
    about:
      "You'll ship real features for client products every week, with code reviews and mentoring from senior engineers. Ideal if you've built a few projects and want to grow fast.",
    responsibilities: [
      "Build UI components and pages in React / Next.js",
      "Write and test REST or GraphQL APIs in Node.js",
      "Participate in code reviews and async planning",
      "Fix bugs and improve performance on live products",
    ],
    requirements: [
      "Solid JavaScript/TypeScript fundamentals",
      "Experience with React and at least one backend framework",
      "Familiarity with Git and SQL databases",
    ],
    niceToHave: ["Exposure to AWS or Docker", "A public portfolio or GitHub profile"],
  },
  {
    slug: "software-developer-intern",
    title: "Software Developer Intern",
    summary: "A 3-month paid internship working on real client projects with a dedicated mentor.",
    type: "Internship · 3 months",
    location: "Remote · Worldwide",
    about:
      "Learn how production software gets built. You'll pair with a mentor, pick up tickets on real projects and finish with shipped work you can show.",
    responsibilities: [
      "Complete scoped tickets with guidance from a mentor",
      "Write tests and documentation",
      "Join weekly demos and retrospectives",
    ],
    requirements: [
      "Studying computer science or self-taught with projects to show",
      "Basic knowledge of HTML, CSS and JavaScript",
      "Curiosity and willingness to ask questions early",
    ],
    niceToHave: ["Any experience with React or Python"],
  },
];

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  readTime: string;
  category: string;
  body: string[]; // paragraphs
};

export const posts: Post[] = [
  {
    slug: "mvp-without-the-rewrite",
    title: "How to build an MVP you won't have to rewrite",
    excerpt: "Speed and good architecture aren't opposites. Here's how we keep MVPs lean without painting ourselves into a corner.",
    date: "2026-08-14",
    readTime: "6 min read",
    category: "Engineering",
    body: [
      "Most MVP rewrites don't happen because the first version was built quickly. They happen because a few early decisions — data model, auth, deployment — were made casually and became expensive to change.",
      "We focus our up-front time on exactly those decisions and move fast everywhere else. A clear data model, a boring and proven auth provider, and automated deployments from day one cost very little early and save months later.",
      "Everything else — UI polish, admin tooling, edge-case features — can be rough in version one. That's where speed should come from.",
    ],
  },
  {
    slug: "practical-ai-for-small-teams",
    title: "Practical AI for small teams",
    excerpt: "Skip the hype. Three places where AI reliably saves time for small businesses today.",
    date: "2026-07-02",
    readTime: "5 min read",
    category: "AI",
    body: [
      "The most reliable AI wins for small teams are unglamorous: reading documents, drafting first responses and routing requests.",
      "Start with a workflow that already has a clear human process and measurable output. Automate the first draft, keep a person in the loop, and measure time saved.",
      "Once that works, expand. Trying to build a general-purpose agent first is the fastest way to spend budget without results.",
    ],
  },
  {
    slug: "async-remote-teams",
    title: "What async-first actually means for client projects",
    excerpt: "Fewer meetings, clearer updates, and faster decisions — how we run projects across time zones.",
    date: "2026-05-20",
    readTime: "4 min read",
    category: "Process",
    body: [
      "Async-first doesn't mean no meetings. It means meetings are the exception, used for decisions that genuinely need a conversation.",
      "Every project gets a weekly written update: what shipped, what's next, and what we need from the client. Decisions are recorded where everyone can find them.",
      "Clients consistently tell us this makes them feel more informed, not less.",
    ],
  },
];
