function LinkGroup({ link, icon, onClick = null }) {
  return (
    <li
      onClick={onClick}
      className="flex items-center justify-center gap-2 hover:bg-slate-200 py-2 px-8 md:px-2 rounded-md transition-colors duration-500 font-semibold dark:hover:bg-neutral-800 cursor-pointer dark:hover:text-neutral-300"
    >
      {icon && <span className="text-xl hidden md:block">{icon}</span>}
      {link && (
        <a
          href={`#${link}`}
          className="visited:bg-slate-200 active:bg-slate-200 text-xl md:text-sm"
        >
          {link}
        </a>
      )}
    </li>
  );
}
export default LinkGroup;
