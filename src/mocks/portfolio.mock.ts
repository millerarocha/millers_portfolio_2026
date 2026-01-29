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
    title: "BBVA GLOMOCO UI Engine",
    description: "High-performance UI engine for global banking, built with Web Components and Cells Framework.",
    imageUrl: "/assets/images/projects/bbva_glomo_ui_engine_1769651960654.png",
    category: "SOFTWARE",
    tags: ["CELLS", "LITELEMENT", "WEB COMPONENTS", "FINTECH"],
    overview: "Architected and developed the frontend core for BBVA's global mobile app (GLOMOCO). Utilized the Cells framework and LitElement to create a robust, scalable, and reusable library of Web Components, ensuring consistent UI/UX across multiple regions and banking features.",
    keyFeatures: [
      "Micro-frontend architecture using Cells Framework.",
      "High-performance Web Components with LitElement.",
      "Strict compliance with accessibility and banking security standards.",
      "Modular design system for global scalability."
    ],
    date: "Aug 2024",
    liveUrl: undefined,
    sourceUrl: undefined
  },
  {
    title: "Autonomous Exploration UAV",
    description: "Patented unmanned aerial vehicle designed for navigation and exploration in complex terrains.",
    imageUrl: "/assets/images/projects/patented_uav_exploration_1769651973750.png",
    category: "R&D",
    tags: ["MECHATRONICS", "DRONES", "PATENT", "EMBEDDED"],
    overview: "Led the research and development of a custom UAV for exploration. This project resulted in a Utility Model Patent (No. 47453). The work involved aerodynamics design, flight control optimization, and the integration of multiple sensors for autonomous environmental mapping.",
    keyFeatures: [
      "Utility Model Patent No. 47453 for innovative UAV design.",
      "Custom PID flight control systems and sensor fusion.",
      "Autonomous navigation in GPS-denied environments.",
      "Lightweight carbon-fiber structural engineering."
    ],
    date: "Dec 2015",
    liveUrl: undefined,
    sourceUrl: undefined
  },
  {
    title: "Industrial AMR Systems",
    description: "Deployment of Automated Meter Reading systems for large-scale utility monitoring.",
    imageUrl: "/assets/images/projects/industrial_amr_iot_1769651988018.png",
    category: "HARDWARE",
    tags: ["LABVIEW", "SCADA", "SQL", "IOT"],
    overview: "Developed and deployed smart monitoring solutions for water and electrical utility meters. Used LabVIEW for test bench automation and high-speed data acquisition. Integrated SQL databases for real-time tracking of thousands of devices across the grid.",
    keyFeatures: [
      "Automated test benches with LabVIEW and NI Hardware.",
      "High-throughput data logging with SQL integration.",
      "Real-time SCADA dashboards for utility tracking.",
      "Edge processing for water meter accuracy calibration."
    ],
    date: "Apr 2010",
    liveUrl: undefined,
    sourceUrl: undefined
  },
  {
    title: "Robotic Soccer Team (AI)",
    description: "Autonomous mechatronic team designed for competitive robotic sports using embedded AI.",
    imageUrl: "/assets/images/projects/robotic_soccer_team_ai_1769652001726.png",
    category: "HARDWARE",
    tags: ["PIC", "C++", "ROBOTICS", "COMPUTER VISION"],
    overview: "Engineered a team of autonomous mobile robots to compete in robotic soccer. Developed custom electronics using PIC microcontrollers and implemented AI algorithms in C++ for real-time strategy, ball tracking, and team coordination.",
    keyFeatures: [
      "Embedded AI for real-time decision making and coordination.",
      "Custom PCB design and microcontroller programming (PIC).",
      "Computer vision integration for position and object tracking.",
      "High-speed motor control and collision avoidance."
    ],
    date: "Jun 2005",
    liveUrl: undefined,
    sourceUrl: undefined
  },
  {
    title: "Pneumatic Sorting Arm",
    description: "Industrial robot arm for automated waste separation using high-speed pneumatics and PLC.",
    imageUrl: "/assets/images/projects/pneumatic_sorting_robot_arm_1769652015424.png",
    category: "HARDWARE",
    tags: ["PLC SIEMENS", "PNEUMATICS", "HMI", "FACTORY"],
    overview: "Designed a pneumatic robotic system for the automated separation of plastic waste. Powered by Siemens PLC systems, the project improved efficiency in recycling processes through high-speed object recognition and sorting.",
    keyFeatures: [
      "PLC-based sequences for synchronized pneumatic movement.",
      "HMI design for system monitoring and manual override.",
      "Integration with industrial sensors for material detection.",
      "Robust mechanical design for 24/7 industrial environments."
    ],
    date: "Aug 2008",
    liveUrl: undefined,
    sourceUrl: undefined
  },
  {
    title: "IoT Industrial Mesh",
    description: "Distributed diagnostic network for heavy machinery alarm monitoring and diagnostics.",
    imageUrl: "/assets/images/projects/iot_industrial_mesh_network_1769652033221.png",
    category: "HARDWARE",
    tags: ["ESP32", "MQTT", "RASPBERRY PI", "MESH"],
    overview: "Created a low-cost, high-reliability mesh network using ESP32 nodes to monitor environmental conditions and machinery health in a manufacturing facility. Data was aggregated into a central Raspberry Pi gateway and visualized via MQTT dashboards.",
    keyFeatures: [
      "Self-healing mesh network architecture for industrial resilience.",
      "Real-time MQTT telemetry and machinery health alerts.",
      "Low-power sensor integration for remote nodes.",
      "Custom Node-RED dashboards for plant operators."
    ],
    date: "Jan 2022",
    liveUrl: undefined,
    sourceUrl: undefined
  }
]

