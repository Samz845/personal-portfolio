function Box({ title, description }) {
  return (
    <div className="group relative w-40 py-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border border-gray-100 dark:border-gray-700">
      <div className="flex flex-col items-center justify-center h-full gap-3">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 text-center leading-relaxed">
          {description}
        </p>
      </div>
      <div className="absolute inset-0 rounded-lg bg-linear-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-300 pointer-events-none"></div>
    </div>
  );
}

export default Box;
