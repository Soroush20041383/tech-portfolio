export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-5xl font-bold">🚀 Welcome to My Portfolio</h1>
      <p className="mt-4 text-lg text-gray-400">I'm Soroush, a passionate software developer.</p>
      <a
        href="https://github.com/Soroush20041383"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg"
      >
        Check Out My GitHub
      </a>
    </div>
  );
}
