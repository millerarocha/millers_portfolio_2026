import { TimelineItemProps } from '../components/molecules/TimelineItem'
import { ExtendedProjectProps } from '../App'

export interface TranslatableTimelineItem extends Omit<TimelineItemProps, 'title' | 'description'> {
  title: { en: string; es: string }
  description: { en: string; es: string }
}

export interface TranslatableEducationItem {
  degree: { en: string; es: string }
  school: string
  year: string
  description: { en: string; es: string }
}

export interface TranslatableProject extends Omit<ExtendedProjectProps, 'title' | 'description' | 'overview' | 'keyFeatures'> {
  title: { en: string; es: string }
  description: { en: string; es: string }
  overview: { en: string; es: string }
  keyFeatures: { en: string[]; es: string[] }
}

export const experienceData: TranslatableTimelineItem[] = [
  {
    year: "Aug 2024 — Present",
    title: { en: "Frontend Developer", es: "Desarrollador Frontend" },
    subtitle: "Indra",
    description: {
      en: "Frontend developer with experience in BBVA's GLOMOCO project, knowledgeable in the Cells framework as well as LitElement and Web Components, which are used to develop modern and functional user interfaces.",
      es: "Desarrollador frontend con experiencia en el proyecto GLOMOCO de BBVA, con conocimientos en el framework Cells, así como en LitElement y Web Components, utilizados para desarrollar interfaces de usuario modernas y funcionales."
    },
    tags: ["Cells Framework", "LitElement", "Web Components", "BBVA GLOMOCO"],
    isLatest: true
  },
  {
    year: "Jun 2022 — Apr 2024",
    title: { en: "Frontend Web Developer", es: "Desarrollador Web Frontend" },
    subtitle: "Hourly",
    description: {
      en: "Leveraging expertise in React to ensure seamless user experiences and robust functionality. Contributed to a component design system using React-aria and built an administrative system using Retool.",
      es: "Aprovechando la experiencia en React para garantizar experiencias de usuario fluidas y una funcionalidad robusta. Contribuyó a un sistema de diseño de componentes utilizando React-aria y construyó un sistema administrativo utilizando Retool."
    },
    tags: ["React", "React-aria", "Retool", "Agile", "Unit Testing"],
    isLatest: false
  },
  {
    year: "Feb 2022 — May 2022",
    title: { en: "Web UI Developer", es: "Desarrollador de UI Web" },
    subtitle: "Globant",
    description: {
      en: "Specialized in designing and implementing user interface components for web applications, demonstrating a robust command of React and consuming REST APIs.",
      es: "Especializado en el diseño e implementación de componentes de interfaz de usuario para aplicaciones web, demostrando un sólido dominio de React y el consumo de APIs REST."
    },
    tags: ["React", "SASS", "JavaScript", "REST APIs"],
    isLatest: false
  },
  {
    year: "Apr 2019 — Jan 2022",
    title: { en: "Instrumentation and Control Engineer", es: "Ingeniero de Instrumentación y Control" },
    subtitle: "Universidad de los Andes - Colombia",
    description: {
      en: "Developed software solutions for data acquisition and automation in Mechanical Engineering Labs using Labview, NI technologies, Arduino, and Raspberry Pi.",
      es: "Desarrolló soluciones de software para adquisición de datos y automatización en laboratorios de Ingeniería Mecánica utilizando Labview, tecnologías NI, Arduino y Raspberry Pi."
    },
    tags: ["Labview", "Arduino", "Raspberry Pi", "Automation"],
    isLatest: false
  },
  {
    year: "Nov 2018 — Dec 2021",
    title: { en: "Web development Professor", es: "Profesor de Desarrollo Web" },
    subtitle: "Corporación Universitaria UNITEC",
    description: {
      en: "Taught web development skills (HTML, CSS, JS, AngularJS, Firebase) to Digital Content Specialization students through central projects involving CRUD apps.",
      es: "Enseñó habilidades de desarrollo web (HTML, CSS, JS, AngularJS, Firebase) a estudiantes de la Especialización en Contenidos Digitales a través de proyectos centrales que involucran aplicaciones CRUD."
    },
    tags: ["HTML/CSS", "JavaScript", "AngularJS", "Firebase"],
    isLatest: false
  },
  {
    year: "Jan 2018 — Apr 2019",
    title: { en: "Electronics and Software Development Project Engineer", es: "Ingeniero de Proyectos de Desarrollo de Electrónica y Software" },
    subtitle: "SENA",
    description: {
      en: "Led diverse projects across software, web, mechanics, and electronics, including a pet e-commerce platform and IoT machinery alarms.",
      es: "Lideró diversos proyectos en software, web, mecánica y electrónica, incluyendo una plataforma de comercio electrónico para mascotas y alarmas de maquinaria IoT."
    },
    tags: ["AngularJS", "Bootstrap", "C++", "IoT"],
    isLatest: false
  },
  {
    year: "Oct 2016 — Dec 2017",
    title: { en: "Technical Support Engineer", es: "Ingeniero de Soporte Técnico" },
    subtitle: "Personería de Bogota",
    description: {
      en: "Diagnosed and resolved internal departments' issues, focusing on IP phone systems and software/hardware configuration.",
      es: "Diagnosticó y resolvió problemas de departamentos internos, centrándose en sistemas de telefonía IP y configuración de software/hardware."
    },
    tags: ["IP Telephony", "Technical Support", "Troubleshooting"],
    isLatest: false
  },
  {
    year: "Jul 2014 — Aug 2016",
    title: { en: "Commissioning I&C engineer", es: "Ingeniero de Comisionamiento I&C" },
    subtitle: "Massy Energy & Industrial Gases Business Unit",
    description: {
      en: "Oversaw installation and testing of systems on Oil and Gas plants, ensuring safety and efficiency standards were met.",
      es: "Supervisó la instalación y prueba de sistemas en plantas de Petróleo y Gas, asegurando que se cumplieran los estándares de seguridad y eficiencia."
    },
    tags: ["Instrumentation", "Control Systems", "Oil & Gas", "Commissioning"],
    isLatest: false
  },
  {
    year: "Jul 2012 — Jul 2014",
    title: { en: "Professor / Research assistant", es: "Profesor / Asistente de Investigación" },
    subtitle: "Universidad Militar Nueva Granada",
    description: {
      en: "Taught programming (AI, Signal Processing, Controls) and worked as a Research Assistant for UAV development.",
      es: "Enseñó programación (IA, Procesamiento de Señales, Controles) y trabajó como Asistente de Investigación para el desarrollo de UAV."
    },
    tags: ["AI", "Signal Processing", "UAV", "Mechatronics"],
    isLatest: false
  },
  {
    year: "Jul 2011 — Dec 2011",
    title: { en: "Software and automation engineer", es: "Ingeniero de Software y Automatización" },
    subtitle: "LASSA Laboratories",
    description: {
      en: "Led automation project for water meter test benches using LabVIEW and SQL for data management.",
      es: "Lideró proyecto de automatización para bancos de prueba de medidores de agua utilizando LabVIEW y SQL para la gestión de datos."
    },
    tags: ["LabVIEW", "SQL", "Automation"],
    isLatest: false
  },
  {
    year: "Jun 2010 — Jul 2011",
    title: { en: "Sales Engineer", es: "Ingeniero de Ventas" },
    subtitle: "FTZ Hydraulics",
    description: {
      en: "Technical sales and guidance for high-quality hydraulic pumps, valves, and filters.",
      es: "Ventas técnicas y asesoría para bombas hidráulicas, válvulas y filtros de alta calidad."
    },
    tags: ["Hydraulics", "Sales Engineering", "Technical Sales"],
    isLatest: false
  },
  {
    year: "Feb 2008 — Apr 2010",
    title: { en: "Design and Development engineer", es: "Ingeniero de Diseño y Desarrollo" },
    subtitle: "Elster Group",
    description: {
      en: "Leadership in Automated Meter Reading (AMR) systems and test bench automation using LabVIEW and SQL.",
      es: "Liderazgo en sistemas de Lectura Automática de Medidores (AMR) y automatización de bancos de prueba utilizando LabVIEW y SQL."
    },
    tags: ["AMR Systems", "LabVIEW", "SCADA", "Automation"],
    isLatest: false
  },
  {
    year: "Aug 2005 — Jan 2008",
    title: { en: "Data Entry Engineer", es: "Ingeniero de Entrada de Datos" },
    subtitle: "Enel Colombia",
    description: {
      en: "Responsible for updating critical information related to the electrical infrastructure and distribution. Provided training to new staff and technicians.",
      es: "Responsable de actualizar información crítica relacionada con la infraestructura eléctrica y distribución. Brindó capacitación al nuevo personal y técnicos."
    },
    tags: ["Data Management", "Training", "Electrical Infrastructure"],
    isLatest: false
  }
]

export const educationData: TranslatableEducationItem[] = [
  {
    degree: { en: "Master of Science in Mechatronics Engineering", es: "Magíster en Ingeniería Mecatrónica" },
    school: "Universidad Militar Nueva Granada",
    year: "2012 — 2015",
    description: {
      en: "Conducted research and development of an unmanned aerial vehicle (UAV) for exploration. Granted a Utility Model Patent No. 47453.",
      es: "Realizó investigación y desarrollo de un vehículo aéreo no tripulado (UAV) para exploración. Se le otorgó la Patente de Modelo de Utilidad No. 47453."
    }
  },
  {
    degree: { en: "Specialist in automation of industrial processes", es: "Especialista en Automatización de Procesos Industriales" },
    school: "Universidad de Los Andes",
    year: "2006 — 2008",
    description: {
      en: "Designed and developed a pneumatic robot arm to automate plastic waste separation using Siemens PLC.",
      es: "Diseñó y desarrolló un brazo robótico neumático para automatizar la separación de residuos plásticos utilizando PLC Siemens."
    }
  },
  {
    degree: { en: "Mechatronics Engineer", es: "Ingeniero Mecatrónico" },
    school: "Universidad Militar Nueva Granada",
    year: "2000 — 2005",
    description: {
      en: "Designed and developed a robotic soccer team using PIC microcontrollers and C++ software.",
      es: "Diseñó y desarrolló un equipo de fútbol robótico utilizando microcontroladores PIC y software en C++."
    }
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

export const projectsData: TranslatableProject[] = [
  {
    title: { en: "BBVA GLOMOCO UI Engine", es: "Motor de UI BBVA GLOMOCO" },
    description: {
      en: "High-performance UI engine for global banking, built with Web Components and Cells Framework.",
      es: "Motor de UI de alto rendimiento para banca global, construido con Web Components y el Framework Cells."
    },
    imageUrl: "/assets/images/projects/bbva_glomo_ui_engine_1769651960654.png",
    category: "SOFTWARE",
    tags: ["CELLS", "LITELEMENT", "WEB COMPONENTS", "FINTECH"],
    overview: {
      en: "Architected and developed the frontend core for BBVA's global mobile app (GLOMOCO). Utilized the Cells framework and LitElement to create a robust, scalable, and reusable library of Web Components, ensuring consistent UI/UX across multiple regions and banking features.",
      es: "Arquitectó y desarrolló el núcleo frontend de la aplicación móvil global de BBVA (GLOMOCO). Utilizó el framework Cells y LitElement para crear una biblioteca robusta, escalable y reutilizable de Web Components, garantizando una UI/UX consistente en múltiples regiones y funciones bancarias."
    },
    keyFeatures: {
      en: [
        "Micro-frontend architecture using Cells Framework.",
        "High-performance Web Components with LitElement.",
        "Strict compliance with accessibility and banking security standards.",
        "Modular design system for global scalability."
      ],
      es: [
        "Arquitectura de micro-frontends utilizando el Framework Cells.",
        "Web Components de alto rendimiento con LitElement.",
        "Cumplimiento estricto de estándares de accesibilidad y seguridad bancaria.",
        "Sistema de diseño modular para escalabilidad global."
      ]
    },
    date: "Aug 2024",
    liveUrl: undefined,
    sourceUrl: undefined
  },
  {
    title: { en: "Autonomous Exploration UAV", es: "UAV de Exploración Autónoma" },
    description: {
      en: "Patented unmanned aerial vehicle designed for navigation and exploration in complex terrains.",
      es: "Vehículo aéreo no tripulado patentado diseñado para la navegación y exploración en terrenos complejos."
    },
    imageUrl: "/assets/images/projects/patented_uav_exploration_1769651973750.png",
    category: "R&D",
    tags: ["MECHATRONICS", "DRONES", "PATENT", "EMBEDDED"],
    overview: {
      en: "Led the research and development of a custom UAV for exploration. This project resulted in a Utility Model Patent (No. 47453). The work involved aerodynamics design, flight control optimization, and the integration of multiple sensors for autonomous environmental mapping.",
      es: "Lideró la investigación y el desarrollo de un UAV personalizado para exploración. Este proyecto resultó en una Patente de Modelo de Utilidad (No. 47453). El trabajo involucró el diseño aerodinámico, la optimización del control de vuelo y la integración de múltiples sensores para el mapeo ambiental autónomo."
    },
    keyFeatures: {
      en: [
        "Utility Model Patent No. 47453 for innovative UAV design.",
        "Custom PID flight control systems and sensor fusion.",
        "Autonomous navigation in GPS-denied environments.",
        "Lightweight carbon-fiber structural engineering."
      ],
      es: [
        "Patente de Modelo de Utilidad No. 47453 por diseño innovador de UAV.",
        "Sistemas de control de vuelo PID personalizados y fusión de sensores.",
        "Navegación autónoma en entornos sin GPS.",
        "Ingeniería estructural ligera de fibra de carbono."
      ]
    },
    date: "Dec 2015",
    liveUrl: undefined,
    sourceUrl: undefined
  },
  {
    title: { en: "Industrial AMR Systems", es: "Sistemas AMR Industriales" },
    description: {
      en: "Deployment of Automated Meter Reading systems for large-scale utility monitoring.",
      es: "Despliegue de sistemas de Lectura Automática de Medidores para el monitoreo de servicios públicos a gran escala."
    },
    imageUrl: "/assets/images/projects/industrial_amr_iot_1769651988018.png",
    category: "HARDWARE",
    tags: ["LABVIEW", "SCADA", "SQL", "IOT"],
    overview: {
      en: "Developed and deployed smart monitoring solutions for water and electrical utility meters. Used LabVIEW for test bench automation and high-speed data acquisition. Integrated SQL databases for real-time tracking of thousands of devices across the grid.",
      es: "Desarrolló y desplegó soluciones de monitoreo inteligente para medidores de agua y electricidad. Utilizó LabVIEW para la automatización de bancos de prueba y adquisición de datos de alta velocidad. Integró bases de datos SQL para el seguimiento en tiempo real de miles de dispositivos en la red."
    },
    keyFeatures: {
      en: [
        "Automated test benches with LabVIEW and NI Hardware.",
        "High-throughput data logging with SQL integration.",
        "Real-time SCADA dashboards for utility tracking.",
        "Edge processing for water meter accuracy calibration."
      ],
      es: [
        "Bancos de prueba automatizados con LabVIEW y hardware NI.",
        "Registro de datos de alto rendimiento con integración SQL.",
        "Tableros SCADA en tiempo real para el seguimiento de servicios públicos.",
        "Procesamiento en el borde para la calibración de precisión de medidores de agua."
      ]
    },
    date: "Apr 2010",
    liveUrl: undefined,
    sourceUrl: undefined
  },
  {
    title: { en: "Robotic Soccer Team (AI)", es: "Equipo de Fútbol Robótico (IA)" },
    description: {
      en: "Autonomous mechatronic team designed for competitive robotic sports using embedded AI.",
      es: "Equipo mecatrónico autónomo diseñado para deportes robóticos competitivos utilizando IA embebida."
    },
    imageUrl: "/assets/images/projects/robotic_soccer_team_ai_1769652001726.png",
    category: "HARDWARE",
    tags: ["PIC", "C++", "ROBOTICS", "COMPUTER VISION"],
    overview: {
      en: "Engineered a team of autonomous mobile robots to compete in robotic soccer. Developed custom electronics using PIC microcontrollers and implemented AI algorithms in C++ for real-time strategy, ball tracking, and team coordination.",
      es: "Diseñó un equipo de robots móviles autónomos para competir en fútbol robótico. Desarrolló electrónica personalizada utilizando microcontroladores PIC e implementó algoritmos de IA en C++ para estrategia en tiempo real, seguimiento de la pelota y coordinación de equipo."
    },
    keyFeatures: {
      en: [
        "Embedded AI for real-time decision making and coordination.",
        "Custom PCB design and microcontroller programming (PIC).",
        "Computer vision integration for position and object tracking.",
        "High-speed motor control and collision avoidance."
      ],
      es: [
        "IA embebida para la toma de decisiones y coordinación en tiempo real.",
        "Diseño de PCB personalizado y programación de microcontroladores (PIC).",
        "Integración de visión artificial para el seguimiento de posición y objetos.",
        "Control de motores de alta velocidad y evitación de colisiones."
      ]
    },
    date: "Jun 2005",
    liveUrl: undefined,
    sourceUrl: undefined
  },
  {
    title: { en: "Pneumatic Sorting Arm", es: "Brazo Clasificador Neumático" },
    description: {
      en: "Industrial robot arm for automated waste separation using high-speed pneumatics and PLC.",
      es: "Brazo robótico industrial para la separación automatizada de residuos utilizando neumática de alta velocidad y PLC."
    },
    imageUrl: "/assets/images/projects/pneumatic_sorting_robot_arm_1769652015424.png",
    category: "HARDWARE",
    tags: ["PLC SIEMENS", "PNEUMATICS", "HMI", "FACTORY"],
    overview: {
      en: "Designed a pneumatic robotic system for the automated separation of plastic waste. Powered by Siemens PLC systems, the project improved efficiency in recycling processes through high-speed object recognition and sorting.",
      es: "Diseñó un sistema robótico neumático para la separación automatizada de residuos plásticos. Impulsado por sistemas PLC Siemens, el proyecto mejoró la eficiencia en los procesos de reciclaje mediante el reconocimiento y clasificación de objetos a alta velocidad."
    },
    keyFeatures: {
      en: [
        "PLC-based sequences for synchronized pneumatic movement.",
        "HMI design for system monitoring and manual override.",
        "Integration with industrial sensors for material detection.",
        "Robust mechanical design for 24/7 industrial environments."
      ],
      es: [
        "Secuencias basadas en PLC para movimiento neumático sincronizado.",
        "Diseño de HMI para monitoreo del sistema y anulación manual.",
        "Integración con sensores industriales para la detección de materiales.",
        "Diseño mecánico robusto para entornos industriales 24/7."
      ]
    },
    date: "Aug 2008",
    liveUrl: undefined,
    sourceUrl: undefined
  },
  {
    title: { en: "IoT Industrial Mesh", es: "Malla Industrial IoT" },
    description: {
      en: "Distributed diagnostic network for heavy machinery alarm monitoring and diagnostics.",
      es: "Red de diagnóstico distribuida para el monitoreo de alarmas y diagnóstico de maquinaria pesada."
    },
    imageUrl: "/assets/images/projects/iot_industrial_mesh_network_1769652033221.png",
    category: "HARDWARE",
    tags: ["ESP32", "MQTT", "RASPBERRY PI", "MESH"],
    overview: {
      en: "Created a low-cost, high-reliability mesh network using ESP32 nodes to monitor environmental conditions and machinery health in a manufacturing facility. Data was aggregated into a central Raspberry Pi gateway and visualized via MQTT dashboards.",
      es: "Creó una red de malla de bajo costo y alta confiabilidad utilizando nodos ESP32 para monitorear las condiciones ambientales y la salud de la maquinaria en una instalación de fabricación. Los datos se agregaron en una puerta de enlace central de Raspberry Pi y se visualizaron a través de tableros MQTT."
    },
    keyFeatures: {
      en: [
        "Self-healing mesh network architecture for industrial resilience.",
        "Real-time MQTT telemetry and machinery health alerts.",
        "Low-power sensor integration for remote nodes.",
        "Custom Node-RED dashboards for plant operators."
      ],
      es: [
        "Arquitectura de red de malla auto-sanable para resiliencia industrial.",
        "Telemetría MQTT en tiempo real y alertas de salud de maquinaria.",
        "Integración de sensores de baja potencia para nodos remotos.",
        "Tableros personalizados de Node-RED para operadores de planta."
      ]
    },
    date: "Jan 2022",
    liveUrl: undefined,
    sourceUrl: undefined
  }
]

