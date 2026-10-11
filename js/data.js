// ============================================
// DATOS MOCKEADOS - EVENTOS LUMIÈRE
// ============================================

const LUMIERE_DATA = {
  brand: {
    name: "Eventos Lumière",
    tagline: "Creamos momentos que brillan para siempre",
    description: "Productora de eventos premium especializada en bodas, eventos corporativos y producciones únicas.",
    phone: "+56 2 2898 4500",
    whatsapp: "+56 9 7845 1230",
    email: "hola@eventoslumiere.cl",
    address: "Av. Apoquindo 4501, Piso 12",
    city: "Las Condes, Santiago, Chile",
    hours: {
      weekdays: "Lunes a Viernes: 9:00 - 19:00",
      saturday: "Sábados: 10:00 - 14:00",
      sunday: "Domingos: Cerrado"
    },
    social: {
      instagram: "https://instagram.com/eventoslumiere",
      facebook: "https://facebook.com/eventoslumiere",
      youtube: "https://youtube.com/@eventoslumiere",
      tiktok: "https://tiktok.com/@eventoslumiere",
      pinterest: "https://pinterest.com/eventoslumiere"
    }
  },

  stats: [
    { value: 850, suffix: "+", label: "Eventos realizados" },
    { value: 12, suffix: "", label: "Años de experiencia" },
    { value: 1200, suffix: "+", label: "Clientes felices" },
    { value: 45, suffix: "", label: "Premios ganados" }
  ],

  services: [
    {
      id: "bodas",
      title: "Bodas de Ensueño",
      shortDesc: "Diseñamos la boda que siempre soñaste, con cada detalle cuidado al milímetro.",
      icon: "💍",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
      features: [
        "Coordinación completa del día",
        "Decoración personalizada",
        "Catering gourmet",
        "Fotografía y vídeo profesional",
        "Música en vivo y DJ",
        "Transporte para invitados"
      ]
    },
    {
      id: "corporativos",
      title: "Eventos Corporativos",
      shortDesc: "Conferencias, lanzamientos y galas que posicionan tu marca en otro nivel.",
      icon: "🏢",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
      features: [
        "Conferencias y convenciones",
        "Lanzamientos de producto",
        "Gala anual empresarial",
        "Team building premium",
        "Streaming profesional",
        "Branding del evento"
      ]
    },
    {
      id: "conciertos",
      title: "Conciertos & Festivales",
      shortDesc: "Producción técnica de alto nivel para shows inolvidables.",
      icon: "🎤",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
      features: [
        "Producción técnica integral",
        "Escenarios y backline",
        "Sonido e iluminación",
        "Seguridad y accesos",
        "Catering backstage",
        "Logística de artistas"
      ]
    },
    {
      id: "conferencias",
      title: "Conferencias & Congresos",
      shortDesc: "Espacios profesionales con la tecnología más avanzada del mercado.",
      icon: "🎯",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
      features: [
        "Salones equipados",
        "Traducción simultánea",
        "Pantallas LED",
        "Sistema de votación",
        "Coffee break premium",
        "Material corporativo"
      ]
    },
    {
      id: "lanzamientos",
      title: "Lanzamientos & Inauguraciones",
      shortDesc: "El primer impacto de tu marca, diseñado para dejar huella.",
      icon: "✨",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      features: [
        "Diseño conceptual único",
        "Performance artística",
        "Protocolo y prensa",
        "Photocall personalizado",
        "Mobiliario de diseño",
        "Ambientación sensorial"
      ]
    },
    {
      id: "privados",
      title: "Fiestas Privadas",
      shortDesc: "Cumpleaños, aniversarios y celebraciones íntimas con estilo único.",
      icon: "🥂",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
      features: [
        "Temática personalizada",
        "Decoración exclusiva",
        "Catering a medida",
        "Música y animación",
        "Servicio de barra",
        "Coordinación total"
      ]
    }
  ],

  team: [
    {
      name: "Isabel Martínez",
      role: "Directora Creativa",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
      bio: "15 años creando experiencias únicas. Especialista en bodas de lujo y eventos premium."
    },
    {
      name: "Carlos Vega",
      role: "Director de Producción",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
      bio: "Ingeniero de sonido con experiencia en grandes festivales internacionales."
    },
    {
      name: "Lucía Fernández",
      role: "Coordinadora de Eventos",
      photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
      bio: "Atención al detalle excepcional. Tu día perfecto es su obsesión."
    },
    {
      name: "Miguel Ángel Ruiz",
      role: "Jefe de Logística",
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
      bio: "Resuelve lo imposible. 20 años asegurando que todo fluya sin contratiempos."
    }
  ],

  gallery: [
    { id: 1, category: "bodas", src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80", title: "Boda en jardín botánico" },
    { id: 2, category: "bodas", src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80", title: "Ceremonia al atardecer" },
    { id: 3, category: "bodas", src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80", title: "Recepción elegante" },
    { id: 4, category: "corporativos", src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80", title: "Gala anual" },
    { id: 5, category: "corporativos", src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80", title: "Lanzamiento de producto" },
    { id: 6, category: "corporativos", src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80", title: "Conferencia tech" },
    { id: 7, category: "conciertos", src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80", title: "Festival de música" },
    { id: 8, category: "conciertos", src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80", title: "Concierto íntimo" },
    { id: 9, category: "conciertos", src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80", title: "Show en vivo" },
    { id: 10, category: "conferencias", src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80", title: "Congreso internacional" },
    { id: 11, category: "conferencias", src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80", title: "Sala plenaria" },
    { id: 12, category: "lanzamientos", src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80", title: "Inauguración boutique" },
    { id: 13, category: "lanzamientos", src: "https://images.unsplash.com/photo-1530023367847-a683933f4172?w=800&q=80", title: "Reveal de producto" },
    { id: 14, category: "privados", src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80", title: "Cumpleaños temático" },
    { id: 15, category: "privados", src: "https://images.unsplash.com/photo-1496337589254-7e19d01cec44?w=800&q=80", title: "Aniversario sorpresa" },
    { id: 16, category: "bodas", src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80", title: "Boda en la playa" }
  ],

  testimonials: [
    {
      name: "María y Pablo",
      event: "Boda - Junio 2025",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
      text: "Eventos Lumière hizo de nuestra boda algo sacado de un cuento. Cada detalle fue perfecto, desde la decoración hasta la coordinación. No pudimos haber elegido mejor equipo.",
      rating: 5
    },
    {
      name: "Ana Rodríguez",
      event: "Directora Marketing - TechCorp",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
      text: "Contratamos a Lumière para nuestro lanzamiento anual y superaron todas las expectativas. Profesionalismo, creatividad y un equipo que se implica de verdad en el proyecto.",
      rating: 5
    },
    {
      name: "Javier Moreno",
      event: "Festival Sonido Santiago",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
      text: "La producción técnica de nuestro festival fue impecable. 15.000 personas y todo funcionó a la perfección. Son nuestro socio de confianza para todos los eventos grandes.",
      rating: 5
    },
    {
      name: "Laura Sánchez",
      event: "50 cumpleaños - Diciembre 2024",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
      text: "Quería una fiesta sorpresa para mi madre y fue MAGNÍFICA. Lucía entendió perfectamente lo que queríamos y lo llevó a otro nivel. ¡Mil gracias!",
      rating: 5
    },
    {
      name: "Diego Hernández",
      event: "CEO - Innovatech",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
      text: "Hemos confiado en Lumière para tres eventos corporativos consecutivos. Su capacidad de adaptación y calidad constante nos ha convertido en clientes para siempre.",
      rating: 5
    }
  ],

  pricing: [
    {
      name: "Esencial",
      price: "2.500.000",
      period: "desde",
      description: "Perfecto para eventos íntimos y celebraciones pequeñas.",
      highlighted: false,
      features: [
        "Coordinación del evento",
        "Decoración estándar",
        "Hasta 50 invitados",
        "Música ambiental",
        "Servicio de 4 horas",
        "Asesoría inicial"
      ],
      notIncluded: [
        "Catering",
        "Fotografía profesional",
        "Transporte"
      ]
    },
    {
      name: "Premium",
      price: "6.500.000",
      period: "desde",
      description: "La opción más popular. Equilibrio perfecto entre calidad y precio.",
      highlighted: true,
      features: [
        "Todo lo del plan Esencial",
        "Hasta 150 invitados",
        "Decoración personalizada",
        "Catering gourmet",
        "Fotografía y vídeo",
        "DJ profesional",
        "Servicio de 8 horas",
        "Coordinador dedicado"
      ],
      notIncluded: [
        "Transporte de invitados",
        "Show en vivo"
      ]
    },
    {
      name: "VIP",
      price: "15.000.000",
      period: "desde",
      description: "Experiencia completa sin límites. Cada detalle a medida.",
      highlighted: false,
      features: [
        "Todo lo del plan Premium",
        "Invitados ilimitados",
        "Diseño exclusivo",
        "Catering de autor",
        "Mobiliario premium",
        "Show y performances",
        "Transporte privado",
        "Suite nupcial (bodas)",
        "Servicio ilimitado",
        "Producción audiovisual"
      ],
      notIncluded: []
    }
  ],

  extras: [
    { name: "Cabina de fotos premium", price: "$450.000" },
    { name: "Dron para fotografía aérea", price: "$350.000" },
    { name: "Pirotecnia fría", price: "$800.000" },
    { name: "Muro LED personalizado", price: "$1.200.000" },
    { name: "Servicio de limusina", price: "$600.000" },
    { name: "Animadores infantiles", price: "$300.000" },
    { name: "Maquillaje y peluquería", price: "$250.000" },
    { name: "Coordinación wedding planner", price: "$1.500.000" }
  ],

  faq: [
    {
      question: "¿Con cuánta antelación debo reservar?",
      answer: "Recomendamos reservar con al menos 6 meses de antelación para bodas y eventos grandes, aunque podemos gestionar eventos urgentes según disponibilidad."
    },
    {
      question: "¿Trabajáis fuera de Santiago?",
      answer: "Sí, somos una productora nacional e internacional. Hemos organizado eventos en todo Chile, Argentina, Perú y otros países. Los desplazamientos se cotizan aparte."
    },
    {
      question: "¿Qué incluye la primera consulta?",
      answer: "La primera consulta es totalmente gratuita y sin compromiso. Analizamos tu visión, te asesoramos y elaboramos una propuesta personalizada en un plazo de 7 días."
    },
    {
      question: "¿Puedo personalizar los paquetes?",
      answer: "Por supuesto. Cada evento es único. Tomamos los planes como base y los adaptamos completamente a tus necesidades, gustos y presupuesto."
    },
    {
      question: "¿Cómo funciona el pago?",
      answer: "Trabajamos con un 30% de reserva a la firma del contrato y el resto fraccionado hasta 15 días antes del evento. Aceptamos transferencia, tarjeta de crédito, WebPay y Mercado Pago."
    },
    {
      question: "¿Tenéis seguro de responsabilidad civil?",
      answer: "Sí, contamos con seguro de RC de 500.000 UF y todos nuestros proveedores están debidamente asegurados y legalizados."
    }
  ],

  timeline: [
    { year: "2013", title: "Fundación", desc: "Lucía y su socia fundan Lumière con la visión de reinventar la producción de eventos en Chile." },
    { year: "2015", title: "Primera gala corporativa", desc: "Producimos nuestra primera gala de gran formato para una empresa del IPSA." },
    { year: "2017", title: "Expansión del equipo", desc: "Incorporamos profesionales clave: producción técnica, coordinación y diseño." },
    { year: "2019", title: "Internacionalización", desc: "Primer evento internacional en Buenos Aires. Reconocimiento como referente en eventos premium." },
    { year: "2021", title: "Premio Mejor Productora", desc: "Premio Nacional de Eventos 2021. Apertura de nueva sede en Las Condes." },
    { year: "2024", title: "Producción 360°", desc: "Lanzamiento de división audiovisual con tecnología propia de streaming y broadcast." }
  ],

  upcomingEvents: [
    {
      title: "Boda Martínez-López",
      date: "15 de Noviembre, 2026",
      location: "Viña Santa Rita, Casablanca",
      type: "Boda Premium"
    },
    {
      title: "Congreso Anual AndesTech",
      date: "3 de Diciembre, 2026",
      location: "Centro de Convenciones, Santiago",
      type: "Corporativo"
    },
    {
      title: "Festival Sonido Santiago",
      date: "20-22 de Junio, 2027",
      location: "Movistar Arena, Santiago",
      type: "Festival"
    }
  ]
};
