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
      {/* NAVIGATION */}
      <nav className="sticky top-16 z-50 bg-gray-800/80 backdrop-blur-md">
        <ul className="flex flex-wrap justify-center py-3 space-x-4 md:space-x-8">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="text-gray-200 hover:text-blue-400 transition-colors">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* MAIN CONTENT */}
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
            Associate Software Developer • Full-Stack & API Specialist
          </h2>
          <p className="text-md text-center text-gray-400 max-w-3xl mx-auto mt-4">
            Motivated developer with hands-on experience delivering scalable .NET Core / SQL Server APIs,
            WinForms clients, and responsive React-based UIs. Passionate about clean code, rigorous
            debugging, and documentation. Thrives in Agile teams and mission-driven environments.
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
              <h3 className="font-semibold">Languages & Frameworks</h3>
              <div className="flex flex-wrap gap-2 mt-1">
                {['C#', '.NET Core', 'Python', 'Java', 'JavaScript', 'TypeScript', 'React / Next.js', 'WinForms', 'HTML/CSS'].map((s) => (
                  <span key={s} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full shadow-sm text-sm">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Databases & Tools</h3>
              <div className="flex flex-wrap gap-2 mt-1">
                {['SQL Server', 'Oracle', 'MySQL', 'MongoDB', 'Postman', 'Swagger', 'Entity Framework', 'IIS', 'Docker', 'Git/GitHub'].map((s) => (
                  <span key={s} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full shadow-sm text-sm">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Practices & Methodologies</h3>
              <div className="flex flex-wrap gap-2 mt-1">
                {['REST APIs', 'Layered Architecture', 'Exception Handling', 'Unit Testing', 'Agile (Scrum)', 'SDLC', 'CI/CD Basics', 'Linux', 'Framer Motion'].map((s) => (
                  <span key={s} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full shadow-sm text-sm">
                    {s}
                  </span>
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
          <div className="space-y-8 text-gray-300">
            <div>
              <h3 className="text-xl font-semibold">.NET Developer (Freelance) – LimeOrder</h3>
              <p className="text-sm text-gray-400">Apr 2025 – May 2025 • Remote</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Designed & deployed a layered .NET Core Web API secured with Windows Authentication connecting to SQL Server.</li>
                <li>Built a modular WinForms client with async GET/POST operations, real-time validation, and user-friendly error dialogs.</li>
                <li>Delivered a complete IIS + SQL Server testing environment and documented setup for seamless hand-off.</li>
                <li>Implemented robust exception handling, DTO validation, and logging for maintainability.</li>
                <li>Collaborated directly with the CEO, shipping iterative releases under tight two-week deadlines.</li>
                <li>Followed REST principles and Git-based workflows to ensure scalable, readable code.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Academic & SAT Tutor (Volunteer) – Webtree Academy</h3>
              <p className="text-sm text-gray-400">Nov 2022 – Sep 2023 • Toronto, ON (Hybrid)</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Taught Python, Math, and Logic, lifting student grades​​​ from 50s to 80s+.</li>
                <li>Boosted SAT scores from 800 to 1300+ through visual learning and anxiety-reduction strategies.</li>
                <li>Guided STEM university applications (U of T, TMU) via portfolio reviews and reference letters.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Private STEM Tutor (Freelance)</h3>
              <p className="text-sm text-gray-400">Mar 2025 – Present • Thornhill, ON</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Supports a Grade 9 student with ADHD/autism in geometry and science using adaptive, hands-on methods.</li>
                <li>Reinforces test prep foundations through step-by-step problem solving.</li>
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
          <div className="space-y-6 text-gray-300">
            <div>
              <h3 className="text-xl font-semibold">Seneca Polytechnic – Ontario College Diploma, Computer Programming (Honours)</h3>
              <p className="text-sm text-gray-400">Sep 2023 – Dec 2024 • GPA 3.8 • Valedictorian</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Specialized in data communication, client-server architecture, and full-stack web apps.</li>
                <li>Completed projects with REST APIs, React, Node.js, and SQL Server/Oracle databases.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Webtree Academy – Ontario Secondary School Diploma (OSSD)</h3>
              <p className="text-sm text-gray-400">Nov 2022 – May 2023 • 97.16% Avg • Valedictorian</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Allameh Helli School (NODET) – Math & Physics</h3>
              <p className="text-sm text-gray-400">Sep 2020 – Sep 2022 • Valedictorian (4.0 GPA)</p>
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
          <ul className="list-disc list-inside ml-4 space-y-1 text-gray-300">
            <li>AI Agents in LangGraph – DeepLearning.AI (2025)</li>
            <li>Programming for Everybody & Python Data Structures – University of Michigan (2023)</li>
            <li>Google Data Analytics Professional Certificate – In Progress</li>
            <li>TESOL Certification – Expected Jun 2025</li>
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
          <ul className="list-disc list-inside ml-4 space-y-1 text-gray-300">
            <li>Advanced Database Services • Data Structures & Algorithms • Web Programming Frameworks</li>
            <li>Software Analysis & Design • IT Project Management • Software Testing & Deployment</li>
            <li>Mobile App Development (Cross-Platform) • Operating Systems for Programmers</li>
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
          <h2 className="text-3xl font-semibold">Languages & Tools</h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-300">
            <ul className="list-disc list-inside space-y-1 text-lg">
              <li>English – Fluent</li>
              <li>Persian – Native</li>
              <li>Italian – Intermediate</li>
              <li>Arabic – Intermediate</li>
              <li>French – Basic</li>
            </ul>
            <ul className="list-disc list-inside space-y-1 text-lg">
              <li>Git & GitHub</li>
              <li>Docker & IIS</li>
              <li>Visual Studio & PyCharm</li>
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
