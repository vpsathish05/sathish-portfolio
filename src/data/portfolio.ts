export const personalInfo = {
  name: "Sathish Kumar V",
  title: "Full-Stack Developer & Data Engineer",
  description: "I build AI-powered applications and data platforms that solve real business problems. 5+ years turning complex requirements into elegant solutions.",
  email: "sathishkumar05@gmail.com",
  phone: "+91 8056770991",
  linkedin: "https://www.linkedin.com/in/sathish-kumar-310976153/",
  github: "https://github.com/vpsathish05",
  avatar: "/sathish-teams-img.png",
  location: "Chennai, India"
};

export const aboutMe = {
  summary: "5 years of experience in Information Technology, with a strong foundation in both full-stack development and data engineering. Skilled in web technologies, including Angular, ReactJS, Next.js, Node.js, NestJS, C#, Python, and SQL.",
  details: "Proficient in data engineering tools like dbt, ADF, and SQL, contributing to projects focused on GenAI-based products, chatbots, and machine learning integration. Strong understanding of Object-Oriented Programming (OOPS) concepts and SDLC processes."
};

export const education = [
  { degree: "MCA", institution: "University of Madras IDE", year: "2017-2020", grade: "70%" },
  { degree: "BCA", institution: "Jairam Arts and Science College", year: "2014-2017", grade: "66%" },
  { degree: "HSS", institution: "Velasamy Chettiar HSS", year: "2014", grade: "65%" },
  { degree: "SSLC", institution: "Velasamy Chettiar HSS", year: "2012", grade: "66%" }
];

export const skills = {
  programming: [
    { name: "C#", color: "#239120" },
    { name: "Python", color: "#3776AB" },
    { name: "JavaScript", color: "#F7DF1E" },
    { name: "TypeScript", color: "#3178C6" }
  ],
  frontend: [
    { name: "Angular", color: "#DD0031" },
    { name: "Next.js", color: "#000000" },
    { name: "React", color: "#61DAFB" }
  ],
  backend: [
    { name: "Node.js", color: "#339933" },
    { name: "NestJS", color: "#E0234E" },
    { name: ".NET Core", color: "#512BD4" },
    { name: ".NET Framework", color: "#512BD4" }
  ],
  data: [
    { name: "dbt", color: "#FF694B" },
    { name: "Azure Data Factory", color: "#0089D6" },
    { name: "Matillion ETL", color: "#00ADEF" },
    { name: "SQL Server", color: "#CC2927" },
    { name: "PostgreSQL", color: "#336791" },
    { name: "Amazon Redshift", color: "#8C4FFF" }
  ]
};

export const experiences = [
  {
    title: "Solution Enabler",
    company: "JMAN Group, Chennai",
    date: "Apr 2024 – Present",
    description: "Working on GenAI-based products, including chatbots leveraging vector databases. Utilizing Next.js, Node.js, and Python for developing scalable AI solutions. Implementing advanced NLP techniques and integrating with cloud platforms for robust AI deployments."
  },
  {
    title: "Senior Software Engineer",
    company: "JMAN Group, Chennai",
    date: "Apr 2023 – Apr 2024",
    description: "Enhanced data pipelines for increased scalability and performance. Worked with dbt, Azure Data Factory, and SQL to optimize ETL processes. Developed data models and implemented data quality checks to ensure data integrity and reliability."
  },
  {
    title: "Software Engineer",
    company: "JMAN Group, Chennai",
    date: "Feb 2022 – Apr 2023",
    description: "Developed APIs and optimized front-end components. Utilized Node.js and NestJS for backend development, and Angular for creating responsive and interactive user interfaces. Implemented RESTful APIs and worked on performance optimization of database queries."
  },
  {
    title: "Full Stack Developer",
    company: "Elroi Software Solutions, Chennai",
    date: "Sep 2021 – Feb 2022",
    description: "Worked on various programming projects and solutions. Utilized C# and .NET Framework for developing desktop applications. Implemented database solutions using SQL Server and contributed to the development of web applications using ASP.NET MVC."
  },
  {
    title: "Full-Stack Developer",
    company: "Qserve UAE, Chennai",
    date: "Aug 2020 – Nov 2020",
    description: "Developed a Retail Management System covering core functionalities like order processing, sales tracking, accounting, and inventory management. Utilized .NET Core, SQL Server, ASP.NET MVC, and LINQ for building a robust and scalable application."
  },
  {
    title: "Software Developer",
    company: "RmKV Computask Pvt. Ltd., Chennai",
    date: "Jul 2017 – Aug 2018",
    description: "Maintained and enhanced applications to support the RmKV Groups day-to-day operational requirements. Worked with SQL Server for database management, C# for backend logic, and Angular for front-end development. Implemented new features and optimized existing codebase for improved performance."
  }
];

export const projects = [
  {
    id: "ai-chatbot",
    title: "AI Chatbot",
    company: "Colonis",
    role: "Project Manager + Technical Lead",
    techStack: [
      { name: "Next.js", color: "#000000" },
      { name: "Chroma DB", color: "#00ADEF" },
      { name: "Postgres Vector DB", color: "#336791" },
      { name: "LangChain", color: "#1C3C3C" },
      { name: "OpenAI API", color: "#412991" },
      { name: "PubMed API", color: "#326295" },
      { name: "Google Scholar API", color: "#4285F4" },
      { name: "RAG", color: "#FF6B6B" }
    ],
    description: "Designed and developed an advanced AI-powered chatbot using Next.js integrated with vector embeddings and sophisticated indexing for enhanced natural language processing. The system leverages RAG (Retrieval Augmented Generation) architecture to provide accurate and contextual responses.",
    details: [
      "Implemented vector database solutions using Chroma DB and Postgres with pgvector extension for efficient similarity search and document retrieval.",
      "Integrated multiple academic APIs including PubMed and Google Scholar for comprehensive research data access.",
      "Led the technical architecture decisions and managed the project timeline while ensuring high-quality deliverables and maintaining clear communication with stakeholders."
    ],
    demoUrl: null,
    githubUrl: null
  },
  {
    id: "data-platform",
    title: "Data Platform Build",
    company: "With Intelligence",
    role: "Project Manager + Data Engineer",
    techStack: [
      { name: "dbt cloud", color: "#FF694B" },
      { name: "Redshift", color: "#8C4FFF" },
      { name: "Atlassian", color: "#0052CC" }
    ],
    description: "Built and managed a comprehensive data platform utilizing modern data warehouse architecture to centralize and analyze corporate growth data. Implemented sophisticated data models using dbt cloud for efficient transformation and analysis.",
    details: [
      "Designed and optimized complex SQL queries and data models in Redshift, significantly improving query performance and data accessibility.",
      "Integrated Atlassian tools for project management and documentation.",
      "Led the data engineering team, established best practices for data modeling, and ensured successful delivery of data solutions while maintaining high data quality standards."
    ],
    demoUrl: null,
    githubUrl: null
  },
  {
    id: "ai-readiness",
    title: "AI Readiness Assessment Tool",
    company: "Baird Capital",
    role: "Project Manager + Technical Lead",
    techStack: [
      { name: "Next.js", color: "#000000" },
      { name: "PostgreSQL", color: "#336791" },
      { name: "Docker", color: "#2496ED" },
      { name: "App Services", color: "#0089D6" }
    ],
    description: "Led the development of a comprehensive web application using Next.js and PostgreSQL to assess organizational AI readiness. Implemented containerized deployment using Docker and Azure App Services for scalable and reliable hosting.",
    details: [
      "Designed and implemented a sophisticated survey system with dynamic question generation and intelligent scoring algorithms.",
      "Created detailed reports and actionable insights based on assessment results.",
      "Managed the project timeline, coordinated with stakeholders, and provided technical leadership to ensure successful delivery while maintaining high code quality standards."
    ],
    demoUrl: null,
    githubUrl: null
  }
];
