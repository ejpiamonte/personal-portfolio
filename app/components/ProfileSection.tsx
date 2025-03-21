// components/ProfileSection.tsx
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function ProfileSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-10 mt-16">
      {/* Left Content */}
      <div className="text-center md:text-left max-w-lg ml-4 sm:ml-6 md:ml-8 lg:ml-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Hi 👋, <br /> My name is <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            EJ Piamonte
          </span>
        </h1>
        <p className="mt-4 text-gray-600">
          Let's build the future, one line of code at a time.
        </p>
      </div>

      {/* Right Content */}
      <div className="hidden md:block mr-8 lg:mr-16">
        <div className="w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-64 lg:h-64 rounded-full border-4 border-transparent bg-gradient-to-r from-blue-400 to-purple-500 p-[2px]">
          <div className="w-full h-full bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
