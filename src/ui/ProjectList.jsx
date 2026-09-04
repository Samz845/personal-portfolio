import ProjectCard from "./ProjectCard";

function ProjectList() {
  const projects = [
    {
      img: "wildOasis.png",
      name: "WildOasis",
      stack: ["React", "Supabase", "Styled-Component,React Query, Context API"],
      gitLink: "https://github.com/samz845/wild-oasis",
      demo: "https://wildoasismanagement.netlify.app",
      description:
        "The Wild Oasis is a modern cabin booking dashboard for luxury resorts. It features secure authentication, real-time data handling, and an intuitive, responsive UI. Users can manage cabins, bookings, and guests efficiently, with a dynamic dashboard providing key insights.",
      features: [
        "Secure user authentication",
        "Cabin and booking management (CRUD)",
        "Dynamic dashboard with analytics",
        "Responsive and accessible UI",
        "Dark mode support",
        "Optimized data fetching and caching",
      ],
    },

    {
      img: "smartstart.png",
      name: "Capstone Smartstart",
      stack: [
        "React",
        "javascript",
        "Typescript",
        "Tailwind CSS",
        "React Query",
        "Google Auth",
        "Framer Motion",
      ],
      gitLink: "https://github.com/samz845/smartstartApp",
      demo: "https://capstone-smartstartapp.netlify.app",
      description:
        "A modern employee onboarding platform designed for HR teams to efficiently manage new hires. The app streamlines the onboarding process with secure authentication, real-time data handling, and an intuitive interface for both employees and HR staff.",

      features: [
        "Google authentication for secure sign-ups and logins",
        "Employee and HR dashboards with role-based access",
        "Real time data fetching and caching using React Query",
        "Fully responsive design with Tailwind CSS",
        "Streamlined onboarding workflow to manage tasks, documents and progress",
      ],
    },

    {
      img: "fastpizza.png",
      name: "Fast pizza",
      stack: [
        "React",
        "redux",
        "React Router(loaders & Routing)",
        "Tailwind CSS",
      ],
      gitLink: "https://github.com/samz845/fast-pizza",
      demo: "https://fastpizza4u.netlify.app",
      description:
        "Fast pizza is a modern and user-friendly pizza ordering web application designed for speed and simplicity. The app allows users to start ordering immediately by simply entering their name, no authentication or account creation required, reducing friction and improving the user experience.",

      features: [
        "Quick start ordering with just a name(no authentication)",
        "Global state management for cart and order flow",
        "Efficient data loading using React Router loaders",
        "Responsive and modern UI",
        "clean and intuitive user experience",
      ],
    },

    {
      img: "portfolio.png",
      name: "Personal Portfolio website",
      stack: [
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "Context API",
        "Supabase",
      ],
      gitLink: "https://github.com/samz845/personal-portfolio",
      demo: "https://samuel-fatomilola.netlify.app",
      description:
        "A fully responsive personal portfolio showcasing projects,skills,and professional experience. Built with modern frontend tools and interactive features for an engaging user experience.",

      features: [
        "Responsive mobile and desktop design with dark mode toggle",
        "Smooth animations using Framer Motion",
        "State management with Context API",
        "Contact form integrated with supabase for sending and storing messages",
        "Showcases projects, skills, and professional experience",
      ],
    },
  ];

  return (
    <div className="px-4 py-2" id="projects">
      <div className="flex justify-center mb-1 mt-3 sm:text-2xl text-xl">
        <h3 className="font-bold text-gray-900 mb-4 inline-block border-b-4 pb-1 dark:text-neutral-300 md:text-3xl md:mb-6 md:border-b-6">
          My Projects
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-300 mx-auto">
        {projects.map((project, index) => (
          <ProjectCard data={project} key={index} />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
