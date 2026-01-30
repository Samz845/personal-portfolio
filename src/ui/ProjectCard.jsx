import { FaGithub, FaLink } from "react-icons/fa";

function ProjectCard({ data }) {
  const { img, name, stack, gitLink, demo, description, features } = data;
  return (
    <section className="bg-gray-200 mb-8 pb-6 rounded-xl shadow-md dark:bg-neutral-700">
      <div className="w-full  bg-gray-300 dark:bg-neutral-600">
        <img
          src={img}
          alt={`${name} screenshot`}
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="m-4">
        <span className="inline-block text-blue-600 text-xl font-bold mb-2 dark:text-blue-300">
          {name}
        </span>
        <p className="italic text-amber-600 font-semibold text-lg mb-3 dark:text-amber-400">
          {stack.join(", ")}
        </p>
        <p className="text-gray-700 font-medium leading-relaxed mb-4 dark:text-gray-200">
          {description}
        </p>

        <ul className="list-disc pl-5 mt-4 text-gray-600 space-y-1 dark:text-gray-300">
          {features.map((f) => (
            <li key={f} className="text-sm">
              {f}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-2 m-4 text-slate-900 text-2xl">
        <a
          href={gitLink}
          target="_blank"
          className="hover:text-emerald-900 transition duration-300 dark:text-blue-400 dark:hover:text-blue-300"
        >
          <FaGithub />
        </a>
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-emerald-900 transition duration-300 dark:text-blue-400 dark:hover:text-blue-300"
        >
          <FaLink />
        </a>
      </div>
    </section>
  );
}

export default ProjectCard;
