// Reload: 2026-03-26T12:06:00
import {
    FaReact, FaNodeJs, FaPython, FaDocker, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaExternalLinkAlt, FaCode, FaAws, FaDatabase, FaJava, FaBrain, FaRobot, FaChartBar, FaCreditCard, FaEnvelope, FaFilePdf, FaLock, FaLink, FaProjectDiagram
} from 'react-icons/fa';
import {
    SiTypescript, SiJavascript, SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiRedux, SiGraphql, SiFigma, SiPostman, SiVercel, SiJest, SiWebpack, SiFastapi, SiExpress, SiPydantic, SiPandas, SiNumpy, SiHuggingface, SiCloudinary, SiVite, SiRender, SiNetlify, SiYaml, SiMysql, SiPuppeteer, SiSendgrid, SiGoogle, SiAuth0
} from 'react-icons/si';

export const portfolioData = {
    personalInfo: {
        name: "Mayank Charde",
        initials: "MC",
        title: "AI & Full Stack Developer",
        roles: ["MERN Stack Developer", "AI/ML Engineer"],
        bio: "Aspiring Software Engineer | Full-Stack Developer | AI/ML & Generative AI Enthusiast",
        email: "mayankcharde2@gmail.com",
        phone: "+91 9699561658",
        location: "India",
        avatar: "/mayank 1.jpeg",
        resume: "/resume_mayank.pdf",
        available: true
    },
    socialLinks: {
        github: "https://github.com/mayankcharde",
        linkedin: "https://www.linkedin.com/in/mayank-charde-56636b2a4",
        twitter: "https://twitter.com/mayankcharde"
    },
    stats: {
        commits: "250+",
        repos: "45+",
        prs: "120+",
        issues: "60+",
        projects: "15+",
        internships: "2",
        years: "2.5+",
        technologies: "20+"
    },
    skills: {
        mern: [
            { name: "React.js", icon: FaReact, level: 95, color: "#61DAFB" },
            { name: "Node.js", icon: FaNodeJs, level: 90, color: "#339933" },
            { name: "Express.js", icon: SiExpress, level: 88, color: "#ffffff" },
            { name: "MongoDB", icon: SiMongodb, level: 85, color: "#47A248" },
            { name: "JavaScript", icon: SiJavascript, level: 95, color: "#F7DF1E" },
            { name: "Tailwind CSS", icon: SiTailwindcss, level: 92, color: "#06B6D4" }
        ],
        ai: [
            { name: "Gemini API", icon: SiGoogle, level: 90, color: "#4285F4" },
            { name: "Machine Learning", icon: FaRobot, level: 88, color: "#FF6F61" },
            { name: "NLP", icon: FaCode, level: 85, color: "#3498DB" },
            { name: "Deep Learning", icon: FaBrain, level: 82, color: "#8E44AD" },
            { name: "Transformers", icon: SiHuggingface, level: 80, color: "#FFD21E" },
            { name: "Pydantic", icon: SiPydantic, level: 88, color: "#E92063" },
            { name: "Pandas", icon: SiPandas, level: 92, color: "#150458" },
            { name: "RAG", icon: FaDatabase, level: 85, color: "#00F5FF" },
            { name: "MCP", icon: FaRobot, level: 82, color: "#7B2FFF" },
            { name: "LangChain", icon: FaLink, level: 90, color: "#00D084" },
            { name: "LangGraph", icon: FaProjectDiagram, level: 85, color: "#FF2E63" }
        ],
        backend: [
            { name: "FastAPI", icon: SiFastapi, level: 88, color: "#05998B" },
            { name: "MySQL", icon: SiMysql, level: 85, color: "#4479A1" },
            { name: "Puppeteer", icon: SiPuppeteer, level: 85, color: "#40B54B" },
            { name: "SendGrid", icon: SiSendgrid, level: 82, color: "#00BEEE" },
            { name: "JWT / Auth", icon: SiAuth0, level: 90, color: "#EB5424" },
            { name: "Core Java", icon: FaJava, level: 80, color: "#007396" }
        ],
        tools: [
            { name: "Razorpay", icon: FaCreditCard, level: 90, color: "#3399FF" },
            { name: "Cloudinary", icon: SiCloudinary, level: 85, color: "#3448C5" },
            { name: "Docker", icon: FaDocker, level: 78, color: "#2496ED" },
            { name: "Postman API", icon: SiPostman, level: 92, color: "#FF6C37" },
            { name: "Render", icon: SiRender, level: 88, color: "#46E3B7" },
            { name: "Netlify", icon: SiNetlify, level: 90, color: "#00C7B7" },
            { name: "Git / GitHub", icon: FaGithub, level: 98, color: "#ffffff" }
        ],
        soft: ["Technical Leadership", "System Architecture", "Problem Solving", "Collaboration", "Product Strategy"]
    },
    projects: [
        {
            id: 1,
            title: "NADT Education Platform",
            category: "Full Stack",
            description: "A secure taxpayer awareness platform for NADT. Features video learning, progress tracking, and automated certificate generation using Puppeteer and SendGrid.",
            tech: ["React", "Node.js", "MongoDB", "Razorpay", "SendGrid", "Puppeteer"],
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop",
            demo: "https://preeminent-bavarois-b1e2d8.netlify.app/",
            repo: "https://github.com/mayankcharde/nadt4",
            featured: true
        },
        {
            id: 2,
            title: "DeepSeek AI Clone",
            category: "Artificial Intelligence",
            description: "AI-powered platform with speech interactions, image generation, and subscription management. Integrated with Gemini API and Razorpay.",
            tech: ["MERN Stack", "Gemini API", "Razorpay", "Speech-to-Text", "CDN"],
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
            demo: "#",
            repo: "https://github.com/mayankcharde/FINAL-DEEPSEEK2",
            featured: true
        },
        {
            id: 3,
            title: "E Store - Modern E-Commerce",
            category: "Full Stack",
            description: "Feature-rich shopping experience with Razorpay integration and automated PDF invoice generation delivered via email.",
            tech: ["MERN Stack", "Razorpay", "Puppeteer", "Email API"],
            image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1000&auto=format&fit=crop",
            demo: "https://statuesque-sorbet-5b418e.netlify.app/",
            repo: "https://github.com/mayankcharde/E-Commerce",
            featured: true
        },
        {
            id: 4,
            title: "Gen AI Job Prep Platform",
            category: "Artificial Intelligence",
            description: "Helping job seekers with ATS-optimized resumes and Gemini-powered interview questions based on job descriptions.",
            tech: ["React", "Node.js", "Gemini API", "Puppeteer", "JWT"],
            image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1000&auto=format&fit=crop",
            demo: "https://69ac62fa6e54f38766d2dfea--aiinterviewmodel.netlify.app/",
            repo: "https://github.com/mayankcharde/interviewAi",
            featured: false
        },
        {
            id: 5,
            title: "MovieGenie - ML Suggestion",
            category: "Artificial Intelligence",
            description: "Personalized movie recommendation system using ML & NLP similarity matching with TF-IDF vectorization.",
            tech: ["Python", "FastAPI", "NLP", "ML", "Streamlit"],
            image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000&auto=format&fit=crop",
            demo: "#",
            repo: "https://github.com/mayankcharde/MovieGenie",
            featured: false
        },
        {
            id: 6,
            title: "Spotify Cloud Clone",
            category: "Full Stack",
            description: "Futuristic music streaming experience with glassmorphism UI, custom playlists, and real-time interactive controls.",
            tech: ["React.js", "Tailwind CSS", "Framer Motion", "Context API"],
            image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=1000&auto=format&fit=crop",
            demo: "https://sprightly-cannoli-d94c81.netlify.app/",
            repo: "https://github.com/mayankcharde/spotify",
            featured: false
        },
        {
            id: 7,
            title: "Code Reviewer",
            category: "Artificial Intelligence",
            description: "Built with React.js and Gemini API integrated in Express/Node.js for intelligent code analysis.",
            tech: ["React.js", "Gemini API", "Node.js", "Express"],
            image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000&auto=format&fit=crop",
            // demo: "https://codereviwergfg.netlify.app/",
            repo: "https://github.com/mayankcharde/final-code-reviwer",
            featured: false
        },
        {
            id: 8,
            title: "House Price Prediction",
            category: "Artificial Intelligence",
            description: "Built with React.js and Python (Flask) using house price detection datasets.",
            tech: ["React.js", "Python", "Flask", "Machine Learning"],
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
            demo: "https://tubular-semifreddo-a24e4a.netlify.app/",
            repo: "https://github.com/mayankcharde/demo_house",
            featured: false
        },
        {
            id: 9,
            title: "GTA 6 Website",
            category: "Frontend/UI",
            description: "Built with React.js integrated with Framer Motion for high-fidelity animations.",
            tech: ["React.js", "Framer Motion", "Tailwind CSS"],
            image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop",
            demo: "https://webgta6.netlify.app/",
            repo: "https://github.com/mayankcharde/GTA-6-Website",
            featured: false
        },
        {
            id: 10,
            title: "Weather App",
            category: "Web Development",
            description: "Predictive weather application using HTML5, CSS, and JS with Weather API integration.",
            tech: ["HTML5", "CSS", "JavaScript", "Weather API"],
            image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1000&auto=format&fit=crop",
            demo: "https://guileless-kataifi-72b922.netlify.app/",
            repo: "https://github.com/mayankcharde/weather-interface",
            featured: false
        },
        {
            id: 11,
            title: "Expense Tracker",
            category: "Web Development",
            description: "Smart financial management platform with interactive graphs and real-time expense tracking.",
            tech: ["React", "Lucide Icons", "Tailwind CSS", "Charts.js"],
            image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=1000&auto=format&fit=crop",
            demo: "https://money-mind-graphs.lovable.app/",
            // repo: "https://github.com/mayankcharde/Expense-Tracker",
            featured: false
        },
        {
            id: 12,
            title: "DermSight – AI Skin Health System",
            category: "Artificial Intelligence",
            description: "AI-powered skin disease detection and triage system that analyzes images and symptoms to provide real-time insights and prioritize high-risk cases.",
            tech: ["React", "Node.js", "FastAPI", "TensorFlow", "PyTorch"],
            image: "/derm.png",
            demo: "#",
            repo: "https://github.com/mayankcharde/dermsight-ai-assistant",
            featured: false
        },
        {
            id: 13,
            title: "Fire & Smoke Detection System",
            category: "Artificial Intelligence",
            description: "Real-time fire detection system using YOLO and OpenCV that analyzes live video and triggers an instant alarm on detection. Supports webcam and ESP32 camera integration.",
            tech: ["YOLO", "OpenCV", "FastAPI", "Python"],
            image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=1000&auto=format&fit=crop",
            demo: "#",
            repo: "https://github.com/mayankcharde/Fire-Prediction",
            featured: false
        }
    ],
    experience: [
        {
            type: 'work',
            title: "AI Intern",
            company: "Infosys Springboard",
            duration: "Nov 2025 - Present",
            location: "Virtual",
            points: [
                "Built an AI-Powered Car Lease & Loan Contract Negotiation Assistant to simplify complex financing contracts.",
                "Implemented OCR-based data extraction using Tesseract for analyzing legal documents.",
                "Developed NLP pipelines with spaCy and LangChain for identifying risk clauses and financial terms.",
                "Engineered a fairness benchmarking system with LLM-generated negotiation recommendations."
            ],
            tech: ["Python", "FastAPI", "Flutter", "LangChain", "spaCy", "Tesseract", "Pandas"],
            repo: "https://github.com/mayankcharde/Car-Lease-AI-Assistant"
        },
        {
            type: 'work',
            title: "MERN Stack Developer Intern",
            company: "Codec Technologies India",
            duration: "Jun 2025 - Present",
            location: "Hybrid",
            points: [
                "Developing and maintaining full-stack web applications using the MERN stack.",
                "Collaborating with cross-functional teams to deliver scalable and performant digital solutions.",
                "Optimizing frontend performance and implementing modern UI/UX patterns."
            ],
            tech: ["MongoDB", "Express.js", "React.js", "Node.js"]
        },
        {
            type: 'education',
            title: "Bachelor of Technology, Artificial Intelligence",
            company: "St. Vincent Pallotti College of Engineering & Technology",
            duration: "2023-2027",
            location: "Nagpur, India",
            points: [
                "Specializing in Artificial Intelligence and Machine Learning architectures.",
                "Core focus on Neural Networks, Deep Learning, and Advanced NLP."
            ],
            tech: ["Artificial Intelligence", "MERN", "Python", "Problem Solving"]
        },
        {
            type: 'education',
            title: "12th HSC",
            company: "Sahu Garden Junior College",
            duration: "2021 - 2023",
            location: "Nagpur, India",
            points: [
                "Completed Higher Secondary Certificate with focus on Science stream.",
                "Strengthened analytical and logical reasoning skills."
            ],
            tech: ["Physics", "Chemistry", "Mathematics"]
        },
        {
            type: 'education',
            title: "10th Standard",
            company: "Montfort Secondary School",
            duration: "2021",
            location: "Nagpur, India",
            points: [
                "Achieved excellence in Science and Mathematics.",
                "Active participation in school technical and cultural events."
            ],
            tech: ["Science", "Mathematics"]
        }
    ],
    achievements: [
        {
            icon: "🚀",
            title: "SWALAMBH 2026 TOP 15",
            issuer: "SVPCET Nagpur x GCVI/HCL",
            date: "2026",
            description: "Selected among the Top 15 innovative teams for an AI-driven solution focused on real-world impact.",
            link: "#"
        },
        {
            icon: "🌟",
            title: "Webathon 2.0 National Finalist",
            issuer: "Webathon 2.0 Mumbai",
            date: "2025",
            description: "Ranked in the Top 20 teams nationally out of 125+ participants for a high-performance web solution.",
            link: "#"
        },
        {
            icon: "🎵",
            title: "Beatbots Runner-up (3rd)",
            issuer: "AI Music Gen Challenge",
            date: "2024",
            description: "Secured 3rd position globally in an AI software-based music generation event for a classical-rock fusion.",
            link: "#"
        },
    ],
    certifications: [
        {
            title: "Fundamentals of Deep Learning",
            issuer: "NVIDIA",
            date: "Jan 2026",
            credentialId: "1tO0Ys3ITkGJkXM3sgBKrQ",
            color: "#76B900"
        },
        {
            title: "Full Stack Generative & Agentic AI with Python",
            issuer: "Udemy",
            date: "Nov 2025",
            credentialId: "UC-434c4acf-3cf7-452d-9a3a-777fd1025a07",
            color: "#A435F0"
        },
        {
            title: "OCI 2025 Certified Generative AI Professional",
            issuer: "Oracle",
            date: "Sep 2025",
            credentialId: "321665152OCI25GAIOCP",
            color: "#F80000"
        },
        {
            title: "OCI Certified AI Foundations Associate",
            issuer: "Oracle",
            date: "Sep 2025",
            credentialId: "321665152OCI25AICFA",
            color: "#F80000"
        },
        {
            title: "Generative AI Essentials",
            issuer: "IBM",
            date: "Aug 2025",
            credentialId: "",
            color: "#054ADA"
        },
        {
            title: "Programming using Java",
            issuer: "Infosys Springboard",
            date: "2025",
            credentialId: "",
            color: "#007CC3"
        },
        {
            title: "Introduction to MERN Stack",
            issuer: "Simplilearn",
            date: "2025",
            credentialId: "",
            color: "#00B4D8"
        }
    ],
    githubUsername: "mayankcharde"
};



