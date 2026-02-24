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
      badge: 'Trusted Global Medical Tourism Brand',
      title: 'World-Class Medical Resources',
      titleHighlight: 'One-Stop Medical Travel Service',
      subtitle: 'Connecting You with Top Global Hospitals · Professional Medical Consultation · Full-Service Support',
      description: 'Transform your health with preventive precision · Advanced Diagnostics × Traditional Chinese Medicine × Holistic Wellness',
      viewPackages: 'View Packages',
      bookConsult: 'Book Free Consultation',
      trust1: '✓ Official Partner of Mayo Clinic',
      trust2: '✓ Contracted with Cancer Institute Ariake Hospital',
      trust3: '✓ 10+ Years Medical Travel Experience'
    },
    trust: {
      jci: 'JCI Certified',
      gha: 'GHA Excellence',
      hospital: 'Top Hospital Partners',
      cases: '10,000+ Cases'
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
      desc: 'World-leading medical equipment, experienced experts, and competitive prices make China an emerging global destination for medical tourism.',
      stat1: '1/3 the cost of US/EU services',
      stat2: '#1 in MRI/CT equipment access',
      stat3: '5000+ international patients yearly',
      stat4: '100% patient satisfaction',
      testimonial: '"Chinese healthcare surprised me"',
      patient: '— Sarah M., US Patient'
    },
    packages: {
      badge: 'Packages',
      title: 'Choose Your Health Journey',
      desc: 'Three carefully designed packages for different health goals and budgets',
      package0: {
        name: 'Tea Subscription',
        duration: 'Monthly · $29',
        price: '$29',
        popular: 'Best Value',
        items: ['Personalized wellness tea bags (30 packs) - Value $25', 'Online TCM consultation (15 min) - Value $50', 'AI smart health assistant - Value $20', 'Exclusive member content - Value $15', 'Product discount benefits - Unlimited', 'Health records management - Value $10', 'Total value $120+ · Save 76%'],
        docUrl: '/docs/tea-subscription-en.pdf',
        paypalUrl: 'https://www.paypal.com/paypalme/mediodyssey/99'
      },
      package1: {
        name: 'Experience Package',
        duration: 'Half-day · 3-4 hours',
        price: '$199',
        popular: 'Most Popular',
        items: ['[Assessment] TCM Constitution (45 min): AI tongue + smart pulse + 60+ survey', '[Screening] Basic Health Check (30 min): 10-item blood panel + body composition', '[Therapy] TCM Experience (60 min): Doctor consult + acupuncture + massage + cupping', '[Service] Medical interpreter + TCM gift set + 3 edited photos', '[Bonus] 365-day online TCM consultation'],
        docUrl: '/docs/package-experience-en.pdf',
        paypalUrl: 'https://www.paypal.com/paypalme/mediodyssey/199'
      },
      package2: {
        name: 'Discovery Journey',
        duration: '3 days · Intro to Eastern Medicine',
        price: '$3,900',
        popular: 'Classic',
        items: ['[Includes ALL Experience Package services]', '+ Full Health Screening: MRI/CT + comprehensive blood work', '+ Extended TCM Therapy: 3 sessions including acupuncture & massage', '+ Cultural Experience: Tea ceremony + Tai Chi + Guqin', '+ 4-star hotel accommodation (2 nights)', '+ Airport transfers included', '+ Extended 365-day online TCM consultation'],
        docUrl: '/docs/package-discovery-en.pdf',
        paypalUrl: 'https://www.paypal.com/paypalme/mediodyssey/3900'
      },
      package3: {
        name: 'Royal Journey',
        duration: '14 days · Ultimate bespoke experience',
        price: '$23,500',
        popular: 'Luxury',
        items: ['[Includes ALL Discovery Journey services]', '+ Premium Health Screening: Full genome + PET-CT', '+ Master Physician Consultation (Top-tier specialist)', '+ Royal Cultural Experience: Exclusive access + VIP treatment', '+ Luxury suite accommodation (13 nights)', '+ Private car + Personal concierge', '+ Private jet transfer (optional)', '+ Lifetime VIP online TCM consultation'],
        docUrl: '/docs/package-royal-en.pdf',
        paypalUrl: 'https://www.paypal.com/paypalme/mediodyssey/23500'
      },
      viewDetails: 'View Details',
      book: 'Book Now'
    },
    testimonials: {
      badge: 'Testimonials',
      title: 'What Our Experience Officers Say',
      desc: 'Real reviews from our certified experience officers',
      rating: '4.8/5',
      recommendRate: '94%',
      officers: [
        {
          name: 'Sarah Mitchell',
          country: 'United Kingdom',
          avatar: 'https://i.pravatar.cc/150?img=5',
          rating: 5,
          pros: 'The AI tongue diagnosis was incredibly accurate. The tea quality is exceptional and the monthly health tips are very practical.',
          cons: 'Would love more flavor variety in the tea subscription.',
          package: 'Tea Subscription'
        },
        {
          name: 'Hans Mueller',
          country: 'Germany',
          avatar: 'https://i.pravatar.cc/150?img=11',
          rating: 5,
          pros: 'The $199 Experience Package exceeded expectations. Professional medical interpreter, top-notch facilities, and the acupuncture session relieved my chronic back pain.',
          cons: 'The half-day felt a bit rushed. Would prefer a full day option.',
          package: 'Experience Package'
        },
        {
          name: 'Fatima Al-Rashid',
          country: 'UAE',
          avatar: 'https://i.pravatar.cc/150?img=9',
          rating: 4,
          pros: 'The cultural immersion with Tai Chi and tea ceremony was transformative. Luxury accommodations and VIP treatment throughout.',
          cons: 'The Discovery Journey is quite expensive, though worth it for the comprehensive care.',
          package: 'Discovery Journey'
        },
        {
          name: 'Omar Hassan',
          country: 'Saudi Arabia',
          avatar: 'https://i.pravatar.cc/150?img=13',
          rating: 5,
          pros: 'Exceptional value for money. The 365-day online consultation is invaluable. I\'ve saved thousands compared to local TCM treatments.',
          cons: 'Initial shipping took longer than expected, but now it arrives promptly every month.',
          package: 'Tea Subscription'
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
        options: ['Tea Subscription (Monthly) - Best Value', 'Discovery Journey (3 days)', 'Experience Package (Half-day) - Most Popular', 'Royal Journey (14 days)', 'Need recommendation'],
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
      title: 'Real Service Cases',
      subtitle: 'Ensuring every patient receives the most suitable medical treatment abroad',
      featured: 'Featured Case',
      doctors: 'Expert Doctors',
      outcome: 'Treatment Outcome',
      viewDetail: 'View Full Story',
      ctaText: 'Every patient deserves the best medical care',
      ctaButton: 'Get Free Consultation',
      stats: [
        { value: '2,000+', label: 'Successful Cases' },
        { value: '98%', label: 'Success Rate' },
        { value: 'Top 10', label: 'Global Hospitals' },
        { value: '24/7', label: 'Medical Support' }
      ],
      cases: [
        {
          id: 1,
          title: '17-Year-Old with Rare Thymoma Seeks Treatment in the US',
          hospital: 'Mayo Clinic, USA',
          location: 'Shanghai, China',
          summary: 'Domestic evaluation indicated extremely high surgical risk. The US team successfully removed the tumor through multidisciplinary collaboration, discharged after 5 days.',
          duration: 'Treatment: 21 days',
          outcome: 'Good postoperative recovery, no complications',
          tags: ['Rare Disease', 'Thoracic Surgery', 'Multidisciplinary'],
          stats: { doctors: 6, surgeries: 1, days: 5 },
          image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80',
          featured: true
        },
        {
          id: 2,
          title: 'Breast Cancer Patient Receives Precision Treatment in Japan',
          hospital: 'Cancer Institute Ariake Hospital, Japan',
          location: 'Shanghai, China',
          summary: '7 months of systematic treatment, successful breast-conserving surgery, now returned to normal life.',
          duration: 'Treatment: 7 months',
          outcome: 'Tumor completely eliminated, breast preserved',
          tags: ['Breast Cancer', 'Breast Conservation', 'Combined Therapy'],
          stats: { doctors: 4, surgeries: 1, days: 210 },
          image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
          featured: false
        },
        {
          id: 3,
          title: 'Gastric Cancer Patient Receives Proton Therapy in Germany',
          hospital: 'Heidelberg University Hospital, Germany',
          location: 'Shanghai, China',
          summary: 'Proton and heavy ion precision treatment, maximizing protection of surrounding healthy tissue.',
          duration: 'Treatment: 6 weeks',
          outcome: 'Tumor shrunk by 60%, good quality of life',
          tags: ['Gastric Cancer', 'Proton Therapy', 'Precision Medicine'],
          stats: { doctors: 5, surgeries: 0, days: 42 },
          image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
          featured: false
        },
        {
          id: 4,
          title: 'Child with Leukemia Enrolls in US Clinical Trial',
          hospital: 'Memorial Sloan Kettering Cancer Center, USA',
          location: 'Shanghai, China',
          summary: 'Participated in CAR-T cell therapy clinical trial, accessing the latest treatment protocol.',
          duration: 'Treatment: 12 months',
          outcome: 'Complete remission, ongoing follow-up',
          tags: ['Pediatric Cancer', 'Clinical Trial', 'CAR-T Therapy'],
          stats: { doctors: 8, surgeries: 0, days: 365 },
          image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=800&q=80',
          featured: false
        }
      ]
    }
  },
  ar: {
    nav: {
      services: 'الخدمات',
      packages: 'الباقات',
      stories: 'القصص',
      contact: 'اتصل بنا',
      freeConsult: 'استشارة مجانية'
    },
    hero: {
      badge: 'علامة تجارية موثوقة للسياحة الطبية',
      title: 'موارد طبية عالمية المستوى',
      titleHighlight: 'خدمة السفر الطبي المتكاملة',
      subtitle: 'نوصلك بأفضل المستشفيات العالمية · استشارات طبية احترافية · دعم متكامل',
      description: 'رحلة لتحويل جودة حياتك · فحص صحي دقيق × العلاج الصيني التقليدي × غمر ثقافي',
      viewPackages: 'عرض الباقات',
      bookConsult: 'حجز استشارة مجانية',
      trust1: '✓ شريك رسمي لعيادة مايو',
      trust2: '✓ متعاقدون مع مستشفى كانسر إنستيتيوت أرياكي',
      trust3: '✓ أكثر من 10 سنوات خبرة في السفر الطبي'
    },
    trust: {
      jci: 'معتمد JCI',
      gha: 'GHA للتميز',
      hospital: 'شراكات مستشفيات رائدة',
      cases: 'أكثر من 10,000 حالة'
    },
    services: {
      badge: 'خدماتنا',
      title: 'أربع ركائز للصحة',
      desc: 'دمج أفضل ما في الطب الشرقي والغربي لإدارة صحية شاملة',
      pillar1: {
        title: 'فحص صحي دقيق',
        desc: 'PET-CT، MRI، اختبارات جينية بأحدث المعدات',
        items: ['فحص شامل للسرطان', 'تقييم القلب والأوعية', 'تحليل جيني']
      },
      pillar2: {
        title: 'العلاج الصيني التقليدي',
        desc: 'حكمة شرقية عريقة مع علاج مخصص للتكوين الجسدي',
        items: ['تشخيص التكوين', 'إبر ومساج', 'أعشاب طبية']
      },
      pillar3: {
        title: 'الغمر الثقافي',
        desc: 'طقوس الشاي، تايتشي، الخط العربي - ممارسات شرقية للجسد والعقل',
        items: ['تذوق شاي خاص', 'تايتشي وتشيغونغ', 'قيتشين والخط']
      },
      pillar4: {
        title: 'خدمة الكونسيرج',
        desc: 'من التأشيرة إلى المغادرة، خدمة حصرية على مدار الساعة',
        items: ['مساعدة التأشيرة', 'نقل VIP من المطار', 'دعم متعدد اللغات']
      }
    },
    whyChina: {
      badge: 'لماذا الصين؟',
      title: 'لماذا تختار الصين؟',
      desc: 'معدات طبية رائدة عالمياً، خبراء ذوي خبرة، وأسعار تنافسية تجعل الصين وجهة صاعدة للسياحة الطبية العالمية.',
      stat1: 'ثلث تكلفة خدمات الاتحاد الأوروبي',
      stat2: 'الأولى في توفير أجهزة MRI/CT',
      stat3: 'أكثر من 5000 مريض دولي سنوياً',
      stat4: 'رضا المرضى 100%',
      testimonial: '"الرعاية الصحية الصينية فاجأتني"',
      patient: '— سارة م.، مريضة أمريكية'
    },
    packages: {
      badge: 'الباقات',
      title: 'اختر رحلتك الصحية',
      desc: 'أربع باقات مصممة بعناية لأهداف وميزانيات صحية مختلفة',
      package0: {
        name: 'اشتراك العضوية',
        duration: 'شهرياً · $29',
        price: '$29',
        popular: 'أفضل قيمة',
        items: ['أكياس شاي العافية المخصصة (30 كيس) - قيمة $25', 'استشارة الطب الصيني عبر الإنترنت (15 دقيقة) - قيمة $50', 'مساعد الصحة الذكي بالذكاء الاصطناعي - قيمة $20', 'محتوى حصري للأعضاء - قيمة $15', 'خصومات على المنتجات - غير محدودة', 'إدارة السجلات الصحية - قيمة $10', 'القيمة الإجمالية $120+ · وفّر 76%'],
        docUrl: '/docs/tea-subscription-ar.pdf',
        paypalUrl: 'https://www.paypal.com/paypalme/mediodyssey/99'
      },
      package1: {
        name: 'باقة التجربة',
        duration: 'نصف يوم · 3-4 ساعات',
        price: '$199',
        popular: 'الأكثر شعبية',
        items: ['[تقييم] تقييم تكوين الطب الصيني (45 دقيقة): تشخيص الذكاء الاصطناعي للسان + قياس النبض الذكي', '[فحص] فحص صحي أساسي (30 دقيقة): 10 تحليلات دم + تحليل التركيب الجسدي', '[علاج] تجربة العلاج بالطب الصيني (60 دقيقة): استشارة + وخز إبر + تدليك + حجامة', '[خدمة] مترجم طبي + طقم هدايا + 3 صور مُحسّنة', '[مكافأة] استشارة الطب الصيني عبر الإنترنت لمدة 365 يوماً'],
        docUrl: '/docs/package-experience-ar.pdf',
        paypalUrl: 'https://www.paypal.com/paypalme/mediodyssey/199'
      },
      package2: {
        name: 'رحلة الاكتشاف',
        duration: '3 أيام · مقدمة للطب الشرقي',
        price: '$3,900',
        popular: 'كلاسيكي',
        items: ['[يشمل جميع خدمات باقة التجربة]', '+ فحص صحي شامل: MRI/CT + تحاليل دم شاملة', '+ علاج بالطب الصيني موسع: 3 جلسات وخز إبر وتدليك', '+ تجربة ثقافية: طقوس الشاي + تايتشي + قيتشين', '+ إقامة في فندق 4 نجوم (ليلتان)', '+ نقل من وإلى المطار', '+ استشارة الطب الصيني عبر الإنترنت لمدة 365 يوماً موسعة'],
        docUrl: '/docs/package-discovery-ar.pdf',
        paypalUrl: 'https://www.paypal.com/paypalme/mediodyssey/3900'
      },
      package3: {
        name: 'الرحلة الملكية',
        duration: '14 يوماً · تجربة فاخرة مخصصة',
        price: '$23,500',
        popular: 'فاخر',
        items: ['[يشمل جميع خدمات رحلة الاكتشاف]', '+ فحص صحي ممتاز: الجينوم الكامل + PET-CT', '+ استشارة طبيب كبير (أفضل المتخصصين)', '+ تجربة ثقافية ملكية: وصول حصري + معاملة VIP', '+ إقامة في جناح فاخر (13 ليلة)', '+ سيارة خاصة + مساعد شخصي', '+ نقل بطائرة خاصة (اختياري)', '+ استشارة VIP مدى الحياة'],
        docUrl: '/docs/package-royal-ar.pdf',
        paypalUrl: 'https://www.paypal.com/paypalme/mediodyssey/23500'
      },
      viewDetails: 'عرض التفاصيل',
      book: 'احجز الآن'
    },
    testimonials: {
      badge: 'آراء العملاء',
      title: 'ماذا يقول ضباط التجربة لدينا',
      desc: 'تقييمات حقيقية من ضباط التجربة المعتمدين لدينا',
      rating: '4.8/5',
      recommendRate: '94%',
      officers: [
        {
          name: 'سارة ميتشيل',
          country: 'المملكة المتحدة',
          avatar: 'https://i.pravatar.cc/150?img=5',
          rating: 5,
          pros: 'كان تشخيص لسان الذكاء الاصطناعي دقيقاً للغاية. جودة الشاي استثنائية، والنصائح الصحية الشهرية عملية للغاية.',
          cons: 'أتمنى المزيد من تنوع النكهات في اشتراك الشاي.',
          package: 'اشتراك العضوية'
        },
        {
          name: 'هانز مولر',
          country: 'ألمانيا',
          avatar: 'https://i.pravatar.cc/150?img=11',
          rating: 5,
          pros: 'تجاوزت باقة التجربة بقيمة 199 دولار التوقعات. مترجم طبي محترف، ومرافق من الدرجة الأولى، وجلسة الوخز بالإبر خففت آلام ظهري المزمنة.',
          cons: 'شعرت أن نصف اليوم كان قصيراً بعض الشيء. أفضل خيار يوم كامل.',
          package: 'باقة التجربة'
        },
        {
          name: 'فاطمة الرشيد',
          country: 'الإمارات العربية المتحدة',
          avatar: 'https://i.pravatar.cc/150?img=9',
          rating: 4,
          pros: 'كان الغمر الثقافي مع تايتشي وطقوس الشاي محولاً. إقامة فاخرة ومعاملة VIP على مدار الرحلة.',
          cons: 'رحلة الاكتشاف مرتفعة الثمن، لكنها تستحق ذلك نظراً للرعاية الشاملة.',
          package: 'رحلة الاكتشاف'
        },
        {
          name: 'عمر حسن',
          country: 'المملكة العربية السعودية',
          avatar: 'https://i.pravatar.cc/150?img=13',
          rating: 5,
          pros: 'قيمة استثنائية مقابل المال. استشارة مدة 365 يوم عبر الإنترنت لا تقدر بثمن. وفرت آلاف الدولارات مقارنة بالعلاج الصيني المحلي.',
          cons: 'استغرقت الشحنة الأولى وقتاً أطول من المتوقع، لكن الآن تصل في موعدها كل شهر.',
          package: 'اشتراك العضوية'
        }
      ],
      prosLabel: 'ما أعجبهم',
      consLabel: 'مجالات التحسين',
      stats: {
        satisfaction: '4.8/5',
        recommend: '94%',
        renewal: '67%'
      }
    },
    contact: {
      badge: 'اتصل بنا',
      title: 'ابدأ رحلتك الصحية',
      desc: 'املأ النموذج وسيتواصل معك مستشارنا الصحي خلال 24 ساعة',
      phone: 'الهاتف',
      email: 'البريد الإلكتروني',
      wechat: 'ويتشات',
      telegram: 'تلغرام',
      form: {
        name: 'الاسم *',
        email: 'البريد الإلكتروني *',
        countryCode: 'رمز الدولة',
        phoneNumber: 'رقم الهاتف',
        package: 'الباقة المهتم بها',
        placeholder: 'اختر...',
        options: ['اشتراك الشاي (شهرياً) - أفضل قيمة', 'الاكتشاف (3 أيام)', 'باقة التجربة (نصف يوم) - الأكثر شعبية', 'الملكية (14 يوماً)', 'بحاجة لتوصية'],
        message: 'الرسالة / معلومات الاتصال',
        submit: 'إرسال الاستفسار'
      }
    },
    footer: {
      tagline: 'الدقة الغربية × الحكمة الشرقية',
      tagline2: 'ابدأ رحلتك لتحويل حياتك',
      links: 'روابط سريعة',
      services: 'خدماتنا',
      contact: 'اتصل بنا',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة'
    },
    successCases: {
      badge: 'قصص نجاح حقيقية',
      title: 'حالات خدمة حقيقية',
      subtitle: 'ضمان حصول كل مريض على العلاج الطبي الأنسب في الخارج',
      featured: 'حالة مميزة',
      doctors: 'أطباء خبراء',
      outcome: 'نتيجة العلاج',
      viewDetail: 'عرض القصة الكاملة',
      ctaText: 'كل مريض يستحق أفضل رعاية طبية',
      ctaButton: 'احصل على استشارة مجانية',
      stats: [
        { value: '+2,000', label: 'حالة ناجحة' },
        { value: '98%', label: 'معدل النجاح' },
        { value: 'أفضل 10', label: 'مستشفيات عالمية' },
        { value: '24/7', label: 'دعم طبي' }
      ],
      cases: [
        {
          id: 1,
          title: 'شاب يبلغ 17 عامًا يعاني من ورم غدي نخاعي نادر يذهب للعلاج في الولايات المتحدة',
          hospital: 'مايو كلينيك، الولايات المتحدة',
          location: 'شنغهاي، الصين',
          summary: 'أشارت التقييمات المحلية إلى مخاطر جراحية عالية للغاية. نجح الفريق الأمريكي في إزالة الورم من خلال التعاون متعدد التخصصات، وخرج المريض بعد 5 أيام.',
          duration: 'العلاج: 21 يومًا',
          outcome: 'تعافٍ جيد بعد العملية، لا مضاعفات',
          tags: ['أمراض نادرة', 'جراحة الصدر', 'متعدد التخصصات'],
          stats: { doctors: 6, surgeries: 1, days: 5 },
          image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80',
          featured: true
        },
        {
          id: 2,
          title: 'مريضة سرطان الثدي تتلقى علاجًا دقيقًا في اليابان',
          hospital: 'مستشفى كانسر إنستيتيوت أرياكي، اليابان',
          location: 'شنغهاي، الصين',
          summary: '7 أشهر من العلاج المنظم، عملية حفظ الثدي ناجحة، عادت الآن إلى الحياة الطبيعية.',
          duration: 'العلاج: 7 أشهر',
          outcome: 'القضاء التام على الورم، حفظ الثدي',
          tags: ['سرطان الثدي', 'حفظ الثدي', 'علاج مشترك'],
          stats: { doctors: 4, surgeries: 1, days: 210 },
          image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
          featured: false
        },
        {
          id: 3,
          title: 'مريض سرطان المعدة يتلقى علاج البروتونات في ألمانيا',
          hospital: 'مستشفى جامعة هايدلبرغ، ألمانيا',
          location: 'شنغهاي، الصين',
          summary: 'علاج البروتون والأيونات الثقيلة الدقيق، لحماية الأنسجة السليمة المحيطة بأقصى درجة.',
          duration: 'العلاج: 6 أسابيع',
          outcome: 'انكماش الورم بنسبة 60٪، جودة حياة جيدة',
          tags: ['سرطان المعدة', 'علاج البروتونات', 'الطب الدقيق'],
          stats: { doctors: 5, surgeries: 0, days: 42 },
          image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
          featured: false
        },
        {
          id: 4,
          title: 'طفل مصاب بسرطان الدم يلتحق بتجربة سريرية في الولايات المتحدة',
          hospital: 'مركز ميموريال سلون كيترينج للسرطان، الولايات المتحدة',
          location: 'شنغهاي، الصين',
          summary: 'شارك في تجربة علاج خلايا CAR-T السريرية، للوصول إلى أحدث بروتوكول علاج.',
          duration: 'العلاج: 12 شهرًا',
          outcome: 'تحقيق الشفاء التام، المتابعة المستمرة',
          tags: ['سرطان الأطفال', 'تجربة سريرية', 'علاج CAR-T'],
          stats: { doctors: 8, surgeries: 0, days: 365 },
          image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=800&q=80',
          featured: false
        }
      ]
    }
  }
};
