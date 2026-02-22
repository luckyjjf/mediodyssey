import React, { useEffect } from 'react';
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
  ChevronRight,
  Calendar,
  Send
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
        items: ['TCM Constitution Assessment (45 min): AI tongue diagnosis, smart pulse diagnostic, 60+ question survey, personalized 9-type report', 'Basic Health Screening (30 min): 10-item blood panel, body composition, BP & heart rate monitoring', 'TCM Therapy Experience (60 min): 10-min senior TCM doctor consult, 20-min acupuncture, 20-min Tui Na massage, 10-min cupping', 'English-speaking medical interpreter', 'TCM gift set: mugwort sachet, acupressure comb, wellness handbook', '3 professionally edited photos', '365-day online TCM consultation access'],
        docUrl: '/docs/package-experience-en.pdf',
        paypalUrl: 'https://www.paypal.com/paypalme/mediodyssey/199'
      },
      package2: {
        name: 'Discovery Journey',
        duration: '3 days · Intro to Eastern Medicine',
        price: '$3,900',
        popular: 'Classic',
        items: ['Basic health screening', 'TCM constitution diagnosis', 'Tea ceremony intro', '4-star hotel', 'Airport transfers', '365-day online TCM consultation'],
        docUrl: '/docs/package-discovery-en.pdf',
        paypalUrl: 'https://www.paypal.com/paypalme/mediodyssey/3900'
      },
      package3: {
        name: 'Royal Journey',
        duration: '14 days · Ultimate bespoke experience',
        price: '$23,500',
        popular: 'Luxury',
        items: ['Full genome + PET-CT', 'Master physician consultation', 'Royal cultural experience', 'Luxury suite', 'Private jet optional', '365-day online TCM consultation'],
        docUrl: '/docs/package-royal-en.pdf',
        paypalUrl: 'https://www.paypal.com/paypalme/mediodyssey/23500'
      },
      viewDetails: 'View Details',
      book: 'Book Now'
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
      package0: {
        name: '会员订阅',
        duration: '每月 · ¥199',
        price: '¥199',
        popular: '超值优选',
        items: ['个性化养生茶包（30包）- 价值¥175', '在线中医咨询（15分钟）- 价值¥350', 'AI智能健康助手 - 价值¥140', '专属会员内容 - 价值¥105', '产品折扣权益 - 无上限', '健康档案管理 - 价值¥70', '总价值¥840+ · 节省76%'],
        docUrl: '/docs/tea-subscription-zh.pdf',
        paypalUrl: 'https://www.paypal.com/paypalme/mediodyssey/99'
      },
      package1: {
        name: '体验套餐',
        duration: '半天 · 3-4小时',
        price: '¥1,399',
        popular: '最受欢迎',
        items: ['中医体质评估（45分钟）：AI舌诊、智能脉诊、60+体质问卷、九种体质报告', '基础健康筛查（30分钟）：10项血检、身体成分分析、血压心率监测', '中医理疗体验（60分钟）：资深中医师咨询10分钟、针灸20分钟、推拿20分钟、拔罐10分钟', '中英文医疗翻译全程陪同', '中医伴手礼：艾草香囊、穴位按摩梳、养生手册', '3张精修照片', '365天线上中医咨询服务'],
        docUrl: '/docs/package-experience-zh.pdf',
        paypalUrl: 'https://www.paypal.com/paypalme/mediodyssey/199'
      },
      package2: {
        name: '探索之旅',
        duration: '3天2晚 · 初识东方医疗',
        price: '¥28,000',
        popular: '经典之选',
        items: ['基础全面体检', '中医体质辨识', '茶道入门体验', '四星级酒店', '机场接送服务', '365天线上中医咨询'],
        docUrl: '/docs/package-discovery-zh.pdf',
        paypalUrl: 'https://www.paypal.com/paypalme/mediodyssey/3900'
      },
      package3: {
        name: '皇家之旅',
        duration: '14天13晚 · 顶级定制体验',
        price: '¥168,000',
        popular: '奢华尊享',
        items: ['全基因组测序 + PET-CT', '国医大师亲诊', '皇室级文化体验', '奢华套房酒店', '私人飞机可选', '365天线上中医咨询'],
        docUrl: '/docs/package-royal-zh.pdf',
        paypalUrl: 'https://www.paypal.com/paypalme/mediodyssey/23500'
      },
      viewDetails: '查看详情',
      book: '立即预订'
    },
    contact: {
      badge: 'Contact Us',
      title: '开启您的健康之旅',
      desc: '填写表单，我们的健康顾问将在24小时内与您联系，为您定制专属的健康方案。',
      phone: '电话咨询',
      email: '电子邮件',
      wechat: '微信咨询',
      telegram: 'Telegram',
      form: {
        name: '姓名 *',
        email: '邮箱 *',
        countryCode: '国家区号',
        phoneNumber: '电话号码',
        package: '感兴趣的套餐',
        placeholder: '请选择...',
        options: ['养生茶饮订阅 (每月) - 超值优选', '探索之旅 (3天)', '体验套餐 (半天) - 最受欢迎', '皇家之旅 (14天)', '需要顾问推荐'],
        message: '留言/联系方式',
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
        items: ['تقييم تكوين الطب الصيني (45 دقيقة): تشخيص الذكاء الاصطناعي للسان، قياس النبض الذكي، 60+ سؤال استبيان', 'الفحص الصحي الأساسي (30 دقيقة): 10 تحليلات دم، تحليل التركيب الجسدي، مراقبة ضغط الدم والنبض', 'تجربة العلاج بالطب الصيني (60 دقيقة): استشارة طبيب كبير 10 دقائق، وخز إبر 20 دقيقة، تدليك 20 دقيقة، حجامة 10 دقائق', 'مترجم طبي ناطق بالإنجليزية', 'طقم هدايا الطب الصيني: كيس العشب، مشط الضغط، كتيب العافية', '3 صور مُحسّنة احترافياً', 'استشارة الطب الصيني عبر الإنترنت لمدة 365 يوماً'],
        docUrl: '/docs/package-experience-ar.pdf',
        paypalUrl: 'https://www.paypal.com/paypalme/mediodyssey/199'
      },
      package2: {
        name: 'رحلة الاكتشاف',
        duration: '3 أيام · مقدمة للطب الشرقي',
        price: '$3,900',
        popular: 'كلاسيكي',
        items: ['فحص صحي أساسي', 'تشخيص تكوين الطب الصيني', 'مقدمة لطقوس الشاي', 'فندق 4 نجوم', 'نقل المطار', 'استشارة الطب الصيني التقليدي لمدة 365 يوماً'],
        docUrl: '/docs/package-discovery-ar.pdf',
        paypalUrl: 'https://www.paypal.com/paypalme/mediodyssey/3900'
      },
      package3: {
        name: 'الرحلة الملكية',
        duration: '14 يوماً · تجربة فاخرة مخصصة',
        price: '$23,500',
        popular: 'فاخر',
        items: ['الجينوم الكامل + PET-CT', 'استشارة طبيب خبير', 'تجربة ثقافية ملكية', 'جناح فاخر', 'طائرة خاصة اختياري', 'استشارة الطب الصيني التقليدي لمدة 365 يوماً'],
        docUrl: '/docs/package-royal-ar.pdf',
        paypalUrl: 'https://www.paypal.com/paypalme/mediodyssey/23500'
      },
      viewDetails: 'عرض التفاصيل',
      book: 'احجز الآن'
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
    }
  }
};

function App() {
  const [language, setLanguage] = React.useState<'en' | 'zh' | 'ar'>('en');
  
  const t = translations[language];
  const isRTL = language === 'ar';

  const handleLanguageChange = (lang: 'en' | 'zh' | 'ar') => {
    setLanguage(lang);
  };

  // Load PayPal SDK for Package 1 (Discovery Journey) - $1500
  useEffect(() => {
    const loadPayPalHosted = () => {
      const existingScript = document.getElementById('paypal-script-hosted');
      if (!existingScript) {
        const script = document.createElement('script');
        script.id = 'paypal-script-hosted';
        script.src = 'https://www.paypal.com/sdk/js?client-id=BAAMkzXjQ-Az2R2yBDRxEjBRXV6jyvZnIzxEhSyLJVT2Q5XwugbNRXTpsUkYWx_lAW468dLzobLEmnvuww&components=hosted-buttons&disable-funding=venmo&currency=USD';
        script.async = true;
        script.onload = () => {
          if ((window as any).paypal?.HostedButtons) {
            (window as any).paypal.HostedButtons({
              hostedButtonId: 'PCVZMAHAUCLEE',
            }).render('#paypal-container-PCVZMAHAUCLEE');
          }
        };
        document.body.appendChild(script);
      } else if ((window as any).paypal?.HostedButtons) {
        // Script already loaded, just render
        (window as any).paypal.HostedButtons({
          hostedButtonId: 'PCVZMAHAUCLEE',
        }).render('#paypal-container-PCVZMAHAUCLEE');
      }
    };
    
    // Delay to ensure DOM is ready
    setTimeout(loadPayPalHosted, 100);
  }, []);

  // Load PayPal Subscription SDK for Package 0 (Tea Subscription)
  useEffect(() => {
    const loadPayPalSubscription = () => {
      const existingScript = document.getElementById('paypal-script-subscription');
      if (!existingScript) {
        const script = document.createElement('script');
        script.id = 'paypal-script-subscription';
        script.src = 'https://www.paypal.com/sdk/js?client-id=AdE_Z_W7TwFrNJbYftxbWO4LI_oFydXRUsmPigyTQu4oKWe_G_UWBvoMO1e5gFBj8iPKb17GS7h9IL4W&vault=true&intent=subscription';
        script.async = true;
        script.setAttribute('data-sdk-integration-source', 'button-factory');
        script.onload = () => {
          if ((window as any).paypal?.Buttons) {
            (window as any).paypal.Buttons({
              style: {
                shape: 'pill',
                color: 'gold',
                layout: 'vertical',
                label: 'paypal'
              },
              createSubscription: function(_data: any, actions: any) {
                return actions.subscription.create({
                  plan_id: 'P-46T13876K0925810UNGMVWUQ'
                });
              },
              onApprove: function(_data: any) {
                alert('Subscription successful! ID: ' + _data.subscriptionID);
              }
            }).render('#paypal-button-container-P-46T13876K0925810UNGMVWUQ');
          }
        };
        document.body.appendChild(script);
      } else if ((window as any).paypal?.Buttons) {
        // Script already loaded, just render
        (window as any).paypal.Buttons({
          style: {
            shape: 'pill',
            color: 'gold',
            layout: 'vertical',
            label: 'paypal'
          },
          createSubscription: function(_data: any, actions: any) {
            return actions.subscription.create({
              plan_id: 'P-46T13876K0925810UNGMVWUQ'
            });
          },
          onApprove: function(_data: any) {
            alert('Subscription successful! ID: ' + _data.subscriptionID);
          }
        }).render('#paypal-button-container-P-46T13876K0925810UNGMVWUQ');
      }
    };
    
    // Delay to ensure DOM is ready
    setTimeout(loadPayPalSubscription, 200);
  }, []);

  return (
    <div className={`min-h-screen bg-cream ${isRTL ? 'rtl' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <nav style={{position: 'fixed', top: 0, left: 0, right: 0, zIndex: 99999, backgroundColor: 'white', borderBottom: '1px solid #e5e7eb'}}>
        <div style={{maxWidth: '1280px', margin: '0 auto', padding: '0 24px'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px'}}>
            <a href="#" style={{display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none'}}>
              <div style={{width: '40px', height: '40px', backgroundColor: '#1a365d', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Heart style={{color: 'white', width: '24px', height: '24px'}} />
              </div>
              <span style={{fontSize: '24px', fontWeight: 'bold', color: '#1a365d'}}>MediOdyssey</span>
            </a>
            <div style={{display: 'flex', alignItems: 'center', gap: '32px'}}>
              <a href="#services" style={{color: '#2d3748', textDecoration: 'none'}}>{t.nav.services}</a>
              <a href="#packages" style={{color: '#2d3748', textDecoration: 'none'}}>{t.nav.packages}</a>
              <a href="#stories" style={{color: '#2d3748', textDecoration: 'none'}}>{t.nav.stories}</a>
              <a href="#contact" style={{color: '#2d3748', textDecoration: 'none'}}>{t.nav.contact}</a>
              <select 
                value={language} 
                onChange={(e) => handleLanguageChange(e.target.value as 'en' | 'zh' | 'ar')}
                style={{padding: '4px 8px', borderRadius: '4px', border: '1px solid #ccc'}}
              >
                <option value="en">English</option>
                <option value="zh">中文</option>
                <option value="ar">العربية</option>
              </select>
              <a href="#contact" style={{backgroundColor: '#1a365d', color: 'white', padding: '10px 24px', borderRadius: '9999px', textDecoration: 'none'}}>
                {t.nav.freeConsult}
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - added pt-20 (80px) to account for fixed navbar */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Package 0 - Tea Subscription */}
            <div className="package-card rounded-2xl overflow-hidden card-hover border-2 border-secondary relative">
              <div className="popular-badge bg-secondary text-white text-center py-2 font-semibold">
                <Star className="inline w-4 h-4 mr-2" />{t.packages.package0.popular}
              </div>
              <div className="h-48 bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
                <svg className="text-white w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 3H4a2 2 0 00-2 2v14a2 2 0 002 2h16a2 2 0 002-2V5a2 2 0 00-2-2zm-9 14H5v-2h6v2zm6-4H5v-2h12v2zm0-4H5V7h12v2z"/>
                  <path d="M17 8c0-1.1-.9-2-2-2H9v2h6v6h2V8z"/>
                </svg>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl font-bold text-primary mb-2">{t.packages.package0.name}</h3>
                <p className="text-gray-500 mb-4">{t.packages.package0.duration}</p>
                <div className="text-4xl font-bold text-primary mb-6">
                  {t.packages.package0.price}<span className="text-lg font-normal text-gray-500">{language === 'zh' ? '/月' : '/month'}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {t.packages.package0.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-600"><Check className="text-secondary w-5 h-5 mr-3" />{item}</li>
                  ))}
                </ul>
                <div className="space-y-3">
                  <a 
                    href={t.packages.package0.docUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center border-2 border-primary text-primary py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition"
                  >
                    {t.packages.viewDetails}
                  </a>
                  <div id="paypal-button-container-P-46T13876K0925810UNGMVWUQ"></div>
                </div>
              </div>
            </div>

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
                <div className="space-y-3">
                  <a 
                    href={t.packages.package1.docUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center border-2 border-primary text-primary py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition"
                  >
                    {t.packages.viewDetails}
                  </a>
                  <div id="paypal-container-PCVZMAHAUCLEE"></div>
                </div>
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
                <div className="space-y-3">
                  <a 
                    href={t.packages.package2.docUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center border-2 border-primary text-primary py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition"
                  >
                    {t.packages.viewDetails}
                  </a>
                  <a 
                    href={t.packages.package2.paypalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-accent text-primary py-3 rounded-full font-semibold hover:bg-yellow-400 transition shadow-lg"
                  >
                    {t.packages.book}
                  </a>
                </div>
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
                <div className="space-y-3">
                  <a 
                    href={t.packages.package3.docUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center border-2 border-primary text-primary py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition"
                  >
                    {t.packages.viewDetails}
                  </a>
                  <a 
                    href={t.packages.package3.paypalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-secondary text-white py-3 rounded-full font-semibold hover:bg-green-600 transition"
                  >
                    {t.packages.book}
                  </a>
                </div>
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
                    <a 
                      href="https://work.weixin.qq.com/kfid/kfc840a16d52318ed05" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-secondary transition"
                    >
                      stay7967
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Send className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">{t.contact.telegram}</p>
                    <p className="text-gray-600">
                      <a 
                        href="https://t.me/MediOdyssey_bot" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-secondary transition"
                      >
                        @MediOdyssey_bot
                      </a>
                    </p>
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
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent" 
                      placeholder="+86"
                    />
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

      {/* WeChat Customer Service Float Button */}
      <a
        href="https://work.weixin.qq.com/kfid/kfc840a16d52318ed05"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110"
        title="微信客服"
      >
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"/>
        </svg>
      </a>

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
                <li className="flex items-center"><MapPin className="w-4 h-4 mr-2" />{language === 'zh' ? '上海市徐汇区古宜路186号西岸创意园4号楼' : language === 'ar' ? 'مبنى 4، حديقة ويست بوند الإبداعية، رقم 186 شارع جوي، منطقة شيهوي، شنغهاي' : 'Building 4, West Bund Creative Park, 186 Guyi Road, Xuhui District, Shanghai'}</li>
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