/**
 * Alle teksten en links van de site op één plek.
 *
 * Onbekende gegevens (cv, opdrachtgevers, referenties) staan leeg. De UI
 * verbergt lege blokken en rijen; er staat nergens "nog aan te vullen" in
 * beeld. Zodra een waarde hier wordt ingevuld, komt het blok vanzelf terug.
 * De software-sectie is géén placeholder: dat zijn de live tools van Stephan
 * zelf, met echte links.
 */

export type Maybe<T> = T | null;

export type NavItem = { label: string; href: string };

export type Slide = {
  src: string;
  alt: string;
  caption: string;
};

export type Service = {
  title: string;
  body: string;
  icon: "compass" | "trending" | "code" | "kanban" | "layers" | "share";
};

export type FocusArea = {
  title: string;
  body: string;
  items: string[];
};

export type ApproachStep = {
  step: string;
  title: string;
  body: string;
};

export type Source = {
  name: string;
  desc: string;
  url: string;
};

export type SoftwareItem = {
  slug: string;
  name: string;
  desc: string;
  url: string;
  shot: string;
  tags: string[];
};

export const site = {
  name: "Stephan van Zyl",
  role: "Transport- en mobiliteitsconsultant",
  tagline:
    "Advies, data en software voor duurzaam transport, stadslogistiek en mobiliteit in Nederland.",
  domain: "https://i.wegowow.duckdns.org",

  contact: {
    email: "psvanzyl@gmail.com" as Maybe<string>,
    linkedin: null as Maybe<string>,
    location: null as Maybe<string>,
    kvk: null as Maybe<string>,
  },

  nav: [
    { label: "Home", href: "#page-top" },
    { label: "Over", href: "#over" },
    { label: "Diensten", href: "#diensten" },
    { label: "Focusgebieden", href: "#focusgebieden" },
    { label: "Projecten", href: "#projecten" },
    { label: "Software", href: "#software" },
    { label: "Contact", href: "#contact" },
  ] as NavItem[],

  hero: {
    kicker: "TRANSPORT & MOBILITEIT",
    title: "TRANSPORT & MOBILITEIT",
    titleAccent: "DATA-GEDREVEN",
    subtitle:
      "Ik werk aan duurzaam transport, stadslogistiek en mobiliteit — en bouw de kaarten, modellen en dashboards die daarbij horen.",
    primary: { label: "Neem contact op", href: "#contact" },
    secondary: { label: "Bekijk mijn werk", href: "#software" },
    slides: [
      { src: "/images/hero/hero-1.jpg", alt: "Vrachtwagen langs de Nederlandse snelweg", caption: "Wegtransport" },
      { src: "/images/hero/hero-2.jpg", alt: "Intermodale containertrein op het spoor", caption: "Spoor & intermodaal" },
      { src: "/images/hero/hero-3.jpg", alt: "Containerterminal in de haven", caption: "Zeehaven & containers" },
      { src: "/images/hero/hero-4.jpg", alt: "Laadstations langs de snelweg in Nederland", caption: "Laadinfrastructuur" },
      { src: "/images/hero/hero-5.jpg", alt: "Haven- en industriegebied op de Maasvlakte", caption: "Havenindustrie" },
      { src: "/images/hero/hero-6.jpg", alt: "Vrachtwagen in stedelijke omgeving", caption: "Stedelijk transport" },
    ] as Slide[],
  },

  services: {
    eyebrow: "Diensten",
    title: "Consultancy & onderzoek",
    intro:
      "Van vraagstuk tot werkende oplossing: advies, data en software voor transport, logistiek en mobiliteit.",
    items: [
      {
        title: "Advies & onderzoek",
        body: "Vraagstukken rond verduurzaming, laadinfrastructuur en logistieke netwerken, onderbouwd met data en analyse.",
        icon: "compass",
      },
      {
        title: "Data & modellen",
        body: "Van open databronnen naar modellen en simulaties: ruimtegebruik, vlootopbouw, kosten en netwerken.",
        icon: "trending",
      },
      {
        title: "Software & dashboards",
        body: "Kaarten, viewers en dashboards die besluitvorming ondersteunen — gebouwd en live gezet, niet alleen beschreven.",
        icon: "code",
      },
      {
        title: "Programma & project",
        body: "Begeleiding van projecten en programma's, van pilot naar implementatie, inclusief samenwerking met partners.",
        icon: "kanban",
      },
      {
        title: "Open data & standaarden",
        body: "Werken met openbare bronnen en standaarden (NDW, RDW, PDOK, OCPI) zodat resultaten navolgbaar en herbruikbaar zijn.",
        icon: "layers",
      },
    ] as Service[],
  },

  /**
   * Open bronnen en standaarden waarop de analyses en tools zijn gebaseerd.
   * Bewust met de echte links erbij, zodat elke bewering na te lopen is.
   */
  sources: [
    {
      name: "NDW",
      desc: "Nationale Databank Wegverkeersgegevens: laadpunten, iVRI's, verkeers- en netwerkdata.",
      url: "https://www.ndw.nu/",
    },
    {
      name: "RDW open data",
      desc: "Voertuig- en parkeerdata, inclusief het Nationaal Parkeer Register.",
      url: "https://opendata.rdw.nl/",
    },
    {
      name: "PDOK",
      desc: "Geografische open data: grenzen, gebouwen, netwerken en achtergrondkaarten.",
      url: "https://www.pdok.nl/",
    },
    {
      name: "CBS",
      desc: "Statistiek over bevolking, bedrijven, vervoer en ruimte.",
      url: "https://www.cbs.nl/",
    },
    {
      name: "RVO — AanZET",
      desc: "Subsidieregeling voor zero-emissie vrachtwagens.",
      url: "https://www.rvo.nl/subsidies-financiering/aanzet",
    },
    {
      name: "NAL",
      desc: "Nationale Agenda Laadinfrastructuur: afspraken en cijfers over laadpunten.",
      url: "https://www.agendalaadinfrastructuur.nl/",
    },
    {
      name: "EV Roaming Foundation",
      desc: "OCPI-standaard voor het uitwisselen van laadpunt- en prijsdata.",
      url: "https://evroaming.org/",
    },
    {
      name: "Rijkswaterstaat",
      desc: "Weg-, water- en verkeersdata en projectinformatie.",
      url: "https://www.rijkswaterstaat.nl/",
    },
  ] as Source[],

  /**
   * Over mij — biografie, ervaring en opleiding zijn nog niet aangeleverd en
   * blijven daarom leeg (placeholder). Vul aan zodra de tekst er is.
   */
  about: {
    eyebrow: "Over",
    title: "Wie ik ben",
    slides: [
      {
        heading: "Profiel",
        body: "", // nog aan te leveren
      },
      {
        heading: "Ervaring",
        body: "", // nog aan te leveren
      },
      {
        heading: "Opleiding & achtergrond",
        body: "", // nog aan te leveren
      },
    ],
  },

  focus: {
    eyebrow: "Focusgebieden",
    title: "Waar ik aan werk",
    intro:
      "Dit zijn de gebieden waarin ik de afgelopen jaren kaarten, modellen en analyses heb gebouwd — en waarvoor ik opdrachten aanneem.",
    areas: [
      {
        title: "Duurzaam transport",
        body: "Zero-emissie, laadinfrastructuur en de zakelijke kant van verduurzaming.",
        items: [
          "Laadinfrastructuur voor personenauto's én logistiek",
          "Zero-emissie vrachtwagens en aanschafsubsidies",
          "Vrachtwagenheffing en tolnetwerken",
          "Verduurzaming van wagenparken",
        ],
      },
      {
        title: "Slim transport & stadslogistiek",
        body: "Logistieke stromen, ruimtegebruik en verkeersmanagement in de stad.",
        items: [
          "Stadslogistiek en ruimtegebruik",
          "Pakketpunten en last-mile netwerken",
          "Slimme verkeerslichten en prioriteit",
          "Parkeren, verkeersstromen en mobiliteitsdata",
        ],
      },
      {
        title: "Open data, modellen & datagovernance",
        body: "Open bronnen ontsluiten en er bruikbare instrumenten van maken.",
        items: [
          "Open data: NDW, RDW, PDOK/CBS, OCPI",
          "Modellen en simulatie van vloot en ruimte",
          "Dashboards en datavisualisatie",
          "Reproduceerbare en controleerbare analyses",
        ],
      },
    ] as FocusArea[],
  },

  approach: {
    eyebrow: "Aanpak",
    title: "Hoe ik werk",
    intro:
      "Van open databron naar instrument dat gebruikt wordt: in korte stappen, met werkende software als tussenresultaat.",
    steps: [
      {
        step: "01",
        title: "Data als vertrekpunt",
        body: "Openbare bronnen combineren tot één beeld van de werkelijkheid, met expliciete aannames en herleidbare cijfers.",
      },
      {
        step: "02",
        title: "Van analyse naar instrument",
        body: "Een kaart, model of dashboard in plaats van een rapport dat in een la verdwijnt — direct te gebruiken in het gesprek.",
      },
      {
        step: "03",
        title: "Open en reproduceerbaar",
        body: "Open standaarden en open data waar het kan, zodat resultaten navolgbaar zijn en niet afhankelijk van één leverancier.",
      },
      {
        step: "04",
        title: "Van pilot naar praktijk",
        body: "Samen met de betrokken organisaties doorontwikkelen tot het in de dagelijkse praktijk werkt.",
      },
    ] as ApproachStep[],
  },

  projects: {
    eyebrow: "Projecten",
    title: "Projecten & opdrachten",
    intro:
      "Hier komt een selectie van projecten en opdrachten, van meest recent naar oud, met opdrachtgever, periode en resultaat.",
    items: [] as { title: string; client: Maybe<string>; period: Maybe<string>; body: string }[],
  },

  /**
   * Software & prototypes — de live tools van Stephan. Elke kaart linkt naar de
   * werkende applicatie. Titels en omschrijvingen komen uit de apps zelf.
   */
  software: {
    eyebrow: "Software & prototypes",
    title: "Software & prototypes",
    intro:
      "Kaarten, modellen en dashboards die ik heb gebouwd rond logistiek, mobiliteit, energie en open data. Elke link gaat naar de werkende applicatie.",
    filters: ["Alles", "Kaarten", "Dashboards", "Modellen"],
    items: [
      {
        slug: "laadpalen",
        name: "Laadpalenviewer",
        desc: "Interactieve kaart van laadpunten in Nederland: personenauto-laadpunten (NDW OCPI) én logistieke laadpunten, per gemeente en provincie.",
        url: "https://laadpalen.laserraptorai.duckdns.org/",
        shot: "/images/software/laadpalen.webp",
        tags: ["Kaarten"],
      },
      {
        slug: "pakketpunten",
        name: "Pakketpuntenviewer",
        desc: "Alle 18.000+ pakketpunten en pakketautomaten van Nederland — DHL, PostNL, DPD, InPost, Budbee, GLS, Amazon en meer — op één kaart.",
        url: "https://pakketpunten.laserraptorai.duckdns.org/",
        shot: "/images/software/pakketpunten.webp",
        tags: ["Kaarten"],
      },
      {
        slug: "ruimtemodel",
        name: "Ruimtemodel Stadslogistiek",
        desc: "Model dat de benodigde ruimte voor logistieke activiteiten berekent, per voertuigtype en tijdvenster.",
        url: "https://ruimtemodel.laserraptorai.duckdns.org/",
        shot: "/images/software/ruimtemodel.webp",
        tags: ["Modellen"],
      },
      {
        slug: "fleetsim",
        name: "FleetSim",
        desc: "Simulatieplatform voor vlootbeheer en transportlogistiek: opbouw, inzet en kosten van een voertuigvloot.",
        url: "https://fleetsim.laserraptorai.duckdns.org/",
        shot: "/images/software/fleetsim.webp",
        tags: ["Modellen"],
      },
      {
        slug: "ev-charging",
        name: "EV Charging Price Viewer",
        desc: "Actuele laadprijzen (€/kWh, NDW OCPI) en brandstofprijzen (€/L) in Nederland, per gemeente met PDOK/CBS-grenzen.",
        url: "https://ev-charging.laserraptorai.duckdns.org/",
        shot: "/images/software/ev-charging.webp",
        tags: ["Kaarten"],
      },
      {
        slug: "vrachtwagenheffing",
        name: "Vrachtwagenheffing Netwerk",
        desc: "Kaart van het tolnetwerk voor vrachtwagens: secties, route- en kostenberekening en export naar GeoJSON of GeoPackage.",
        url: "https://vrachtwagenheffing.laserraptorai.duckdns.org/",
        shot: "/images/software/vrachtwagenheffing.webp",
        tags: ["Kaarten"],
      },
      {
        slug: "verkeerslichten",
        name: "Verkeerslichtenviewer",
        desc: "Kaart van intelligente verkeerslichten (iVRI) in Nederland, met locaties, prioriteitsklassen en statistieken uit het UDAP-netwerk.",
        url: "https://verkeerslichten.laserraptorai.duckdns.org/",
        shot: "/images/software/verkeerslichten.webp",
        tags: ["Kaarten"],
      },
      {
        slug: "parkeerdataviewer",
        name: "Parkeerdataviewer",
        desc: "Real-time parkeerbezetting van parkeergarages in Nederland: beschikbaarheid, bezettingsgraad en historische data uit het NPR/RDW-netwerk.",
        url: "https://parkeerdataviewer.laserraptorai.duckdns.org/",
        shot: "/images/software/parkeerdataviewer.webp",
        tags: ["Kaarten"],
      },
      {
        slug: "stadstwin",
        name: "Basis Stadstwin",
        desc: "Minimale digitale tweeling per Nederlandse gemeente: kies een gemeente en bekijk de open data op de kaart.",
        url: "https://stadstwin.laserraptorai.duckdns.org/",
        shot: "/images/software/stadstwin.webp",
        tags: ["Kaarten"],
      },
      {
        slug: "aanzet",
        name: "AanZET ZE-truck Prijstracker",
        desc: "Volgt de ontwikkeling van aanschafprijzen van zero-emissie vrachtwagens in Nederland op basis van AanZET-subsidiedata.",
        url: "https://aanzet.laserraptorai.duckdns.org/",
        shot: "/images/software/aanzet.webp",
        tags: ["Dashboards"],
      },
      {
        slug: "sportlaadpalen",
        name: "Sportlaadpalen",
        desc: "Dashboard met alle publieke laadpunten in Nederland en de vraag welke sportlocaties nog geen laadpunt hebben.",
        url: "https://sportlaadpalen.laserraptorai.duckdns.org/",
        shot: "/images/software/sportlaadpalen.webp",
        tags: ["Dashboards"],
      },
      {
        slug: "faillissementen",
        name: "Faillissementen wegvervoer",
        desc: "Faillissementen in SBI 49 (wegvervoer) afgezet tegen de dieselprijs — sectordashboard op open data.",
        url: "https://faillissementen.laserraptorai.duckdns.org/",
        shot: "/images/software/faillissementen.webp",
        tags: ["Dashboards"],
      },
      {
        slug: "anpr-utrecht",
        name: "ANPR Netherlands Analysis Dashboard",
        desc: "Analyse-dashboard op ANPR-data: verkeersstromen, herkomsten en patronen over een volledig jaar.",
        url: "https://anpr-utrecht.laserraptorai.duckdns.org/",
        shot: "/images/software/anpr-utrecht.webp",
        tags: ["Dashboards"],
      },
    ] as SoftwareItem[],
  },

  references: {
    eyebrow: "Referenties",
    title: "Referenties en aanbevelingen",
    quotes: [] as { quote: string; name: string; role: string }[],
  },

  footer: {
    photoCredits: "/images/hero/CREDITS.json",
    note: "Foto's: Wikimedia Commons (CC BY 2.0, CC BY 4.0, CC0).",
  },
} as const;

export type Site = typeof site;
