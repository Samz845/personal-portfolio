function List({ children, icon, color }) {
  return (
    <li className="bg-blue-50 text-blue-800 px-3 py-3 rounded-full text-sm font-medium flex items-center gap-2 md:w-[45%] cursor-pointer hover:bg-blue-800 hover:text-blue-50 transition duration-500 dark:bg-neutral-800 dark:text-neutral-400">
      <span className="text-3xl" style={{ color }}>
        {icon}
      </span>
      {children}
    </li>
  );
}

export default List;
