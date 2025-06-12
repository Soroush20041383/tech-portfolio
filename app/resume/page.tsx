'use client'
import { motion } from 'framer-motion'
import ScrollTopButton from '../components/ScrollTopButton'

export default function ResumePage() {
  const sections = [
    { id: 'snapshot', label: 'Snapshot' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'courses', label: 'Courses' },
    { id: 'languages-tools', label: 'Languages & Tools' },
  ]

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  const sectionStyle =
    'bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-md p-6 md:p-8 space-y-4'

  return (
    <div className="space-y-20">
      <nav className="sticky top-16 z-50 bg-gray-800/80 backdrop-blur-md">
        <ul className="flex flex-wrap justify-center py-3 space-x-4 md:space-x-8">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="text-gray-200 hover:text-blue-400 transition-colors"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="max-w-screen-lg mx-auto px-4 space-y-20">
        <motion.section
          id="snapshot"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className={sectionStyle}
        >
          <h1 className="text-4xl font-bold text-center">Soroush Osanlo</h1>
          <h2 className="text-xl text-center text-gray-300">Software Developer</h2>
          <p className="text-lg text-gray-300">
            Resourceful and adaptable software developer with strengths in
            full-stack development, problem-solving, and teamwork.
          </p>
        </motion.section>

        <motion.section
          id="skills"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className={sectionStyle}
        >
          <h2 className="text-3xl font-semibold">Skills</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Languages / Frameworks</h3>
              <div className="flex flex-wrap gap-2 mt-1">
                {[
                  'C',
                  'C++',
                  'Java',
                  'Python',
                  'JS',
                  'C#',
                  'Node.js',
                  '.NET Core',
                  'Bash',
                ].map((s) => (
                  <span
                    key={s}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full shadow-sm text-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Web</h3>
              <div className="flex flex-wrap gap-2 mt-1">
                {['HTML', 'CSS', 'DOM', 'REST APIs', 'AJAX', 'JSON'].map((s) => (
                  <span
                    key={s}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full shadow-sm text-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold">DB</h3>
              <div className="flex flex-wrap gap-2 mt-1">
                {['SQL Server', 'Oracle', 'MySQL', 'MongoDB', 'Stored Procs'].map(
                  (s) => (
                    <span
                      key={s}
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full shadow-sm text-sm"
                    >
                      {s}
                    </span>
                  )
                )}
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Mobile</h3>
              <div className="flex flex-wrap gap-2 mt-1">
                {['Xamarin Forms', 'Ionic (Angular)'].map((s) => (
                  <span
                    key={s}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full shadow-sm text-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Apps</h3>
              <div className="flex flex-wrap gap-2 mt-1">
                {['Swagger', 'Postman', 'MVC', 'Unit testing'].map((s) => (
                  <span
                    key={s}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full shadow-sm text-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold">DevOps</h3>
              <div className="flex flex-wrap gap-2 mt-1">
                {['Git', 'GitHub', 'Actions', 'Jenkins', 'Docker', 'Shell'].map((s) => (
                  <span
                    key={s}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full shadow-sm text-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold">OS</h3>
              <div className="flex flex-wrap gap-2 mt-1">
                {['Windows', 'Linux/Unix'].map((s) => (
                  <span
                    key={s}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full shadow-sm text-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Tools</h3>
              <div className="flex flex-wrap gap-2 mt-1">
                {['Jira', 'Confluence', 'Teams', 'SharePoint', 'Zoom'].map((s) => (
                  <span
                    key={s}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full shadow-sm text-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Project Mgmt</h3>
              <div className="flex flex-wrap gap-2 mt-1">
                {['PMI', 'Gantt', 'MS Project'].map((s) => (
                  <span
                    key={s}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full shadow-sm text-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold">AI</h3>
              <div className="flex flex-wrap gap-2 mt-1">
                {['Prompt engineering', 'ethics', 'tools'].map((s) => (
                  <span
                    key={s}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full shadow-sm text-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Communication</h3>
              <div className="flex flex-wrap gap-2 mt-1">
                {['Reports', 'flowcharts', 'inclusive writing'].map((s) => (
                  <span
                    key={s}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full shadow-sm text-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="experience"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className={sectionStyle}
        >
          <h2 className="text-3xl font-semibold">Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">
                SAT Tutor – Webtree Academy, Toronto, ON
              </h3>
              <p className="text-sm text-gray-400">June 2023 – September 2023</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>One-on-one SAT tutoring, score improved from 800 to 1300+</li>
                <li>Study plan: time management, anxiety reduction, critical reading</li>
                <li>Targeted SAT grammar/problem-solving lessons</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">
                Tutor – Webtree Academy, Toronto, ON
              </h3>
              <p className="text-sm text-gray-400">Nov 2022 – June 2023</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Tutored 10+ students in Advanced Functions, Calculus, Biology, etc.</li>
                <li>Helped students get into UofT, TMU, George Brown</li>
                <li>Used PyCharm, Google Classroom, personalized lesson plans</li>
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="education"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className={sectionStyle}
        >
          <h2 className="text-3xl font-semibold">Education</h2>
          <div>
            <h3 className="text-xl font-semibold">
              Seneca Polytechnic – Computer Programming Diploma
            </h3>
            <p className="text-sm text-gray-400">Graduated Dec 2024 | GPA: 3.8</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-lg">
              <li>Specialized in Java, SQL optimization, and system analysis</li>
              <li>Built REST APIs, practiced Agile, fixed client-server issues</li>
            </ul>
          </div>
        </motion.section>

        <motion.section
          id="certifications"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className={sectionStyle}
        >
          <h2 className="text-3xl font-semibold">Certifications</h2>
          <ul className="list-disc list-inside ml-4 space-y-1 text-lg">
            <li>AWS Certified Cloud Practitioner</li>
            <li>Microsoft Azure Fundamentals</li>
            <li>CompTIA A+</li>
            <li>Google Data Analytics</li>
            <li>Certified ScrumMaster</li>
          </ul>
        </motion.section>

        <motion.section
          id="courses"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className={sectionStyle}
        >
          <h2 className="text-3xl font-semibold">Courses</h2>
          <ul className="list-disc list-inside ml-4 space-y-1 text-lg">
            <li>Data Structures & Algorithms</li>
            <li>Web Development Bootcamp</li>
            <li>Database Design</li>
            <li>Cloud Computing Fundamentals</li>
            <li>Agile Project Management</li>
          </ul>
        </motion.section>

        <motion.section
          id="languages-tools"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className={sectionStyle}
        >
          <h2 className="text-3xl font-semibold">Languages &amp; Tools</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="list-disc list-inside space-y-1 text-lg">
              <li>English: Native</li>
              <li>French: Beginner</li>
              <li>Persian: Native</li>
              <li>Italian: Intermediate</li>
              <li>Arabic: Intermediate</li>
            </ul>
            <ul className="list-disc list-inside space-y-1 text-lg">
              <li>Git &amp; GitHub</li>
              <li>Docker &amp; Kubernetes</li>
              <li>Visual Studio Code</li>
              <li>Linux / Bash</li>
            </ul>
          </div>
        </motion.section>
      </div>

      <ScrollTopButton />
    </div>
  )
}
