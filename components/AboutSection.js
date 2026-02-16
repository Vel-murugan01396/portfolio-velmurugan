
'use client'

const education = [
  {
    degree: 'B-TECH: Mechanical Engineering',
    institution: 'Vel Tech University | Avadi',
    location: 'Chennai-600062',
    period: 'June 2013 - May 2017',
  },
]

const experience = [
  {
    role: 'Software Developer',
    company: 'Astroved.com PVT LTD',
    period: 'Jun 2024 - Jan 2026',
  },
  {
    role: 'Front End Developer',
    company: 'RTH INFOTECH PRIVATE LIMITED',
    period: 'November 2022 - June 2024',
  },
]

const skills = [
  {
    category: 'Frontend',
    items: [
      'HTML',
      'CSS',
      'JavaScript',
      'Tailwind CSS',
      'React JS',
      'Next JS (State Management Hooks)',
    ],
  },
  {
    category: 'Backend',
    items: [
      'Node JS',
      'MongoDB',
      'JSON',
      'REST API',
      'Postman',
    ],
  },
  {
    category: 'Design',
    items: [
      'Figma (Design & Prototyping)',
    ],
  },
]

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-50/80"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-3">
            About Me
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Front-End Developer with 3 years 6 months of experience in Next.js, React, and WordPress,
            covering design, development, and deployment. Skilled in building responsive,
            SEO-friendly web applications with a focus on performance and usability.
          </p>
        </div>

        {/* Education & Experience */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Education */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">
              Education
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full mb-6" />

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-6 border-l-2 border-teal-400"
                >
                  <div className="absolute -left-[9px] top-1 w-4 h-4 bg-teal-400 rounded-full" />
                  <h4 className="text-base sm:text-lg font-semibold text-slate-800">
                    {edu.degree}
                  </h4>
                  <p className="text-sm sm:text-base text-slate-600 mt-1">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-slate-500">
                    {edu.location}
                  </p>
                  <p className="text-xs sm:text-sm text-teal-600 font-medium mt-2">
                    {edu.period}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">
              Work Experience
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full mb-6" />

            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-6 border-l-2 border-teal-400"
                >
                  <div className="absolute -left-[9px] top-1 w-4 h-4 bg-teal-400 rounded-full" />
                  <h4 className="text-base sm:text-lg font-semibold text-slate-800">
                    {exp.role}
                  </h4>
                  <p className="text-sm sm:text-base text-slate-600 mt-1">
                    {exp.company}
                  </p>
                  <p className="text-xs sm:text-sm text-teal-600 font-medium mt-2">
                    {exp.period}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-3">
              Skills
            </h3>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              Technologies and tools I use to build high-quality, scalable web applications.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
              >
                <h4 className="text-lg font-semibold text-slate-800 mb-4">
                  {skill.category}
                </h4>

                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span
                      key={i}
                      className="text-xs sm:text-sm px-3 py-1 rounded-full
                                 bg-teal-50 text-teal-700
                                 border border-teal-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
