import { Navbar } from './components/organisms/Navbar'
import { Hero } from './components/organisms/Hero'
import { TechDivider } from './components/atoms/TechDivider'
import { ExperienceSection } from './components/organisms/Experience'
import { TechStack } from './components/organisms/TechStack'
import { EducationSection } from './components/organisms/Education'
import { ProjectDetailModal } from './components/organisms/ProjectDetailModal'
import { ProjectsSection } from './components/organisms/ProjectsSection'
import { ContactModal } from './components/organisms/ContactModal'
import { type ProjectCardProps } from './components/organisms/ProjectCard'
import { Footer } from './components/organisms/Footer'
import { Download } from 'lucide-react'
import { Button } from './components/atoms/Button'
import { useState } from 'react'

// Extended interface for modal data
export interface ExtendedProjectProps extends ProjectCardProps {
  overview: string
  keyFeatures: string[]
  date: string
  liveUrl?: string
  sourceUrl?: string
}

const projects: ExtendedProjectProps[] = [
  {
    title: "Automated Sortation System",
    description: "High-speed mechatronic integration for logistics centers using PLC control and computer vision.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsTcG6T4plfzyLnkKs_NKy2EmyxdzuN9fuBdYX9QQMUCORTkBL4r2oGTHJci9i2qDFpn1slw6IqfN1xhXVe9TrH2C-v_oijfu3kJNSe2nobcVatmb4aezjgN4Q9vVUJ5UEz9LQ3A-F6XR5282KSgPqiRH2hr8eyCG42WMXhGSKIOnhA2Olb7OJ_IDoFYtOVdoF2pv5XC2xyiHy-pjwVRU0S-DA6xuLpLTh1qeRZfgGv-g8GdM3GE4w6vOtB63rrth53gFtY-QKfFlI",
    category: "HARDWARE",
    tags: ["PLC", "PYTHON", "COMPUTER VISION", "SCADA"],
    overview: "Designed and deployed an automated sortation system for a high-throughput logistics center. The system processes over 10,000 packages per hour using PLC-controlled conveyors and computer vision for barcode scanning. Integration with existing WMS infrastructure required custom SCADA protocols and real-time data synchronization.",
    keyFeatures: [
      "Real-time package tracking with sub-second latency.",
      "Computer vision-based barcode recognition with 99.8% accuracy.",
      "Fault-tolerant PLC architecture with redundant controllers.",
      "Custom SCADA dashboard for operator monitoring and control."
    ],
    date: "Mar 2024",
    liveUrl: undefined,
    sourceUrl: undefined
  },
  {
    title: "INDRA/BBVA GLOMO Integration",
    description: "Full-stack banking architecture scaling specifically for high-frequency transaction environments.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA85PCPNsc0qMEq-D9asI8IKT552j3JfhYtwkGo9hSQ1bimlrIpS7BDUWd6nl_7oLIzay1sMXSX1xxK24PGHRRLaMEmd1iXTgvDGtCp6-LMYj0z3sM56PTz3YOX6aMQUOE28MEaus0KelIc1QmVG83dIHUSB6r2veu2D60lo9j9hHnqfdeUZwL4P3zBug0DnzzikBT1KnIRI8_TD7bxZY6zkw0VDK8S0LVLvw1E24d7ytebEKt3zBbK7FJYuN3cnsR3J7indpal6as2",
    category: "SOFTWARE",
    tags: ["REACT", "NODE", "POSTGRESQL", "MICROSERVICES"],
    overview: "Architected and implemented a full-stack banking integration platform for BBVA's GLOMO system. The solution handles high-frequency transaction processing with strict compliance requirements. Built using a microservices architecture with React frontend, Node.js backend, and PostgreSQL database cluster for data persistence.",
    keyFeatures: [
      "Microservices architecture supporting 50,000+ transactions per minute.",
      "Real-time fraud detection using machine learning models.",
      "Multi-region deployment with active-active failover.",
      "Comprehensive audit logging for regulatory compliance."
    ],
    date: "Jan 2024",
    liveUrl: undefined,
    sourceUrl: undefined
  },
  {
    title: "IoT Sensor Mesh",
    description: "Developed a custom mesh network for industrial environmental monitoring.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCr9WFPpUJNeyX9uxBMxu4p5rd_7t0Hg6e76gIWSbI7DtXUgMooOHgGJHJedCbSWMjoIVDdT1m2uXWfk3U4FuKL7SQSPl45FberqrUYPc8XCLhAH4RCkhX7YnuBQkTPd9F0JFGUkjt3OheWLeFppSlvYqeaPk-YpsC1mN5nLMVAeaomMCyxRTFinX-fMHr2fwSugWVn6P2FtMOEHsnlRJshLcsZ4L4uFGQB_a2-FVyDR0wZLDab5coHxSBIWBtd1SNozgxmFcq4-5Xe",
    category: "R&D",
    tags: ["C++", "MQTT", "ESP32", "ZIGBEE"],
    overview: "Engineered a custom IoT mesh network for industrial environmental monitoring across a 50,000 sq ft manufacturing facility. The system uses ESP32-based sensor nodes communicating via Zigbee mesh protocol, with MQTT gateway for cloud integration. Low-power design enables 2+ years of battery life per node.",
    keyFeatures: [
      "Self-healing mesh network with automatic node discovery.",
      "Ultra-low power consumption (< 50µA in sleep mode).",
      "Real-time alerting for temperature, humidity, and air quality thresholds.",
      "Scalable architecture supporting 500+ sensor nodes."
    ],
    date: "Nov 2023",
    liveUrl: undefined,
    sourceUrl: undefined
  },
  {
    title: "Edge Computing Gateway",
    description: "High-performance gateway for local processing of industrial data streams.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA85PCPNsc0qMEq-D9asI8IKT552j3JfhYtwkGo9hSQ1bimlrIpS7BDUWd6nl_7oLIzay1sMXSX1xxK24PGHRRLaMEmd1iXTgvDGtCp6-LMYj0z3sM56PTz3YOX6aMQUOE28MEaus0KelIc1QmVG83dIHUSB6r2veu2D60lo9j9hHnqfdeUZwL4P3zBug0DnzzikBT1KnIRI8_TD7bxZY6zkw0VDK8S0LVLvw1E24d7ytebEKt3zBbK7FJYuN3cnsR3J7indpal6as2",
    category: "HARDWARE",
    tags: ["LINUX", "DOCKER", "C++", "RUST"],
    overview: "Developed a robust edge computing gateway capable of local data aggregation, filtering, and analysis for mission-critical industrial applications. This reduces cloud bandwidth costs and ensures low-latency response times for safety-critical systems.",
    keyFeatures: [
      "Containerized application deployment via Docker.",
      "Hardware-accelerated data encryption and security.",
      "Local AI inference at the edge for anomaly detection.",
      "Seamless integration with major cloud providers (AWS, Azure, GCP)."
    ],
    date: "Sep 2023",
    liveUrl: undefined,
    sourceUrl: undefined
  },
  {
    title: "Eco-Monitoring Station",
    description: "Solar-powered environmental monitoring station for remote desert deployments.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsTcG6T4plfzyLnkKs_NKy2EmyxdzuN9fuBdYX9QQMUCORTkBL4r2oGTHJci9i2qDFpn1slw6IqfN1xhXVe9TrH2C-v_oijfu3kJNSe2nobcVatmb4aezjgN4Q9vVUJ5UEz9LQ3A-F6XR5282KSgPqiRH2hr8eyCG42WMXhGSKIOnhA2Olb7OJ_IDoFYtOVdoF2pv5XC2xyiHy-pjwVRU0S-DA6xuLpLTh1qeRZfgGv-g8GdM3GE4w6vOtB63rrth53gFtY-QKfFlI",
    category: "R&D",
    tags: ["SOLAR", "LORA", "SENSORS", "C++"],
    overview: "Designed and prototyped a fully autonomous, solar-powered monitoring station optimized for extreme desert environments. Utilizes LoRaWAN for long-range communication and features custom-built sensors for soil moisture, wind speed, and solar irradiance.",
    keyFeatures: [
      "Energy-independent operation with solar tracking capability.",
      "LoRaWAN connectivity with 10km+ range in rural areas.",
      "Rugged, IP67-rated enclosure for sand and heat protection.",
      "Integrated web-based telemetry dashboard with geospatial visualization."
    ],
    date: "Jul 2023",
    liveUrl: undefined,
    sourceUrl: undefined
  }
]



function App() {
  const [selectedProject, setSelectedProject] = useState<ExtendedProjectProps | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const handleViewCase = (project: ExtendedProjectProps) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    // Delay clearing the project to allow exit animation
    setTimeout(() => setSelectedProject(null), 200)
  }

  return (
    <div className="relative min-h-screen w-full flex flex-col bg-background-dark bg-tech-grid bg-[size:40px_40px]">
      <Navbar />
      
      <main className="flex-1 flex flex-col items-center w-full max-w-7xl mx-auto pb-10">
        <Hero onContactClick={() => setIsContactModalOpen(true)} />
        
        <ProjectsSection 
          projects={projects}
          onProjectClick={handleViewCase}
        />
        
        <TechDivider className="max-w-2xl mx-auto" />
        
        <div className="w-full max-w-2xl mx-auto space-y-8">
          <ExperienceSection />
          <EducationSection />
          <TechStack />
        </div>

        <TechDivider className="max-w-2xl mx-auto" />
        
        {/* Bottom CTA */}
        <div className="w-full px-4 pt-4 max-w-2xl mx-auto">
          <Button variant="primary" className="w-full h-12 gap-2 shadow-[0_0_15px_rgba(17,82,212,0.5)]">
            <Download className="w-4 h-4" />
            Download Resume (PDF)
          </Button>
        </div>

        <Footer />
      </main>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetailModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          project={selectedProject}
        />
      )}

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  )
}

export default App

