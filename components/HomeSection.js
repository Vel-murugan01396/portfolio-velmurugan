'use client'

import Image from 'next/image'

const roles = ['Frontend Developer', 'React Developer', 'Next.js Developer']

export default function HomeSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 sm:pt-20 pb-12 sm:pb-16 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-white to-indigo-50/40"
    >
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
        {/* Left: Profile image - shows first on mobile */}
        {/* <div className="flex flex-col items-center lg:items-start">
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <Image
              src="/profile.png"
              alt="Profile"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div> */}

<div className="flex flex-col items-center lg:items-start">
  <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 animate-float">
    <Image
      src="/profile.png"
      alt="Profile"
      fill
      className="object-contain object-bottom will-change-transform"
      priority
    />
  </div>
</div>






        {/* Right: Heading slider + content - shows second on mobile */}
        <div className="text-center lg:text-left">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-indigo-600 mb-2 sm:mb-3">
            Hello, I&apos;m VELMURUGAN
          </p>
          <div className="h-12 sm:h-16 md:h-20 lg:h-24 mb-4 sm:mb-5 relative overflow-hidden">
            {roles.map((role) => (
              <h1
                key={role}
                className="slider-item text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800"
                style={{ top: 0 }}
              >
                {role}
              </h1>
            ))}
          </div>
          <div className="space-y-2 sm:space-y-3 text-slate-600 max-w-xl mx-auto lg:mx-0">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            To build seamless, high-performing web applications with a focus on clean design and efficient code. 
            Skilled in using modern frameworks like Next.js to create responsive, user-friendly interfaces. 
            Committed to delivering end-to-end solutions that align with real-world needs and function smoothly from development to deployment.
            </p>
          
          </div>
          <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center justify-center px-5 py-2.5 sm:py-2.5 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 active:bg-indigo-800 transition-colors"
            >
              View Work
            </a>
            <a
              href="/velmurugan2026.pdf"
              download="Velmurugan_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-2.5 rounded-lg border border-slate-300 text-slate-700 font-medium hover:border-indigo-400 hover:text-indigo-600 active:bg-indigo-50 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
