import ScrollTopButton from "../components/ScrollTopButton";
import FadeInSection from "../components/FadeInSection";

export default function ResumePage() {
  return (
    <div className="max-w-screen-lg mx-auto space-y-12 p-6 sm:p-8 md:p-10 bg-gray-50 text-gray-900 rounded-xl shadow-lg">
      {/* Header */}
  <header className="text-center pb-6 border-b border-gray-300">
    <h1 className="text-4xl font-bold">Soroush Osanlo</h1>
    <p className="mt-2 text-lg text-gray-600">Passionate about building tools that solve real-world problems.</p>
  </header>

      {/* Professional Summary */}
      <FadeInSection>
        <section className="bg-white p-6 rounded-lg shadow border border-gray-200 space-y-2">
          <h2 className="text-3xl font-semibold mb-4">Professional Summary</h2>
          <p className="text-lg leading-relaxed">
            Resourceful and adaptable software developer with strengths in full-stack development,
            problem-solving, and teamwork.
          </p>
        </section>
      </FadeInSection>

      {/* Experience */}
      <FadeInSection>
        <section className="bg-gray-50 p-6 rounded-lg shadow border border-gray-200 space-y-4">
          <h2 className="text-3xl font-semibold mb-4">Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">SAT Tutor – Webtree Academy, Toronto, ON</h3>
              <p className="text-sm text-gray-500">June 2023 – September 2023</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>One-on-one SAT tutoring, score improved from 800 to 1300+</li>
              <li>Study plan: time management, anxiety reduction, critical reading</li>
              <li>Targeted SAT grammar/problem-solving lessons</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Tutor – Webtree Academy, Toronto, ON</h3>
            <p className="text-sm text-gray-500">Nov 2022 – June 2023</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Tutored 10+ students in Advanced Functions, Calculus, Biology, etc.</li>
              <li>Helped students get into UofT, TMU, George Brown</li>
              <li>Used PyCharm, Google Classroom, personalized lesson plans</li>
            </ul>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Education */}
      <FadeInSection>
        <section className="bg-white p-6 rounded-lg shadow border border-gray-200 space-y-2">
          <h2 className="text-3xl font-semibold mb-4">Education</h2>
          <div>
            <h3 className="text-xl font-semibold">Seneca Polytechnic – Computer Programming Diploma</h3>
            <p className="text-sm text-gray-500">Graduated Dec 2024 | GPA: 3.8</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-lg">
              <li>Specialized in Java, SQL optimization, and system analysis</li>
              <li>Built REST APIs, practiced Agile, fixed client-server issues</li>
            </ul>
          </div>
        </section>
      </FadeInSection>

      {/* Technical Skills */}
      <FadeInSection>
        <section className="bg-gray-50 p-6 rounded-lg shadow border border-gray-200 space-y-4">
          <h2 className="text-3xl font-semibold mb-4">Technical Skills</h2>
          <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Languages/Frameworks</h3>
            <div className="flex flex-wrap gap-2 mt-1">
              {['C','C++','Java','Python','JS','C#','Node.js','.NET Core','Bash'].map((s) => (
                <span key={s} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full shadow-sm text-sm">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Web</h3>
            <div className="flex flex-wrap gap-2 mt-1">
              {['HTML','CSS','DOM','REST APIs','AJAX','JSON'].map((s) => (
                <span key={s} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full shadow-sm text-sm">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold">DB</h3>
            <div className="flex flex-wrap gap-2 mt-1">
              {['SQL Server','Oracle','MySQL','MongoDB','Stored Procs'].map((s) => (
                <span key={s} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full shadow-sm text-sm">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Mobile</h3>
            <div className="flex flex-wrap gap-2 mt-1">
              {['Xamarin Forms','Ionic (Angular)'].map((s) => (
                <span key={s} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full shadow-sm text-sm">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Apps</h3>
            <div className="flex flex-wrap gap-2 mt-1">
              {['Swagger','Postman','MVC','Unit testing'].map((s) => (
                <span key={s} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full shadow-sm text-sm">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold">DevOps</h3>
            <div className="flex flex-wrap gap-2 mt-1">
              {['Git','GitHub','Actions','Jenkins','Docker','Shell'].map((s) => (
                <span key={s} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full shadow-sm text-sm">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold">OS</h3>
            <div className="flex flex-wrap gap-2 mt-1">
              {['Windows','Linux/Unix'].map((s) => (
                <span key={s} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full shadow-sm text-sm">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Tools</h3>
            <div className="flex flex-wrap gap-2 mt-1">
              {['Jira','Confluence','Teams','SharePoint','Zoom'].map((s) => (
                <span key={s} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full shadow-sm text-sm">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Project Mgmt</h3>
            <div className="flex flex-wrap gap-2 mt-1">
              {['PMI','Gantt','MS Project'].map((s) => (
                <span key={s} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full shadow-sm text-sm">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold">AI</h3>
            <div className="flex flex-wrap gap-2 mt-1">
              {['Prompt engineering','ethics','tools'].map((s) => (
                <span key={s} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full shadow-sm text-sm">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Communication</h3>
            <div className="flex flex-wrap gap-2 mt-1">
              {['Reports','flowcharts','inclusive writing'].map((s) => (
                <span key={s} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full shadow-sm text-sm">{s}</span>
              ))}
            </div>
          </div>
        </div>
        </section>
      </FadeInSection>

      {/* Languages */}
      <FadeInSection>
        <section className="bg-white p-6 rounded-lg shadow border border-gray-200 space-y-2">
          <h2 className="text-3xl font-semibold mb-4">Languages</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-1 gap-x-6 list-disc list-inside ml-4 text-lg">
          <li>English: Native</li>
          <li>French: Beginner</li>
          <li>Persian: Native</li>
          <li>Italian: Intermediate</li>
          <li>Arabic: Intermediate</li>
          </ul>
        </section>
      </FadeInSection>


      {/* Other Info */}
      <FadeInSection>
        <section className="bg-white p-6 rounded-lg shadow border border-gray-200 space-y-2">
          <h2 className="text-3xl font-semibold mb-4">Other Info</h2>
          <ul className="list-disc list-inside ml-4 space-y-1 text-lg">
            <li>International graduate on Canadian open work permit</li>
            <li>Recommendation letters available upon request</li>
          </ul>
        </section>
      </FadeInSection>

      <ScrollTopButton />
    </div>
  );
}

