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
      en: "Frontend developer at BBVA's GLOMOCO project. Implemented advanced identity verification systems, integrating Veridas facial recognition and DVSExpress document validation. Expert in Cells framework, LitElement, and Web Components.",
      es: "Desarrollador frontend en el proyecto GLOMOCO de BBVA. Implementó sistemas avanzados de verificación de identidad, integrando reconocimiento facial de Veridas y validación de documentos DVSExpress. Experto en el framework Cells, LitElement y Web Components."
    },
    tags: ["Veridas", "DVSExpress", "Cells Framework", "LitElement", "Web Components", "Fintech"],
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
    imageUrl: "assets/images/projects/bbva_app.png",
    category: "SOFTWARE",
    tags: ["CELLS", "LITELEMENT", "VERIDAS", "DVSEXPRESS", "FINTECH"],
    overview: {
      en: "Architected and developed the frontend core for BBVA's global mobile app (GLOMOCO). Led the integration of Veridas facial recognition and DVSExpress document validation systems, significantly enhancing the onboarding and security protocols. Utilized Cells framework and LitElement for a high-performance, modular architecture.",
      es: "Arquitectó y desarrolló el núcleo frontend de la aplicación móvil global de BBVA (GLOMOCO). Lideró la integración de los sistemas de reconocimiento facial Veridas y validación de documentos DVSExpress, mejorando significativamente los protocolos de registro y seguridad. Utilizó el framework Cells y LitElement para una arquitectura modular de alto rendimiento."
    },
    keyFeatures: {
      en: [
        "Advanced Identity Verification with Veridas & DVSExpress.",
        "Micro-frontend architecture using Cells Framework.",
        "High-performance Web Components with LitElement.",
        "Biometric authentication and KYC automation.",
        "Strict compliance with global banking security standards."
      ],
      es: [
        "Verificación de Identidad Avanzada con Veridas y DVSExpress.",
        "Arquitectura de micro-frontends utilizando el Framework Cells.",
        "Web Components de alto rendimiento con LitElement.",
        "Autenticación biométrica y automatización de KYC.",
        "Cumplimiento estricto de estándares de seguridad bancaria global."
      ]
    },
    date: "Aug 2024",
    liveUrl: undefined,
    sourceUrl: undefined
  },
  {
    title: { en: "Hourly.io Workforce Platform", es: "Plataforma Workforce de Hourly.io" },
    description: {
      en: "Enterprise-grade payroll and workers' comp system for high-risk industries.",
      es: "Sistema de nómina y compensación de trabajadores de nivel empresarial para industrias de alto riesgo."
    },
    imageUrl: "assets/images/projects/hourly%20app.png",
    category: "SOFTWARE",
    tags: ["REACT", "REACT-ARIA", "RETOOL", "PAYROLL", "INSURANCE"],
    overview: {
      en: "Developed the core administrative infrastructure and internal design system for Hourly.io, a leading platform that integrates time tracking, payroll, and workers' compensation. Built a highly accessible component library using React-aria and streamlined internal operations by developing sophisticated administrative tools on Retool.",
      es: "Desarrolló la infraestructura administrativa principal y el sistema de diseño interno para Hourly.io, una plataforma líder que integra seguimiento de tiempo, nómina y compensación de trabajadores. Construyó una biblioteca de componentes altamente accesible utilizando React-aria y optimizó las operaciones internas mediante el desarrollo de herramientas administrativas sofisticadas en Retool."
    },
    keyFeatures: {
      en: [
        "Internal Design System built with React-aria for high accessibility.",
        "Advanced administrative dashboard developed on Retool.",
        "Real-time payroll and workers' comp synchronization flow.",
        "Mobile-first frontend architecture for distributed workforces.",
        "Internal API integrations for automated tax and insurance filings."
      ],
      es: [
        "Sistema de Diseño Interno construido con React-aria para alta accesibilidad.",
        "Tablero administrativo avanzado desarrollado en Retool.",
        "Flujo de sincronización de nómina y seguros en tiempo real.",
        "Arquitectura frontend móvil-primero para fuerzas de trabajo distribuidas.",
        "Integración de APIs internas para presentaciones automáticas de impuestos y seguros."
      ]
    },
    date: "Jun 2022",
    liveUrl: "https://www.hourly.io",
    sourceUrl: undefined
  },
  {
    title: { en: "Aerospace Instrumentation & R&D", es: "Instrumentación Aeroespacial e I+D" },
    description: {
      en: "Mechatronic systems for rocket instrumentation and wind tunnel aerospace testing at Uniandes.",
      es: "Sistemas mecatrónicos para instrumentación de cohetes y pruebas aeroespaciales en túnel de viento en Uniandes."
    },
    imageUrl: "assets/images/projects/miller_pua_uniandes.jpg",
    category: "R&D",
    tags: ["LABVIEW", "ARDUINO", "PUA PROJECT", "AEROSPACE", "INSTRUMENTATION"],
    overview: {
      en: "Contributed to the Programa Uniandino Aeroespacial (PUA) by developing advanced mechatronic solutions for aerospace research. Led the instrumentation and data acquisition for rocket experiments and designed automation systems for wind tunnel testing, facilitating precise aerodynamic analysis and mechanical characterization.",
      es: "Contribuyó al Programa Uniandino Aeroespacial (PUA) mediante el desarrollo de soluciones mecatrónicas avanzadas para investigación aeroespacial. Lideró la instrumentación y adquisición de datos para experimentos con cohetes y diseñó sistemas de automatización para pruebas en túnel de viento, facilitando análisis aerodinámicos precisos y caracterización mecánica."
    },
    keyFeatures: {
      en: [
        "Instrumentation for PUA (Programa Uniandino Aeroespacial) rockets.",
        "Automated data acquisition for subsonic wind tunnel testing.",
        "Custom NI LabVIEW and Arduino integration for real-time monitoring.",
        "Development of mechatronic test benches for mechanical engineered labs.",
        "Integration of sensors for pressure, temperature, and aerodynamic force measurement."
      ],
      es: [
        "Instrumentación para cohetes del PUA (Programa Uniandino Aeroespacial).",
        "Adquisición de datos automatizada para pruebas en túnel de viento subsónico.",
        "Integración personalizada de NI LabVIEW y Arduino para monitoreo en tiempo real.",
        "Desarrollo de bancos de prueba mecatrónicos para laboratorios de ingeniería mecánica.",
        "Integración de sensores para medición de presión, temperatura y fuerzas aerodinámicas."
      ]
    },
    date: "Apr 2019",
    liveUrl: undefined,
    sourceUrl: undefined
  },
  {
    title: { en: "Oil & Gas Commissioning I&C", es: "Comisionamiento I&C en Petróleo y Gas" },
    description: {
      en: "Oversight of critical systems installation and testing at Floreña and Cusiana O&G facilities.",
      es: "Supervisión de la instalación y pruebas de sistemas críticos en las instalaciones de O&G de Floreña y Cusiana."
    },
    imageUrl: "assets/images/projects/miller_oil_gas.jpg",
    category: "HARDWARE",
    tags: ["INSTRUMENTATION", "CONTROL SYSTEMS", "OIL & GAS", "COMMISSIONING", "SAFETY"],
    overview: {
      en: "As a Commissioning Engineer at Massy Energy, oversaw the installation and testing of I&C systems at major Oil and Gas plants, including Floreña and Cusiana facilities. Ensured critical equipment like the GE PGT25+G4 Turbocharger and production wells met strict safety and efficiency standards through rigorous functional testing.",
      es: "Como Ingeniero de Comisionamiento en Massy Energy, supervisó la instalación y prueba de sistemas de I&C en importantes plantas de petróleo y gas, incluyendo las instalaciones de Floreña y Cusiana. Aseguró que el equipo crítico, como el turbocargador GE PGT25+G4 y los pozos de producción, cumplieran con estrictos estándares de seguridad y eficiencia mediante rigurosas pruebas funcionales."
    },
    keyFeatures: {
      en: [
        "System installation oversight at Floreña and Cusiana O&G facilities.",
        "Functional testing of GE PGT25+G4 Turbochargers and production wells.",
        "Ensuring compliance with rigorous safety and industrial efficiency standards.",
        "Technical problem-solving for complex instrumentation and control layouts.",
        "Stakeholder management between contractors, project managers, and regulators."
      ],
      es: [
        "Supervisión de la instalación de sistemas en las instalaciones de O&G de Floreña y Cusiana.",
        "Pruebas funcionales de turbocargadores GE PGT25+G4 y pozos de producción.",
        "Garantizar el cumplimiento de rigurosos estándares de seguridad y eficiencia industrial.",
        "Resolución de problemas técnicos para diseños complejos de instrumentación y control.",
        "Gestión de partes interesadas entre contratistas, directores de proyecto y reguladores."
      ]
    },
    date: "Jul 2014",
    liveUrl: undefined,
    sourceUrl: undefined
  },
  {
    title: { en: "Autonomous Exploration UAV", es: "UAV de Exploración Autónoma" },
    description: {
      en: "Patented fixed-wing UAV designed for navigation and exploration in complex terrains.",
      es: "Vehículo aéreo no tripulado de ala fija patentado diseñado para la navegación y exploración en terrenos complejos."
    },
    imageUrl: "assets/images/projects/uav_umng_2015.jpg",
    category: "R&D",
    tags: ["MECHATRONICS", "AERODYNAMICS", "PATENT", "MATLAB", "ANSYS"],
    overview: {
      en: "Led the research and development of a custom fixed-wing UAV with rear propulsion for exploration. This project resulted in a Utility Model Patent (No. 47453). Focused on aerodynamic and mechanical design, performing advanced computational simulations using MATLAB and ANSYS to optimize flight performance and structural integrity.",
      es: "Lideró la investigación y el desarrollo de un UAV personalizado de ala fija con propulsión trasera para exploración. Este proyecto resultó en una Patente de Modelo de Utilidad (No. 47453). Basado en el diseño aerodinámico y mecánico, realizando simulaciones computacionales avanzadas utilizando MATLAB y ANSYS para optimizar el rendimiento de vuelo y la integridad estructural."
    },
    keyFeatures: {
      en: [
        "Utility Model Patent No. 47453 for innovative fixed-wing design.",
        "Aerodynamic behavior simulations developed with MATLAB and ANSYS.",
        "Rear propulsion system optimization for exploration efficiency.",
        "Mechanical design focused on lightweight structural performance.",
        "Custom sensor fusion for autonomous navigation modules."
      ],
      es: [
        "Patente de Modelo de Utilidad No. 47453 por diseño innovador de ala fija.",
        "Simulaciones de comportamiento aerodinámico desarrolladas con MATLAB y ANSYS.",
        "Optimización del sistema de propulsión trasera para eficiencia en exploración.",
        "Diseño mecánico enfocado en rendimiento estructural de bajo peso.",
        "Fusión de sensores personalizada para módulos de navegación autónoma."
      ]
    },
    date: "Dec 2015",
    liveUrl: undefined,
    sourceUrl: undefined
  },
  {
    title: { en: "Automated Water Meter SCADA", es: "SCADA de Medidores de Agua Automatizado" },
    description: {
      en: "SCADA system for automated water meter test benches using LabVIEW and National Instruments.",
      es: "Sistema SCADA para bancos de prueba de medidores de agua automatizados utilizando LabVIEW y National Instruments."
    },
    imageUrl: "assets/images/projects/scada_automated_water_bench.png",
    category: "SOFTWARE",
    tags: ["LABVIEW", "NATIONAL INSTRUMENTS", "SCADA", "SQL", "AUTOMATION"],
    overview: {
      en: "Developed and deployed advanced SCADA and smart monitoring solutions for water meter test benches. Utilized National Instruments hardware and LabVIEW for high-precision automation and data acquisition. Integrated SQL databases for real-time tracking and quality control of industrial devices, ensuring compliance with international metrology standards.",
      es: "Desarrolló y desplegó soluciones avanzadas de SCADA y monitoreo inteligente para bancos de prueba de medidores de agua. Utilizó hardware de National Instruments y LabVIEW para automatización de alta precisión y adquisición de datos. Integró bases de datos SQL para el seguimiento en tiempo real y el control de calidad de dispositivos industriales, asegurando el cumplimiento de los estándares internacionales de metrología."
    },
    keyFeatures: {
      en: [
        "Automated water meter test benches with LabVIEW and NI Hardware.",
        "Custom SCADA implementation for real-time industrial monitoring.",
        "High-throughput data logging with SQL integration for traceability.",
        "Precision control algorithms for flow and pressure calibration.",
        "Development of user-friendly HMI for industrial operators."
      ],
      es: [
        "Bancos de prueba de medidores de agua automatizados con LabVIEW y hardware NI.",
        "Implementación de SCADA personalizada para monitoreo industrial en tiempo real.",
        "Registro de datos de alto rendimiento con integración SQL para trazabilidad.",
        "Algoritmos de control de precisión para calibración de flujo y presión.",
        "Desarrollo de HMI intuitivas para operadores industriales."
      ]
    },
    date: "Apr 2010",
    liveUrl: undefined,
    sourceUrl: undefined
  },
  {
    title: { en: "Pneumatic Sorting Arm", es: "Brazo Clasificador Neumático" },
    description: {
      en: "Industrial robot arm for automated waste separation using high-speed pneumatics and PLC.",
      es: "Brazo robótico industrial para la separación automatizada de residuos utilizando neumática de alta velocidad y PLC."
    },
    imageUrl: "assets/images/projects/pneumatic_sorting_robot_arm_1769652015424.png",
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
    title: { en: "Robotic Soccer Team (AI)", es: "Equipo de Fútbol Robótico (IA)" },
    description: {
      en: "Autonomous mechatronic team designed for competitive robotic sports using embedded AI.",
      es: "Equipo mecatrónico autónomo diseñado para deportes robóticos competitivos utilizando IA embebida."
    },
    imageUrl: "assets/images/projects/robotic_soccer_team_ai_1769652001726.png",
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
    title: { en: "Robot Cívico (Police Code)", es: "Robot Cívico (Código de Policía)" },
    description: {
      en: "Educational robot presented at the National Robotics Fair in Maloka, teaching the Police Code.",
      es: "Robot educativo presentado en la Feria Nacional de Robótica en Maloka, enseñando el Código de Policía."
    },
    imageUrl: "assets/images/projects/maloka_robocivic_project.png",
    category: "HARDWARE",
    tags: ["ROBOTICS", "EDUCATION", "MALOKA", "EMBEDDED"],
    overview: {
      en: "Developed 'Robot Cívico', an interactive robotic project created during my student years. The robot was designed to educate the public about the Colombian Police Code. It was presented at the prestigious Maloka interactive center for the National Robotics Fair in 2003, highlighting the intersection of technology and civic education.",
      es: "Desarrolló 'Robot Cívico', un proyecto robótico interactivo creado durante mis años de estudiante. El robot fue diseñado para educar al público sobre el Código de Policía de Colombia. Fue presentado en el prestigioso centro interactivo Maloka para la Feria Nacional de Robótica en 2003, destacando la intersección entre la tecnología y la educación ciudadana."
    },
    keyFeatures: {
      en: [
        "Interactive education system for civic duties and the Police Code.",
        "Featured project at the National Robotics Fair in Maloka (2003).",
        "Embedded control system for autonomous speech and movement.",
        "Design focused on public interaction and accessibility.",
        "Pioneering student project in social robotics."
      ],
      es: [
        "Sistema de educación interactiva sobre deberes ciudadanos y el Código de Policía.",
        "Proyecto destacado en la Feria Nacional de Robótica en Maloka (2003).",
        "Sistema de control embebido para habla y movimiento autónomo.",
        "Diseño enfocado en la interacción con el público y accesibilidad.",
        "Proyecto estudiantil pionero en robótica social."
      ]
    },
    date: "Nov 2003",
    liveUrl: undefined,
    sourceUrl: undefined
  }
]

