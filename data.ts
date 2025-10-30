export const aboutMe = [
  {
    text: "Full Stack Developer",
    className: "text-red-500",
  },
  {
    text: "DSA enthusiast",
    className: "text-blue-500",
  },
  {
    text: "Student at DTU",
    className: "text-green-500",
  },
]
export const navItems = [
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
  { name: "Work Exp.", link: "#workexperience" },
];
export const acheivements = [
  {
    text: "4 star Codechef(Max 1831 rating)",
    link: "https://www.codechef.com/users/cbhatia2005",
  },
  {
    text: "Knight Leetcode(Max 2093 rating)",
    link: "https://leetcode.com/u/chigu2005",
  },
]
export const passion = [
  "I am passionate about full stack development and problem solving",
  "Actively seeking opportunities in startups and product based companies to expand my skills and have professional experience.",
  "Check out my resume and feel free to connect with me for any opportunity that aligns with my skills and interests."
]
export const aboutContent = [
  "4th-year Software Engineering Student at Delhi Technological University",
  "Consistently achieved a strong academic record with a CGPA of 9.44",
  "Passionate about full-stack development, problem solving and creating impactful projects",
]

export const projects = [
  {
    title: "RepoMind - Intelligent GitHub Repository Assistant",
    content: [
      "AI-powered tool that analyzes GitHub repositories to generate summaries, insights, and code explanations.",
      "Supports natural language queries to help users explore repository structure, tech stack, and documentation effortlessly.",
      "Built with a responsive, modern UI for developers to quickly understand complex projects."
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Gemini API", "React Query", "Zustand", "pgvector", "Clerk", "Stripe"],
    repoLink: "https://github.com/chirag0785/github-qna",
    livelink: "https://github-qna.vercel.app/",
    images: [
      "/images/githubqna-1.png",
      "/images/githubqna-2.png",
      "/images/githubqna-3.png",
      "/images/githubqna-4.png"
    ]
  },

  {
    title: "GitHub Analytics Hub",
    content: [
      "A comprehensive GitHub analytics dashboard that provides insights on repositories, users, and contributions.",
      "Features include visualizations using Chart.js, user search history, and API response caching with Redis."
    ],
    techStack: ["HTML", "CSS", "JavaScript", "Chart.js", "Node.js", "Express", "MongoDB", "GitHub API", "Redis", "Handlebars"],
    repoLink: "https://github.com/chirag0785/gitHub_CB",
    livelink: '',
    images: [
      "/images/github-1.png",
      "/images/github-2.png",
      "/images/github-3.png",
    ]
  },
  {
    title: "HarvestWise",
    content: [
      "A smart agriculture advisory platform helping farmers make data-driven decisions for crop selection and irrigation.",
      "Provides weather forecasts, community forums, and resource management insights."
    ],
    techStack: ["React", "Tailwind CSS", "Redux Toolkit", "Node.js", "Express", "MongoDB", "OpenWeather API", "Socket.io"],
    repoLink: "https://github.com/chirag0785/HarvestWise",
    livelink: 'https://master--keen-froyo-7f5d5e.netlify.app',
    images: [
      "/images/harvest-wise-1.png",
      "/images/harvest-wise-2.png",
      "/images/harvest-wise-3.png",
    ]
  },
  {
    title: "Transformify",
    content: [
      "An AI-powered image transformation tool with features like background removal, image enhancement, and filters.",
      "Integrates Cloudinary AI for image processing and other media transformations with user-friendly UI for seamless interaction."
    ],
    techStack: ["Next.js", "Tailwind CSS", "Prisma", "Typescript", "Cloudinary", "NeonDB", "Clerk"],
    repoLink: "https://github.com/chirag0785/Transfomedia",
    livelink: 'https://transfomedia.vercel.app',
    images: [
      "/images/transformify-1.png",
      "/images/transformify-2.png"
    ]
  },
  {
    title: "Collab Blogging Hub",
    content: [
      "A collaborative blogging platform where multiple users can contribute to shared blogs.",
      "Features include real-time editing, authentication, and a rich text editor",
      "Badges given based on comments, likes and wordCount of the content written by author"
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "React Hook Form", "Zod", "MongoDB", "NextAuth", "Tiptap", "Liveblocks"],
    repoLink: "https://github.com/chirag0785/BlogProject",
    livelink: 'https://collab-blogging-hub.vercel.app',
    images: [
      "/images/collab-1.png",
      "/images/collab-2.png"
    ]
  },
];

export const workExperience = [
  {
    title: "SWE Intern",
    company: "Atlassian",
    duration: "June 2025- July 2025",
    status: "Completed",
    logo: "/images/atlassian-logo.webp",
    teamName: "ITSM-AIOps Team",
    description: [
      "Developed a Signal-to-Noise Ratio (SNR) classification feature for Incident Management that reduced mean time to resolution by 30% by filtering low-priority alerts, implemented end-to-end across multiple alert dashboards using a feature-flagged gradual rollout strategy.",
      "Authored 12+ pull requests delivering production-ready React components aligned with Atlassian’s design and accessibility standards.",
      "Collaborated with the backend team to refine API contracts and enhance user interactions across alert workflows.",
      "Conducted staging-level testing and applied composability and reusable design principles to ensure a maintainable and scalable frontend architecture."
    ]
  }
]
