import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

function DesktopContact() {
  return (
    <div className="hidden md:block bg-slate-900 dark:bg-neutral-800 p-4 text-white">
      <h3 className="text-center font-bold text-2xl text-white dark:text-neutral-100">
        Get In Touch
      </h3>
      <p className="text-white text-center mb-2 font-semibold dark:text-neutral-300">
        Have a project in mind or just want to say hi?
      </p>
      <div className="h-75">
        <div className="flex items-center gap-2">
          <MdEmail />
          <span className="font-semibold">Fatomilolasamuel@gmail.com</span>
        </div>

        <div className="flex items-center gap-2">
          <HiOutlineLocationMarker />
          <span className="font-semibold">Nigeria</span>
        </div>
      </div>

      <div className="w-full flex gap-4 mx-auto items-center  mt-3">
        <a
          href="https://www.github.com/samz845"
          className="hover:text-slate-400 dark:hover:text-neutral-400 transition duration-700"
        >
          <FaGithub size={25} />
        </a>
        <a
          href="https://www.linkedin.com/in/devsamz"
          className="hover:text-slate-400 dark:hover:text-neutral-400 transition duration-700"
        >
          <FaLinkedin size={25} />
        </a>
        <a
          href="https://www.x.com/samzylexzy"
          className="hover:text-slate-400 dark:hover:text-neutral-400 transition duration-700"
        >
          <FaTwitter size={25} />
        </a>

        <a
          href="mailto:fatomilolasamuel@gmail.com"
          className="hover:text-slate-400 dark:hover:text-neutral-400 transition duration-700"
        >
          <MdEmail size={25} />
        </a>
      </div>
    </div>
  );
}

export default DesktopContact;
