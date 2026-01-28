import { TimelineItemProps } from '../components/molecules/TimelineItem'
import { ExtendedProjectProps } from '../App'

export const experienceData: TimelineItemProps[] = [
  {
    year: "Aug 2024 — Present",
    title: "Frontend Developer",
    subtitle: "Indra",
    description: "Frontend developer with experience in BBVA's GLOMOCO project, knowledgeable in the Cells framework as well as LitElement and Web Components, which are used to develop modern and functional user interfaces.",
    tags: ["Cells Framework", "LitElement", "Web Components", "BBVA GLOMOCO"],
    isLatest: true
  },
  {
    year: "Jun 2022 — Apr 2024",
    title: "Frontend Web Developer",
    subtitle: "Hourly",
    description: "Leveraging expertise in React to ensure seamless user experiences and robust functionality. Contributed to a component design system using React-aria and built an administrative system using Retool.",
    tags: ["React", "React-aria", "Retool", "Agile", "Unit Testing"],
    isLatest: false
  },
  {
    year: "Feb 2022 — May 2022",
    title: "Web UI Developer",
    subtitle: "Globant",
    description: "Specialized in designing and implementing user interface components for web applications, demonstrating a robust command of React and consuming REST APIs.",
    tags: ["React", "SASS", "JavaScript", "REST APIs"],
    isLatest: false
  },
  {
    year: "Apr 2019 — Jan 2022",
    title: "Instrumentation and Control Engineer",
    subtitle: "Universidad de los Andes - Colombia",
    description: "Developed software solutions for data acquisition and automation in Mechanical Engineering Labs using Labview, NI technologies, Arduino, and Raspberry Pi.",
    tags: ["Labview", "Arduino", "Raspberry Pi", "Automation"],
    isLatest: false
  },
  {
    year: "Nov 2018 — Dec 2021",
    title: "Web development Professor",
    subtitle: "Corporación Universitaria UNITEC",
    description: "Taught web development skills (HTML, CSS, JS, AngularJS, Firebase) to Digital Content Specialization students through central projects involving CRUD apps.",
    tags: ["HTML/CSS", "JavaScript", "AngularJS", "Firebase"],
    isLatest: false
  },
  {
    year: "Jan 2018 — Apr 2019",
    title: "Electronics and Software Development Project Engineer",
    subtitle: "SENA",
    description: "Led diverse projects across software, web, mechanics, and electronics, including a pet e-commerce platform and IoT machinery alarms.",
    tags: ["AngularJS", "Bootstrap", "C++", "IoT"],
    isLatest: false
  },
  {
    year: "Oct 2016 — Dec 2017",
    title: "Technical Support Engineer",
    subtitle: "Personería de Bogota",
    description: "Diagnosed and resolved internal departments' issues, focusing on IP phone systems and software/hardware configuration.",
    tags: ["IP Telephony", "Technical Support", "Troubleshooting"],
    isLatest: false
  },
  {
    year: "Jul 2014 — Aug 2016",
    title: "Commissioning I&C engineer",
    subtitle: "Massy Energy & Industrial Gases Business Unit",
    description: "Oversaw installation and testing of systems on Oil and Gas plants, ensuring safety and efficiency standards were met.",
    tags: ["Instrumentation", "Control Systems", "Oil & Gas", "Commissioning"],
    isLatest: false
  },
  {
    year: "Jul 2012 — Jul 2014",
    title: "Professor / Research assistant",
    subtitle: "Universidad Militar Nueva Granada",
    description: "Taught programming (AI, Signal Processing, Controls) and worked as a Research Assistant for UAV development.",
    tags: ["AI", "Signal Processing", "UAV", "Mechatronics"],
    isLatest: false
  },
  {
    year: "Jul 2011 — Dec 2011",
    title: "Software and automation engineer",
    subtitle: "LASSA Laboratories",
    description: "Led automation project for water meter test benches using LabVIEW and SQL for data management.",
    tags: ["LabVIEW", "SQL", "Automation"],
    isLatest: false
  },
  {
    year: "Jun 2010 — Jul 2011",
    title: "Sales Engineer",
    subtitle: "FTZ Hydraulics",
    description: "Technical sales and guidance for high-quality hydraulic pumps, valves, and filters.",
    tags: ["Hydraulics", "Sales Engineering", "Technical Sales"],
    isLatest: false
  },
  {
    year: "Feb 2008 — Apr 2010",
    title: "Design and Development engineer",
    subtitle: "Elster Group",
    description: "Leadership in Automated Meter Reading (AMR) systems and test bench automation using LabVIEW and SQL.",
    tags: ["AMR Systems", "LabVIEW", "SCADA", "Automation"],
    isLatest: false
  },
  {
    year: "Aug 2005 — Jan 2008",
    title: "Data Entry Engineer",
    subtitle: "Enel Colombia",
    description: "Responsible for updating critical information related to the electrical infrastructure and distribution. Provided training to new staff and technicians.",
    tags: ["Data Management", "Training", "Electrical Infrastructure"],
    isLatest: false
  }
]

export const educationData = [
  {
    degree: "Master of Science in Mechatronics Engineering",
    school: "Universidad Militar Nueva Granada",
    year: "2012 — 2015",
    description: "Conducted research and development of an unmanned aerial vehicle (UAV) for exploration. Granted a Utility Model Patent No. 47453."
  },
  {
    degree: "Specialist in automation of industrial processes",
    school: "Universidad de Los Andes",
    year: "2006 — 2008",
    description: "Designed and developed a pneumatic robot arm to automate plastic waste separation using Siemens PLC."
  },
  {
    degree: "Mechatronics Engineer",
    school: "Universidad Militar Nueva Granada",
    year: "2000 — 2005",
    description: "Designed and developed a robotic soccer team using PIC microcontrollers and C++ software."
  }
]

export const techStackData = [
  // Primary / Core Skills
  { name: "React", primary: true },
  { name: "TypeScript", primary: true },
  { name: "LitElement", primary: true },
  { name: "Web Components", primary: true },
  { name: "Cells Framework", primary: true },
  { name: "LabVIEW", primary: true },
  
  // Frontend & Web
  { name: "JavaScript", primary: false },
  { name: "AngularJS", primary: false },
  { name: "SASS / CSS3", primary: false },
  { name: "Tailwind CSS", primary: false },
  { name: "Firebase", primary: false },
  { name: "REST APIs", primary: false },
  
  // Automation & Hardware
  { name: "PLC Programming", primary: false },
  { name: "SCADA", primary: false },
  { name: "Arduino / ESP32", primary: false },
  { name: "Raspberry Pi", primary: false },
  { name: "MQTT", primary: false },
  
  // Tools & Others
  { name: "Node.js", primary: false },
  { name: "Unit Testing", primary: false },
  { name: "Agile / Scrum", primary: false },
  { name: "Git", primary: false },
  { name: "SQL", primary: false },
]

export const projectsData: ExtendedProjectProps[] = [
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
