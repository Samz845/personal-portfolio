function Experience() {
  return (
    <section
      className="px-4 sm:px-6 md:px-8 py-12 md:py-16 max-w-6xl mx-auto space-y-6"
      id="experience"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
        Experience
      </h1>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow border-l-4 border-purple-500">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-4 mb-4">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
            Frontend Developer - Project-Based
          </h3>
          <span className="text-sm md:text-base text-gray-500 dark:text-gray-400 whitespace-nowrap">
            2024 - Present
          </span>
        </div>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 font-medium mb-4">
          Self-Directed
        </p>

        <ul className="space-y-3 list-disc list-inside text-gray-700 dark:text-gray-300">
          <li className="text-sm md:text-base leading-relaxed">
            Built responsive web applications using React and Tailwind CSS
          </li>
          <li className="text-sm md:text-base leading-relaxed">
            Developed real-world projects including an onboarding web app and a
            cabin management web app
          </li>
          <li className="text-sm md:text-base leading-relaxed">
            Implemented authentication flows and protected routes
          </li>
          <li className="text-sm md:text-base leading-relaxed">
            Built reusable UI components and handled form validation
          </li>
          <li className="text-sm md:text-base leading-relaxed">
            Focused on clean UI, accessibility, and mobile-first design
          </li>
        </ul>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-500">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-4 mb-4">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
            Frontend Developer - Startup Project
          </h3>
          <span className="text-sm md:text-base text-gray-500 dark:text-gray-400 whitespace-nowrap">
            Mar 2024 - July 2024
          </span>
        </div>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 font-medium mb-4">
          Driving Tutor Booking Platform
        </p>

        <ul className="space-y-3 list-disc list-inside text-gray-700 dark:text-gray-300">
          <li className="text-sm md:text-base leading-relaxed">
            Built the frontend of a web platform for booking driving tutors
          </li>
          <li className="text-sm md:text-base leading-relaxed">
            Implemented authentication and role-based flows for:
            <ul className="mt-2 ml-4 space-y-1 list-circle">
              <li>Driving tutors registering as teachers</li>
              <li>Learners signing up to book lessons</li>
            </ul>
          </li>
          <li className="text-sm md:text-base leading-relaxed">
            Developed registration and login forms with validation
          </li>
          <li className="text-sm md:text-base leading-relaxed">
            Implemented protected routes and conditional UI based on user roles
          </li>
          <li className="text-sm md:text-base leading-relaxed">
            Ensured responsive design across mobile and desktop devices
          </li>
          <li className="text-sm md:text-base leading-relaxed">
            Collaborated with backend integration requirements
          </li>
        </ul>
      </div>
    </section>
  );
}
export default Experience;
