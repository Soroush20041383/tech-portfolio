export default function ContactPage() {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <h1 className="text-4xl font-bold mb-4">📬 Contact Me</h1>
        <p className="text-lg text-gray-400 mb-6">Feel free to reach out!</p>
  
        <form className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-300">Your Name</label>
            <input type="text" className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-300">Email</label>
            <input type="email" className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
  
          <div className="mb-4">
            <label className="block text-gray-300">Message</label>
            <textarea className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" rows={4}></textarea>
          </div>
  
          <button type="submit" className="w-full p-2 bg-blue-500 rounded hover:bg-blue-600 transition">
            Send Message 🚀
          </button>
        </form>
      </main>
    );
  }
  