import FadeInSection from "../components/FadeInSection";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="max-w-screen-md mx-auto bg-gray-50 text-gray-900 rounded-xl shadow-lg p-8 md:p-12 space-y-8">
      <h1 className="text-4xl font-bold flex items-center justify-center space-x-3">
        <span className="animate-bounce">📬</span>
        <span>Let&apos;s Connect</span>
      </h1>
      <p className="text-center text-lg text-gray-600">Reach out through LinkedIn, GitHub, or Email!</p>

      <div className="flex flex-col space-y-4">
        <FadeInSection>
          <a
            href="https://www.linkedin.com/in/osanlo"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center space-x-3 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-1 transition"
          >
            <FaLinkedin size={24} className="group-hover:animate-bounce" />
            <span>Connect on LinkedIn</span>
          </a>
        </FadeInSection>

        <FadeInSection>
          <a
            href="https://github.com/Soroush20041383"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center space-x-3 px-6 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 hover:shadow-lg transform hover:-translate-y-1 transition"
          >
            <FaGithub size={24} className="group-hover:animate-bounce" />
            <span>Visit my GitHub</span>
          </a>
        </FadeInSection>

        <FadeInSection>
          <a
            href="mailto:soroush.osanlo@gmail.com"
            className="group flex items-center justify-center space-x-3 px-6 py-3 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 hover:shadow-lg transform hover:-translate-y-1 transition"
          >
            <FaEnvelope size={24} className="group-hover:animate-bounce" />
            <span>Email Me</span>
          </a>
        </FadeInSection>
      </div>

      <p className="text-center text-sm text-gray-500">Thanks for visiting!</p>
    </div>
  );
}

