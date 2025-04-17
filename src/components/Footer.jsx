import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-20 py-6 border-t border-gray-300 dark:border-gray-700 text-center">
      <div className="flex justify-center space-x-6 text-xl text-gray-600 dark:text-gray-300">
      <a
  href="https://github.com/amgadnazar"
  title="GitHub"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-blue-500 transition"
>
  <FaGithub />
</a>

<a
  href="https://www.linkedin.com/in/amjad-nazar"
  title="LinkedIn"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-blue-500 transition"
>
  <FaLinkedin />
</a>

<a
  href="mailto:amgadnazar11@gmail.com"
  title="Email"
  className="hover:text-blue-500 transition"
>
  <FaEnvelope />
</a>

      </div>
      <p className="text-sm mt-4 text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Amjad Salih. All rights reserved.
      </p>
      
    </footer>
  );
}
