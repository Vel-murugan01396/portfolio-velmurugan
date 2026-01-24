import Header from '@/components/Header'
import HomeSection from '@/components/HomeSection'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import ProjectSection from '@/components/ProjectSection'

function PlaceholderSection({ id, title, children }) {
  return (
    <section
      id={id}
      className="min-h-[50vh] flex items-center justify-center px-4 sm:px-6 py-12 sm:py-16 bg-slate-100/60 border-t border-slate-200/60"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">{title}</h2>
        <p className="text-sm sm:text-base text-slate-600">{children}</p>
      </div>
    </section>
  )
}

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HomeSection />
        <AboutSection />
       <ProjectSection/>
        <ContactSection/>
      </main>
    </>
  )
}
