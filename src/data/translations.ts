import type { Translations } from '../types';

export const translations: Translations = {
  en: {
    nav: {
      services: 'Services',
      packages: 'Packages',
      stories: 'Stories',
      contact: 'Contact',
      freeConsult: 'Free Consultation'
    },
    hero: {
      badge: 'Premium Medical Tourism to China',
      title: 'Discover Eastern Wellness',
      titleHighlight: 'In the Heart of China',
      subtitle: 'World-Class Diagnostics × Authentic TCM × Cultural Immersion · Your Journey to Holistic Health',
      description: 'Transform your health with preventive precision · Advanced Diagnostics × Traditional Chinese Medicine × Holistic Wellness',
      viewPackages: 'View Packages',
      bookConsult: 'Book Free Consultation',
      trust1: '✓ Partner of China\'s Top Tertiary Hospitals',
      trust2: '✓ JCI Certified Medical Facilities',
      trust3: '✓ Dedicated International Patient Services'
    },
    trust: {
      jci: 'JCI Certified Facilities',
      gha: 'International Standards',
      hospital: 'Top Tertiary Hospitals',
      cases: '500+ International Guests'
    },
    services: {
      badge: 'Our Services',
      title: 'Four Pillars of Health',
      desc: 'Combining the best of Eastern and Western medicine for comprehensive health management',
      pillar1: {
        title: 'Precision Health Screening',
        desc: 'PET-CT, MRI, genetic testing with cutting-edge equipment',
        items: ['Full-body cancer screening', 'Cardiovascular assessment', 'Genetic analysis']
      },
      pillar2: {
        title: 'TCM Wellness',
        desc: 'Ancient Eastern wisdom with personalized constitution therapy',
        items: ['Constitution diagnosis', 'Acupuncture & massage', 'Herbal remedies']
      },
      pillar3: {
        title: 'Cultural Immersion',
        desc: 'Tea ceremony, Tai Chi, calligraphy - mind-body Eastern practices',
        items: ['Private tea tasting', 'Tai Chi & Qigong', 'Guqin & calligraphy']
      },
      pillar4: {
        title: 'Concierge Service',
        desc: 'From visa to departure, 24/7 dedicated butler service',
        items: ['Visa assistance', 'VIP airport transfers', 'Multilingual support']
      }
    },
    whyChina: {
      badge: 'Why China',
      title: 'Why Choose China?',
      desc: 'World-class medical infrastructure, millennia of Traditional Chinese Medicine wisdom, and competitive pricing make China an emerging destination for discerning wellness travelers.',
      stat1: 'Significant cost savings vs US/EU',
      stat2: 'Leading medical device infrastructure',
      stat3: '5000+ years of TCM practice',
      stat4: '96% guest satisfaction rate',
      testimonial: '"The integration of ancient wisdom and modern medicine exceeded all expectations"',
      patient: '— Sarah M., UK Executive'
    },
    packages: {
      badge: 'Packages',
      title: 'Choose Your Health Journey',
      desc: 'Three carefully designed packages for different wellness goals and budgets. All packages include bilingual support and personalized care.',
      package0: {
        name: 'Essential Wellness',
        duration: '2 days · 1 night',
        price: '$999',
        popular: 'Best Value',
        items: ['Comprehensive Health Screening: Blood work, ECG, ultrasound, body composition analysis', 'TCM Constitution Assessment (45 min): Tongue & pulse diagnosis + personalized wellness plan', 'Authentic TCM Therapy Session (60 min): Acupuncture or massage + cupping', 'Cultural Welcome: Private tea ceremony experience', 'Concierge Service: Airport pickup, bilingual coordinator, 4-star hotel (1 night)', '365-day online TCM follow-up consultation'],
        docUrl: '/docs/package-essential-en.pdf',
        paypalUrl: 'https://www.paypal.com/paypalme/mediodyssey/999'
      },
      package1: {
        name: 'Discovery Journey',
        duration: '3 days · 2 nights',
        price: '$2,900',
        popular: 'Most Popular',
        items: ['[Includes ALL Essential Wellness services]', '+ Advanced Health Screening: MRI/CT scan + comprehensive blood panel', '+ Extended TCM Therapy: 3 sessions including acupuncture, massage & herbal consultation', '+ Deep Cultural Immersion: Tai Chi class + Guqin music experience + authentic cuisine', '+ Premium Accommodation: 4-star hotel (2 nights) with wellness amenities', '+ Professional Photography: Document your wellness journey', '+ Priority medical interpretation throughout'],
        docUrl: '/docs/package-discovery-en.pdf',
        paypalUrl: 'https://www.paypal.com/paypalme/mediodyssey/2900'
      },
      package2: {
        name: 'Premium Journey',
        duration: '7 days · 6 nights',
        price: '$6,800',
        popular: 'Comprehensive',
        items: ['[Includes ALL Discovery Journey services]', '+ Executive Health Screening: Full genome analysis + PET-CT + cardiac evaluation', '+ Personalized TCM Week: Daily treatments tailored to your constitution', '+ Exclusive Cultural Access: Private sessions with TCM masters + behind-scenes hospital tour', '+ Luxury Accommodation: 5-star wellness hotel (6 nights)', '+ Private Transportation: Dedicated car and driver', '+ VIP Concierge: Personal wellness coordinator 24/7'],
        docUrl: '/docs/package-premium-en.pdf',
        paypalUrl: 'https://www.paypal.com/paypalme/mediodyssey/6800'
      },
      package3: {
        name: 'Royal Journey',
        duration: '14 days · 13 nights · Fully Bespoke',
        price: '$15,000',
        popular: 'Ultimate Experience',
        items: ['[Fully customized based on your health goals]', '+ Ultra-Premium Screening: Full body MRI + comprehensive genetic profiling + specialist consultations', '+ Master Physician Care: Personal TCM doctor throughout your stay', '+ Exclusive Experiences: Private jet transfer (optional), royal-level cultural immersion', '+ Ultra-Luxury Accommodation: Presidential suite or private villa (13 nights)', '+ Dedicated Team: Personal concierge, private chef, translator', '+ Lifetime VIP Access: Permanent online TCM support + annual check-up priority'],
        docUrl: '/docs/package-royal-en.pdf',
        paypalUrl: 'https://www.paypal.com/paypalme/mediodyssey/15000'
      },
      viewDetails: 'View Details',
      book: 'Book Now'
    },
    testimonials: {
      badge: 'Testimonials',
      title: 'What Our Guests Say',
      desc: 'Real experiences from international travelers who discovered wellness in China',
      rating: '4.9/5',
      recommendRate: '96%',
      officers: [
        {
          name: 'Sarah Mitchell',
          country: 'United Kingdom',
          avatar: 'https://i.pravatar.cc/150?img=5',
          rating: 5,
          pros: 'The integrated approach combining Western diagnostics with TCM was eye-opening. The AI tongue diagnosis was incredibly accurate, and my personalized treatment plan addressed issues my London doctors missed.',
          cons: 'Wish I had booked a longer stay to explore more of Shanghai.',
          package: 'Discovery Journey'
        },
        {
          name: 'Hans Mueller',
          country: 'Germany',
          avatar: 'https://i.pravatar.cc/150?img=11',
          rating: 5,
          pros: 'The $199 Experience Package exceeded all expectations. Professional medical interpreter, world-class facilities, and the acupuncture session relieved my chronic back pain I\'ve had for years.',
          cons: 'The half-day felt a bit rushed. Would prefer a full day option next time.',
          package: 'Experience Package'
        },
        {
          name: 'Fatima Al-Rashid',
          country: 'UAE',
          avatar: 'https://i.pravatar.cc/150?img=9',
          rating: 5,
          pros: 'The cultural immersion with private Tai Chi and tea ceremony was transformative. Finally experienced authentic TCM unavailable back home. Luxury accommodations and VIP treatment throughout.',
          cons: 'The Discovery Journey requires investment, but absolutely worth it for the comprehensive care and memories.',
          package: 'Discovery Journey'
        },
        {
          name: 'Omar Hassan',
          country: 'Saudi Arabia',
          avatar: 'https://i.pravatar.cc/150?img=13',
          rating: 5,
          pros: 'Exceptional value for money. Full health screening detected early issues my local doctors missed. The 365-day online TCM consultation continues to support my wellness journey. Saved thousands compared to similar care in Dubai.',
          cons: 'Wish I had discovered MediOdyssey sooner. Planning my second visit already.',
          package: 'Discovery Journey'
        }
      ],
      prosLabel: 'What They Loved',
      consLabel: 'Areas for Improvement',
      stats: {
        satisfaction: '4.8/5',
        recommend: '94%',
        renewal: '67%'
      }
    },
    contact: {
      badge: 'Contact Us',
      title: 'Start Your Health Journey',
      desc: 'Fill out the form and our health advisor will contact you within 24 hours',
      phone: 'Phone',
      email: 'Email',
      wechat: 'WeChat',
      telegram: 'Telegram',
      form: {
        name: 'Name *',
        email: 'Email *',
        countryCode: 'Country Code',
        phoneNumber: 'Phone Number',
        package: 'Interested Package',
        placeholder: 'Select...',
        options: ['Essential Wellness (2 days) - Best Value', 'Discovery Journey (3 days) - Most Popular', 'Premium Journey (7 days) - Comprehensive', 'Royal Journey (14 days) - Ultimate', 'Need recommendation - Help me choose'],
        message: 'Message/Contact',
        submit: 'Submit Inquiry'
      }
    },
    footer: {
      tagline: 'Western Precision × Eastern Wisdom',
      tagline2: 'Begin your journey to transform your life',
      links: 'Quick Links',
      services: 'Services',
      contact: 'Contact',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service'
    },
    successCases: {
      badge: 'Real Success Stories',
      title: 'Transformative Health Journeys',
      subtitle: 'International guests discovering the power of Eastern wellness and Western precision in China',
      featured: 'Featured Story',
      doctors: 'Expert Practitioners',
      outcome: 'Health Outcome',
      viewDetail: 'View Full Story',
      ctaText: 'Begin your own transformation today',
      ctaButton: 'Get Free Consultation',
      stats: [
        { value: '500+', label: 'International Guests' },
        { value: '96%', label: 'Satisfaction Rate' },
        { value: 'Top Tier', label: 'Hospital Partners' },
        { value: '24/7', label: 'Concierge Support' }
      ],
      cases: [
        {
          id: 1,
          title: 'British Executive Reverses Chronic Fatigue with TCM in Shanghai',
          hospital: 'Shanghai TCM Hospital International Department',
          location: 'Shanghai, China',
          summary: '45-year-old London executive suffering from chronic fatigue and insomnia for 3 years. After 5-day integrated TCM program including acupuncture, herbal therapy, and Qi Gong, energy levels restored and sleep quality dramatically improved.',
          duration: 'Program: 5 days',
          outcome: 'Energy restored, sleeps 7+ hours nightly, continues monthly TCM consultations online',
          tags: ['TCM', 'Chronic Fatigue', 'Executive Wellness'],
          stats: { doctors: 3, surgeries: 0, days: 5 },
          image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
          featured: true
        },
        {
          id: 2,
          title: 'UAE Royal Family Member Discovers Authentic Chinese Wellness',
          hospital: 'Beijing Guang\'anmen Hospital',
          location: 'Beijing, China',
          summary: 'Seeking authentic traditional Chinese medicine unavailable in the Middle East. Completed comprehensive health screening followed by personalized TCM constitution therapy and exclusive cultural immersion including private Tai Chi with a master.',
          duration: 'Program: 7 days',
          outcome: 'Constitution rebalanced, stress reduced, established annual wellness retreat tradition',
          tags: ['TCM', 'Cultural Immersion', 'Royal Experience'],
          stats: { doctors: 4, surgeries: 0, days: 7 },
          image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80',
          featured: false
        },
        {
          id: 3,
          title: 'German Engineer\'s Preventive Health Discovery',
          hospital: 'Fudan University Shanghai Cancer Center',
          location: 'Shanghai, China',
          summary: 'Annual executive health screening detected early-stage polyp that was missed in German check-up. Minimally invasive procedure completed same day. Also discovered benefits of acupuncture for desk-related back pain.',
          duration: 'Program: 3 days',
          outcome: 'Early condition resolved, back pain eliminated, now recommends China health checks to colleagues',
          tags: ['Preventive Screening', 'Early Detection', 'Medical Tourism'],
          stats: { doctors: 2, surgeries: 1, days: 3 },
          image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
          featured: false
        },
        {
          id: 4,
          title: 'American Yoga Instructor\'s Journey to Holistic Healing',
          hospital: 'Longhua Hospital Shanghai',
          location: 'Shanghai, China',
          summary: 'Chronic digestive issues unresolved by Western medicine. Found relief through integrated approach combining functional medicine diagnostics with TCM dietary therapy and acupuncture. Deepened understanding through tea ceremony and meditation practices.',
          duration: 'Program: 10 days',
          outcome: 'Digestive symptoms resolved, incorporates TCM principles into yoga practice and teaching',
          tags: ['Integrative Medicine', 'Digestive Health', 'Holistic Wellness'],
          stats: { doctors: 3, surgeries: 0, days: 10 },
          image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
          featured: false
        }
      ]
    }
  }
};
