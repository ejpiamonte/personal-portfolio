// components/TechStack.tsx
import Image from 'next/image';

import html_icon from '../../assets/techstack/html_icon.png';
import css_icon from '../../assets/techstack/css_icon.png';
import javascript_icon from '../../assets/techstack/javascript_icon.png';
import typescript_icon from '../../assets/techstack/typescript_icon.png';
import xampp_icon from '../../assets/techstack/xampp_icon.png';
import php_icon from '../../assets/techstack/php_icon.png';
import react_native_icon from '../../assets/techstack/react_native_icon.png';
import expo_icon from '../../assets/techstack/expo_icon.png';
import figma_icon from '../../assets/techstack/figma_icon.png';
import tailwind_icon from '../../assets/techstack/tailwind_icon.png';
import python_icon from '../../assets/techstack/python_icon.png';
import java_icon from '../../assets/techstack/java_icon.png';

const techStack = [
  { name: '', icon: html_icon },
  { name: '', icon: css_icon },
  { name: '', icon: javascript_icon },
  { name: '', icon: typescript_icon },
  { name: '', icon: xampp_icon },
  { name: '', icon: php_icon },
  { name: '', icon: react_native_icon },
  { name: '', icon: expo_icon },
  { name: '', icon: figma_icon },
  { name: '', icon: tailwind_icon },
  { name: '', icon: python_icon },
  { name: '', icon: java_icon },
];

export default function TechStackSection() {
  return (
    <section className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">My Tech Stack</h2>
      <p className="text-center text-gray-600 mb-12">
        Technologies I&apos;ve been working with recently
      </p>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 px-4 max-w-6xl mx-auto">
        {techStack.map((tech, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={ `flex justify-center items-center ${
                tech.icon === figma_icon
                  ? "w-[50px] h-[64px]"
                  : "w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
              }`}
            >
              <Image
                src={tech.icon}
                alt={tech.name}
                layout="intrinsic"
                className="object-contain"
              />
            </div>
            <p className="text-sm mt-2">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
