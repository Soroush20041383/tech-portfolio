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
          <h2 className="text-xl text-center text-gray-300">
            Computer Programming Graduate | Full-Stack &amp; API Developer
          </h2>
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
              <h3 className="font-semibold">Languages &amp; Frameworks</h3>
              <div className="flex flex-wrap gap-2 mt-1">
                {['C#', 'Python', 'TypeScript', '.NET Core', 'Next.js', 'WinForms'].map((s) => (
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
              <h3 className="font-semibold">Databases &amp; Tools</h3>
              <div className="flex flex-wrap gap-2 mt-1">
                {['SQL Server', 'SQLite', 'MongoDB', 'Git', 'PyCharm', 'IIS'].map((s) => (
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
              <h3 className="font-semibold">Other</h3>
              <div className="flex flex-wrap gap-2 mt-1">
                {['REST APIs', 'Docker', 'Unit Testing', 'OOP', 'Linux'].map((s) => (
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
                Full-Stack Developer Intern – Seneca Polytechnic, Toronto, ON
              </h3>
              <p className="text-sm text-gray-400">May 2024 – Aug 2024</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Built web portals with React and .NET APIs</li>
                <li>Implemented CI/CD pipelines using GitHub Actions</li>
                <li>Wrote automated tests for REST endpoints</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">
                SAT Tutor – Webtree Academy, Toronto, ON
              </h3>
              <p className="text-sm text-gray-400">Jun 2023 – Sep 2023</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Mentored students to raise SAT scores dramatically</li>
                <li>Designed custom study plans with Python scripts</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">
                Computer Science Tutor – Webtree Academy, Toronto, ON
              </h3>
              <p className="text-sm text-gray-400">Nov 2022 – Jun 2023</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Coached 10+ students in calculus and data structures</li>
                <li>Introduced debugging techniques with PyCharm</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Freelance Web Developer – Remote</h3>
              <p className="text-sm text-gray-400">2021 – Present</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Built responsive sites with Next.js and Tailwind</li>
                <li>Integrated third-party APIs for e-commerce clients</li>
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
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">
                Seneca Polytechnic – Computer Programming Diploma
              </h3>
              <p className="text-sm text-gray-400">GPA: 3.8 | Valedictorian</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Webtree Academy – OSSD</h3>
              <p className="text-sm text-gray-400">GPA: 4.0</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">
                Allameh Helli School (NODET) – Math &amp; Physics
              </h3>
              <p className="text-sm text-gray-400">Valedictorian</p>
            </div>
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
            <li>LangGraph Quickstart</li>
            <li>TESOL Certification</li>
            <li>Introduction to Python Programming</li>
            <li>Intermediate Python</li>
            <li>Google Data Analytics (in progress)</li>
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
            <li>C++ Programming</li>
            <li>Web Development</li>
            <li>Database Management</li>
            <li>Software Testing</li>
            <li>Project Management</li>
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
              <li>English</li>
              <li>Persian</li>
              <li>French</li>
              <li>Arabic</li>
              <li>Italian</li>
            </ul>
            <ul className="list-disc list-inside space-y-1 text-lg">
              <li>Git &amp; GitHub</li>
              <li>PyCharm</li>
              <li>IIS &amp; Docker</li>
              <li>Visual Studio</li>
              <li>Linux / Bash</li>
            </ul>
          </div>
        </motion.section>
      </div>

      <ScrollTopButton />
    </div>
  )
}
