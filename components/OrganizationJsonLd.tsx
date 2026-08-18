const SITE_URL = "https://smartlogix.com.co";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: "Smart Logix SAS",
  legalName: "Smart Logix SAS",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/logo.png`,
  description:
    "Agencia de logística y comercio exterior en Barranquilla, Colombia. Transporte marítimo, aéreo y terrestre, coordinación documental de importación y exportación, almacenamiento y distribución.",
  telephone: "+57-302-422-4759",
  email: "administrativo@smartlogixgroup.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Barranquilla",
    addressRegion: "Atlántico",
    addressCountry: "CO",
  },
  areaServed: {
    "@type": "Country",
    name: "Colombia",
  },
  founder: {
    "@type": "Person",
    name: "Jhohans Córdoba Rojas",
    jobTitle: "CEO & Fundador",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Smart Logix SAS",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Transporte Internacional",
          description: "Transporte marítimo (FCL/LCL), aéreo y terrestre internacional.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Transporte Nacional",
          description:
            "Carga seca y consolidada, distribución urbana y regional, coordinación puerta a puerta.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Soluciones Logísticas",
          description:
            "Trazabilidad de embarques, coordinación documental de importación y exportación, almacenamiento y última milla.",
        },
      },
    ],
  },
};

export default function OrganizationJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
