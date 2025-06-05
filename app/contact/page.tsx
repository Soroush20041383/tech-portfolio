import FadeInSection from "../components/FadeInSection";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="relative flex items-center justify-center min-h-[calc(100vh-4rem)] bg-[#0f172a] p-6">
      <FadeInSection>
        <div className="relative w-full max-w-screen-md mx-auto space-y-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-md p-8 md:p-12 text-gray-200">
        <h1 className="text-4xl font-bold flex items-center justify-center space-x-3">
          <span className="animate-bounce">📬</span>
          <span>Let&apos;s Connect</span>
        </h1>
        <p className="text-center text-lg text-gray-300">Reach out through LinkedIn, GitHub, or Email!</p>

        <div className="flex flex-col space-y-4">
          <FadeInSection>
            <a
              href="https://www.linkedin.com/in/osanlo"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full items-center justify-center space-x-3 px-6 py-3 rounded-xl bg-blue-600/80 text-white hover:bg-blue-600 hover:shadow-blue-500/50 hover:shadow-lg hover:-translate-y-0.5 transition duration-200"
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
              className="group flex w-full items-center justify-center space-x-3 px-6 py-3 rounded-xl bg-gray-800/80 text-white hover:bg-gray-800 hover:shadow-gray-500/50 hover:shadow-lg hover:-translate-y-0.5 transition duration-200"
            >
              <FaGithub size={24} className="group-hover:animate-bounce" />
              <span>Visit my GitHub</span>
            </a>
          </FadeInSection>

          <FadeInSection>
            <a
              href="mailto:soroush.osanlo@gmail.com"
              className="group flex w-full items-center justify-center space-x-3 px-6 py-3 rounded-xl bg-red-600/80 text-white hover:bg-red-600 hover:shadow-red-500/50 hover:shadow-lg hover:-translate-y-0.5 transition duration-200"
            >
              <FaEnvelope size={24} className="group-hover:animate-bounce" />
              <span>Email Me</span>
            </a>
          </FadeInSection>
        </div>

        <p className="text-center text-sm text-gray-400">Thanks for visiting!</p>

        <span className="absolute left-4 top-4 text-2xl animate-pulse">💌</span>
        <span className="absolute right-6 bottom-6 text-2xl animate-float">🚀</span>
        </div>
      </FadeInSection>
    </main>
  );
}

