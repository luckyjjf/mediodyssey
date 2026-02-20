import React from 'react';
import { 
  Heart, 
  Microscope, 
  Activity,
  Landmark,
  ConciergeBell,
  Globe,
  Check,
  Star,
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Menu,
  X,
  ChevronRight,
  Calendar,
  Languages
} from 'lucide-react';

// Translations
const translations = {
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
      title: 'MediOdyssey',
      subtitle: 'Where Western Precision Meets Eastern Wisdom',
      description: 'A journey to transform your quality of life · Precision Health Screening × TCM Wellness × Cultural Immersion',
      viewPackages: 'View Packages',
      bookConsult: 'Book Free Consultation'
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
      package1: {
        name: 'Discovery Journey',
        duration: '3 days · Intro to Eastern Medicine',
        price: '¥28,000',
        items: ['Basic health screening', 'TCM constitution diagnosis', 'Tea ceremony intro', '4-star hotel', 'Airport transfers']
      },
      package2: {
        name: 'Renewal Journey',
        duration: '7 days · Deep mind-body therapy',
        price: '¥68,000',
        popular: 'Most Popular',
        items: ['Full screening + MRI/CT', 'Expert diagnosis + meridian test', 'Private tea + Tai Chi + Guqin', '5-star hotel', 'Private car + advisor'],
        cta: 'Book Now'
      },
      package3: {
        name: 'Royal Journey',
        duration: '14 days · Ultimate bespoke experience',
        price: '¥168,000',
        items: ['Full genome + PET-CT', 'Master physician consultation', 'Royal cultural experience', 'Luxury suite', 'Private jet optional']
      },
      viewDetails: 'View Details'
    },
    contact: {
      badge: 'Contact Us',
      title: 'Start Your Health Journey',
      desc: 'Fill out the form and our health advisor will contact you within 24 hours',
      phone: 'Phone',
      email: 'Email',
      wechat: 'WeChat',
      form: {
        name: 'Name *',
        email: 'Email *',
        countryCode: 'Country Code',
        phoneNumber: 'Phone Number',
        package: 'Interested Package',
        placeholder: 'Select...',
        options: ['Discovery (3 days)', 'Renewal (7 days) - Most Popular', 'Royal (14 days)', 'Need recommendation'],
        message: 'Message',
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
    }
  },
  zh: {
    nav: {
      services: '服务',
      packages: '套餐',
      stories: '故事',
      contact: '联系',
      freeConsult: '免费咨询'
    },
    hero: {
      badge: '全球信赖的医疗旅游品牌',
      title: '医疗奥德赛',
      subtitle: '当西方精准遇见东方智慧',
      description: '一次改变生命质量的旅程 · 精密体检 × 中医调理 × 文化沉浸',
      viewPackages: '查看套餐',
      bookConsult: '预约免费咨询'
    },
    trust: {
      jci: 'JCI国际认证',
      gha: 'GHA卓越认证',
      hospital: '三甲医院合作',
      cases: '10,000+服务案例'
    },
    services: {
      badge: 'Our Services',
      title: '四大健康支柱',
      desc: '融合东西方医学精华，为您提供全方位的健康管理方案',
      pillar1: {
        title: '精密体检',
        desc: 'PET-CT、MRI、基因检测等尖端设备，精准评估健康风险',
        items: ['全身癌症筛查', '心脑血管评估', '基因检测分析']
      },
      pillar2: {
        title: '中医调理',
        desc: '传承千年的东方智慧，个性化体质调理方案',
        items: ['体质辨识诊断', '针灸推拿治疗', '膏方调理']
      },
      pillar3: {
        title: '文化沉浸',
        desc: '茶道、太极、书法，身心合一的东方修行体验',
        items: ['私人茶道品鉴', '太极气功课程', '古琴书法体验']
      },
      pillar4: {
        title: '全程管家',
        desc: '从签证到离境，24/7专属管家贴心服务',
        items: ['签证协助办理', '机场贵宾接送', '多语言管家']
      }
    },
    whyChina: {
      badge: 'Why China',
      title: '为什么选择中国？',
      desc: '世界领先的医疗设备、经验丰富的专家团队，以及极具竞争力的价格，让中国成为全球医疗旅游的新兴目的地。',
      stat1: '仅为欧美同等服务价格',
      stat2: 'MRI/CT设备全球普及率',
      stat3: '年服务国际患者',
      stat4: '患者满意度',
      testimonial: '"中国医疗水平让我惊讶"',
      patient: '— Sarah M., 美国患者'
    },
    packages: {
      badge: 'Packages',
      title: '选择您的健康之旅',
      desc: '三种精心设计的套餐，满足不同健康目标和预算',
      package1: {
        name: '探索之旅',
        duration: '3天2晚 · 初识东方医疗',
        price: '¥28,000',
        items: ['基础全面体检', '中医体质辨识', '茶道入门体验', '四星级酒店', '机场接送服务']
      },
      package2: {
        name: '焕新之旅',
        duration: '7天6晚 · 深度身心调理',
        price: '¥68,000',
        popular: '最受欢迎',
        items: ['全面体检 + MRI/CT', '专家诊断 + 经络检测', '私人茶道 + 太极 + 古琴', '五星级酒店', '专车 + 专属顾问'],
        cta: '立即预订'
      },
      package3: {
        name: '皇家之旅',
        duration: '14天13晚 · 顶级定制体验',
        price: '¥168,000',
        items: ['全基因组测序 + PET-CT', '国医大师亲诊', '皇室级文化体验', '奢华套房酒店', '私人飞机可选']
      },
      viewDetails: '查看详情'
    },
    contact: {
      badge: 'Contact Us',
      title: '开启您的健康之旅',
      desc: '填写表单，我们的健康顾问将在24小时内与您联系，为您定制专属的健康方案。',
      phone: '电话咨询',
      email: '电子邮件',
      wechat: '微信咨询',
      form: {
        name: '姓名 *',
        email: '邮箱 *',
        countryCode: '国家区号',
        phoneNumber: '电话号码',
        package: '感兴趣的套餐',
        placeholder: '请选择...',
        options: ['探索之旅 (3天)', '焕新之旅 (7天) - 最受欢迎', '皇家之旅 (14天)', '需要顾问推荐'],
        message: '留言',
        submit: '提交咨询'
      }
    },
    footer: {
      tagline: '西方精准医疗 × 东方养生智慧',
      tagline2: '为您开启改变生命质量的旅程',
      links: '快速链接',
      services: '服务项目',
      contact: '联系我们',
      privacy: '隐私政策',
      terms: '服务条款'
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
      title: 'ميدي أوديسي',
      subtitle: 'حيث الدقة الغربية تلتقي بالحكمة الشرقية',
      description: 'رحلة لتحويل جودة حياتك · فحص صحي دقيق × العلاج الصيني التقليدي × غمر ثقافي',
      viewPackages: 'عرض الباقات',
      bookConsult: 'حجز استشارة مجانية'
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
      desc: 'ثلاث باقات مصممة بعناية لأهداف وميزانيات صحية مختلفة',
      package1: {
        name: 'رحلة الاكتشاف',
        duration: '3 أيام · مقدمة للطب الشرقي',
        price: '¥28,000',
        items: ['فحص صحي أساسي', 'تشخيص تكوين الطب الصيني', 'مقدمة لطقوس الشاي', 'فندق 4 نجوم', 'نقل المطار']
      },
      package2: {
        name: 'رحلة التجديد',
        duration: '7 أيام · علاج عميق للجسد والعقل',
        price: '¥68,000',
        popular: 'الأكثر شعبية',
        items: ['فحص شامل + MRI/CT', 'تشخيص خبير + اختبار المريديان', 'شاي خاص + تايتشي + قيتشين', 'فندق 5 نجوم', 'سيارة خاصة + مستشار'],
        cta: 'احجز الآن'
      },
      package3: {
        name: 'الرحلة الملكية',
        duration: '14 يوماً · تجربة فاخرة مخصصة',
        price: '¥168,000',
        items: ['الجينوم الكامل + PET-CT', 'استشارة طبيب خبير', 'تجربة ثقافية ملكية', 'جناح فاخر', 'طائرة خاصة اختياري']
      },
      viewDetails: 'عرض التفاصيل'
    },
    contact: {
      badge: 'اتصل بنا',
      title: 'ابدأ رحلتك الصحية',
      desc: 'املأ النموذج وسيتواصل معك مستشارنا الصحي خلال 24 ساعة',
      phone: 'الهاتف',
      email: 'البريد الإلكتروني',
      wechat: 'ويتشات',
      form: {
        name: 'الاسم *',
        email: 'البريد الإلكتروني *',
        countryCode: 'رمز الدولة',
        phoneNumber: 'رقم الهاتف',
        package: 'الباقة المهتم بها',
        placeholder: 'اختر...',
        options: ['الاكتشاف (3 أيام)', 'التجديد (7 أيام) - الأكثر شعبية', 'الملكية (14 يوماً)', 'بحاجة لتوصية'],
        message: 'الرسالة',
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
    }
  }
};

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [language, setLanguage] = React.useState<'en' | 'zh' | 'ar'>('en');
  const [langMenuOpen, setLangMenuOpen] = React.useState(false);
  
  const t = translations[language];
  const isRTL = language === 'ar';

  const handleLanguageChange = (lang: 'en' | 'zh' | 'ar') => {
    setLanguage(lang);
    setLangMenuOpen(false);
  };

  return (
    <div className={`min-h-screen bg-cream ${isRTL ? 'rtl' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <nav className="fixed w-full z-50 glass-effect border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <a href="#" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Heart className="text-white w-6 h-6" />
                </div>
                <span className="font-serif text-2xl font-bold text-primary">MediOdyssey</span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-dark hover:text-secondary transition">{t.nav.services}</a>
              <a href="#packages" className="text-dark hover:text-secondary transition">{t.nav.packages}</a>
              <a href="#stories" className="text-dark hover:text-secondary transition">{t.nav.stories}</a>
              <a href="#contact" className="text-dark hover:text-secondary transition">{t.nav.contact}</a>
              
              {/* Language Switcher */}
              <div className="relative">
                <button 
                  onClick={() => setLangMenuOpen(!langMenuOpen)}
                  className="flex items-center space-x-1 text-sm font-medium text-primary hover:text-secondary transition"
                >
                  <Languages className="w-4 h-4" />
                  <span>{language.toUpperCase()}</span>
                </button>
                {langMenuOpen && (
                  <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[100px]">
                    <button 
                      onClick={() => handleLanguageChange('en')}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${language === 'en' ? 'text-secondary font-medium' : 'text-dark'}`}
                    >
                      English
                    </button>
                    <button 
                      onClick={() => handleLanguageChange('zh')}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${language === 'zh' ? 'text-secondary font-medium' : 'text-dark'}`}
                    >
                      中文
                    </button>
                    <button 
                      onClick={() => handleLanguageChange('ar')}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${language === 'ar' ? 'text-secondary font-medium' : 'text-dark'}`}
                    >
                      العربية
                    </button>
                  </div>
                )}
              </div>
              
              <a href="#contact" className="bg-primary text-white px-6 py-2.5 rounded-full hover:bg-blue-800 transition font-medium">
                {t.nav.freeConsult}
              </a>
            </div>
            <button 
              className="md:hidden text-dark"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4 px-4">
              <a href="#services" className="text-dark hover:text-secondary transition">{t.nav.services}</a>
              <a href="#packages" className="text-dark hover:text-secondary transition">{t.nav.packages}</a>
              <a href="#stories" className="text-dark hover:text-secondary transition">{t.nav.stories}</a>
              <a href="#contact" className="text-dark hover:text-secondary transition">{t.nav.contact}</a>
              <div className="flex space-x-4 pt-2 border-t">
                <button onClick={() => handleLanguageChange('en')} className={`text-sm ${language === 'en' ? 'text-secondary font-medium' : 'text-dark'}`}>EN</button>
                <button onClick={() => handleLanguageChange('zh')} className={`text-sm ${language === 'zh' ? 'text-secondary font-medium' : 'text-dark'}`}>中</button>
                <button onClick={() => handleLanguageChange('ar')} className={`text-sm ${language === 'ar' ? 'text-secondary font-medium' : 'text-dark'}`}>عربي</button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1920&q=80" 
            alt="China Landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-20">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur rounded-full text-sm font-medium tracking-wider">
              <Globe className="inline w-4 h-4 mr-2" />{t.hero.badge}
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-shadow leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-4 text-shadow">
            {t.hero.subtitle}
          </p>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            {t.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#packages" className="bg-accent text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-400 transition shadow-lg flex items-center">
              {t.hero.viewPackages} <ChevronRight className="ml-2 w-5 h-5" />
            </a>
            <a href="#contact" className="bg-white/20 backdrop-blur text-white border-2 border-white/50 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition flex items-center">
              <Calendar className="mr-2 w-5 h-5" />{t.hero.bookConsult}
            </a>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
              <div className="flex items-center space-x-2 text-gray-600">
                <Star className="text-secondary w-6 h-6" />
                <span className="font-medium">{t.trust.jci}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Star className="text-secondary w-6 h-6" />
                <span className="font-medium">{t.trust.gha}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Heart className="text-secondary w-6 h-6" />
                <span className="font-medium">{t.trust.hospital}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Globe className="text-secondary w-6 h-6" />
                <span className="font-medium">{t.trust.cases}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold tracking-wider uppercase">{t.services.badge}</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mt-3 mb-4">{t.services.title}</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t.services.desc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="pillar-card rounded-2xl p-8 card-hover border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Microscope className="text-primary w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-3">{t.services.pillar1.title}</h3>
              <p className="text-gray-600 mb-4">{t.services.pillar1.desc}</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="flex items-center"><Check className="text-secondary w-4 h-4 mr-2" />{t.services.pillar1.items[0]}</li>
                <li className="flex items-center"><Check className="text-secondary w-4 h-4 mr-2" />{t.services.pillar1.items[1]}</li>
                <li className="flex items-center"><Check className="text-secondary w-4 h-4 mr-2" />{t.services.pillar1.items[2]}</li>
              </ul>
            </div>

            <div className="pillar-card rounded-2xl p-8 card-hover border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <Activity className="text-secondary w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-3">{t.services.pillar2.title}</h3>
              <p className="text-gray-600 mb-4">{t.services.pillar2.desc}</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="flex items-center"><Check className="text-secondary w-4 h-4 mr-2" />{t.services.pillar2.items[0]}</li>
                <li className="flex items-center"><Check className="text-secondary w-4 h-4 mr-2" />{t.services.pillar2.items[1]}</li>
                <li className="flex items-center"><Check className="text-secondary w-4 h-4 mr-2" />{t.services.pillar2.items[2]}</li>
              </ul>
            </div>

            <div className="pillar-card rounded-2xl p-8 card-hover border border-gray-100">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6">
                <Landmark className="text-accent w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-3">{t.services.pillar3.title}</h3>
              <p className="text-gray-600 mb-4">{t.services.pillar3.desc}</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="flex items-center"><Check className="text-secondary w-4 h-4 mr-2" />{t.services.pillar3.items[0]}</li>
                <li className="flex items-center"><Check className="text-secondary w-4 h-4 mr-2" />{t.services.pillar3.items[1]}</li>
                <li className="flex items-center"><Check className="text-secondary w-4 h-4 mr-2" />{t.services.pillar3.items[2]}</li>
              </ul>
            </div>

            <div className="pillar-card rounded-2xl p-8 card-hover border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <ConciergeBell className="text-purple-600 w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-3">{t.services.pillar4.title}</h3>
              <p className="text-gray-600 mb-4">{t.services.pillar4.desc}</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="flex items-center"><Check className="text-secondary w-4 h-4 mr-2" />{t.services.pillar4.items[0]}</li>
                <li className="flex items-center"><Check className="text-secondary w-4 h-4 mr-2" />{t.services.pillar4.items[1]}</li>
                <li className="flex items-center"><Check className="text-secondary w-4 h-4 mr-2" />{t.services.pillar4.items[2]}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why China Section */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold tracking-wider uppercase">{t.whyChina.badge}</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mt-3 mb-6">{t.whyChina.title}</h2>
              <p className="text-white/80 text-lg mb-8">
                {t.whyChina.desc}
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                  <div className="text-4xl font-bold text-accent mb-2">1/3</div>
                  <p className="text-white/80">{t.whyChina.stat1}</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                  <div className="text-4xl font-bold text-accent mb-2">#1</div>
                  <p className="text-white/80">{t.whyChina.stat2}</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                  <div className="text-4xl font-bold text-accent mb-2">5000+</div>
                  <p className="text-white/80">{t.whyChina.stat3}</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                  <div className="text-4xl font-bold text-accent mb-2">100%</div>
                  <p className="text-white/80">{t.whyChina.stat4}</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800&q=80" 
                alt="Modern medical facility" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <Star className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-dark font-medium">{t.whyChina.testimonial}</p>
                    <p className="text-gray-500 text-sm">{t.whyChina.patient}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold tracking-wider uppercase">{t.packages.badge}</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mt-3 mb-4">{t.packages.title}</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t.packages.desc}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Package 1 */}
            <div className="package-card rounded-2xl overflow-hidden card-hover border border-gray-200">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <Globe className="text-white w-16 h-16" />
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl font-bold text-primary mb-2">{t.packages.package1.name}</h3>
                <p className="text-gray-500 mb-4">{t.packages.package1.duration}</p>
                <div className="text-4xl font-bold text-primary mb-6">
                  {t.packages.package1.price}<span className="text-lg font-normal text-gray-500">{language === 'zh' ? '起' : ''}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {t.packages.package1.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-600"><Check className="text-secondary w-5 h-5 mr-3" />{item}</li>
                  ))}
                </ul>
                <button className="w-full border-2 border-primary text-primary py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition">
                  {t.packages.viewDetails}
                </button>
              </div>
            </div>

            {/* Package 2 - Popular */}
            <div className="package-card rounded-2xl overflow-hidden card-hover border-2 border-accent relative transform scale-105">
              <div className="popular-badge text-white text-center py-2 font-semibold">
                <Star className="inline w-4 h-4 mr-2" />{t.packages.package2.popular}
              </div>
              <div className="h-48 bg-gradient-to-br from-secondary to-green-600 flex items-center justify-center">
                <Heart className="text-white w-16 h-16" />
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl font-bold text-primary mb-2">{t.packages.package2.name}</h3>
                <p className="text-gray-500 mb-4">{t.packages.package2.duration}</p>
                <div className="text-4xl font-bold text-primary mb-6">
                  {t.packages.package2.price}<span className="text-lg font-normal text-gray-500">{language === 'zh' ? '起' : ''}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {t.packages.package2.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-600"><Check className="text-secondary w-5 h-5 mr-3" />{item}</li>
                  ))}
                </ul>
                <button className="w-full bg-accent text-primary py-3 rounded-full font-semibold hover:bg-yellow-400 transition shadow-lg">
                  {t.packages.package2.cta}
                </button>
              </div>
            </div>

            {/* Package 3 */}
            <div className="package-card rounded-2xl overflow-hidden card-hover border border-gray-200">
              <div className="h-48 bg-gradient-to-br from-accent to-yellow-600 flex items-center justify-center">
                <Star className="text-white w-16 h-16" />
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl font-bold text-primary mb-2">{t.packages.package3.name}</h3>
                <p className="text-gray-500 mb-4">{t.packages.package3.duration}</p>
                <div className="text-4xl font-bold text-primary mb-6">
                  {t.packages.package3.price}<span className="text-lg font-normal text-gray-500">{language === 'zh' ? '起' : ''}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {t.packages.package3.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-600"><Check className="text-secondary w-5 h-5 mr-3" />{item}</li>
                  ))}
                </ul>
                <button className="w-full border-2 border-primary text-primary py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition">
                  {t.packages.viewDetails}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-secondary font-semibold tracking-wider uppercase">{t.contact.badge}</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mt-3 mb-6">{t.contact.title}</h2>
              <p className="text-gray-600 text-lg mb-8">
                {t.contact.desc}
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">{t.contact.phone}</p>
                    <p className="text-gray-600">+86 133-9645-7967</p>
                    <p className="text-gray-600">+852 4743-6719</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">{t.contact.email}</p>
                    <p className="text-gray-600">jiangjingfu@mediodyssey.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">{t.contact.wechat}</p>
                    <p className="text-gray-600">MediOdyssey</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">{t.contact.form.name}</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent" 
                      placeholder={language === 'ar' ? 'اسمك' : language === 'zh' ? '您的姓名' : 'Your name'}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">{t.contact.form.email}</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent" 
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">{t.contact.form.countryCode}</label>
                    <select 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                    >
                      <option value="+86">🇨🇳 +86</option>
                      <option value="+852">🇭🇰 +852</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+81">🇯🇵 +81</option>
                      <option value="+82">🇰🇷 +82</option>
                      <option value="+65">🇸🇬 +65</option>
                      <option value="+61">🇦🇺 +61</option>
                      <option value="+971">🇦🇪 +971</option>
                      <option value="+966">🇸🇦 +966</option>
                    </select>
                  </div>
                  <div className="col-span-2">
                    <label className="block text-gray-700 font-medium mb-2">{t.contact.form.phoneNumber}</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent" 
                      placeholder={language === 'ar' ? '123456789' : language === 'zh' ? '手机号码' : 'Phone number'}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">{t.contact.form.package}</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent">
                    <option>{t.contact.form.placeholder}</option>
                    {t.contact.form.options.map((opt, idx) => (
                      <option key={idx}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">{t.contact.form.message}</label>
                  <textarea 
                    rows={4} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent" 
                    placeholder={language === 'ar' ? 'أخبرنا عن احتياجاتك الصحية...' : language === 'zh' ? '请告诉我们您的健康需求或问题...' : 'Tell us about your health needs...'}
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-primary text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-800 transition"
                >
                  {t.contact.form.submit}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                  <Heart className="text-white w-6 h-6" />
                </div>
                <span className="font-serif text-2xl font-bold">MediOdyssey</span>
              </div>
              <p className="text-gray-400 mb-4">
                {t.footer.tagline}<br />
                {t.footer.tagline2}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">{t.footer.links}</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">{language === 'en' ? 'About Us' : language === 'zh' ? '关于我们' : 'من نحن'}</a></li>
                <li><a href="#services" className="hover:text-white transition">{t.nav.services}</a></li>
                <li><a href="#packages" className="hover:text-white transition">{t.nav.packages}</a></li>
                <li><a href="#stories" className="hover:text-white transition">{t.nav.stories}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">{t.footer.services}</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">{t.services.pillar1.title}</a></li>
                <li><a href="#" className="hover:text-white transition">{t.services.pillar2.title}</a></li>
                <li><a href="#" className="hover:text-white transition">{t.services.pillar3.title}</a></li>
                <li><a href="#" className="hover:text-white transition">{t.services.pillar4.title}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">{t.footer.contact}</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center"><Phone className="w-4 h-4 mr-2" />+86 133-9645-7967</li>
                <li className="flex items-center"><Phone className="w-4 h-4 mr-2" />+852 4743-6719</li>
                <li className="flex items-center"><Mail className="w-4 h-4 mr-2" />jiangjingfu@mediodyssey.com</li>
                <li className="flex items-center"><MapPin className="w-4 h-4 mr-2" />{language === 'zh' ? '北京市朝阳区建国路88号' : '88 Jianguo Road, Chaoyang, Beijing'}</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2026 MediOdyssey. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-gray-400 text-sm">
              <a href="#" className="hover:text-white transition">{t.footer.privacy}</a>
              <a href="#" className="hover:text-white transition">{t.footer.terms}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;