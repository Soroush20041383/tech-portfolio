import FadeInSection from "../components/FadeInSection";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="relative flex items-center justify-center min-h-[calc(100vh-4rem)] bg-gradient-to-br from-indigo-50 to-pink-50 p-6">
      <div className="relative w-full max-w-screen-md mx-auto space-y-8 bg-white/60 backdrop-blur-xl border border-white/30 rounded-3xl shadow-lg p-8 md:p-12 text-gray-900">
        <h1 className="text-4xl font-bold flex items-center justify-center space-x-3">
          <span className="animate-bounce">📬</span>
          <span>Let&apos;s Connect</span>
        </h1>
        <p className="text-center text-lg text-gray-700">Reach out through LinkedIn, GitHub, or Email!</p>

        <div className="flex flex-col space-y-4">
          <FadeInSection>
            <a
              href="https://www.linkedin.com/in/osanlo"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full items-center justify-center space-x-3 px-6 py-3 rounded-xl bg-blue-600 text-white shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-200 ease-in-out"
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
              className="group flex w-full items-center justify-center space-x-3 px-6 py-3 rounded-xl bg-gray-800 text-white shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-200 ease-in-out"
            >
              <FaGithub size={24} className="group-hover:animate-bounce" />
              <span>Visit my GitHub</span>
            </a>
          </FadeInSection>

          <FadeInSection>
            <a
              href="mailto:soroush.osanlo@gmail.com"
              className="group flex w-full items-center justify-center space-x-3 px-6 py-3 rounded-xl bg-red-600 text-white shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-200 ease-in-out"
            >
              <FaEnvelope size={24} className="group-hover:animate-bounce" />
              <span>Email Me</span>
            </a>
          </FadeInSection>
        </div>

        <p className="text-center text-sm text-gray-600">Thanks for visiting!</p>

        <span className="absolute left-4 top-4 text-2xl animate-pulse">💌</span>
        <span className="absolute right-6 bottom-6 text-2xl animate-pulse delay-200">🚀</span>
      </div>
    </main>
  );
}

