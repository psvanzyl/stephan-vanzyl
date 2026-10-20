/**
 * Alle tekst en data van de site op één plek.
 *
 * VELDEN DIE NOG INGEVULD MOETEN WORDEN staan als `null`. De UI rendert dan een
 * rustige "Nog aan te vullen"-markering in plaats van een lege regel. Zoek op
 * `TODO` om alles te vinden wat nog open is.
 */

export type Maybe<T> = T | null;

export const site = {
  name: "Stephan van Zyl",
  role: "Transportconsultant",
  domain: "https://i.wegowow.duckdns.org",
  tagline: "Advies, data en software voor transport, logistiek en mobiliteit.",
  email: null as Maybe<string>, // TODO: e-mailadres om te publiceren
  phone: null as Maybe<string>, // TODO: telefoonnummer
  linkedin: null as Maybe<string>, // TODO: LinkedIn-URL
  location: "Nederland", // TODO: stad toevoegen
  kvk: null as Maybe<string>, // TODO: KvK-nummer
  btw: null as Maybe<string>, // TODO: BTW-id
};

export const nav = [
  { href: "#over", label: "Over" },
  { href: "#focusgebieden", label: "Focusgebieden" },
  { href: "#aanpak", label: "Aanpak" },
  { href: "#projecten", label: "Projecten" },
  { href: "#software", label: "Software" },
  { href: "#contact", label: "Contact" },
];

export const hero = {
  eyebrow: "Transportconsultant",
  title: "Stephan van Zyl",
  subtitle: site.tagline,
  primaryCta: { href: "#contact", label: "Neem contact op" },
  secondaryCta: { href: "#software", label: "Bekijk mijn werk" },
  backgrounds: [
    "/images/backgrounds/hero-1.svg",
    "/images/backgrounds/hero-2.svg",
    "/images/backgrounds/hero-3.svg",
    "/images/backgrounds/hero-4.svg",
    "/images/backgrounds/hero-5.svg",
    "/images/backgrounds/hero-6.svg",
  ],
};

export const services = {
  kicker: "Advies en onderzoek",
  lead: "Wat ik doe",
  items: [
    {
      icon: "map",
      title: "Data & dashboards",
      body: "Openbare data over mobiliteit en infrastructuur omgezet in kaarten en dashboards die je direct kunt gebruiken.",
    },
    {
      icon: "plug",
      title: "Laadinfrastructuur & zero-emissie",
      body: "Viewers en datasets rond laadpunten, laadprijzen en zero-emissie vervoer.",
    },
    {
      icon: "truck",
      title: "Transport & logistiek",
      body: "Datasets en tools voor wegvervoer, vrachtwagenheffing en de economische gezondheid van de sector.",
    },
    {
      icon: "activity",
      title: "Simulatie & modellen",
      body: "Vlootsimulatie en ruimtelijke modellen voor stadslogistiek en mobiliteit.",
    },
    {
      icon: "database",
      title: "Open data & API's",
      body: "Koppelingen op openbare bronnen en open standaarden, met de nadruk op herhaalbaarheid en transparantie.",
    },
  ],
};

export const about = {
  heading: "Over Stephan van Zyl",
  intro: {
    title: "Over mij",
    eyebrow: site.role,
    name: site.name,
    body: "Ik werk op het snijvlak van transport, logistiek en mobiliteit, met data en software als gereedschap. Ik bouw toepassingen die openbare data ontsluiten en daar iets bruikbaars van maken.",
    // TODO: persoonlijke introductie / CV-tekst aanleveren
    education: [
      { label: "Opleiding 1", value: null },
      { label: "Opleiding 2", value: null },
    ],
    experience: [
      { label: "Huidige rol", value: "Transportconsultant" },
      { label: "Eerdere rol", value: null },
      { label: "Eerdere rol", value: null },
    ],
  },
  expertise: {
    title: "Expertise",
    eyebrow: site.role,
    name: site.name,
    body: "Ik combineer domeinkennis van transport en logistiek met de praktijk van data, kaarten en software.",
    specialisations: [
      "Datagedreven mobiliteit",
      "Laadinfrastructuur & zero-emissie",
      "Open data & standaarden",
      "Simulatie & ruimtelijke modellen",
      "Software & prototypes",
    ],
    sectors: [
      "Transport, logistiek & mobiliteit",
      "Laadinfrastructuur & energie",
      "Overheid & kennisinstellingen",
    ],
  },
  vision: {
    title: "Visie",
    eyebrow: site.role,
    name: site.name,
    body: "// TODO: visie-tekst aanleveren.",
    // TODO: visie-tekst aanleveren
    points: [
      "Open data en open standaarden als uitgangspunt",
      "Eerst een werkend prototype, dan pas een plan",
      "Oplossingen die door anderen hergebruikt kunnen worden",
    ],
  },
};

export const focus = {
  heading: "Focusgebieden",
  items: [
    {
      title: "Zero-emissie & laadinfrastructuur",
      keywords:
        "laadpunten, laadprijzen, dekkingsgraad, zero-emissiezones, elektrificatie van wagenparken",
    },
    {
      title: "Slimme & datagedreven mobiliteit",
      keywords:
        "mobiliteitsdata, verkeerslichten, parkeren, stadslogistiek, netwerkanalyse",
    },
    {
      title: "Open data & standaarden",
      keywords:
        "openbare bronnen, datakwaliteit, herhaalbaarheid, transparante methoden",
    },
    {
      title: "Simulatie & modellen",
      keywords:
        "vlootsimulatie, ruimtebeslag van stadslogistiek, digitale tweelingen",
    },
  ],
};

export const approach = {
  heading: "Aanpak",
  lead: "Van open data naar een werkende toepassing: klein beginnen, snel laten zien, en dan verbeteren.",
  items: [
    {
      title: "Van data naar inzicht",
      body: "Ik begin bij de bron: welke openbare data bestaat er echt, hoe actueel is die en wat kun je ermee onderbouwen?",
    },
    {
      title: "Snel een werkend prototype",
      body: "In plaats van een lange voorstudie bouw ik een werkende versie die je zelf kunt openen en beoordelen.",
    },
    {
      title: "Open en herbruikbaar",
      body: "De toepassingen zijn open opgezet: de bronnen en werkwijze zijn navolgbaar en de resultaten zijn te hergebruiken.",
    },
  ],
  cta: { href: "#contact", label: "Meer weten?" },
  ctaBody: "Neem contact op voor een vrijblijvend gesprek.",
};

export type Project = {
  title: string;
  period: Maybe<string>;
  scope: Maybe<string>;
  body: string;
  activities: string[];
  client: Maybe<string>;
  image: Maybe<string>;
  links: { href: string; label: string }[];
};

export const projects = {
  heading: "Projecten",
  lead: "Van meest recent naar ouder.",
  items: [
    {
      title: "Laadinfrastructuur in Nederland",
      period: null, // TODO: looptijd
      scope: null, // TODO: projectvolume
      body: "Een reeks viewers die het Nederlandse laadpuntennetwerk in kaart brengen: alle laadpunten, laadpunten bij sportlocaties en actuele laadprijzen per aanbieder.",
      activities: [
        "Ontsluiten van openbare laadpuntendata",
        "Kaart- en dashboardontwikkeling",
        "Vergelijking van laadprijzen per aanbieder",
      ],
      client: null, // TODO: opdrachtgever
      image: null,
      links: [
        { href: "https://laadpalen.laserraptorai.duckdns.org", label: "Laadpalenviewer" },
        { href: "https://sportlaadpalen.laserraptorai.duckdns.org", label: "Sportlaadpalen" },
      ],
    },
    {
      title: "Vrachtwagenheffing: netwerkanalyse",
      period: null, // TODO: looptijd
      scope: null,
      body: "Een netwerkviewer rond de vrachtwagenheffing: welke wegen vallen onder de heffing en wat betekent dat voor ritplanning en kosten.",
      activities: [
        "Bewerken van netwerk- en tariefdata",
        "Route- en kostenlogica",
        "Interactieve netwerkkaart",
      ],
      client: null, // TODO: opdrachtgever
      image: null,
      links: [
        {
          href: "https://vrachtwagenheffing.laserraptorai.duckdns.org",
          label: "Vrachtwagenheffing-netwerk",
        },
      ],
    },
    {
      title: "Mobiliteitsdata in de openbare ruimte",
      period: null, // TODO: looptijd
      scope: null,
      body: "Viewers voor parkeren en verkeerslichten, plus een ANPR-dashboard dat mobiliteitsstromen inzichtelijk maakt.",
      activities: [
        "Combineren van gemeentelijke en landelijke datasets",
        "Kaartvisualisaties per gemeente",
        "Controles op datakwaliteit en dekking",
      ],
      client: null, // TODO: opdrachtgever
      image: null,
      links: [
        {
          href: "https://parkeerdataviewer.laserraptorai.duckdns.org",
          label: "Parkeerdataviewer",
        },
        {
          href: "https://verkeerslichten.laserraptorai.duckdns.org",
          label: "Verkeerslichtenviewer",
        },
        { href: "https://anpr-utrecht.laserraptorai.duckdns.org", label: "ANPR Utrecht" },
      ],
    },
    {
      title: "Economische gezondheid van het wegvervoer",
      period: null, // TODO: looptijd
      scope: null,
      body: "Een dashboard dat faillissementen in het wegvervoer volgt op basis van openbare publicaties, met uitsplitsing naar regio en activiteit.",
      activities: [
        "Automatisch verzamelen van openbare publicaties",
        "Normaliseren en categoriseren van bedrijfsactiviteiten",
        "Dashboard met trends per regio",
      ],
      client: null, // TODO: opdrachtgever
      image: null,
      links: [
        {
          href: "https://faillissementen.laserraptorai.duckdns.org",
          label: "Faillissementen wegvervoer",
        },
      ],
    },
  ] as Project[],
};

export const clients = {
  heading: "Opdrachtgevers",
  // TODO: opdrachtgevers (namen en/of logo's) aanleveren
  logos: [] as { src: string; alt: string }[],
};

export type SoftwareItem = {
  title: string;
  body: string;
  tags: string[];
  href: string;
  image: Maybe<string>;
};

export const software = {
  heading: "Software & prototypes",
  lead: "Zelf ontwikkelde toepassingen rond transport, mobiliteit en data. Alle onderstaande links zijn live.",
  filters: ["Alles", "Kaarten", "Tools", "Data"],
  items: [
    {
      title: "Laadpalenviewer",
      body: "Alle laadpunten in Nederland op één kaart, met inzoomen per gemeente en aanbieder.",
      tags: ["Kaarten", "Data"],
      href: "https://laadpalen.laserraptorai.duckdns.org",
      image: null,
    },
    {
      title: "Sportlaadpalen",
      body: "Hoeveel sportlocaties in Nederland hebben nog geen laadpunt? Kaart plus telling.",
      tags: ["Kaarten", "Data"],
      href: "https://sportlaadpalen.laserraptorai.duckdns.org",
      image: null,
    },
    {
      title: "EV Charging Price Viewer",
      body: "Actuele laadprijzen per aanbieder naast elkaar, zodat tarieven vergelijkbaar worden.",
      tags: ["Tools", "Data"],
      href: "https://ev-charging.laserraptorai.duckdns.org",
      image: null,
    },
    {
      title: "Vrachtwagenheffing-netwerk",
      body: "Netwerkviewer rond de vrachtwagenheffing: wegen, tarieven en de gevolgen voor ritten.",
      tags: ["Kaarten"],
      href: "https://vrachtwagenheffing.laserraptorai.duckdns.org",
      image: null,
    },
    {
      title: "Parkeerdataviewer",
      body: "Parkeerdata per gemeente in kaart gebracht, met tarieven, zones en capaciteit.",
      tags: ["Kaarten", "Data"],
      href: "https://parkeerdataviewer.laserraptorai.duckdns.org",
      image: null,
    },
    {
      title: "Verkeerslichtenviewer",
      body: "Alle verkeerslichten en hun configuratie op de kaart, als basis voor doorstromingsanalyse.",
      tags: ["Kaarten"],
      href: "https://verkeerslichten.laserraptorai.duckdns.org",
      image: null,
    },
    {
      title: "FleetSim",
      body: "Educatief platform voor vlootbeheer en transportlogistiek, met realistische voertuigsimulatie.",
      tags: ["Tools"],
      href: "https://fleetsim.laserraptorai.duckdns.org",
      image: null,
    },
    {
      title: "Ruimtemodel stadslogistiek",
      body: "Model dat het ruimtebeslag van stadslogistiek in beeld brengt, per voertuigtype en tijdvenster.",
      tags: ["Kaarten", "Tools"],
      href: "https://ruimtemodel.laserraptorai.duckdns.org",
      image: null,
    },
    {
      title: "Basis Stadstwin",
      body: "Een minimale, open digital twin per gemeente: lucht, geluid, mobiliteit en meer op één kaart.",
      tags: ["Kaarten", "Data"],
      href: "https://stadstwin.laserraptorai.duckdns.org",
      image: null,
    },
    {
      title: "Faillissementen wegvervoer",
      body: "Dashboard dat faillissementen in het wegvervoer volgt op basis van openbare publicaties.",
      tags: ["Data", "Tools"],
      href: "https://faillissementen.laserraptorai.duckdns.org",
      image: null,
    },
    {
      title: "AanZET",
      body: "Dashboard rond zero-emissie transport: cijfers, voortgang en achtergronden op één plek.",
      tags: ["Data"],
      href: "https://aanzet.laserraptorai.duckdns.org",
      image: null,
    },
    {
      title: "Pakketpuntenviewer",
      body: "Pakketpunt-netwerken in heel Nederland in kaart, per gemeente en vervoerder.",
      tags: ["Kaarten"],
      href: "https://pakketpunten.laserraptorai.duckdns.org",
      image: null,
    },
  ] as SoftwareItem[],
};

export const testimonials = {
  heading: "Referenties en aanbevelingen",
  // TODO: referenties / aanbevelingen aanleveren
  items: [] as { quote: string; name: string; role: Maybe<string>; org: Maybe<string> }[],
};

export const contact = {
  heading: "Neem contact op",
  lead: "Heeft u vragen of wilt u meer informatie? Neem gerust contact op.",
  messageTitle: "Stuur een bericht",
  messageBody: "// TODO: contactmogelijkheden aanleveren (e-mailadres, LinkedIn).",
  detailsTitle: "Contactgegevens",
};

export const footer = {
  blurb:
    "Transportconsultant. Advies, data en software voor transport, logistiek en mobiliteit.",
  quickLinksTitle: "Snelle links",
};
