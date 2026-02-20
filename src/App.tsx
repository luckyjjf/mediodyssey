import React from 'react';
import { 
  Heart, 
  Microscope, 
  YinYang, 
  Torii, 
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
  Calendar
} from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-cream">
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
              <a href="#services" className="text-dark hover:text-secondary transition">服务</a>
              <a href="#packages" className="text-dark hover:text-secondary transition">套餐</a>
              <a href="#stories" className="text-dark hover:text-secondary transition">故事</a>
              <a href="#contact" className="text-dark hover:text-secondary transition">联系</a>
              <div className="flex items-center space-x-2 text-sm">
                <button className="text-primary font-medium">EN</button>
                <span className="text-gray-300">|</span>
                <button className="text-secondary font-medium">中</button>
              </div>
              <a href="#contact" className="bg-primary text-white px-6 py-2.5 rounded-full hover:bg-blue-800 transition font-medium">
                免费咨询
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
              <a href="#services" className="text-dark hover:text-secondary transition">服务</a>
              <a href="#packages" className="text-dark hover:text-secondary transition">套餐</a>
              <a href="#stories" className="text-dark hover:text-secondary transition">故事</a>
              <a href="#contact" className="text-dark hover:text-secondary transition">联系</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1920&q=80" 
            alt="中国山水" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-20">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur rounded-full text-sm font-medium tracking-wider">
              <Globe className="inline w-4 h-4 mr-2" />全球信赖的医疗旅游品牌
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-shadow leading-tight">
            医疗奥德赛
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-4 text-shadow">
            当西方精准遇见东方智慧
          </p>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            一次改变生命质量的旅程 · 精密体检 × 中医调理 × 文化沉浸
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#packages" className="bg-accent text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-400 transition shadow-lg flex items-center">
              查看套餐 <ChevronRight className="ml-2 w-5 h-5" />
            </a>
            <a href="#contact" className="bg-white/20 backdrop-blur text-white border-2 border-white/50 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition flex items-center">
              <Calendar className="mr-2 w-5 h-5" />预约免费咨询
            </a>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
              <div className="flex items-center space-x-2 text-gray-600">
                <Star className="text-secondary w-6 h-6" />
                <span className="font-medium">JCI国际认证</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Star className="text-secondary w-6 h-6" />
                <span className="font-medium">GHA卓越认证</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Heart className="text-secondary w-6 h-6" />
                <span className="font-medium">三甲医院合作</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Globe className="text-secondary w-6 h-6" />
                <span className="font-medium">10,000+服务案例</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold tracking-wider uppercase">Our Services</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mt-3 mb-4">四大健康支柱</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              融合东西方医学精华，为您提供全方位的健康管理方案
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="pillar-card rounded-2xl p-8 card-hover border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Microscope className="text-primary w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-3">精密体检</h3>
              <p className="text-gray-600 mb-4">PET-CT、MRI、基因检测等尖端设备，精准评估健康风险</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="flex items-center"><Check className="text-secondary w-4 h-4 mr-2" />全身癌症筛查</li>
                <li className="flex items-center"><Check className="text-secondary w-4 h-4 mr-2" />心脑血管评估</li>
                <li className="flex items-center"><Check className="text-secondary w-4 h-4 mr-2" />基因检测分析</li>
              </ul>
            </div>

            <div className="pillar-card rounded-2xl p-8 card-hover border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <YinYang className="text-secondary w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-3">中医调理</h3>
              <p className="text-gray-600 mb-4">传承千年的东方智慧，个性化体质调理方案</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="flex items-center"><Check className="text-secondary w-4 h-4 mr-2" />体质辨识诊断</li>
                <li className="flex items-center"><Check className="text-secondary w-4 h-4 mr-2" />针灸推拿治疗</li>
                <li className="flex items-center"><Check className="text-secondary w-4 h-4 mr-2" />膏方调理</li>
              </ul>
            </div>

            <div className="pillar-card rounded-2xl p-8 card-hover border border-gray-100">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6">
                <Torii className="text-accent w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-3">文化沉浸</h3>
              <p className="text-gray-600 mb-4">茶道、太极、书法，身心合一的东方修行体验</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="flex items-center"><Check className="text-secondary w-4 h-4 mr-2" />私人茶道品鉴</li>
                <li className="flex items-center"><Check className="text-secondary w-4 h-4 mr-2" />太极气功课程</li>
                <li className="flex items-center"><Check className="text-secondary w-4 h-4 mr-2" />古琴书法体验</li>
              </ul>
            </div>

            <div className="pillar-card rounded-2xl p-8 card-hover border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <ConciergeBell className="text-purple-600 w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-3">全程管家</h3>
              <p className="text-gray-600 mb-4">从签证到离境，24/7专属管家贴心服务</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="flex items-center"><Check className="text-secondary w-4 h-4 mr-2" />签证协助办理</li>
                <li className="flex items-center"><Check className="text-secondary w-4 h-4 mr-2" />机场贵宾接送</li>
                <li className="flex items-center"><Check className="text-secondary w-4 h-4 mr-2" />多语言管家</li>
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
              <span className="text-accent font-semibold tracking-wider uppercase">Why China</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mt-3 mb-6">为什么选择中国？</h2>
              <p className="text-white/80 text-lg mb-8">
                世界领先的医疗设备、经验丰富的专家团队，以及极具竞争力的价格，让中国成为全球医疗旅游的新兴目的地。
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                  <div className="text-4xl font-bold text-accent mb-2">1/3</div>
                  <p className="text-white/80">仅为欧美同等服务价格</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                  <div className="text-4xl font-bold text-accent mb-2">#1</div>
                  <p className="text-white/80">MRI/CT设备全球普及率</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                  <div className="text-4xl font-bold text-accent mb-2">5000+</div>
                  <p className="text-white/80">年服务国际患者</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                  <div className="text-4xl font-bold text-accent mb-2">100%</div>
                  <p className="text-white/80">患者满意度</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800&q=80" 
                alt="现代医疗设施" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <Star className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-dark font-medium">"中国医疗水平让我惊讶"</p>
                    <p className="text-gray-500 text-sm">— Sarah M., 美国患者</p>
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
            <span className="text-secondary font-semibold tracking-wider uppercase">Packages</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mt-3 mb-4">选择您的健康之旅</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              三种精心设计的套餐，满足不同健康目标和预算
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Package 1 */}
            <div className="package-card rounded-2xl overflow-hidden card-hover border border-gray-200">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <Globe className="text-white w-16 h-16" />
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl font-bold text-primary mb-2">探索之旅</h3>
                <p className="text-gray-500 mb-4">3天2晚 · 初识东方医疗</p>
                <div className="text-4xl font-bold text-primary mb-6">
                  ¥28,000<span className="text-lg font-normal text-gray-500">起</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-600"><Check className="text-secondary w-5 h-5 mr-3" />基础全面体检</li>
                  <li className="flex items-center text-gray-600"><Check className="text-secondary w-5 h-5 mr-3" />中医体质辨识</li>
                  <li className="flex items-center text-gray-600"><Check className="text-secondary w-5 h-5 mr-3" />茶道入门体验</li>
                  <li className="flex items-center text-gray-600"><Check className="text-secondary w-5 h-5 mr-3" />四星级酒店</li>
                  <li className="flex items-center text-gray-600"><Check className="text-secondary w-5 h-5 mr-3" />机场接送服务</li>
                </ul>
                <button className="w-full border-2 border-primary text-primary py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition">
                  查看详情
                </button>
              </div>
            </div>

            {/* Package 2 - Popular */}
            <div className="package-card rounded-2xl overflow-hidden card-hover border-2 border-accent relative transform scale-105">
              <div className="popular-badge text-white text-center py-2 font-semibold">
                <Star className="inline w-4 h-4 mr-2" />最受欢迎
              </div>
              <div className="h-48 bg-gradient-to-br from-secondary to-green-600 flex items-center justify-center">
                <Heart className="text-white w-16 h-16" />
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl font-bold text-primary mb-2">焕新之旅</h3>
                <p className="text-gray-500 mb-4">7天6晚 · 深度身心调理</p>
                <div className="text-4xl font-bold text-primary mb-6">
                  ¥68,000<span className="text-lg font-normal text-gray-500">起</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-600"><Check className="text-secondary w-5 h-5 mr-3" />全面体检 + MRI/CT</li>
                  <li className="flex items-center text-gray-600"><Check className="text-secondary w-5 h-5 mr-3" />专家诊断 + 经络检测</li>
                  <li className="flex items-center text-gray-600"><Check className="text-secondary w-5 h-5 mr-3" />私人茶道 + 太极 + 古琴</li>
                  <li className="flex items-center text-gray-600"><Check className="text-secondary w-5 h-5 mr-3" />五星级酒店</li>
                  <li className="flex items-center text-gray-600"><Check className="text-secondary w-5 h-5 mr-3" />专车 + 专属顾问</li>
                </ul>
                <button className="w-full bg-accent text-primary py-3 rounded-full font-semibold hover:bg-yellow-400 transition shadow-lg">
                  立即预订
                </button>
              </div>
            </div>

            {/* Package 3 */}
            <div className="package-card rounded-2xl overflow-hidden card-hover border border-gray-200">
              <div className="h-48 bg-gradient-to-br from-accent to-yellow-600 flex items-center justify-center">
                <Star className="text-white w-16 h-16" />
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl font-bold text-primary mb-2">皇家之旅</h3>
                <p className="text-gray-500 mb-4">14天13晚 · 顶级定制体验</p>
                <div className="text-4xl font-bold text-primary mb-6">
                  ¥168,000<span className="text-lg font-normal text-gray-500">起</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-600"><Check className="text-secondary w-5 h-5 mr-3" />全基因组测序 + PET-CT</li>
                  <li className="flex items-center text-gray-600"><Check className="text-secondary w-5 h-5 mr-3" />国医大师亲诊</li>
                  <li className="flex items-center text-gray-600"><Check className="text-secondary w-5 h-5 mr-3" />皇室级文化体验</li>
                  <li className="flex items-center text-gray-600"><Check className="text-secondary w-5 h-5 mr-3" />奢华套房酒店</li>
                  <li className="flex items-center text-gray-600"><Check className="text-secondary w-5 h-5 mr-3" />私人飞机可选</li>
                </ul>
                <button className="w-full border-2 border-primary text-primary py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition">
                  查看详情
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
              <span className="text-secondary font-semibold tracking-wider uppercase">Contact Us</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mt-3 mb-6">开启您的健康之旅</h2>
              <p className="text-gray-600 text-lg mb-8">
                填写表单，我们的健康顾问将在24小时内与您联系，为您定制专属的健康方案。
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">电话咨询</p>
                    <p className="text-gray-600">+86 133-9645-7967</p>
                    <p className="text-gray-600">+852 4743-6719</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">电子邮件</p>
                    <p className="text-gray-600">jiangjingfu@mediodyssey.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">微信咨询</p>
                    <p className="text-gray-600">MediOdyssey</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">姓名 *</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent" 
                      placeholder="您的姓名"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">邮箱 *</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent" 
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">电话</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent" 
                    placeholder="+86"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">感兴趣的套餐</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent">
                    <option>请选择...</option>
                    <option>探索之旅 (3天)</option>
                    <option>焕新之旅 (7天) - 最受欢迎</option>
                    <option>皇家之旅 (14天)</option>
                    <option>需要顾问推荐</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">留言</label>
                  <textarea 
                    rows={4} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent" 
                    placeholder="请告诉我们您的健康需求或问题..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-primary text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-800 transition"
                >
                  提交咨询
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
                西方精准医疗 × 东方养生智慧<br />
                为您开启改变生命质量的旅程
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">快速链接</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">关于我们</a></li>
                <li><a href="#services" className="hover:text-white transition">医疗团队</a></li>
                <li><a href="#packages" className="hover:text-white transition">套餐方案</a></li>
                <li><a href="#stories" className="hover:text-white transition">患者故事</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">服务项目</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">精密体检</a></li>
                <li><a href="#" className="hover:text-white transition">中医调理</a></li>
                <li><a href="#" className="hover:text-white transition">文化体验</a></li>
                <li><a href="#" className="hover:text-white transition">全程管家</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">联系我们</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center"><Phone className="w-4 h-4 mr-2" />+86 133-9645-7967</li>
                <li className="flex items-center"><Phone className="w-4 h-4 mr-2" />+852 4743-6719</li>
                <li className="flex items-center"><Mail className="w-4 h-4 mr-2" />jiangjingfu@mediodyssey.com</li>
                <li className="flex items-center"><MapPin className="w-4 h-4 mr-2" />北京市朝阳区建国路88号</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2026 MediOdyssey. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-gray-400 text-sm">
              <a href="#" className="hover:text-white transition">隐私政策</a>
              <a href="#" className="hover:text-white transition">服务条款</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
