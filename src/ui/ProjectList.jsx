import { projects } from "../data/project";
import ProjectCard from "./ProjectCard";

function ProjectList() {
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


