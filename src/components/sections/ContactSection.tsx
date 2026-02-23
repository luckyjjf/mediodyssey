import { Phone, Mail, MessageCircle, Send } from 'lucide-react';
import type { Translation, Language } from '../../types';

interface ContactSectionProps {
  t: Translation;
  language: Language;
}

export function ContactSection({ t, language }: ContactSectionProps) {
  return (
    <section id="contact" className="section-padding bg-canvas">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-secondary font-semibold tracking-wider uppercase">{t.contact.badge}</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mt-3 mb-6">{t.contact.title}</h2>
            <p className="text-slate-600 text-lg mb-8">
              {t.contact.desc}
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-primary">{t.contact.phone}</p>
                  <p className="text-slate-600">+86 133-9645-7967</p>
                  <p className="text-slate-600">+852 4743-6719</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-primary">{t.contact.email}</p>
                  <p className="text-slate-600">jiangjingfu@mediodyssey.com</p>
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
                    className="text-slate-600 hover:text-secondary transition"
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
                  <p className="text-slate-600">
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
                  <label className="block text-slate-700 font-medium mb-2">{t.contact.form.name}</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent" 
                    placeholder={language === 'ar' ? 'اسمك' : 'Your name'}
                  />
                </div>
                
                <div>
                  <label className="block text-slate-700 font-medium mb-2">{t.contact.form.email}</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent" 
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-slate-700 font-medium mb-2">{t.contact.form.countryCode}</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent" 
                    placeholder="+86"
                  />
                </div>
                
                <div className="col-span-2">
                  <label className="block text-slate-700 font-medium mb-2">{t.contact.form.phoneNumber}</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent" 
                    placeholder={language === 'ar' ? '123456789' : 'Phone number'}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-slate-700 font-medium mb-2">{t.contact.form.package}</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent">
                  <option>{t.contact.form.placeholder}</option>
                  {t.contact.form.options.map((opt, idx) => (
                    <option key={idx}>{opt}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-slate-700 font-medium mb-2">{t.contact.form.message}</label>
                <textarea 
                  rows={4} 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent" 
                  placeholder={language === 'ar' ? 'أخبرنا عن احتياجاتك الصحية...' : 'Tell us about your health needs...'}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-primary text-white py-4 rounded-lg font-semibold text-lg hover:bg-primary-dark transition"
              >
                {t.contact.form.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* WeChat Float Button */}
      <a
        href="https://work.weixin.qq.com/kfid/kfc840a16d52318ed05"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#059669] hover:bg-[#047857] text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110"
        title="微信客服"
      >
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"/>
        </svg>
      </a>
    </section>
  );
}
