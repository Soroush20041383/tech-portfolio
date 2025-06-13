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

        {/* SNAPSHOT */}
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
            Computer Programming Graduate • Full-Stack Developer • API Specialist
          </h2>
          <p className="text-md text-center text-gray-400 max-w-3xl mx-auto mt-4">
            Hands-on developer with a focus on building clean, scalable software solutions. Experienced in .NET Core, SQL Server, RESTful APIs, and desktop/web integration. Known for fast learning, problem-solving, and delivering under pressure in freelance and academic environments.
          </p>
        </motion.section>

        {/* SKILLS */}
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
                {['C#', 'Python', 'JavaScript', 'TypeScript', '.NET Core', 'Node.js', 'Next.js', 'WinForms'].map((s) => (
                  <span key={s} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full shadow-sm text-sm">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Databases &amp; Tools</h3>
              <div className="flex flex-wrap gap-2 mt-1">
                {['SQL Server', 'MongoDB', 'SQLite', 'Postman', 'Swagger', 'IIS', 'Git', 'PyCharm'].map((s) => (
                  <span key={s} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full shadow-sm text-sm">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Other</h3>
              <div className="flex flex-wrap gap-2 mt-1">
                {['REST APIs', 'Docker', 'Unit Testing', 'OOP', 'Linux', 'Framer Motion'].map((s) => (
                  <span key={s} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full shadow-sm text-sm">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* EXPERIENCE */}
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
                Freelance .NET Developer – LimeOrder (Remote)
              </h3>
              <p className="text-sm text-gray-400">Apr 2025 – May 2025</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Developed and deployed .NET Core Web API with SQL Server (Windows Auth)</li>
                <li>Created WinForms app to interact with the API using GET/POST requests</li>
                <li>Handled error logging, validation, and IIS deployment</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">
                SAT Tutor – Webtree Academy, Toronto, ON
              </h3>
              <p className="text-sm text-gray-400">Jun 2023 – Sep 2023</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Led tutoring sessions that raised scores from 800 to 1300+</li>
                <li>Created anxiety-reducing study plans with targeted exercises</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">
                Computer Science Tutor – Webtree Academy, Toronto, ON
              </h3>
              <p className="text-sm text-gray-400">Nov 2022 – Jun 2023</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Tutored students in Java, Python, and Advanced Functions</li>
                <li>Introduced debugging and IDE-based development using PyCharm</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* EDUCATION */}
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
              <p className="text-sm text-gray-400">Graduated Dec 2024 | GPA: 3.8 | Valedictorian</p>
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

        {/* CERTIFICATIONS */}
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
            <li>TESOL Certification (Expected June 2025)</li>
            <li>Google Data Analytics (in progress)</li>
            <li>LangGraph Quickstart – AI Agents</li>
            <li>Introduction to Python Programming</li>
            <li>Intermediate Python</li>
          </ul>
        </motion.section>

        {/* COURSES */}
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
            <li>Data Structures &amp; Algorithms</li>
            <li>Web Development &amp; API Design</li>
            <li>Database Management Systems</li>
            <li>Software Testing &amp; Deployment</li>
            <li>Project Management &amp; Agile</li>
          </ul>
        </motion.section>

        {/* LANGUAGES & TOOLS */}
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
              <li>Persian: Native</li>
              <li>French: Beginner</li>
              <li>Italian: Intermediate</li>
              <li>Arabic: Intermediate</li>
            </ul>
            <ul className="list-disc list-inside space-y-1 text-lg">
              <li>Git &amp; GitHub</li>
              <li>Docker &amp; IIS</li>
              <li>Visual Studio &amp; PyCharm</li>
              <li>Linux / Bash</li>
              <li>Framer Motion</li>
            </ul>
          </div>
        </motion.section>
      </div>

      <ScrollTopButton />
    </div>
  )
}
