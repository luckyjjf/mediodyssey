import { useState, useEffect } from 'react';
import { translations, type Language } from './translations';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Services from './sections/Services';
import WhyChina from './sections/WhyChina';
import Packages from './sections/Packages';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import './App.css';

function App() {
  const [language, setLanguage] = useState<Language>('en');
  
  const t = translations[language];
  const isRTL = language === 'ar';

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    // Update document direction
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  };

  // Initialize document direction on mount
  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, []);

  // Load PayPal SDK for Package 1 (Discovery Journey)
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
      }
    };
    
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
      }
    };
    
    setTimeout(loadPayPalSubscription, 200);
  }, []);

  return (
    <div className={`min-h-screen bg-white ${isRTL ? 'rtl' : ''}`}>
      <Navbar 
        language={language} 
        onLanguageChange={handleLanguageChange} 
        t={{ nav: t.nav }} 
      />
      <main>
        <Hero t={{ hero: t.hero, trust: t.trust }} />
        <Services t={{ services: t.services }} />
        <WhyChina t={{ whyChina: t.whyChina }} />
        <Packages t={{ packages: t.packages }} language={language} />
        <Contact t={{ contact: t.contact }} language={language} />
      </main>
      <Footer t={{ footer: t.footer }} />
    </div>
  );
}

export default App;
