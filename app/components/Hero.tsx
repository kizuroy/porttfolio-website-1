import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center">
          <div className="relative w-32 h-32 mb-8 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700 bg-gray-200 dark:bg-gray-700">
            {/* You can replace this with your profile image by adding it to the public directory */}
            <div className="absolute inset-0 flex items-center justify-center text-4xl text-gray-500 dark:text-gray-400">
              👨‍💻
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Your Name
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Full Stack Developer
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mb-8">
            I build modern web applications with a focus on user experience and clean code.
            Passionate about creating impactful solutions through technology.
          </p>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 