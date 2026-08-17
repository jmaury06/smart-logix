export type Experience = {
  company: string;
  role: string;
  period: string;
  tasks: string[];
};

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  education: string;
  specialty: string;
  age: number;
  yearsExperience: number;
  summary: string;
  bio: string;
  experience: Experience[];
  skills: string[];
};

export const TEAM: TeamMember[] = [
  {
    slug: "jhohans-cordoba-rojas",
    name: "Jhohans Córdoba Rojas",
    role: "CEO & Fundador",
    education: "Profesional en Negocios Internacionales",
    specialty: "Operador Logístico Internacional",
    age: 34,
    yearsExperience: 12,
    summary:
      "Lidera la visión estratégica de Smart Logix, con más de una década de experiencia en comercio exterior y desarrollo de negocios logísticos.",
    bio: "Jhohans fundó Smart Logix SAS con el propósito de ofrecer un servicio logístico ágil y cercano a empresas importadoras y exportadoras de la región Caribe. A lo largo de su carrera ha estructurado operaciones de comercio exterior para clientes de distintos sectores, construyendo relaciones sólidas con navieras, aerolíneas de carga y agencias de aduana en toda la cadena de suministro.",
    experience: [
      {
        company: "Smart Logix SAS",
        role: "Fundador & CEO",
        period: "2021 – Actualidad",
        tasks: [
          "Dirección estratégica y comercial de la compañía",
          "Apertura de nuevos mercados y alianzas con navieras y aerolíneas cargueras",
          "Estructuración financiera y operativa de la empresa",
        ],
      },
      {
        company: "TransCaribe Logística S.A.S.",
        role: "Coordinador de Comercio Exterior",
        period: "2016 – 2021",
        tasks: [
          "Gestión de procesos de importación y exportación FCL/LCL",
          "Negociación con agencias de aduana y navieras",
          "Seguimiento documental ante entidades de control",
        ],
      },
      {
        company: "Andina Cargo Group",
        role: "Analista de Operaciones Internacionales",
        period: "2013 – 2016",
        tasks: [
          "Trazabilidad de embarques marítimos y aéreos",
          "Elaboración de cotizaciones de flete internacional",
          "Atención a clientes exportadores",
        ],
      },
    ],
    skills: ["Comercio exterior", "Negociación con navieras", "Desarrollo de negocio", "Gestión de equipos"],
  },
  {
    slug: "valentina-restrepo-munoz",
    name: "Valentina Restrepo Muñoz",
    role: "Directora de Operaciones",
    education: "Profesional en Comercio Exterior, Esp. en Gerencia de Cadena de Suministro",
    specialty: "Supply Chain & Operaciones Portuarias",
    age: 33,
    yearsExperience: 11,
    summary:
      "Coordina la operación diaria de embarques, garantizando cumplimiento y visibilidad en cada etapa de la cadena logística.",
    bio: "Valentina tiene una trayectoria enfocada en la eficiencia operativa portuaria y el control de indicadores de servicio. Es responsable de que cada embarque de Smart Logix se mueva con visibilidad total, coordinando proveedores de transporte y anticipando novedades antes de que afecten al cliente.",
    experience: [
      {
        company: "Smart Logix SAS",
        role: "Directora de Operaciones",
        period: "2022 – Actualidad",
        tasks: [
          "Supervisión integral de embarques marítimos, aéreos y terrestres",
          "Control de indicadores de servicio (KPI) y tiempos de tránsito",
          "Gestión de proveedores de transporte y almacenamiento",
        ],
      },
      {
        company: "Puerto Azul Operador Logístico",
        role: "Jefe de Operaciones Marítimas",
        period: "2018 – 2022",
        tasks: [
          "Coordinación de cargue y descargue en puerto",
          "Planeación de rutas navieras",
          "Gestión documental de manifiestos de carga",
        ],
      },
      {
        company: "GlobalTrade Forwarders",
        role: "Ejecutiva de Operaciones",
        period: "2014 – 2018",
        tasks: [
          "Seguimiento de contenedores FCL/LCL",
          "Coordinación con navieras y agentes aduaneros",
          "Atención de novedades en tránsito",
        ],
      },
    ],
    skills: ["Operaciones portuarias", "Gestión de proveedores", "Indicadores de servicio", "Supply chain"],
  },
  {
    slug: "camilo-andres-perez-barros",
    name: "Camilo Andrés Pérez Barros",
    role: "Coordinador de Comercio Exterior",
    education: "Profesional en Negocios Internacionales",
    specialty: "Régimen Aduanero y Cumplimiento Normativo",
    age: 29,
    yearsExperience: 7,
    summary:
      "Gestiona procesos de importación y exportación, asegurando el cumplimiento normativo y aduanero de cada operación.",
    bio: "Camilo se especializa en el régimen aduanero colombiano, acompañando a los clientes de Smart Logix en cada trámite de importación y exportación. Su enfoque meticuloso en la clasificación arancelaria y el cumplimiento normativo minimiza riesgos y evita contratiempos en frontera.",
    experience: [
      {
        company: "Smart Logix SAS",
        role: "Coordinador de Comercio Exterior",
        period: "2023 – Actualidad",
        tasks: [
          "Gestión de trámites de importación y exportación",
          "Clasificación arancelaria de mercancías",
          "Coordinación con agencias aduaneras",
        ],
      },
      {
        company: "Norte Andino Transporte",
        role: "Analista de Comercio Exterior",
        period: "2019 – 2023",
        tasks: [
          "Elaboración de declaraciones de importación",
          "Seguimiento de procesos ante entidades de control",
          "Control documental de mercancías",
        ],
      },
      {
        company: "ExpoLogística del Caribe",
        role: "Auxiliar de Comercio Exterior",
        period: "2017 – 2019",
        tasks: [
          "Apoyo en trámites portuarios",
          "Digitación de documentos de exportación",
          "Atención a clientes",
        ],
      },
    ],
    skills: ["Régimen aduanero", "Clasificación arancelaria", "Cumplimiento normativo", "Comercio exterior"],
  },
  {
    slug: "daniela-fernanda-salcedo-vega",
    name: "Daniela Fernanda Salcedo Vega",
    role: "Gerente de Servicio al Cliente",
    education: "Profesional en Administración de Empresas, Diplomado en Servicio al Cliente Logístico",
    specialty: "Experiencia del Cliente y Postventa",
    age: 31,
    yearsExperience: 9,
    summary:
      "Acompaña a cada cliente de forma cercana y personalizada, resolviendo sus necesidades logísticas con rapidez.",
    bio: "Daniela diseña y mejora los protocolos de atención de Smart Logix, asegurando que cada cliente reciba respuestas claras y oportunas. Su experiencia previa en operación le permite entender a fondo el proceso logístico y anticiparse a las necesidades de quienes confían su carga a la empresa.",
    experience: [
      {
        company: "Smart Logix SAS",
        role: "Gerente de Servicio al Cliente",
        period: "2022 – Actualidad",
        tasks: [
          "Gestión de la relación con clientes",
          "Resolución de novedades operativas",
          "Diseño de protocolos de atención",
        ],
      },
      {
        company: "TransCaribe Logística S.A.S.",
        role: "Coordinadora de Servicio al Cliente",
        period: "2018 – 2022",
        tasks: [
          "Atención a clientes importadores y exportadores",
          "Seguimiento a peticiones, quejas y reclamos",
          "Coordinación con áreas operativas",
        ],
      },
      {
        company: "Andina Cargo Group",
        role: "Ejecutiva de Cuenta",
        period: "2015 – 2018",
        tasks: [
          "Manejo de cartera de clientes",
          "Seguimiento a embarques",
          "Generación de reportes de servicio",
        ],
      },
    ],
    skills: ["Servicio al cliente", "Gestión de PQR", "Comunicación", "Fidelización"],
  },
  {
    slug: "andres-felipe-martinez-iguaran",
    name: "Andrés Felipe Martínez Iguarán",
    role: "Especialista en Documentación y Cumplimiento",
    education: "Tecnólogo en Comercio Exterior, Certificación en Legislación Aduanera",
    specialty: "Documentación de Comercio Exterior",
    age: 28,
    yearsExperience: 6,
    summary:
      "Responsable de la coordinación documental de importación y exportación, garantizando procesos ágiles y sin contratiempos.",
    bio: "Andrés revisa con detalle cada documento de embarque —facturas, listas de empaque, certificados de origen y conocimientos de embarque— para que las operaciones de comercio exterior de Smart Logix avancen sin contratiempos ante las entidades de control.",
    experience: [
      {
        company: "Smart Logix SAS",
        role: "Especialista en Documentación y Cumplimiento",
        period: "2023 – Actualidad",
        tasks: [
          "Verificación de documentos de embarque",
          "Cumplimiento normativo aduanero",
          "Gestión de certificados de origen",
        ],
      },
      {
        company: "Puerto Azul Operador Logístico",
        role: "Analista Documental",
        period: "2020 – 2023",
        tasks: [
          "Revisión de facturas comerciales y listas de empaque",
          "Validación de BL / AWB",
          "Coordinación con agentes aduaneros",
        ],
      },
      {
        company: "GlobalTrade Forwarders",
        role: "Auxiliar Documental",
        period: "2018 – 2020",
        tasks: [
          "Digitación y archivo de documentación de importación y exportación",
          "Apoyo en trámites ante entidades de control",
        ],
      },
    ],
    skills: ["Documentación de comercio exterior", "Legislación aduanera", "Certificados de origen", "Control documental"],
  },
  {
    slug: "laura-sofia-guerrero-ospina",
    name: "Laura Sofía Guerrero Ospina",
    role: "Ejecutiva de Desarrollo Comercial",
    education: "Profesional en Mercadeo y Negocios Internacionales",
    specialty: "Desarrollo Comercial y Nuevos Negocios",
    age: 27,
    yearsExperience: 5,
    summary:
      "Construye relaciones de largo plazo con clientes, identificando soluciones logísticas a la medida de cada negocio.",
    bio: "Laura acompaña a empresas importadoras y exportadoras desde el primer contacto, entendiendo sus necesidades para estructurar propuestas logísticas a la medida. Su enfoque consultivo ha sido clave en la vinculación de nuevos clientes a la operación de Smart Logix.",
    experience: [
      {
        company: "Smart Logix SAS",
        role: "Ejecutiva de Desarrollo Comercial",
        period: "2023 – Actualidad",
        tasks: [
          "Prospección de clientes importadores y exportadores",
          "Estructuración de propuestas comerciales",
          "Seguimiento a negociaciones",
        ],
      },
      {
        company: "Norte Andino Transporte",
        role: "Ejecutiva Comercial",
        period: "2021 – 2023",
        tasks: [
          "Visitas comerciales a clientes",
          "Elaboración de cotizaciones",
          "Fidelización de cartera",
        ],
      },
      {
        company: "ExpoLogística del Caribe",
        role: "Practicante de Mercadeo",
        period: "2020 – 2021",
        tasks: [
          "Apoyo en campañas comerciales",
          "Análisis de mercado",
          "Atención a clientes potenciales",
        ],
      },
    ],
    skills: ["Desarrollo comercial", "Negociación", "Prospección", "Atención a clientes"],
  },
];

export function getTeamMember(slug: string): TeamMember | undefined {
  return TEAM.find((member) => member.slug === slug);
}

export function getInitials(name: string): string {
  const parts = name.split(" ").filter(Boolean);
  return `${parts[0]?.[0] ?? ""}${parts[1]?.[0] ?? ""}`.toUpperCase();
}
