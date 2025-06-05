import FadeInSection from "../components/FadeInSection";
import ScrollTopButton from "../components/ScrollTopButton";

export default function ResumePage() {
  return (
    <div className="max-w-5xl mx-auto space-y-12 p-6 sm:p-8 md:p-12 bg-gray-50 text-gray-900 rounded-xl shadow-lg">
      {/* Header */}
      <header className="text-center space-y-2 border-b border-gray-200 pb-6">
        <h1 className="text-4xl font-bold">Soroush Osanlo</h1>
        <p className="text-lg text-gray-600">Passionate about building tools that solve real-world problems.</p>
      </header>

      {/* Experience */}
      <FadeInSection>
        <section className="bg-white p-6 rounded-lg shadow space-y-4">
          <h2 className="text-3xl font-semibold">Experience</h2>
          <div>
            <h3 className="text-xl font-semibold">Tutor – SAT &amp; High School Subjects (Volunteer)</h3>
            <p className="text-sm text-gray-500">Webtree Academy · Toronto, ON | Nov 2022 – Sep 2023</p>
            <ul className="list-disc ml-4 mt-2 space-y-1 text-lg">
              <li>Tutored over 10 students in subjects like Math, Chemistry, Biology, CS, and SAT</li>
              <li>Helped one student raise SAT score from 800 to 1300+</li>
              <li>Personalized plans focused on problem-solving and code comprehension</li>
            </ul>
          </div>
        </section>
      </FadeInSection>

      {/* Education */}
      <FadeInSection>
        <section className="bg-gray-50 p-6 rounded-lg shadow space-y-3">
          <h2 className="text-3xl font-semibold">Education</h2>
          <p className="text-lg font-semibold">Ontario College Diploma (with Honors) – Computer Programming (CPP)</p>
          <p className="text-lg">Seneca Polytechnic – Markham Campus</p>
          <p className="text-sm text-gray-500">Graduation: December 2024 | GPA: <span className="font-bold">3.8</span></p>
          <ul className="list-disc ml-4 mt-2 space-y-1 text-lg">
            <li>Specialized in Java, SQL optimization, and system analysis</li>
            <li>Developed REST APIs and deployed secure apps</li>
            <li>Agile (Scrum/Kanban), debugging, networking, encryption</li>
          </ul>
        </section>
      </FadeInSection>

      {/* Technical Skills */}
      <FadeInSection>
        <section className="bg-white p-6 rounded-lg shadow space-y-4">
          <h2 className="text-3xl font-semibold">Technical Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
            <div>
              <h3 className="font-semibold">Tools</h3>
              <p>Excel, Word, Teams, SharePoint, Confluence, Jira</p>
            </div>
            <div>
              <h3 className="font-semibold">Data</h3>
              <p>SQL (Server, Oracle, MySQL), stored procedures</p>
            </div>
            <div>
              <h3 className="font-semibold">Web &amp; API</h3>
              <p>REST APIs, MVC, JSON/XML</p>
            </div>
            <div>
              <h3 className="font-semibold">Troubleshooting</h3>
              <p>Log parsing, Splunk (basic), Dynatrace (learning)</p>
            </div>
            <div>
              <h3 className="font-semibold">Platforms</h3>
              <p>Windows, Linux CLI, Microsoft 365</p>
            </div>
            <div>
              <h3 className="font-semibold">Project</h3>
              <p>Agile (Scrum/Kanban), docs, stakeholder comms</p>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Languages */}
      <FadeInSection>
        <section className="bg-gray-50 p-6 rounded-lg shadow space-y-2">
          <h2 className="text-3xl font-semibold">Languages</h2>
          <ul className="list-disc ml-4 space-y-1 text-lg">
            <li>English (Fluent)</li>
            <li>Persian (Native)</li>
            <li>Italian &amp; Arabic (Intermediate)</li>
            <li>French (Basic)</li>
          </ul>
        </section>
      </FadeInSection>

      <ScrollTopButton />
    </div>
  );
}
