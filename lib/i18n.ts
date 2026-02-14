// ============================================================================
// INTERNATIONALIZATION (i18n) - Language translations for Spanish and English
// ============================================================================
// This file contains ALL text content for the website in both languages
// When users switch between Spanish/English, text is pulled from here
// ============================================================================

export type Language = "es" | "en"

export const translations = {
  // ==================== SPANISH TRANSLATIONS ====================
  es: {
    // Navigation menu text
    nav: {
      home: "Inicio",
      services: "Servicios",
      about: "Nosotros",
      contact: "Contacto",
    },

    // Hero section (main banner on home page)
    hero: {
      tagline: "Más de 40 años de experiencia",
      badge: "Seguridad Electrónica en Mazatlán",
      title: "Expertos en Seguridad Electrónica para Hoteles y Negocios en Mazatlán",
      subtitle: "Soluciones integrales en CCTV, alarmas, control de acceso y automatización en Mazatlán y Sinaloa.",
      cta: "Solicitar Cotización",
      secondary: "Ver Servicios",
    },

    // Services descriptions and features
    services: {
      title: "Servicios de Seguridad Electrónica en Mazatlán",
      subtitle: "Soluciones de seguridad adaptadas para hoteles, negocios turísticos y residencias en Mazatlán",
      viewAll: "Ver Todos los Servicios",

      // CCTV (Video surveillance cameras)
      cctv: {
        title: "CCTV",
        description: "Vigilancia remota de su personal, bienes y situaciones de emergencia con grabación continua. Ideal para hoteles en Mazatlán, negocios en Zona Dorada y residencias en Sinaloa.",
        features: [
          "De HD a 4K",
          "Visión a color 24/7",
          "Tecnología de rastreo",
          "Lectoras de placas",
          "Acceso Remoto",
          "Aplicación Móvil",
        ],
      },

      // Access Control (Entry/exit management)
      access: {
        title: "Control de Acceso",
        description:
          "Control preciso de horarios de entrada y salida, restricción de áreas exclusivas e integración con CCTV. Ideal para hoteles en Mazatlán y negocios en Zona Dorada.",
        features: ["Portones y barreras automatizados", "Monitoreo", "Biométricos", "Tarjetas RFID"],
      },

      // Fire Detection Systems
      fire: {
        title: "Sistemas Contra Incendio",
        description: "Detección temprana conectada a central de monitoreo para aviso inmediato a bomberos.",
        features: ["Detectores de humo", "Alarmas sonoras", "Monitoreo 24/7", "Paneles de control"],
      },

      // Alarm Systems
      alarms: {
        title: "Sistemas de Alarmas",
        description: "Sistemas versátiles con sensores personalizados para cubrir cada punto vulnerable. Protección para residencias en Sinaloa y seguridad para negocios turísticos en Mazatlán.",
        features: [
          "Sensores de movimiento",
          "Contactos magnéticos",
          "Sensores de gas",
          "Detectores de humo",
          "Monitoreo",
          "Botones de pánico",
        ],
      },

      // 24/7 Monitoring Center
      monitoring: {
        title: "Central de Monitoreo",
        description: "Monitoreo 24/7, 365 días del año con tecnología de vanguardia. Atención inmediata para clientes en Mazatlán y Sinaloa.",
        features: ["Respuesta inmediata", "Verificación de alarmas", "Despacho de emergencias", "App móvil"],
      },

      // Network and Data Infrastructure
      networks: {
        title: "Redes y Datos",
        description: "Cableado estructurado flexible para computadoras, telefonía, cámaras y control de acceso.",
        features: ["Segmentación de red", "Firewalls", "Cableado Estructurado", "Routers"],
      },

      // Electric Fences (Perimeter security)
      fences: {
        title: "Cercas Eléctricas",
        description: "Máxima protección perimetral con alto poder disuasivo y sistema no letal.",
        features: ["Alto voltaje", "Monitoreadas", "Alambre y postes de acero inoxidable", "Bajo mantenimiento"],
      },

      // Home/Business Automation
      automation: {
        title: "Automatización",
        description: "Diseños inteligentes para el control de iluminación, clima y accesos de manera centralizada.",
        features: [
          "Control completo de luces",
          "Audio profesional",
          "Cortinas y persianas automatizadas",
          "Control de aire y albercas",
          "Integración de alarma y cámaras",
          "Automatización de seguridad y energía",
        ],
      },
    },

    // Company statistics section
    stats: {
      years: "Años de Experiencia",
      clients: "Clientes Satisfechos",
      projects: "Trabajos Completados",
      support: "Soporte 24/7",
    },

    // Contact form and contact page
    contact: {
      title: "Déjanos tu Contacto",
      subtitle: "Un asesor especializado te contactará para ofrecerte la mejor solución de seguridad en Mazatlán",
      heroTitle: "Seguridad Electrónica en Mazatlán",
      heroSubtitle: "Contáctanos para alarmas, CCTV y protección de hoteles, negocios y residencias en Mazatlán, Sinaloa",
      name: "Nombre completo",
      email: "Correo electrónico (opcional)",
      phone: "Teléfono (opcional)",
      service: "Servicios de interés",
      selectService: "Selecciona los servicios",
      message: "Mensaje (opcional)",
      submit: "Enviar Solicitud",
      success: "¡Gracias! Nos pondremos en contacto pronto.",
      office: "Oficina Matriz",
      riviera: "Riviera Maya",
      hours: "Horarios de Atención",
      hoursWeek: "Lunes - Viernes: 9:00 am - 6:00 pm",
      hoursSat: "Sábados: 9:00 am - 2:00 pm",
      emergency: "Dato curioso",
    },

    // Footer section
    footer: {
      rights: "Todos los derechos reservados.",
      tagline: "Tu seguridad es nuestra prioridad.",
      quickLinks: "Enlaces Rápidos",
      contactUs: "Contáctanos",
    },

    // About Us page
    about: {
      title: "Sobre Nosotros",
      heroTitle: "Más de 40 Años Protegiendo Mazatlán y Sinaloa",
      heroSubtitle: "Líderes en soluciones de seguridad electrónica para hoteles, negocios y residencias en la región",
      mission: "Nuestra Misión",
      missionText:
        "Ofrecer soluciones integrales de seguridad electrónica para su hogar, comercio e industria, supervisado por un equipo profesional, comprometido, utilizando la última tecnología.",
      vision: "Nuestra Visión",
      visionText:
        "Consolidarnos como la mejor empresa de seguridad de la región. Continuar integrando tecnología de vanguardia para el beneficio de nuestros clientes.",
      values: "Nuestros Valores",
      commitment: "Compromiso",
      commitmentText: "100% dedicados a la seguridad de nuestros clientes",
      innovation: "Innovación",
      innovationText: "Siempre a la vanguardia tecnológica",
      trust: "Confianza",
      trustText: "Relaciones duraderas basadas en resultados",
    },

    // "Why Choose Us" section
    whyUs: {
      title: "¿Por qué Alarmax?",
      subtitle: "Razones para confiar en nosotros",
      experience: "Experiencia Comprobada",
      experienceText: "Más de 40 años protegiendo hogares, hoteles en Mazatlán y negocios turísticos en Zona Dorada y Sinaloa",
      technology: "Tecnología de Punta",
      technologyText: "Equipos de última generación de marcas reconocidas mundialmente",
      support: "Soporte Continuo",
      supportText: "Monitoreo y atención 24/7, los 365 días del año",
      team: "Equipo Certificado",
      teamText: "Personal altamente capacitado y con certificaciones actualizadas",
    },

    // Call-to-action banner
    cta: {
      title: "¿Listo para proteger tu negocio o residencia en Mazatlán?",
      subtitle: "Solicita una cotización sin compromiso para alarmas y CCTV en Mazatlán, Sinaloa",
      button: "Contáctanos Ahora",
    },

    // Company timeline/history
    timeline: {
      title: "Nuestra Historia",
      founded: "Fundación",
      foundedText: "Iniciamos operaciones en la península de Yucatán",
      growth: "Expansión",
      growthText: "Presencia en Mazatlán, Zona Dorada y Riviera Maya",
      tech: "Innovación",
      techText: "Implementamos sistemas de monitoreo digital",
      today: "Actualidad",
      todayText: "Líderes en seguridad electrónica en Mazatlán y Sinaloa con más de 1,500 clientes satisfechos",
    },
  },

  // ==================== ENGLISH TRANSLATIONS ====================
  // Same structure as Spanish, but with English text
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      contact: "Contact",
    },
    hero: {
      tagline: "Over 40 years of experience",
      badge: "Electronic Security in Mazatlán",
      title: "Experts in Electronic Security for Hotels and Businesses in Mazatlán",
      subtitle: "Comprehensive solutions in CCTV, alarms, access control and automation in Mazatlán and Sinaloa.",
      cta: "Request Quote",
      secondary: "View Services",
    },
    services: {
      title: "Electronic Security Services in Mazatlán",
      subtitle: "Security solutions tailored for hotels, tourist businesses and residences in Mazatlán",
      viewAll: "View All Services",
      cctv: {
        title: "CCTV",
        description: "Remote surveillance of your staff, assets and emergency situations with continuous recording. Ideal for hotels in Mazatlán, businesses in Zona Dorada and residences in Sinaloa.",
        features: [
          "HD to 4K",
          "24/7 Color Vision",
          "Tracking Technology",
          "License Plate Readers",
          "Remote Access",
          "Mobile App",
        ],
      },
      access: {
        title: "Access Control",
        description: "Precise control of entry and exit times, restricted areas and CCTV integration. Ideal for hotels in Mazatlán and businesses in Zona Dorada.",
        features: ["Automated gates and barriers", "Monitoring", "Biometrics", "RFID Cards"],
      },
      fire: {
        title: "Fire Detection Systems",
        description: "Early detection connected to monitoring center for immediate fire brigade notification.",
        features: ["Smoke detectors", "Sound alarms", "24/7 Monitoring", "Control panels"],
      },
      alarms: {
        title: "Alarm Systems",
        description: "Versatile systems with customized sensors to cover every vulnerable point. Protection for residences in Sinaloa and security for tourist businesses in Mazatlán.",
        features: [
          "Motion sensors",
          "Magnetic contacts",
          "Gas sensors",
          "Smoke detectors",
          "Monitoring",
          "Panic buttons",
        ],
      },
      monitoring: {
        title: "Monitoring Center",
        description: "24/7 monitoring, 365 days a year with cutting-edge technology. Immediate attention for customers in Mazatlán and Sinaloa.",
        features: ["Immediate response", "Alarm verification", "Emergency dispatch", "Mobile app"],
      },
      networks: {
        title: "Networks & Data",
        description: "Flexible structured cabling for computers, telephony, cameras and access control.",
        features: ["Network segmentation", "Firewalls", "Structured Cabling", "Routers"],
      },
      fences: {
        title: "Electric Fences",
        description: "Maximum perimeter protection with high deterrent power and non-lethal system.",
        features: ["High voltage", "Monitored", "Stainless steel wire and posts", "Low maintenance"],
      },
      automation: {
        title: "Automation",
        description: "Intelligent designs for centralized control of lighting, climate and access.",
        features: [
          "Complete light control",
          "Professional audio",
          "Automated curtains and blinds",
          "AC and pool control",
          "Alarm and camera integration",
          "Security and energy automation",
        ],
      },
    },
    stats: {
      years: "Years of Experience",
      clients: "Satisfied Clients",
      projects: "Completed Jobs",
      support: "24/7 Support",
    },
    contact: {
      title: "Leave Your Contact",
      subtitle: "A specialized advisor will contact you to offer the best security solution in Mazatlán",
      heroTitle: "Electronic Security in Mazatlán",
      heroSubtitle: "Contact us for alarms, CCTV and protection for hotels, businesses and residences in Mazatlán, Sinaloa",
      name: "Full name",
      email: "Email address (optional)",
      phone: "Phone number (optional)",
      service: "Services of interest",
      selectService: "Select services",
      message: "Message (optional)",
      submit: "Submit Request",
      success: "Thank you! We will contact you soon.",
      office: "Main Office",
      riviera: "Riviera Maya",
      hours: "Business Hours",
      hoursWeek: "Monday - Friday: 9:00 am - 6:00 pm",
      hoursSat: "Saturdays: 9:00 am - 2:00 pm",
      emergency: "24/7 Emergencies",
    },
    footer: {
      rights: "All rights reserved.",
      tagline: "Your security is our priority.",
      quickLinks: "Quick Links",
      contactUs: "Contact Us",
    },
    about: {
      title: "About Us",
      heroTitle: "Over 40 Years Protecting Mazatlán and Sinaloa",
      heroSubtitle: "Leaders in electronic security solutions for hotels, businesses and residences in the region",
      mission: "Our Mission",
      missionText:
        "To offer comprehensive electronic security solutions for your home, business and industry, supervised by a professional, committed team, using the latest technology.",
      vision: "Our Vision",
      visionText:
        "To consolidate ourselves as the best security company in the region. Continue integrating cutting-edge technology for the benefit of our clients.",
      values: "Our Values",
      commitment: "Commitment",
      commitmentText: "100% dedicated to our clients' security",
      innovation: "Innovation",
      innovationText: "Always at the technological forefront",
      trust: "Trust",
      trustText: "Long-lasting relationships based on results",
    },
    whyUs: {
      title: "Why Alarmax?",
      subtitle: "Reasons to trust us",
      experience: "Proven Experience",
      experienceText: "Over 40 years protecting homes, hotels in Mazatlán and tourist businesses in Zona Dorada and Sinaloa",
      technology: "Cutting-Edge Technology",
      technologyText: "Latest generation equipment from world-renowned brands",
      support: "Continuous Support",
      supportText: "24/7 monitoring and attention, 365 days a year",
      team: "Certified Team",
      teamText: "Highly trained staff with updated certifications",
    },
    cta: {
      title: "Ready to protect your business or residence in Mazatlán?",
      subtitle: "Request a no-obligation quote for alarms and CCTV in Mazatlán, Sinaloa",
      button: "Contact Us Now",
    },
    timeline: {
      title: "Our History",
      founded: "Founded",
      foundedText: "We started operations in the Yucatan Peninsula",
      growth: "Expansion",
      growthText: "Presence in Mazatlán, Zona Dorada and Riviera Maya",
      tech: "Innovation",
      techText: "We implemented digital monitoring systems",
      today: "Today",
      todayText: "Leaders in electronic security in Mazatlán and Sinaloa with over 1,500 satisfied customers",
    },
  },
}
