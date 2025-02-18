import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">📬 Let&apos;s Connect</h1>
      <p className="text-lg text-gray-400 mb-6">Reach out through LinkedIn, GitHub, or Email!</p>

      <div className="flex flex-col space-y-4 w-full max-w-md">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/osanlo"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2 px-4 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
        >
          <FaLinkedin size={24} />
          <span>Connect on LinkedIn</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Soroush20041383"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2 px-4 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
        >
          <FaGithub size={24} />
          <span>Visit my GitHub</span>
        </a>

        {/* Email */}
        <a
          href="mailto:soroush.osanlo@gmail.com"
          className="flex items-center justify-center space-x-2 px-4 py-3 bg-red-600 rounded-lg hover:bg-red-700 transition"
        >
          <FaEnvelope size={24} />
          <span>Email Me</span>
        </a>
      </div>
    </main>
  );
}
