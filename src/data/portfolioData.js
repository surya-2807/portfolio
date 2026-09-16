const BASE = import.meta.env.BASE_URL;

export const personalInfo = {
  name: "Surya Prakash S",
  role: "Associate System Engineer Intern",
  company: "Devopstrio",
  location: "Pudukkottai, Tamil Nadu, India",
  email: "prakeshs870@gmail.com",
  phone: "+91 9600834966",
  github: "https://github.com/surya-2807",
  linkedin: "https://www.linkedin.com/in/surya-prakash-s-p",
  resumeUrl: `${BASE}assets/SURYA_PRAKASH.pdf`,
  profileImage: `${BASE}assets/surya_profile.jpg`,
  headline: "Cloud. Software. AI-assisted development.",
  shortBio: "Associate System Engineer Intern at Devopstrio. I work on cloud governance research, web features, UAT testing, and AI-assisted engineering workflows with a focus on writing clean, dependable systems."
};

export const currentFocus = {
  role: "Associate System Engineer Intern",
  company: "Devopstrio",
  period: "July 2026 – Present",
  summary: "My day-to-day work spans researching cloud governance frameworks, building and debugging web features, conducting user acceptance testing (UAT), and using AI tools to accelerate development while maintaining strict code verification.",
  areas: [
    {
      id: "cloud",
      title: "Cloud Governance & Infrastructure",
      subtitle: "Azure Landing Zones & Budgeting",
      description: "Researched Azure Landing Zone architecture, drafted cloud governance documentation, and implemented Proof-of-Concepts for budget tracking and resource alerting.",
      skills: ["Azure Fundamentals", "Landing Zones", "Cloud Governance", "Budget Alerting"]
    },
    {
      id: "web",
      title: "Web & Product Development",
      subtitle: "Frontend Features & UI Improvements",
      description: "Built responsive web pages, updated user interfaces, fixed layout/functional bugs, and maintained feature branches using Git and GitHub.",
      skills: ["React", "JavaScript", "HTML/CSS", "Git / GitHub"]
    },
    {
      id: "testing",
      title: "Testing & Quality Assurance",
      subtitle: "UAT & Issue Documentation",
      description: "Conducted end-user acceptance testing (UAT), authored detailed bug reports with reproduction steps, and performed regression retesting after fixes were applied.",
      skills: ["UAT Testing", "Bug Documentation", "Regression Retesting", "HLD / LLD"]
    },
    {
      id: "ai",
      title: "AI-Assisted Workflows",
      subtitle: "Productivity & Exploration",
      description: "Used AI environments (Antigravity, Claude, DeepSeek) to quickly understand unfamiliar code, explore architectural approaches, and draft test scenarios before manual verification.",
      skills: ["Antigravity", "Claude", "DeepSeek", "MCP Tooling"]
    }
  ]
};

export const featuredProjects = [
  {
    id: "aws-monitoring",
    title: "Personal AWS Lab — Cloud Monitoring & Alerting",
    subtitle: "Hands-on exploration of automated EC2 health monitoring and SNS incident notifications",
    category: "AWS Cloud Lab",
    summary: "Configured automated metric alarms on an EC2 Linux instance using Amazon CloudWatch and Amazon SNS to trigger instant email notifications upon threshold breaches.",
    architectureNodes: [
      {
        id: "ec2",
        label: "EC2 Workload",
        type: "Compute",
        detail: "Amazon EC2 Linux instance running simulated application workloads generating CPU and memory metrics."
      },
      {
        id: "cloudwatch",
        label: "CloudWatch Alarms",
        type: "Monitoring",
        detail: "Configured metric alarms for CPUUtilization (>75%) and disk usage with 1-minute evaluation periods."
      },
      {
        id: "sns",
        label: "Amazon SNS",
        type: "Pub/Sub",
        detail: "Created SNS topic with verified email endpoint subscriptions for automated payload delivery."
      },
      {
        id: "alert",
        label: "Email Alert",
        type: "Notification",
        detail: "Operational incident notification dispatched to the engineering inbox within seconds of threshold breach."
      }
    ],
    architectureString: "EC2 ──> CloudWatch ──> SNS ──> Email Alert",
    techStack: ["AWS EC2", "Amazon CloudWatch", "Amazon SNS", "Linux"],
    githubUrl: "https://github.com/surya-2807",
    keyPoints: [
      "Set up custom CloudWatch metric alarms with specific threshold conditions and evaluation periods.",
      "Configured Amazon SNS topic policies to ensure secure publishing from CloudWatch alarms.",
      "Simulated system stress using Linux stress testing tools to validate alarm triggering and email receipt.",
      "Documented the end-to-end configuration and alarm state transition behaviors."
    ]
  },
  {
    id: "static-hosting",
    title: "Personal AWS Lab — Static Website Delivery",
    subtitle: "Low-latency content delivery architecture using Amazon S3, CloudFront CDN, and Route 53",
    category: "AWS Cloud Lab",
    summary: "Configured a resilient static website delivery pipeline using Amazon S3 for origin storage, CloudFront CDN with Origin Access Control (OAC) for global edge caching, and Route 53 DNS.",
    architectureNodes: [
      {
        id: "user",
        label: "End User (HTTPS)",
        type: "Client",
        detail: "Client browser sends secure TLS/HTTPS request over modern HTTP/2 protocol."
      },
      {
        id: "route53",
        label: "Amazon Route 53",
        type: "DNS",
        detail: "Global DNS service routing client requests to the nearest CloudFront edge location."
      },
      {
        id: "cloudfront",
        label: "CloudFront CDN (OAC)",
        type: "Distribution",
        detail: "Edge caching network with Origin Access Control (OAC) and custom SSL certificate."
      },
      {
        id: "s3",
        label: "Amazon S3 Bucket",
        type: "Origin Storage",
        detail: "Private S3 storage bucket hosting versioned HTML, CSS, JavaScript, and static assets."
      }
    ],
    architectureString: "User ──> Route 53 ──> CloudFront CDN ──> S3 Bucket",
    techStack: ["AWS S3", "Amazon CloudFront", "CloudFormation", "Route 53"],
    githubUrl: "https://github.com/surya-2807/portfolio",
    liveUrl: "https://surya-2807.github.io/portfolio/",
    keyPoints: [
      "Configured private S3 bucket permissions with restrictive Origin Access Control (OAC).",
      "Configured CloudFront distribution with default root object, SSL certificate, and custom error responses.",
      "Defined reusable infrastructure templates using AWS CloudFormation for automated provisioning.",
      "Enabled cache-control headers to optimize asset invalidation during updates."
    ]
  },
  {
    id: "Devopstrio-web",
    title: "Product Web Development & QA",
    subtitle: "Webpage development, bug fixing, and UAT validation during Devopstrio internship",
    category: "Software Engineering",
    summary: "Contributed to user interface updates, responsive webpage development, bug fixing, and structured User Acceptance Testing (UAT) at Devopstrio.",
    techStack: ["React", "JavaScript", "HTML5 / CSS3", "Git / GitHub", "UAT Testing"],
    keyPoints: [
      "Collaborated on creating and refining responsive webpage components.",
      "Investigated reported UI defects, identified root causes, and implemented fixes.",
      "Executed systematic UAT test runs, logged bug reports, and validated patch releases.",
      "Maintained clean branch hygiene and pull request documentation on GitHub."
    ]
  }
];

export const earlierEngineeringProjects = [
  {
    id: "braking-system",
    title: "Emergency Braking Prototype with Ultrasonic Sensing",
    type: "Hardware & IoT Prototype",
    period: "2024 – 2025",
    summary: "Engineered an automated collision mitigation prototype integrating ultrasonic distance sensors with microcontroller logic and a rear warning LCD display.",
    image: `${BASE}assets/braking_system_project.jpg`,
    highlights: [
      "Programmed microcontroller distance threshold logic for emergency braking trigger.",
      "Integrated rear LCD visual warning to alert trailing vehicles in real time.",
      "Assembled and tested hardware circuitry under varying obstacle distances."
    ]
  },
  {
    id: "pyrolytic-oil",
    title: "Pyrolytic Oil Performance & Emission Study",
    type: "Experimental Research",
    period: "2024 – 2025",
    summary: "Conducted experimental research evaluating diesel engine performance and emission characteristics using waste plastic-derived pyrolytic oil blends with additives.",
    image: `${BASE}assets/pyrolytic_oil_project.jpg`,
    highlights: [
      "Prepared fuel blends (10%, 20%, 30%) with diethyl ether additive enhancement.",
      "Analyzed combustion efficiency, brake thermal efficiency, and emission parameters.",
      "Documented comparative data tables and graphical performance analysis."
    ]
  },
  {
    id: "bicycle-design",
    title: "SAEISS Bicycle Design Challenge",
    type: "Competition Entry · 3rd Place",
    period: "2023",
    summary: "Designed and fabricated an ergonomic performance bicycle focusing on frame structural integrity, weight distribution, and dynamic stability.",
    image: `${BASE}assets/bicycle_dynamics_project.jpg`,
    highlights: [
      "Awarded 3rd Place for Best Dynamic Performance at SAEISS competition.",
      "Led structural frame fabrication and dynamic stress validation testing.",
      "Optimized gear ratios and braking response for competitive track conditions."
    ]
  }
];

export const aiWorkflow = {
  heading: "How I Build with AI",
  philosophy: "I use Antigravity, Claude, and AI tools to understand unfamiliar codebases, explore architectural options, and accelerate drafting. I manually review, test, and validate every output before using it.",
  steps: [
    {
      num: "01",
      title: "Understand",
      summary: "Analyze the actual requirement, system constraints, and expected behavior."
    },
    {
      num: "02",
      title: "Build",
      summary: "Use AI assistance to explore implementation approaches and accelerate code drafting."
    },
    {
      num: "03",
      title: "Test",
      summary: "Design test scenarios, validate functional edge cases, and verify regressions."
    },
    {
      num: "04",
      title: "Validate",
      summary: "Manually review code correctness, verify security, and confirm end-user behavior."
    }
  ],
  tools: [
    {
      name: "Antigravity",
      role: "AI-assisted development environment & workflow orchestrator"
    },
    {
      name: "Claude",
      role: "Architecture exploration, code review, and structured problem solving"
    },
    {
      name: "DeepSeek",
      role: "Logic verification, debugging assistance, and syntax reference"
    },
    {
      name: "AI Agents & MCP",
      role: "Tool integration, repository context retrieval, and workflow automation"
    }
  ]
};

export const careerTimeline = [
  {
    period: "July 2026 – Present",
    role: "Associate System Engineer Intern",
    company: "Devopstrio",
    type: "Internship",
    details: [
      "Azure Landing Zone architecture research and cloud governance documentation.",
      "Proof-of-Concept implementations for Azure cloud budget alerts and cost tracking.",
      "Contributing to High-Level Design (HLD) and Low-Level Design (LLD) documents.",
      "Webpage feature development, UI improvements, and bug resolution.",
      "User Acceptance Testing (UAT), structured bug logging, and regression verification.",
      "Leveraging AI tooling (Antigravity, Claude, DeepSeek) for rapid code inspection."
    ]
  },
  {
    period: "May 2025 – June 2025",
    role: "Data Visualization Intern",
    company: "Excelerate",
    type: "Remote Internship",
    details: [
      "Participated in Excelerate's Early Internship Program on data structuring and presentation.",
      "Cleaned and organized raw datasets into structured visual formats.",
      "Completed assigned milestones and earned program certificate of completion."
    ],
    certificateUrl: `${BASE}assets/excelerate_certificate.pdf`
  }
];

export const skillGroups = [
  {
    category: "Cloud Platforms",
    items: [
      { name: "AWS", context: "EC2, S3, IAM, VPC, CloudWatch, CloudFront, SNS, CloudFormation" },
      { name: "Azure", context: "Landing Zones Fundamentals, Cloud Governance, Budget Alerts" }
    ]
  },
  {
    category: "Networking",
    items: [
      { name: "TCP/IP & Protocols", context: "HTTP/HTTPS, DNS, DHCP, Subnetting" },
      { name: "Troubleshooting", context: "Network connectivity debugging & port inspection" }
    ]
  },
  {
    category: "Infrastructure & DevOps",
    items: [
      { name: "Infrastructure as Code", context: "AWS CloudFormation, Terraform (Basics)" },
      { name: "Version Control & CI/CD", context: "Git, GitHub, GitHub Actions workflows" }
    ]
  },
  {
    category: "Systems & Troubleshooting",
    items: [
      { name: "Operating Systems", context: "Linux CLI, Windows Fundamentals, Service Management" },
      { name: "Analysis & Support", context: "Log Analysis, Technical Troubleshooting, Incident Management" }
    ]
  },
  {
    category: "Development & QA",
    items: [
      { name: "Development", context: "Python (Basic), JavaScript & React, HTML5 / CSS3" },
      { name: "Quality & Testing", context: "User-End Testing (UAT), Issue Documentation & Validation" }
    ]
  }
];

export const credentials = [
  {
    id: "aws-ccp",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    issueDate: "October 23, 2025",
    expiryDate: "October 23, 2028",
    validationNumber: "1ef51fa2dcbd45259966dddf6680593e",
    credlyUrl: "https://www.credly.com/badges/70a73891-afaf-495e-8a51-d7c52bf01e7a/linked_in?t=t4q4z7",
    verifyUrl: "https://aws.amazon.com/verification",
    status: "Active & Verified",
    summary: "Validates overall understanding of AWS Cloud concepts, security, compliance, core services (compute, storage, network, database), and billing models."
  },
  {
    id: "aws-restart",
    title: "AWS re/Start Graduate",
    issuer: "Amazon Web Services (AWS)",
    issueDate: "2025",
    credlyUrl: "https://www.credly.com/badges/9e127f77-e48c-4679-87bc-18d2f0b3a1e0/linked_in?t=t36k33",
    status: "Completed & Verified",
    summary: "12-week intensive skills program covering Linux fundamentals, IP networking, Python scripting, relational databases, cloud security, and core AWS architectural practices."
  }
];

export const educationInfo = {
  degree: "Bachelor of Engineering (B.E.) in Automobile Engineering",
  institution: "Kongu Engineering College, Erode",
  affiliation: "Anna University, Chennai",
  period: "2021 – 2025",
  grade: "First Class (CGPA: 7.84)",
  registerNumber: "737821AUR036",
  graduationDate: "April 2025 (Graduation Ceremony: 2026)",
  transitionStory: "Built strong analytical, systems thinking, and engineering problem-solving foundations through Automobile Engineering, before systematically transitioning into IT, Cloud Computing, and Software Development.",
  images: [
    {
      src: `${BASE}assets/graduation_stage.jpg`,
      caption: "Receiving Degree Certificate on 38th Graduation Day at Kongu Engineering College"
    },
    {
      src: `${BASE}assets/graduation_outdoor.jpg`,
      caption: "Graduation Day with Degree Folio at Kongu Engineering College Campus"
    }
  ]
};