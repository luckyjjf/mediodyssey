import { useEffect, useState } from 'react';
import { 
  Heart, Sparkles, Check, ArrowRight, 
  Globe, Phone, Mail, MapPin, Menu, ChevronDown,
  Stethoscope, Brain, Flower2, Plane
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <div className="min-h-screen bg-[#FAF7F0]">
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
              <button onClick={() => scrollToSection('services')} className="text-[#5D6D7E] hover:text-[#2D5A4A] transition-colors">Services</button>
              <button onClick={() => scrollToSection('packages')} className="text-[#5D6D7E] hover:text-[#2D5A4A] transition-colors">Packages</button>
              <button onClick={() => scrollToSection('comparison')} className="text-[#5D6D7E] hover:text-[#2D5A4A] transition-colors">Comparison</button>
              <button onClick={() => scrollToSection('contact')} className="text-[#5D6D7E] hover:text-[#2D5A4A] transition-colors">Contact</button>
              <Button 
                onClick={() => scrollToSection('packages')}
                className="bg-[#2D5A4A] hover:bg-[#1e3d31] text-white"
              >
                Book Now
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
                  <button onClick={() => scrollToSection('services')} className="text-left text-lg text-[#5D6D7E]">Services</button>
                  <button onClick={() => scrollToSection('packages')} className="text-left text-lg text-[#5D6D7E]">Packages</button>
                  <button onClick={() => scrollToSection('comparison')} className="text-left text-lg text-[#5D6D7E]">Comparison</button>
                  <button onClick={() => scrollToSection('contact')} className="text-left text-lg text-[#5D6D7E]">Contact</button>
                  <Button 
                    onClick={() => scrollToSection('packages')}
                    className="bg-[#2D5A4A] hover:bg-[#1e3d31] text-white w-full"
                  >
                    Book Now
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
            Premium Health Tourism
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#2D5A4A] mb-4 tracking-tight">
            MediOdyssey
          </h1>
          <p className="text-xl sm:text-2xl text-[#5D6D7E] mb-4 font-light">
            医疗奥德赛
          </p>
          <p className="text-lg sm:text-xl text-[#5D6D7E] mb-8 max-w-2xl mx-auto">
            Western Medicine + TCM Wellness + Cultural Experience
          </p>
          <p className="text-base text-[#8B8378] mb-12 max-w-xl mx-auto">
            Experience the perfect fusion of modern medical precision and ancient healing wisdom in China
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => scrollToSection('packages')}
              className="bg-[#2D5A4A] hover:bg-[#1e3d31] text-white px-8"
            >
              Explore Packages
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('services')}
              className="border-[#C9A962] text-[#C9A962] hover:bg-[#C9A962]/10 px-8"
            >
              Our Services
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
              Our Services
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D5A4A] mb-4">
              Four Pillars of Wellness
            </h2>
            <p className="text-lg text-[#5D6D7E] max-w-2xl mx-auto">
              A comprehensive approach combining the best of Eastern and Western health practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 rounded-full bg-[#2D5A4A]/10 flex items-center justify-center text-[#2D5A4A] mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-[#2D5A4A]">{service.title}</CardTitle>
                  <p className="text-[#C9A962] font-medium">{service.subtitle}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-[#5D6D7E] mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-[#5D6D7E]">
                        <Check className="w-4 h-4 text-[#2D5A4A]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#C9A962]/20 text-[#C9A962] hover:bg-[#C9A962]/30 border-none">
              Pricing
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D5A4A] mb-4">
              Choose Your Journey
            </h2>
            <p className="text-lg text-[#5D6D7E] max-w-2xl mx-auto">
              Three carefully designed packages to meet different health goals and preferences
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`relative overflow-hidden ${
                  pkg.highlight 
                    ? 'border-2 border-[#C9A962] shadow-xl scale-105' 
                    : 'border border-gray-100 shadow-lg'
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute top-0 left-0 right-0 bg-[#C9A962] text-white text-center py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader className={`text-center ${pkg.highlight ? 'pt-10' : ''}`}>
                  <p className="text-sm text-[#8B8378] uppercase tracking-wider mb-2">{pkg.name}</p>
                  <div className="text-4xl font-bold text-[#2D5A4A] mb-2">{pkg.price}</div>
                  <p className="text-[#5D6D7E]">{pkg.duration}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#5D6D7E]">
                        <Check className="w-4 h-4 text-[#2D5A4A] mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        className={`w-full ${
                          pkg.highlight 
                            ? 'bg-[#C9A962] hover:bg-[#b89a55] text-white' 
                            : 'bg-[#2D5A4A] hover:bg-[#1e3d31] text-white'
                        }`}
                      >
                        Select Package
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle className="text-[#2D5A4A]">Book {pkg.name} Package</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <p className="text-[#5D6D7E]">Thank you for your interest! Please contact us to complete your booking.</p>
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
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#2D5A4A]/10 text-[#2D5A4A] hover:bg-[#2D5A4A]/20 border-none">
              <Globe className="w-3 h-3 mr-1" />
              Global Comparison
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D5A4A] mb-4">
              Same Service, Better Value
            </h2>
            <p className="text-lg text-[#5D6D7E] max-w-2xl mx-auto">
              Compare our prices with similar health tourism services worldwide
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F5F0E6]">
                    <th className="px-6 py-4 text-left text-[#2D5A4A] font-semibold">Destination</th>
                    <th className="px-6 py-4 text-center text-[#2D5A4A] font-semibold">Basic</th>
                    <th className="px-6 py-4 text-center text-[#2D5A4A] font-semibold">Premium</th>
                    <th className="px-6 py-4 text-center text-[#2D5A4A] font-semibold">Ultimate</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className={row.isUs ? 'bg-[#E8F5E9]' : 'border-b border-gray-100'}>
                      <td className={`px-6 py-4 font-medium ${row.isUs ? 'text-[#2D5A4A]' : 'text-[#5D6D7E]'}`}>
                        {row.isUs && <span className="inline-block w-2 h-2 bg-[#2D5A4A] rounded-full mr-2" />}
                        {row.destination}
                      </td>
                      <td className={`px-6 py-4 text-center ${row.isUs ? 'text-[#C9A962] font-bold' : 'text-[#C75B5B]'}`}>
                        {row.basic}
                      </td>
                      <td className={`px-6 py-4 text-center ${row.isUs ? 'text-[#C9A962] font-bold' : 'text-[#C75B5B]'}`}>
                        {row.premium}
                      </td>
                      <td className={`px-6 py-4 text-center ${row.isUs ? 'text-[#C9A962] font-bold' : 'text-[#C75B5B]'}`}>
                        {row.ultimate}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            <Card className="bg-[#E8F5E9] border-none">
              <CardContent className="pt-6 text-center">
                <p className="text-3xl font-bold text-[#2D5A4A]">65%</p>
                <p className="text-sm text-[#5D6D7E]">Savings vs USA</p>
              </CardContent>
            </Card>
            <Card className="bg-[#FFF8E1] border-none">
              <CardContent className="pt-6 text-center">
                <p className="text-3xl font-bold text-[#C9A962]">50+</p>
                <p className="text-sm text-[#5D6D7E]">Medical Partners</p>
              </CardContent>
            </Card>
            <Card className="bg-[#E3F2FD] border-none">
              <CardContent className="pt-6 text-center">
                <p className="text-3xl font-bold text-[#1976D2]">1000+</p>
                <p className="text-sm text-[#5D6D7E]">Happy Clients</p>
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
              Testimonials
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D5A4A] mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                country: 'USA',
                text: 'The Premium package exceeded all my expectations. The TCM treatments were incredibly effective, and the cultural experiences were unforgettable.',
                rating: 5
              },
              {
                name: 'Michael Chen',
                country: 'Singapore',
                text: 'Professional medical team, luxurious accommodations, and seamless service. I saved thousands compared to similar packages in other countries.',
                rating: 5
              },
              {
                name: 'Emma Williams',
                country: 'UK',
                text: 'A truly transformative experience. The combination of modern diagnostics and traditional healing gave me a complete picture of my health.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-[#FAF7F0] border-none">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Sparkles key={i} className="w-4 h-4 text-[#C9A962]" />
                    ))}
                  </div>
                  <p className="text-[#5D6D7E] mb-4">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#2D5A4A]/10 flex items-center justify-center text-[#2D5A4A] font-semibold">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <p className="font-medium text-[#2D5A4A]">{testimonial.name}</p>
                      <p className="text-sm text-[#8B8378]">{testimonial.country}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-[#2D5A4A]/10 text-[#2D5A4A] hover:bg-[#2D5A4A]/20 border-none">
                Contact Us
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D5A4A] mb-4">
                Start Your MediOdyssey
              </h2>
              <p className="text-lg text-[#5D6D7E] mb-8">
                Ready to experience the perfect blend of modern medicine and traditional wellness? Contact us today.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#2D5A4A]/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#2D5A4A]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#8B8378]">Phone</p>
                    <p className="text-[#2D5A4A] font-medium">+86 13396457967</p>
                    <p className="text-[#2D5A4A] font-medium">+852 47436719</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#2D5A4A]/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#2D5A4A]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#8B8378]">Email</p>
                    <p className="text-[#2D5A4A] font-medium">jiangjingfu@mediodyssey.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#2D5A4A]/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#2D5A4A]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#8B8378]">Location</p>
                    <p className="text-[#2D5A4A] font-medium">Shanghai, China</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-white shadow-xl">
              <CardHeader>
                <CardTitle className="text-[#2D5A4A]">Quick Inquiry</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-[#5D6D7E] mb-1">First Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5A4A]"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#5D6D7E] mb-1">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5A4A]"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-[#5D6D7E] mb-1">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5A4A]"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#5D6D7E] mb-1">Interested Package</label>
                    <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5A4A]">
                      <option>Basic - $1,680</option>
                      <option>Premium - $3,800</option>
                      <option>Ultimate - $9,800</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-[#5D6D7E] mb-1">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5A4A]"
                      placeholder="Tell us about your health goals..."
                    />
                  </div>
                  <Button className="w-full bg-[#2D5A4A] hover:bg-[#1e3d31] text-white">
                    Send Inquiry
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
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>Medical Checkup</li>
                <li>TCM Therapy</li>
                <li>Cultural Experience</li>
                <li>VIP Services</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Packages</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>Basic - $1,680</li>
                <li>Premium - $3,800</li>
                <li>Ultimate - $9,800</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>+86 13396457967 / +852 47436719</li>
                <li>jiangjingfu@mediodyssey.com</li>
                <li>Shanghai, China</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/50 text-sm">
            <p>&copy; 2025 MediOdyssey. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
