export type Language = 'en' | 'ar';

export interface TestimonialOfficer {
  name: string;
  country: string;
  avatar: string;
  rating: number;
  pros: string;
  cons: string;
  package: string;
}

export interface Package {
  name: string;
  duration: string;
  price: string;
  popular: string;
  items: string[];
  docUrl: string;
  paypalUrl: string;
}

export interface Translation {
  nav: {
    services: string;
    packages: string;
    stories: string;
    contact: string;
    freeConsult: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    viewPackages: string;
    bookConsult: string;
  };
  trust: {
    jci: string;
    gha: string;
    hospital: string;
    cases: string;
  };
  services: {
    badge: string;
    title: string;
    desc: string;
    pillar1: {
      title: string;
      desc: string;
      items: string[];
    };
    pillar2: {
      title: string;
      desc: string;
      items: string[];
    };
    pillar3: {
      title: string;
      desc: string;
      items: string[];
    };
    pillar4: {
      title: string;
      desc: string;
      items: string[];
    };
  };
  whyChina: {
    badge: string;
    title: string;
    desc: string;
    stat1: string;
    stat2: string;
    stat3: string;
    stat4: string;
    testimonial: string;
    patient: string;
  };
  packages: {
    badge: string;
    title: string;
    desc: string;
    package0: Package;
    package1: Package;
    package2: Package;
    package3: Package;
    viewDetails: string;
    book: string;
  };
  testimonials: {
    badge: string;
    title: string;
    desc: string;
    rating: string;
    recommendRate: string;
    officers: TestimonialOfficer[];
    prosLabel: string;
    consLabel: string;
    stats: {
      satisfaction: string;
      recommend: string;
      renewal: string;
    };
  };
  contact: {
    badge: string;
    title: string;
    desc: string;
    phone: string;
    email: string;
    wechat: string;
    telegram: string;
    form: {
      name: string;
      email: string;
      countryCode: string;
      phoneNumber: string;
      package: string;
      placeholder: string;
      options: string[];
      message: string;
      submit: string;
    };
  };
  footer: {
    tagline: string;
    tagline2: string;
    links: string;
    services: string;
    contact: string;
    privacy: string;
    terms: string;
  };
}

export interface Translations {
  en: Translation;
  ar: Translation;
}
