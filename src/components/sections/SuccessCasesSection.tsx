import { MapPin, Clock, ArrowRight, Building2, Users, CheckCircle2 } from 'lucide-react';
import type { Translation } from '../../types';

interface SuccessCasesSectionProps {
  t: Translation;
}

export function SuccessCasesSection({ t }: SuccessCasesSectionProps) {
  // 真实服务案例数据
  const cases = [
    {
      id: 1,
      title: '17岁少年罕见胸腺瘤赴美求医',
      hospital: '美国妙佑医疗国际 (Mayo Clinic)',
      location: '美国·罗切斯特',
      summary: '国内评估手术风险极高，美国团队通过多学科协作成功切除肿瘤，5天出院',
      duration: '治疗周期：21天',
      outcome: '术后恢复良好，无并发症',
      tags: ['罕见病', '胸外科', '多学科会诊'],
      stats: { doctors: 6, surgeries: 1, days: 5 },
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80',
      featured: true
    },
    {
      id: 2,
      title: '乳腺癌患者日本精准治疗',
      hospital: '日本癌研有明医院',
      location: '日本·东京',
      summary: '7个月系统治疗，保乳手术成功，现已回归正常生活',
      duration: '治疗周期：7个月',
      outcome: '肿瘤完全消除，乳房保留',
      tags: ['乳腺癌', '保乳手术', '综合治疗'],
      stats: { doctors: 4, surgeries: 1, days: 210 },
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
      featured: false
    },
    {
      id: 3,
      title: '胃癌患者德国质子治疗',
      hospital: '德国海德堡大学医院',
      location: '德国·海德堡',
      summary: '质子重离子精准治疗，最大程度保护周围健康组织',
      duration: '治疗周期：6周',
      outcome: '肿瘤缩小60%，生活质量良好',
      tags: ['胃癌', '质子治疗', '精准医疗'],
      stats: { doctors: 5, surgeries: 0, days: 42 },
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
      featured: false
    },
    {
      id: 4,
      title: '儿童白血病美国新药临床试验',
      hospital: '美国纪念斯隆凯特琳癌症中心',
      location: '美国·纽约',
      summary: '参与CAR-T细胞疗法临床试验，获得最新治疗方案',
      duration: '治疗周期：12个月',
      outcome: '病情完全缓解，持续随访中',
      tags: ['儿童肿瘤', '临床试验', 'CAR-T疗法'],
      stats: { doctors: 8, surgeries: 0, days: 365 },
      image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=800&q=80',
      featured: false
    }
  ];

  return (
    <section id="cases" className="section-padding bg-slate-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            <CheckCircle2 className="w-4 h-4" />
            {t.successCases.badge}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {t.successCases.title}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t.successCases.subtitle}
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {t.successCases.stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-slate-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((caseItem) => (
            <div 
              key={caseItem.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Section */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={caseItem.image} 
                  alt={caseItem.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Featured Badge */}
                {caseItem.featured && (
                  <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {t.successCases.featured}
                  </div>
                )}

                {/* Location Badge */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1 text-white/90 text-sm">
                  <MapPin className="w-4 h-4" />
                  {caseItem.location}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                {/* Hospital */}
                <div className="flex items-center gap-2 text-primary font-medium mb-3">
                  <Building2 className="w-4 h-4" />
                  <span className="text-sm">{caseItem.hospital}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                  {caseItem.title}
                </h3>

                {/* Summary */}
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {caseItem.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {caseItem.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats Row */}
                <div className="flex items-center gap-6 text-sm text-slate-500 mb-4 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{caseItem.stats.doctors} {t.successCases.doctors}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{caseItem.duration}</span>
                  </div>
                </div>

                {/* Outcome */}
                <div className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900">{t.successCases.outcome}: </span>
                    <span className="text-slate-600">{caseItem.outcome}</span>
                  </div>
                </div>

                {/* CTA */}
                <button className="mt-6 w-full flex items-center justify-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                  {t.successCases.viewDetail}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">{t.successCases.ctaText}</p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-dark transition-all hover:shadow-lg"
          >
            {t.successCases.ctaButton}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
