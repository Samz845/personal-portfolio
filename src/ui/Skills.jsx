import {
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaReact,
} from "react-icons/fa";
import List from "./List";
import {
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiSupabase,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";

function Skills() {
  return (
    <section className="px-4 mb-8" id="skills">
      <span className="inline-block font-semibold text-slate-900 mt-4 dark:text-neutral-300 md:text-2xl md:mb-3">
        Here are the technologies I work with:
      </span>

      <ul className="mt-2 flex flex-wrap gap-3">
        <List icon={<FaReact />} color="#61DAFB">
          React
        </List>

        <List icon={<SiTailwindcss />} color="#38B2AC">
          Tailwind CSS
        </List>

        <List icon={<SiJavascript />} color="#61DAFB">
          Javascript
        </List>

        <List icon={<SiTypescript />} color="#3178c6">
          Typescript
        </List>

        <List icon={<SiNodedotjs />} color="#74e31f">
          Node.js
        </List>

        <List icon={<SiExpress />} color="#000000">
          Express.js
        </List>

        <List icon={<FaHtml5 />} color="#E34F26">
          HTML5
        </List>

        <List icon={<FaCss3Alt />} color="#1572B6">
          CSS3
        </List>

        <List icon={<FaGitAlt />} color="#F05032">
          Git
        </List>

        <List icon={<FaGithub />} color="#F05032">
          Github
        </List>

        <List icon={<SiRedux />} color="#764ABC">
          Redux
        </List>

        <List icon={<SiSupabase />} color="#3ECF8E">
          Supabase
        </List>
      </ul>
    </section>
  );
}

export default Skills;
