import { ProjectDetails } from "../types/project";

export const projectsData: ProjectDetails[] = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js and Stripe",
    longDescription: "A comprehensive e-commerce platform that provides a seamless shopping experience. Features include product catalog, shopping cart, secure checkout with Stripe, user authentication, and order management.",
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS", "Prisma"],
    liveUrl: "https://ecommerce-demo.example.com",
    githubUrl: "https://github.com/example/ecommerce",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates",
    longDescription: "A real-time task management application that enables teams to collaborate effectively. Features include task creation, assignment, real-time updates, comments, and file attachments.",
    technologies: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://taskmanager-demo.example.com",
    githubUrl: "https://github.com/example/taskmanager",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&h=600&fit=crop"
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with Next.js and Framer Motion",
    longDescription: "A personal portfolio website showcasing projects and skills. Features smooth animations, responsive design, and modern UI components.",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/example/portfolio",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
  },
  {
    title: "Weather Dashboard",
    description: "A weather dashboard with data visualization and forecasting",
    longDescription: "An interactive weather dashboard that provides detailed weather information and forecasts. Features include location search, weather maps, and historical data visualization.",
    technologies: ["React", "D3.js", "OpenWeather API", "Tailwind CSS"],
    liveUrl: "https://weather-demo.example.com",
    githubUrl: "https://github.com/example/weather",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop"
  }
];