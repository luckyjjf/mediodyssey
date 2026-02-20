import { useEffect, useState } from 'react';
import { 
  Heart, Sparkles, Check, ArrowRight, 
  Globe, Phone, Mail, MapPin, Menu, ChevronDown,
  Stethoscope, Brain, Flower2, Plane, Languages
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import './App.css';

type Language = 'en' | 'zh' | 'ar';

const translations = {
  en: {
    premiumHealthTourism: 'Premium Health Tourism',
    westernMedicineTCM: 'Western Medicine + TCM Wellness + Cultural Experience',
    experienceFusion: 'Experience the perfect fusion of modern medical precision and ancient healing wisdom in China',
    explorePackages: 'Explore Packages',
    ourServices: 'Our Services',
    services: 'Services',
    packages: 'Packages',
    comparison: 'Comparison',
    contact: 'Contact',
    bookNow: 'Book Now',
    ourServicesTitle: 'Our Services',
    fourPillars: 'Four Pillars of Wellness',
    fourPillarsDesc: 'A comprehensive approach combining the best of Eastern and Western health practices',
    pricing: 'Pricing',
    chooseJourney: 'Choose Your Journey',
    chooseJourneyDesc: 'Three carefully designed packages to meet different health goals and preferences',
    selectPackage: 'Select Package',
    mostPopular: 'Most Popular',
    globalComparison: 'Global Comparison',
    sameServiceBetterValue: 'Same Service, Better Value',
    sameServiceDesc: 'Compare our prices with similar health tourism services worldwide',
    destination: 'Destination',
    basic: 'Basic',
    premium: 'Premium',
    ultimate: 'Ultimate',
    savingsVsUSA: 'Savings vs USA',
    medicalPartners: 'Medical Partners',
    happyClients: 'Happy Clients',
    testimonials: 'Testimonials',
    whatClientsSay: 'What Our Clients Say',
    contactUs: 'Contact Us',
    startJourney: 'Start Your MediOdyssey',
    startJourneyDesc: 'Ready to experience the perfect blend of modern medicine and traditional wellness? Contact us today.',
    phone: 'Phone',
    email: 'Email',
    location: 'Location',
    quickInquiry: 'Quick Inquiry',
    firstName: 'First Name',
    lastName: 'Last Name',
    interestedPackage: 'Interested Package',
    message: 'Message',
    sendInquiry: 'Send Inquiry',
    healthGoals: 'Tell us about your health goals...',
    footerServices: 'Services',
    footerPackages: 'Packages',
    footerContact: 'Contact',
    allRightsReserved: 'All rights reserved.',
    medicalCheckup: 'Medical Checkup',
    tcmTherapy: 'TCM Therapy',
    culturalExperience: 'Cultural Experience',
    vipServices: 'VIP Services',
    bookPackage: 'Book {name} Package',
    thankYouInterest: 'Thank you for your interest! Please contact us to complete your booking.',
    constitutionAnalysis: 'Constitution analysis, acupuncture, massage',
    teaCeremony: 'Tea ceremony, Tai Chi experience',
    comprehensiveExam: 'Comprehensive exam, MRI, CT, tumor markers',
    expertDiagnosis: 'Expert diagnosis, meridian test, herbal paste',
    privateTeaCeremony: 'Private tea ceremony, Guqin music, calligraphy',
    fullGenome: 'Full genome sequencing, PET-CT, expert consultation',
    masterPhysician: 'Master physician treatment, royal massage',
    imperialTea: 'Imperial tea tasting, private Guqin, meditation',
    westernMedicine: 'Western Medicine',
    precisionDiagnostics: 'Precision Diagnostics',
    westernDesc: 'State-of-the-art medical equipment providing accurate health data analysis and risk assessment.',
    compHealthScreening: 'Comprehensive health screening',
    advancedImaging: 'Advanced imaging (MRI, CT, PET-CT)',
    geneticTesting: 'Genetic testing',
    cardioAssessment: 'Cardiovascular assessment',
    tcmWellness: 'TCM Wellness',
    holisticHealing: 'Holistic Healing',
    tcmDesc: 'Traditional Chinese Medicine experts provide personalized constitution analysis and therapy.',
    constitutionId: 'Constitution identification',
    acupunctureMassage: 'Acupuncture & massage',
    herbalMedicine: 'Herbal medicine',
    meridianTherapy: 'Meridian therapy',
    culturalExp: 'Cultural Experience',
    soulNourishment: 'Soul Nourishment',
    culturalDesc: 'Immerse yourself in traditional Chinese culture for mental relaxation and spiritual wellness.',
    teaCeremonyItem: 'Tea ceremony',
    taiChiQigong: 'Tai Chi & Qigong',
    calligraphyGuqin: 'Calligraphy & Guqin',
    meditationRetreat: 'Meditation retreat',
    vipServicesTitle: 'VIP Services',
    seamlessJourney: 'Seamless Journey',
    vipDesc: 'End-to-end luxury services ensuring a comfortable and worry-free health journey.',
    luxuryAccom: 'Luxury accommodation',
    privateTransport: 'Private transportation',
    dedicatedConsultant: 'Dedicated consultant',
    concierge: '24/7 concierge',
    nights: '{nights} Nights',
    days: '{days} Days',
    airportTransfers: 'airport transfers',
    privateCar: 'private car, consultant',
    luxuryHotel: 'Luxury hotel ({nights} nights), private jet, 24/7 butler',
    starHotel: '4-star hotel (3 nights), airport transfers',
    starHotelPremium: '5-star hotel (7 nights), private car, consultant',
  },
  zh: {
    premiumHealthTourism: '高端健康旅游',
    westernMedicineTCM: '西医 + 中医养生 + 文化体验',
    experienceFusion: '在中国体验现代医学精准与古老养生智慧的完美融合',
    explorePackages: '查看套餐',
    ourServices: '我们的服务',
    services: '服务',
    packages: '套餐',
    comparison: '对比',
    contact: '联系我们',
    bookNow: '立即预约',
    ourServicesTitle: '我们的服务',
    fourPillars: '健康四大支柱',
    fourPillarsDesc: '全面融合东西方最佳健康实践',
    pricing: '价格',
    chooseJourney: '选择您的旅程',
    chooseJourneyDesc: '精心设计的三种套餐，满足不同健康目标',
    selectPackage: '选择套餐',
    mostPopular: '最受欢迎',
    globalComparison: '全球对比',
    sameServiceBetterValue: '同等服务，更优价格',
    sameServiceDesc: '与全球同类健康旅游服务对比价格',
    destination: '目的地',
    basic: '基础',
    premium: '尊贵',
    ultimate: '奢华',
    savingsVsUSA: '相比美国节省',
    medicalPartners: '医疗合作伙伴',
    happyClients: '满意客户',
    testimonials: '客户评价',
    whatClientsSay: '客户心声',
    contactUs: '联系我们',
    startJourney: '开启您的健康之旅',
    startJourneyDesc: '准备好体验现代医学与传统养生的完美结合了吗？立即联系我们。',
    phone: '电话',
    email: '邮箱',
    location: '地址',
    quickInquiry: '快速咨询',
    firstName: '名',
    lastName: '姓',
    interestedPackage: '感兴趣套餐',
    message: '留言',
    sendInquiry: '发送咨询',
    healthGoals: '告诉我们您的健康目标...',
    footerServices: '服务',
    footerPackages: '套餐',
    footerContact: '联系',
    allRightsReserved: '版权所有。',
    medicalCheckup: '体检',
    tcmTherapy: '中医理疗',
    culturalExperience: '文化体验',
    vipServices: 'VIP服务',
    bookPackage: '预约 {name} 套餐',
    thankYouInterest: '感谢您的关注！请联系我们完成预约。',
    constitutionAnalysis: '体质分析、针灸、按摩',
    teaCeremony: '茶道、太极体验',
    comprehensiveExam: '全面检查、MRI、CT、肿瘤标志物',
    expertDiagnosis: '专家诊断、经络测试、草药贴敷',
    privateTeaCeremony: '私人茶道、古琴、书法',
    fullGenome: '全基因组测序、PET-CT、专家会诊',
    masterPhysician: '名医诊疗、皇家按摩',
    imperialTea: '御茶品尝、私人古琴、冥想',
    westernMedicine: '西医诊疗',
    precisionDiagnostics: '精准诊断',
    westernDesc: '尖端医疗设备提供精准健康数据分析和风险评估。',
    compHealthScreening: '全面健康筛查',
    advancedImaging: '先进影像检查 (MRI, CT, PET-CT)',
    geneticTesting: '基因检测',
    cardioAssessment: '心血管评估',
    tcmWellness: '中医养生',
    holisticHealing: '整体疗法',
    tcmDesc: '中医专家提供个性化体质分析与疗法。',
    constitutionId: '体质辨识',
    acupunctureMassage: '针灸推拿',
    herbalMedicine: '中药调理',
    meridianTherapy: '经络疗法',
    culturalExp: '文化体验',
    soulNourishment: '心灵滋养',
    culturalDesc: '沉浸在中国传统文化中，放松身心、陶冶情操。',
    teaCeremonyItem: '茶道体验',
    taiChiQigong: '太极气功',
    calligraphyGuqin: '书法古琴',
    meditationRetreat: '冥想静修',
    vipServicesTitle: 'VIP服务',
    seamlessJourney: '全程管家式服务',
    vipDesc: '端到端豪华服务，确保舒适无忧的健康之旅。',
    luxuryAccom: '豪华住宿',
    privateTransport: '专车接送',
    dedicatedConsultant: '专属顾问',
    concierge: '24小时礼宾',
    nights: '{nights}晚',
    days: '{days}天',
    airportTransfers: '机场接送',
    privateCar: '专车、顾问',
    luxuryHotel: '豪华酒店（{nights}晚）、私人飞机、24小时管家',
    starHotel: '4星酒店（3晚）、机场接送',
    starHotelPremium: '5星酒店（7晚）、专车、顾问',
  },
  ar: {
    premiumHealthTourism: 'سياحة صحية فاخرة',
    westernMedicineTCM: 'الطب الغربي + العلاج الصيني التقليدي + التجربة الثقافية',
    experienceFusion: 'استمتع بالجمع بين الدقة الطبية الحديثة وحكمة الشفاء القديمة في الصين',
    explorePackages: 'استكشف الباقات',
    ourServices: 'خدماتنا',
    services: 'الخدمات',
    packages: 'الباقات',
    comparison: 'المقارنة',
    contact: 'اتصل بنا',
    bookNow: 'احجز الآن',
    ourServicesTitle: 'خدماتنا',
    fourPillars: 'أركان العافية الأربعة',
    fourPillarsDesc: 'نهج شامل يجمع بين أفضل الممارسات الصحية الشرقية والغربية',
    pricing: 'الأسعار',
    chooseJourney: 'اختر رحلتك',
    chooseJourneyDesc: 'ثلاث باقات مصممة بعناية لتلبية أهداف وتفضيلات الصحة المختلفة',
    selectPackage: 'اختر الباقة',
    mostPopular: 'الأكثر شعبية',
    globalComparison: 'مقارنة عالمية',
    sameServiceBetterValue: 'نفس الخدمة، قيمة أفضل',
    sameServiceDesc: 'قارن أسعارنا مع خدمات السياحة الصحية المماثلة عالمياً',
    destination: 'الوجهة',
    basic: 'أساسية',
    premium: 'مميزة',
    ultimate: 'فاخرة',
    savingsVsUSA: 'التوفير مقارنة بالولايات المتحدة',
    medicalPartners: 'الشركاء الطبيون',
    happyClients: 'العملاء السعداء',
    testimonials: 'آراء العملاء',
    whatClientsSay: 'ماذا يقول عملاؤنا',
    contactUs: 'اتصل بنا',
    startJourney: 'ابدأ رحلة MediOdyssey الخاصة بك',
    startJourneyDesc: 'هل أنت مستعد لتجربة المزج المثالي بين الطب الحديث والعلاج التقليدي؟ تواصل معنا اليوم.',
    phone: 'الهاتف',
    email: 'البريد الإلكتروني',
    location: 'الموقع',
    quickInquiry: 'استفسار سريع',
    firstName: 'الاسم الأول',
    lastName: 'اسم العائلة',
    interestedPackage: 'الباقة المطلوبة',
    message: 'الرسالة',
    sendInquiry: 'إرسال الاستفسار',
    healthGoals: 'أخبرنا عن أهدافك الصحية...',
    footerServices: 'الخدمات',
    footerPackages: 'الباقات',
    footerContact: 'اتصل',
    allRightsReserved: 'جميع الحقوق محفوظة.',
    medicalCheckup: 'فحص طبي',
    tcmTherapy: 'العلاج الصيني التقليدي',
    culturalExperience: 'تجربة ثقافية',
    vipServices: 'خدمات VIP',
    bookPackage: 'احجز باقة {name}',
    thankYouInterest: 'شكراً لاهتمامك! يرجى التواصل معنا لإكمال الحجز.',
    constitutionAnalysis: 'تحليل constitution, الوخز بالإبر, التدليك',
    teaCeremony: 'طقس الشاي, تجربة تايتشي',
    comprehensiveExam: 'فحص شامل, الرنين المغناطيسي, CT, علامات الورم',
    expertDiagnosis: 'تشخيص خبير, اختبار خطوط الطاقة, عشب طبي',
    privateTeaCeremony: 'طقس شاي خاص, موسيقى الغوشرين, الخط العربي',
    fullGenome: 'تسلسل الجينوم الكامل, PET-CT, استشارة خبير',
    masterPhysician: 'علاج طبيب大师, تدليك ملكي',
    imperialTea: 'تذوق الشاي الإمبراطوري, غوشرين خاص, تأمل',
    westernMedicine: 'الطب الغربي',
    precisionDiagnostics: 'التشخيص الدقيق',
    westernDesc: 'معدات طبية متقدمة توفر تحليلاً دقيقاً للبيانات الصحية وتقييم المخاطر.',
    compHealthScreening: 'فحص صحي شامل',
    advancedImaging: 'تصوير متقدم (MRI, CT, PET-CT)',
    geneticTesting: 'اختبار الجينات',
    cardioAssessment: 'تقييم القلب والأوعية الدموية',
    tcmWellness: 'الرفاهية الصينية',
    holistHealing: 'الشفاء الشامل',
    tcmDesc: 'يقدم خبراء الطب الصيني التقليدي تحليلاً شخصياً لل constitution والعلاج.',
    constitutionId: 'تحديد Constitution',
    acupunctureMassage: 'الوخز بالإبر والتدليك',
    herbalMedicine: 'الأعشاب الطبية',
    meridianTherapy: 'علاج خطوط الطاقة',
    culturalExp: 'تجربة ثقافية',
    soulNourishment: 'تغذية الروح',
    culturalDesc: 'انغمس في الثقافة الصينية التقليدية للاسترخاء العقلي والروحي.',
    teaCeremonyItem: 'طقس الشاي',
    taiChiQigong: 'تايتشي وتشيغونغ',
    calligraphyGuqin: 'الخط العربي والغوشرين',
    meditationRetreat: 'اعتزال التأمل',
    vipServicesTitle: 'خدمات VIP',
    seamlessJourney: 'رحلة سلسة',
    vipDesc: 'خدمات فاخرة من البداية إلى النهاية تضمن رحلة صحية مريحة وخالية من القلق.',
    luxuryAccom: 'إقامة فاخرة',
    privateTransport: 'نقل خاص',
    dedicatedConsultant: 'مستشار مخصص',
    concierge: 'خدمة كونسيرج على مدار الساعة',
    nights: '{nights} ليلة',
    days: '{days} أيام',
    airportTransfers: ' نقل من المطار',
    privateCar: 'سيارة خاصة، مستشار',
    luxuryHotel: 'فندق فاخر ({nights} ليلة)، طائرة خاصة، مدير خدمة على مدار الساعة',
    starHotel: 'فندق 4 نجوم (3 ليالٍ)، نقل من المطار',
    starHotelPremium: 'فندق 5 نجوم (7 ليالٍ)، سيارة خاصة، مستشار',
  }
};

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: keyof typeof translations.en, params?: Record<string, string | number>) => {
    let text = translations[language][key] || translations.en[key];
    if (params) {
      Object.entries(params).forEach(([k, v]) => {
        text = text.replace(`{${k}}`, String(v));
      });
    }
    return text;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const packages = [
    {
      name: 'BASIC',
      price: '$1,680',
      duration: '5 Days / 4 Nights',
      features: [
        'Blood tests, biochemistry, ECG, ultrasound',
        'Constitution analysis, acupuncture, massage',
        'Tea ceremony, Tai Chi experience',
        '4-star hotel (3 nights), airport transfers'
      ],
      highlight: false
    },
    {
      name: 'PREMIUM',
      price: '$3,800',
      duration: '10 Days / 9 Nights',
      features: [
        'Comprehensive exam, MRI, CT, tumor markers',
        'Expert diagnosis, meridian test, herbal paste',
        'Private tea ceremony, Guqin music, calligraphy',
        '5-star hotel (7 nights), private car, consultant'
      ],
      highlight: true
    },
    {
      name: 'ULTIMATE',
      price: '$9,800',
      duration: '15 Days / 14 Nights',
      features: [
        'Full genome sequencing, PET-CT, expert consultation',
        'Master physician treatment, royal massage',
        'Imperial tea tasting, private Guqin, meditation',
        'Luxury hotel (14 nights), private jet, 24/7 butler'
      ],
      highlight: false
    }
  ];

  const comparisonData = [
    { destination: 'Korea', basic: '$2,500', premium: '$5,800', ultimate: '$15,000' },
    { destination: 'Thailand', basic: '$2,100', premium: '$4,800', ultimate: '$12,200' },
    { destination: 'USA', basic: '$4,800', premium: '$10,800', ultimate: '$27,500' },
    { destination: 'Us', basic: '$1,680', premium: '$3,800', ultimate: '$9,800', isUs: true }
  ];

  const services = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: 'Western Medicine',
      subtitle: 'Precision Diagnostics',
      description: 'State-of-the-art medical equipment providing accurate health data analysis and risk assessment.',
      items: ['Comprehensive health screening', 'Advanced imaging (MRI, CT, PET-CT)', 'Genetic testing', 'Cardiovascular assessment']
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'TCM Wellness',
      subtitle: 'Holistic Healing',
      description: 'Traditional Chinese Medicine experts provide personalized constitution analysis and therapy.',
      items: ['Constitution identification', 'Acupuncture & massage', 'Herbal medicine', 'Meridian therapy']
    },
    {
      icon: <Flower2 className="w-8 h-8" />,
      title: 'Cultural Experience',
      subtitle: 'Soul Nourishment',
      description: 'Immerse yourself in traditional Chinese culture for mental relaxation and spiritual wellness.',
      items: ['Tea ceremony', 'Tai Chi & Qigong', 'Calligraphy & Guqin', 'Meditation retreat']
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: 'VIP Services',
      subtitle: 'Seamless Journey',
      description: 'End-to-end luxury services ensuring a comfortable and worry-free health journey.',
      items: ['Luxury accommodation', 'Private transportation', 'Dedicated consultant', '24/7 concierge']
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F0]" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-[#2D5A4A]" />
              <span className="text-xl font-semibold text-[#2D5A4A]">MediOdyssey</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <button onClick={() => scrollToSection('services')} className="text-[#5D6D7E] hover:text-[#2D5A4A] transition-colors">{t('services')}</button>
              <button onClick={() => scrollToSection('packages')} className="text-[#5D6D7E] hover:text-[#2D5A4A] transition-colors">{t('packages')}</button>
              <button onClick={() => scrollToSection('comparison')} className="text-[#5D6D7E] hover:text-[#2D5A4A] transition-colors">{t('comparison')}</button>
              <button onClick={() => scrollToSection('contact')} className="text-[#5D6D7E] hover:text-[#2D5A4A] transition-colors">{t('contact')}</button>
              
              <div className="relative group">
                <button className="flex items-center gap-1 text-[#2D5A4A] hover:text-[#1e3d31] transition-colors">
                  <Languages className="w-4 h-4" />
                  <span className="uppercase text-sm">{language}</span>
                </button>
                <div className="absolute right-0 top-full mt-2 py-2 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all min-w-[120px]">
                  <button onClick={() => setLanguage('en')} className={`w-full px-4 py-2 text-left hover:bg-[#FAF7F0] ${language === 'en' ? 'text-[#2D5A4A] font-medium' : 'text-[#5D6D7E]'}`}>English</button>
                  <button onClick={() => setLanguage('zh')} className={`w-full px-4 py-2 text-left hover:bg-[#FAF7F0] ${language === 'zh' ? 'text-[#2D5A4A] font-medium' : 'text-[#5D6D7E]'}`}>中文</button>
                  <button onClick={() => setLanguage('ar')} className={`w-full px-4 py-2 text-left hover:bg-[#FAF7F0] ${language === 'ar' ? 'text-[#2D5A4A] font-medium' : 'text-[#5D6D7E]'}`}>العربية</button>
                </div>
              </div>
              
              <Button 
                onClick={() => scrollToSection('packages')}
                className="bg-[#2D5A4A] hover:bg-[#1e3d31] text-white"
              >
                {t('bookNow')}
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-white">
                <div className="flex flex-col gap-6 mt-8">
                  <button onClick={() => scrollToSection('services')} className="text-left text-lg text-[#5D6D7E]">{t('services')}</button>
                  <button onClick={() => scrollToSection('packages')} className="text-left text-lg text-[#5D6D7E]">{t('packages')}</button>
                  <button onClick={() => scrollToSection('comparison')} className="text-left text-lg text-[#5D6D7E]">{t('comparison')}</button>
                  <button onClick={() => scrollToSection('contact')} className="text-left text-lg text-[#5D6D7E]">{t('contact')}</button>
                  
                  <div className="flex gap-2">
                    <button onClick={() => setLanguage('en')} className={`px-3 py-1 rounded ${language === 'en' ? 'bg-[#2D5A4A] text-white' : 'bg-[#FAF7F0] text-[#5D6D7E]'}`}>EN</button>
                    <button onClick={() => setLanguage('zh')} className={`px-3 py-1 rounded ${language === 'zh' ? 'bg-[#2D5A4A] text-white' : 'bg-[#FAF7F0] text-[#5D6D7E]'}`}>中文</button>
                    <button onClick={() => setLanguage('ar')} className={`px-3 py-1 rounded ${language === 'ar' ? 'bg-[#2D5A4A] text-white' : 'bg-[#FAF7F0] text-[#5D6D7E]'}`}>عربي</button>
                  </div>
                  
                  <Button 
                    onClick={() => scrollToSection('packages')}
                    className="bg-[#2D5A4A] hover:bg-[#1e3d31] text-white w-full"
                  >
                    {t('bookNow')}
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/hero-bg.png)' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <Badge className="mb-6 bg-[#C9A962]/20 text-[#C9A962] hover:bg-[#C9A962]/30 border-none">
            <Sparkles className="w-3 h-3 mr-1" />
            {t('premiumHealthTourism')}
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#2D5A4A] mb-4 tracking-tight">
            MediOdyssey
          </h1>
          <p className="text-xl sm:text-2xl text-[#5D6D7E] mb-4 font-light">
            医疗奥德赛
          </p>
          <p className="text-lg sm:text-xl text-[#5D6D7E] mb-8 max-w-2xl mx-auto">
            {t('westernMedicineTCM')}
          </p>
          <p className="text-base text-[#8B8378] mb-12 max-w-xl mx-auto">
            {t('experienceFusion')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => scrollToSection('packages')}
              className="bg-[#2D5A4A] hover:bg-[#1e3d31] text-white px-8"
            >
              {t('explorePackages')}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('services')}
              className="border-[#C9A962] text-[#C9A962] hover:bg-[#C9A962]/10 px-8"
            >
              {t('ourServices')}
            </Button>
          </div>
          
          <div className="mt-16 flex justify-center">
            <button 
              onClick={() => scrollToSection('services')}
              className="animate-bounce text-[#C9A962]"
            >
              <ChevronDown className="w-8 h-8" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#2D5A4A]/10 text-[#2D5A4A] hover:bg-[#2D5A4A]/20 border-none">
              {t('ourServicesTitle')}
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D5A4A] mb-4">
              {t('fourPillars')}
            </h2>
            <p className="text-lg text-[#5D6D7E] max-w-2xl mx-auto">
              {t('fourPillarsDesc')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 rounded-full bg-[#2D5A4A]/10 flex items-center justify-center text-[#2D5A4A] mb-4">
                  <Stethoscope className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl text-[#2D5A4A]">{t('westernMedicine')}</CardTitle>
                <p className="text-[#C9A962] font-medium">{t('precisionDiagnostics')}</p>
              </CardHeader>
              <CardContent>
                <p className="text-[#5D6D7E] mb-4">{t('westernDesc')}</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-[#5D6D7E]">
                    <Check className="w-4 h-4 text-[#2D5A4A]" />
                    {t('compHealthScreening')}
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[#5D6D7E]">
                    <Check className="w-4 h-4 text-[#2D5A4A]" />
                    {t('advancedImaging')}
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[#5D6D7E]">
                    <Check className="w-4 h-4 text-[#2D5A4A]" />
                    {t('geneticTesting')}
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[#5D6D7E]">
                    <Check className="w-4 h-4 text-[#2D5A4A]" />
                    {t('cardioAssessment')}
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 rounded-full bg-[#2D5A4A]/10 flex items-center justify-center text-[#2D5A4A] mb-4">
                  <Brain className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl text-[#2D5A4A]">{t('tcmWellness')}</CardTitle>
                <p className="text-[#C9A962] font-medium">{t('holisticHealing')}</p>
              </CardHeader>
              <CardContent>
                <p className="text-[#5D6D7E] mb-4">{t('tcmDesc')}</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-[#5D6D7E]">
                    <Check className="w-4 h-4 text-[#2D5A4A]" />
                    {t('constitutionId')}
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[#5D6D7E]">
                    <Check className="w-4 h-4 text-[#2D5A4A]" />
                    {t('acupunctureMassage')}
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[#5D6D7E]">
                    <Check className="w-4 h-4 text-[#2D5A4A]" />
                    {t('herbalMedicine')}
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[#5D6D7E]">
                    <Check className="w-4 h-4 text-[#2D5A4A]" />
                    {t('meridianTherapy')}
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 rounded-full bg-[#2D5A4A]/10 flex items-center justify-center text-[#2D5A4A] mb-4">
                  <Flower2 className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl text-[#2D5A4A]">{t('culturalExp')}</CardTitle>
                <p className="text-[#C9A962] font-medium">{t('soulNourishment')}</p>
              </CardHeader>
              <CardContent>
                <p className="text-[#5D6D7E] mb-4">{t('culturalDesc')}</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-[#5D6D7E]">
                    <Check className="w-4 h-4 text-[#2D5A4A]" />
                    {t('teaCeremonyItem')}
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[#5D6D7E]">
                    <Check className="w-4 h-4 text-[#2D5A4A]" />
                    {t('taiChiQigong')}
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[#5D6D7E]">
                    <Check className="w-4 h-4 text-[#2D5A4A]" />
                    {t('calligraphyGuqin')}
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[#5D6D7E]">
                    <Check className="w-4 h-4 text-[#2D5A4A]" />
                    {t('meditationRetreat')}
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 rounded-full bg-[#2D5A4A]/10 flex items-center justify-center text-[#2D5A4A] mb-4">
                  <Plane className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl text-[#2D5A4A]">{t('vipServicesTitle')}</CardTitle>
                <p className="text-[#C9A962] font-medium">{t('seamlessJourney')}</p>
              </CardHeader>
              <CardContent>
                <p className="text-[#5D6D7E] mb-4">{t('vipDesc')}</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-[#5D6D7E]">
                    <Check className="w-4 h-4 text-[#2D5A4A]" />
                    {t('luxuryAccom')}
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[#5D6D7E]">
                    <Check className="w-4 h-4 text-[#2D5A4A]" />
                    {t('privateTransport')}
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[#5D6D7E]">
                    <Check className="w-4 h-4 text-[#2D5A4A]" />
                    {t('dedicatedConsultant')}
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[#5D6D7E]">
                    <Check className="w-4 h-4 text-[#2D5A4A]" />
                    {t('concierge')}
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#C9A962]/20 text-[#C9A962] hover:bg-[#C9A962]/30 border-none">
              {t('pricing')}
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D5A4A] mb-4">
              {t('chooseJourney')}
            </h2>
            <p className="text-lg text-[#5D6D7E] max-w-2xl mx-auto">
              {t('chooseJourneyDesc')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card 
              key={0}
              className={`relative overflow-hidden ${
                false 
                  ? 'border-2 border-[#C9A962] shadow-xl scale-105' 
                  : 'border border-gray-100 shadow-lg'
              }`}
            >
              {false && (
                <div className="absolute top-0 left-0 right-0 bg-[#C9A962] text-white text-center py-1 text-sm font-medium">
                  {t('mostPopular')}
                </div>
              )}
              <CardHeader className={`text-center ${false ? 'pt-10' : ''}`}>
                <p className="text-sm text-[#8B8378] uppercase tracking-wider mb-2">{t('basic')}</p>
                <div className="text-4xl font-bold text-[#2D5A4A] mb-2">$1,680</div>
                <p className="text-[#5D6D7E]">5 {t('days')} / 4 {t('nights', { nights: 4 })}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3 text-sm text-[#5D6D7E]">
                    <Check className="w-4 h-4 text-[#2D5A4A] mt-0.5 flex-shrink-0" />
                    {t('compHealthScreening')}, ECG, ultrasound
                  </li>
                  <li className="flex items-start gap-3 text-sm text-[#5D6D7E]">
                    <Check className="w-4 h-4 text-[#2D5A4A] mt-0.5 flex-shrink-0" />
                    {t('constitutionAnalysis')}
                  </li>
                  <li className="flex items-start gap-3 text-sm text-[#5D6D7E]">
                    <Check className="w-4 h-4 text-[#2D5A4A] mt-0.5 flex-shrink-0" />
                    {t('teaCeremony')}
                  </li>
                  <li className="flex items-start gap-3 text-sm text-[#5D6D7E]">
                    <Check className="w-4 h-4 text-[#2D5A4A] mt-0.5 flex-shrink-0" />
                    {t('starHotel')}
                  </li>
                </ul>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      className={`w-full ${
                        false 
                          ? 'bg-[#C9A962] hover:bg-[#b89a55] text-white' 
                          : 'bg-[#2D5A4A] hover:bg-[#1e3d31] text-white'
                      }`}
                    >
                      {t('selectPackage')}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="text-[#2D5A4A]">{t('bookPackage', { name: t('basic') })}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <p className="text-[#5D6D7E]">{t('thankYouInterest')}</p>
                      <div className="flex items-center gap-3 text-[#5D6D7E]">
                        <Phone className="w-5 h-5 text-[#2D5A4A]" />
                        <span>+86 13396457967 / +852 47436719</span>
                      </div>
                      <div className="flex items-center gap-3 text-[#5D6D7E]">
                        <Mail className="w-5 h-5 text-[#2D5A4A]" />
                        <span>jiangjingfu@mediodyssey.com</span>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            <Card 
              key={1}
              className={`relative overflow-hidden ${
                true 
                  ? 'border-2 border-[#C9A962] shadow-xl scale-105' 
                  : 'border border-gray-100 shadow-lg'
              }`}
            >
              {true && (
                <div className="absolute top-0 left-0 right-0 bg-[#C9A962] text-white text-center py-1 text-sm font-medium">
                  {t('mostPopular')}
                </div>
              )}
              <CardHeader className={`text-center ${true ? 'pt-10' : ''}`}>
                <p className="text-sm text-[#8B8378] uppercase tracking-wider mb-2">{t('premium')}</p>
                <div className="text-4xl font-bold text-[#2D5A4A] mb-2">$3,800</div>
                <p className="text-[#5D6D7E]">10 {t('days')} / 9 {t('nights', { nights: 9 })}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3 text-sm text-[#5D6D7E]">
                    <Check className="w-4 h-4 text-[#2D5A4A] mt-0.5 flex-shrink-0" />
                    {t('comprehensiveExam')}
                  </li>
                  <li className="flex items-start gap-3 text-sm text-[#5D6D7E]">
                    <Check className="w-4 h-4 text-[#2D5A4A] mt-0.5 flex-shrink-0" />
                    {t('expertDiagnosis')}
                  </li>
                  <li className="flex items-start gap-3 text-sm text-[#5D6D7E]">
                    <Check className="w-4 h-4 text-[#2D5A4A] mt-0.5 flex-shrink-0" />
                    {t('privateTeaCeremony')}
                  </li>
                  <li className="flex items-start gap-3 text-sm text-[#5D6D7E]">
                    <Check className="w-4 h-4 text-[#2D5A4A] mt-0.5 flex-shrink-0" />
                    {t('starHotelPremium')}
                  </li>
                </ul>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      className={`w-full ${
                        true 
                          ? 'bg-[#C9A962] hover:bg-[#b89a55] text-white' 
                          : 'bg-[#2D5A4A] hover:bg-[#1e3d31] text-white'
                      }`}
                    >
                      {t('selectPackage')}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="text-[#2D5A4A]">{t('bookPackage', { name: t('premium') })}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <p className="text-[#5D6D7E]">{t('thankYouInterest')}</p>
                      <div className="flex items-center gap-3 text-[#5D6D7E]">
                        <Phone className="w-5 h-5 text-[#2D5A4A]" />
                        <span>+86 13396457967 / +852 47436719</span>
                      </div>
                      <div className="flex items-center gap-3 text-[#5D6D7E]">
                        <Mail className="w-5 h-5 text-[#2D5A4A]" />
                        <span>jiangjingfu@mediodyssey.com</span>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            <Card 
              key={2}
              className={`relative overflow-hidden ${
                false 
                  ? 'border-2 border-[#C9A962] shadow-xl scale-105' 
                  : 'border border-gray-100 shadow-lg'
              }`}
            >
              {false && (
                <div className="absolute top-0 left-0 right-0 bg-[#C9A962] text-white text-center py-1 text-sm font-medium">
                  {t('mostPopular')}
                </div>
              )}
              <CardHeader className={`text-center ${false ? 'pt-10' : ''}`}>
                <p className="text-sm text-[#8B8378] uppercase tracking-wider mb-2">{t('ultimate')}</p>
                <div className="text-4xl font-bold text-[#2D5A4A] mb-2">$9,800</div>
                <p className="text-[#5D6D7E]">15 {t('days')} / 14 {t('nights', { nights: 14 })}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3 text-sm text-[#5D6D7E]">
                    <Check className="w-4 h-4 text-[#2D5A4A] mt-0.5 flex-shrink-0" />
                    {t('fullGenome')}
                  </li>
                  <li className="flex items-start gap-3 text-sm text-[#5D6D7E]">
                    <Check className="w-4 h-4 text-[#2D5A4A] mt-0.5 flex-shrink-0" />
                    {t('masterPhysician')}
                  </li>
                  <li className="flex items-start gap-3 text-sm text-[#5D6D7E]">
                    <Check className="w-4 h-4 text-[#2D5A4A] mt-0.5 flex-shrink-0" />
                    {t('imperialTea')}
                  </li>
                  <li className="flex items-start gap-3 text-sm text-[#5D6D7E]">
                    <Check className="w-4 h-4 text-[#2D5A4A] mt-0.5 flex-shrink-0" />
                    {t('luxuryHotel', { nights: 14 })}
                  </li>
                </ul>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      className={`w-full ${
                        false 
                          ? 'bg-[#C9A962] hover:bg-[#b89a55] text-white' 
                          : 'bg-[#2D5A4A] hover:bg-[#1e3d31] text-white'
                      }`}
                    >
                      {t('selectPackage')}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="text-[#2D5A4A]">{t('bookPackage', { name: t('ultimate') })}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <p className="text-[#5D6D7E]">{t('thankYouInterest')}</p>
                      <div className="flex items-center gap-3 text-[#5D6D7E]">
                        <Phone className="w-5 h-5 text-[#2D5A4A]" />
                        <span>+86 13396457967 / +852 47436719</span>
                      </div>
                      <div className="flex items-center gap-3 text-[#5D6D7E]">
                        <Mail className="w-5 h-5 text-[#2D5A4A]" />
                        <span>jiangjingfu@mediodyssey.com</span>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#2D5A4A]/10 text-[#2D5A4A] hover:bg-[#2D5A4A]/20 border-none">
              <Globe className="w-3 h-3 mr-1" />
              {t('globalComparison')}
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D5A4A] mb-4">
              {t('sameServiceBetterValue')}
            </h2>
            <p className="text-lg text-[#5D6D7E] max-w-2xl mx-auto">
              {t('sameServiceDesc')}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F5F0E6]">
                    <th className="px-6 py-4 text-left text-[#2D5A4A] font-semibold">{t('destination')}</th>
                    <th className="px-6 py-4 text-center text-[#2D5A4A] font-semibold">{t('basic')}</th>
                    <th className="px-6 py-4 text-center text-[#2D5A4A] font-semibold">{t('premium')}</th>
                    <th className="px-6 py-4 text-center text-[#2D5A4A] font-semibold">{t('ultimate')}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="px-6 py-4 font-medium text-[#5D6D7E]">Korea</td>
                    <td className="px-6 py-4 text-center text-[#C75B5B]">$2,500</td>
                    <td className="px-6 py-4 text-center text-[#C75B5B]">$5,800</td>
                    <td className="px-6 py-4 text-center text-[#C75B5B]">$15,000</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-6 py-4 font-medium text-[#5D6D7E]">Thailand</td>
                    <td className="px-6 py-4 text-center text-[#C75B5B]">$2,100</td>
                    <td className="px-6 py-4 text-center text-[#C75B5B]">$4,800</td>
                    <td className="px-6 py-4 text-center text-[#C75B5B]">$12,200</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-6 py-4 font-medium text-[#5D6D7E]">USA</td>
                    <td className="px-6 py-4 text-center text-[#C75B5B]">$4,800</td>
                    <td className="px-6 py-4 text-center text-[#C75B5B]">$10,800</td>
                    <td className="px-6 py-4 text-center text-[#C75B5B]">$27,500</td>
                  </tr>
                  <tr className="bg-[#E8F5E9]">
                    <td className="px-6 py-4 font-medium text-[#2D5A4A]">
                      <span className="inline-block w-2 h-2 bg-[#2D5A4A] rounded-full mr-2" />
                      China
                    </td>
                    <td className="px-6 py-4 text-center text-[#C9A962] font-bold">$1,680</td>
                    <td className="px-6 py-4 text-center text-[#C9A962] font-bold">$3,800</td>
                    <td className="px-6 py-4 text-center text-[#C9A962] font-bold">$9,800</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            <Card className="bg-[#E8F5E9] border-none">
              <CardContent className="pt-6 text-center">
                <p className="text-3xl font-bold text-[#2D5A4A]">65%</p>
                <p className="text-sm text-[#5D6D7E]">{t('savingsVsUSA')}</p>
              </CardContent>
            </Card>
            <Card className="bg-[#FFF8E1] border-none">
              <CardContent className="pt-6 text-center">
                <p className="text-3xl font-bold text-[#C9A962]">50+</p>
                <p className="text-sm text-[#5D6D7E]">{t('medicalPartners')}</p>
              </CardContent>
            </Card>
            <Card className="bg-[#E3F2FD] border-none">
              <CardContent className="pt-6 text-center">
                <p className="text-3xl font-bold text-[#1976D2]">1000+</p>
                <p className="text-sm text-[#5D6D7E]">{t('happyClients')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#C9A962]/20 text-[#C9A962] hover:bg-[#C9A962]/30 border-none">
              {t('testimonials')}
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D5A4A] mb-4">
              {t('whatClientsSay')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-[#FAF7F0] border-none">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Sparkles key={i} className="w-4 h-4 text-[#C9A962]" />
                  ))}
                </div>
                <p className="text-[#5D6D7E] mb-4">"The Premium package exceeded all my expectations. The TCM treatments were incredibly effective, and the cultural experiences were unforgettable."</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2D5A4A]/10 flex items-center justify-center text-[#2D5A4A] font-semibold">S</div>
                  <div>
                    <p className="font-medium text-[#2D5A4A]">Sarah Johnson</p>
                    <p className="text-sm text-[#8B8378]">USA</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-[#FAF7F0] border-none">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Sparkles key={i} className="w-4 h-4 text-[#C9A962]" />
                  ))}
                </div>
                <p className="text-[#5D6D7E] mb-4">"Professional medical team, luxurious accommodations, and seamless service. I saved thousands compared to similar packages in other countries."</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2D5A4A]/10 flex items-center justify-center text-[#2D5A4A] font-semibold">M</div>
                  <div>
                    <p className="font-medium text-[#2D5A4A]">Michael Chen</p>
                    <p className="text-sm text-[#8B8378]">Singapore</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-[#FAF7F0] border-none">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Sparkles key={i} className="w-4 h-4 text-[#C9A962]" />
                  ))}
                </div>
                <p className="text-[#5D6D7E] mb-4">"A truly transformative experience. The combination of modern diagnostics and traditional healing gave me a complete picture of my health."</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2D5A4A]/10 flex items-center justify-center text-[#2D5A4A] font-semibold">E</div>
                  <div>
                    <p className="font-medium text-[#2D5A4A]">Emma Williams</p>
                    <p className="text-sm text-[#8B8378]">UK</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-[#2D5A4A]/10 text-[#2D5A4A] hover:bg-[#2D5A4A]/20 border-none">
                {t('contactUs')}
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D5A4A] mb-4">
                {t('startJourney')}
              </h2>
              <p className="text-lg text-[#5D6D7E] mb-8">
                {t('startJourneyDesc')}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#2D5A4A]/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#2D5A4A]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#8B8378]">{t('phone')}</p>
                    <p className="text-[#2D5A4A] font-medium">+86 13396457967</p>
                    <p className="text-[#2D5A4A] font-medium">+852 47436719</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#2D5A4A]/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#2D5A4A]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#8B8378]">{t('email')}</p>
                    <p className="text-[#2D5A4A] font-medium">jiangjingfu@mediodyssey.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#2D5A4A]/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#2D5A4A]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#8B8378]">{t('location')}</p>
                    <p className="text-[#2D5A4A] font-medium">Shanghai, China</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-white shadow-xl">
              <CardHeader>
                <CardTitle className="text-[#2D5A4A]">{t('quickInquiry')}</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-[#5D6D7E] mb-1">{t('firstName')}</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5A4A]"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#5D6D7E] mb-1">{t('lastName')}</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5A4A]"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-[#5D6D7E] mb-1">{t('email')}</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5A4A]"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#5D6D7E] mb-1">{t('interestedPackage')}</label>
                    <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5A4A]">
                      <option>{t('basic')} - $1,680</option>
                      <option>{t('premium')} - $3,800</option>
                      <option>{t('ultimate')} - $9,800</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-[#5D6D7E] mb-1">{t('message')}</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5A4A]"
                      placeholder={t('healthGoals')}
                    />
                  </div>
                  <Button className="w-full bg-[#2D5A4A] hover:bg-[#1e3d31] text-white">
                    {t('sendInquiry')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D5A4A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-6 h-6 text-[#C9A962]" />
                <span className="text-xl font-semibold">MediOdyssey</span>
              </div>
              <p className="text-white/70 text-sm">
                Your gateway to premium health tourism in China, combining Western precision with Eastern wisdom.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t('footerServices')}</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>{t('medicalCheckup')}</li>
                <li>{t('tcmTherapy')}</li>
                <li>{t('culturalExperience')}</li>
                <li>{t('vipServices')}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t('footerPackages')}</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>{t('basic')} - $1,680</li>
                <li>{t('premium')} - $3,800</li>
                <li>{t('ultimate')} - $9,800</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t('footerContact')}</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>+86 13396457967 / +852 47436719</li>
                <li>jiangjingfu@mediodyssey.com</li>
                <li>Shanghai, China</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/50 text-sm">
            <p>&copy; 2025 MediOdyssey. {t('allRightsReserved')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
