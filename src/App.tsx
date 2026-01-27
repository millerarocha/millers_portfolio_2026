import { Navbar } from './components/organisms/Navbar'
import { Hero } from './components/organisms/Hero'
import { TechDivider } from './components/atoms/TechDivider'
import { ProjectCard, type ProjectCardProps } from './components/organisms/ProjectCard'
import { Footer } from './components/organisms/Footer'

const projects: ProjectCardProps[] = [
  {
    title: "Automated Sortation System",
    description: "High-speed mechatronic integration for logistics centers using PLC control and computer vision.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsTcG6T4plfzyLnkKs_NKy2EmyxdzuN9fuBdYX9QQMUCORTkBL4r2oGTHJci9i2qDFpn1slw6IqfN1xhXVe9TrH2C-v_oijfu3kJNSe2nobcVatmb4aezjgN4Q9vVUJ5UEz9LQ3A-F6XR5282KSgPqiRH2hr8eyCG42WMXhGSKIOnhA2Olb7OJ_IDoFYtOVdoF2pv5XC2xyiHy-pjwVRU0S-DA6xuLpLTh1qeRZfgGv-g8GdM3GE4w6vOtB63rrth53gFtY-QKfFlI",
    category: "HARDWARE",
    tags: ["PLC", "PYTHON"]
  },
  {
    title: "INDRA/BBVA GLOMO Integration",
    description: "Full-stack banking architecture scaling specifically for high-frequency transaction environments.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA85PCPNsc0qMEq-D9asI8IKT552j3JfhYtwkGo9hSQ1bimlrIpS7BDUWd6nl_7oLIzay1sMXSX1xxK24PGHRRLaMEmd1iXTgvDGtCp6-LMYj0z3sM56PTz3YOX6aMQUOE28MEaus0KelIc1QmVG83dIHUSB6r2veu2D60lo9j9hHnqfdeUZwL4P3zBug0DnzzikBT1KnIRI8_TD7bxZY6zkw0VDK8S0LVLvw1E24d7ytebEKt3zBbK7FJYuN3cnsR3J7indpal6as2",
    category: "SOFTWARE",
    tags: ["REACT", "NODE"]
  },
  {
    title: "IoT Sensor Mesh",
    description: "Developed a custom mesh network for industrial environmental monitoring.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCr9WFPpUJNeyX9uxBMxu4p5rd_7t0Hg6e76gIWSbI7DtXUgMooOHgGJHJedCbSWMjoIVDdT1m2uXWfk3U4FuKL7SQSPl45FberqrUYPc8XCLhAH4RCkhX7YnuBQkTPd9F0JFGUkjt3OheWLeFppSlvYqeaPk-YpsC1mN5nLMVAeaomMCyxRTFinX-fMHr2fwSugWVn6P2FtMOEHsnlRJshLcsZ4L4uFGQB_a2-FVyDR0wZLDab5coHxSBIWBtd1SNozgxmFcq4-5Xe",
    category: "R&D",
    tags: ["C++", "MQTT"]
  }
]

function App() {
  return (
    <div className="relative min-h-screen w-full flex flex-col bg-background-dark bg-tech-grid bg-[size:40px_40px]">
      <Navbar />
      
      <main className="flex-1 flex flex-col items-center w-full max-w-7xl mx-auto pb-10">
        <Hero />
        
        <TechDivider className="max-w-2xl mx-auto" />
        
        <section className="w-full px-5 py-6 flex flex-col gap-5">
           <div className="flex items-center justify-between px-1">
              <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-accent rounded-sm"></span>
                  Selected Projects
              </h3>
              <span className="text-xs font-mono text-text-secondary">v2.4.0</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </div>
  )
}

export default App
