import Link from 'next/link';

export default function ResumePage() {
  return (
    <div className="max-w-screen-lg mx-auto space-y-8 text-gray-200">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 border-b border-gray-700 pb-4">
        <div>
          <h1 className="text-3xl font-bold">Soroush Osanloo</h1>
          <p className="text-gray-400">Thornhill, ON</p>
        </div>
        <div className="space-y-1 md:text-right">
          <p>Phone: <a href="tel:+14375566361" className="hover:underline">+1 (437)556-6361</a></p>
          <p>Email: <a href="mailto:soroush.osanlo@gmail.com" className="hover:underline">soroush.osanlo@gmail.com</a></p>
          <p>
            <a href="#" className="hover:underline mr-2">@LinkedIn</a>
            <a href="#" className="hover:underline">@GitHub</a>
          </p>
        </div>
      </header>

      {/* Professional Summary */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Professional Summary</h2>
        <p>
          Resourceful and adaptable software developer with strengths in full-stack development,
          problem-solving, and teamwork.
        </p>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Experience</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">SAT Tutor – Webtree Academy, Toronto, ON</h3>
            <p className="text-sm text-gray-400">June 2023 – September 2023</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>One-on-one SAT tutoring, score improved from 800 to 1300+</li>
              <li>Study plan: time management, anxiety reduction, critical reading</li>
              <li>Targeted SAT grammar/problem-solving lessons</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Tutor – Webtree Academy, Toronto, ON</h3>
            <p className="text-sm text-gray-400">Nov 2022 – June 2023</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Tutored 10+ students in Advanced Functions, Calculus, Biology, etc.</li>
              <li>Helped students get into UofT, TMU, George Brown</li>
              <li>Used PyCharm, Google Classroom, personalized lesson plans</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <div>
          <h3 className="text-xl font-semibold">Seneca Polytechnic – Computer Programming Diploma</h3>
          <p className="text-sm text-gray-400">Graduated Dec 2024 | GPA: 3.8</p>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>Specialized in Java, SQL optimization, and system analysis</li>
            <li>Built REST APIs, practiced Agile, fixed client-server issues</li>
          </ul>
        </div>
      </section>

      {/* Technical Skills */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Technical Skills</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Languages/Frameworks</h3>
            <div className="flex flex-wrap gap-2 mt-1">
              {['C','C++','Java','Python','JS','C#','Node.js','.NET Core','Bash'].map((s) => (
                <span key={s} className="bg-gray-800 px-3 py-1 rounded-full hover:bg-gray-700 transition text-sm">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Web</h3>
            <div className="flex flex-wrap gap-2 mt-1">
              {['HTML','CSS','DOM','REST APIs','AJAX','JSON'].map((s) => (
                <span key={s} className="bg-gray-800 px-3 py-1 rounded-full hover:bg-gray-700 transition text-sm">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold">DB</h3>
            <div className="flex flex-wrap gap-2 mt-1">
              {['SQL Server','Oracle','MySQL','MongoDB','Stored Procs'].map((s) => (
                <span key={s} className="bg-gray-800 px-3 py-1 rounded-full hover:bg-gray-700 transition text-sm">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Mobile</h3>
            <div className="flex flex-wrap gap-2 mt-1">
              {['Xamarin Forms','Ionic (Angular)'].map((s) => (
                <span key={s} className="bg-gray-800 px-3 py-1 rounded-full hover:bg-gray-700 transition text-sm">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Apps</h3>
            <div className="flex flex-wrap gap-2 mt-1">
              {['Swagger','Postman','MVC','Unit testing'].map((s) => (
                <span key={s} className="bg-gray-800 px-3 py-1 rounded-full hover:bg-gray-700 transition text-sm">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold">DevOps</h3>
            <div className="flex flex-wrap gap-2 mt-1">
              {['Git','GitHub','Actions','Jenkins','Docker','Shell'].map((s) => (
                <span key={s} className="bg-gray-800 px-3 py-1 rounded-full hover:bg-gray-700 transition text-sm">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold">OS</h3>
            <div className="flex flex-wrap gap-2 mt-1">
              {['Windows','Linux/Unix'].map((s) => (
                <span key={s} className="bg-gray-800 px-3 py-1 rounded-full hover:bg-gray-700 transition text-sm">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Tools</h3>
            <div className="flex flex-wrap gap-2 mt-1">
              {['Jira','Confluence','Teams','SharePoint','Zoom'].map((s) => (
                <span key={s} className="bg-gray-800 px-3 py-1 rounded-full hover:bg-gray-700 transition text-sm">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Project Mgmt</h3>
            <div className="flex flex-wrap gap-2 mt-1">
              {['PMI','Gantt','MS Project'].map((s) => (
                <span key={s} className="bg-gray-800 px-3 py-1 rounded-full hover:bg-gray-700 transition text-sm">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold">AI</h3>
            <div className="flex flex-wrap gap-2 mt-1">
              {['Prompt engineering','ethics','tools'].map((s) => (
                <span key={s} className="bg-gray-800 px-3 py-1 rounded-full hover:bg-gray-700 transition text-sm">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Communication</h3>
            <div className="flex flex-wrap gap-2 mt-1">
              {['Reports','flowcharts','inclusive writing'].map((s) => (
                <span key={s} className="bg-gray-800 px-3 py-1 rounded-full hover:bg-gray-700 transition text-sm">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Languages</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 list-disc list-inside ml-4">
          <li>English: Native</li>
          <li>French: Beginner</li>
          <li>Persian: Native</li>
          <li>Italian: Intermediate</li>
          <li>Arabic: Intermediate</li>
        </ul>
      </section>

      {/* Project Highlights */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Project Highlights</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Digital Check Processing (Capstone)</h3>
            <p className="ml-4">Java + SQL, fraud checks, REST API, testing, CI/CD</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">System Health Dashboard</h3>
            <p className="ml-4">Python + Bash + MongoDB, log parsing, REST API, MVC</p>
          </div>
        </div>
      </section>

      {/* Other Info */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Other Info</h2>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>International graduate on Canadian open work permit</li>
          <li>Recommendation letters available upon request</li>
        </ul>
      </section>

      {/* Download Button */}
      <div className="pt-4">
        <Link
          href="/resume.pdf"
          className="inline-block px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
        >
          Download PDF Resume
        </Link>
      </div>
    </div>
  );
}

