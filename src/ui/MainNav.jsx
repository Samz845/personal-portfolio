import LinkGroup from "./LinkGroup";
import {
  HiOutlineBars3,
  HiOutlineIdentification,
  HiOutlineXMark,
} from "react-icons/hi2";
import { HiOutlineSparkles } from "react-icons/hi2";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { HiOutlineEnvelope } from "react-icons/hi2";
import Toggle from "./Toggle";
import { useEffect, useRef, useState } from "react";
import { useOutsideClick } from "../hooks/useOutSideClick";
import { FaLaptopCode } from "react-icons/fa";
function MainNav() {
  const [menuOpen, setOpenMenu] = useState(false);
  const sideBarRef = useRef();
  const handleOpen = () => setOpenMenu(false);
  useOutsideClick(sideBarRef, handleOpen);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [menuOpen]);

  return (
    <nav className="relative">
      <div className="hidden md:flex items-center gap-4">
        <ul className="flex">
          <LinkGroup link="about" icon={<HiOutlineIdentification />} />

          <LinkGroup link="projects" icon={<HiOutlineBriefcase />} />
          <LinkGroup link="experience" icon={<FaLaptopCode />} />
          <LinkGroup link="skills" icon={<HiOutlineSparkles />} />

          <LinkGroup link="contact" icon={<HiOutlineEnvelope />} />
        </ul>
        <Toggle />
      </div>
      <button
        onClick={() => setOpenMenu((m) => !m)}
        className="md:hidden text-3xl cursor-pointer"
      >
        <HiOutlineBars3 />
      </button>

      <div
        onClick={() => setOpenMenu(false)}
        className={`fixed inset-0  bg-black/70 backdrop-blur-lg  transition duration-1000 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }
        `}
      ></div>

      <div
        className={`md:hidden fixed left-0 top-0 flex flex-col items-center transition-transform duration-1000  h-full bg-slate-50 w-64 p-4 dark:bg-neutral-900 dark:text-neutral-100 space-y-4 text-slate-900 z-100 ${
          menuOpen ? "translate-x-0" : "-translate-x-[150%]"
        }
         `}
      >
        <button
          className="flex cursor-pointer justify-end w-full  text-2xl"
          onClick={() => setOpenMenu(false)}
        >
          <HiOutlineXMark />
        </button>
        <ul className="mt-6">
          <LinkGroup
            link="about"
            icon={<HiOutlineIdentification />}
            onClick={() => setOpenMenu(false)}
          />

          <LinkGroup
            link="projects"
            icon={<HiOutlineBriefcase />}
            onClick={() => setOpenMenu(false)}
          />

          <LinkGroup
            link="experience"
            icon={<FaLaptopCode />}
            onClick={() => setOpenMenu(false)}
          />

          <LinkGroup
            link="skills"
            icon={<HiOutlineSparkles />}
            onClick={() => setOpenMenu(false)}
          />

          <LinkGroup
            link="contact"
            icon={<HiOutlineEnvelope />}
            onClick={() => setOpenMenu(false)}
          />
        </ul>

        <a
          href="https://drive.google.com/uc?export=download&id=1z3B5lrLn0WnByXfPje37DSLaQilRIFRts"
          ss
          download
          target="_blank"
          rel="noopener"
          className="bg-slate-900 transition-transform duration-700 text-white px-5 py-4 rounded-lg hover:bg-slate-800  dark:bg-blue-400 dark:hover:bg-blue-300"
        >
          Resume
        </a>

        <Toggle />
      </div>
    </nav>
  );
}

export default MainNav;
