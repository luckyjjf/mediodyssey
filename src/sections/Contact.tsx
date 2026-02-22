import { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MessageCircle, Send, CheckCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ContactProps {
  t: {
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
  };
  language: string;
}

const Contact = ({ t, language }: ContactProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '',
    phoneNumber: '',
    package: '',
    message: ''
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-info-card',
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.contact-form',
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        countryCode: '',
        phoneNumber: '',
        package: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.phone,
      value: '+86 133-9645-7967',
      subValue: '+852 4743-6719'
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: 'jiangjingfu@mediodyssey.com',
      subValue: language === 'zh' ? '24小时内回复' : 'Reply within 24h'
    },
    {
      icon: MessageCircle,
      label: t.contact.wechat,
      value: 'stay7967',
      subValue: 'WeChat ID',
      link: 'https://work.weixin.qq.com/kfid/kfc840a16d52318ed05'
    },
    {
      icon: Send,
      label: t.contact.telegram,
      value: '@MediOdyssey_bot',
      subValue: 'Telegram Bot',
      link: 'https://t.me/MediOdyssey_bot'
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Contact Info */}
          <div>
            <span className="text-secondary font-semibold tracking-wider uppercase text-sm">
              {t.contact.badge}
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mt-3 mb-6">
              {t.contact.title}
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              {t.contact.desc}
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="contact-info-card flex items-start gap-4 bg-white rounded-2xl p-6 shadow-sm border border-teal-100 card-hover"
                >
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-secondary transition"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.value}</p>
                    )}
                    <p className="text-gray-400 text-sm">{info.subValue}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div className="contact-form bg-white rounded-2xl p-8 shadow-lg border border-teal-100">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="font-display text-2xl font-bold text-primary mb-2">
                  {language === 'zh' ? '提交成功！' : 'Submitted Successfully!'}
                </h3>
                <p className="text-gray-600">
                  {language === 'zh'
                    ? '感谢您的咨询，我们的健康顾问将在24小时内与您联系。'
                    : 'Thank you for your inquiry. Our health advisor will contact you within 24 hours.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      {t.contact.form.name}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition"
                      placeholder={language === 'ar' ? 'اسمك' : language === 'zh' ? '您的姓名' : 'Your name'}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      {t.contact.form.email}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      {t.contact.form.countryCode}
                    </label>
                    <input
                      type="text"
                      value={formData.countryCode}
                      onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition"
                      placeholder="+86"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-gray-700 font-medium mb-2">
                      {t.contact.form.phoneNumber}
                    </label>
                    <input
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition"
                      placeholder={language === 'ar' ? '123456789' : language === 'zh' ? '手机号码' : 'Phone number'}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    {t.contact.form.package}
                  </label>
                  <select
                    value={formData.package}
                    onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition"
                  >
                    <option value="">{t.contact.form.placeholder}</option>
                    {t.contact.form.options.map((option, idx) => (
                      <option key={idx} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition resize-none"
                    placeholder={language === 'ar' ? 'اكتب رسالتك هنا...' : language === 'zh' ? '请留下您的留言...' : 'Leave your message...'}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary/90 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
                >
                  <Send className="w-5 h-5" />
                  {t.contact.form.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
