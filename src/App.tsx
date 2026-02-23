import { useEffect } from 'react';
import { loadPayPalHostedButton, loadPayPalSubscriptionButton } from './utils/paypal';
import { useLanguage } from './hooks/useLanguage';
import {
  Navbar,
  HeroSection,
  ServicesSection,
  WhyChinaSection,
  PackagesSection,
  TestimonialsSection,
  ContactSection,
  Footer
} from './components';

function App() {
  const { language, setLanguage, t, isRTL } = useLanguage();

  // Load PayPal buttons
  useEffect(() => {
    // Discovery Journey - Hosted Button
    loadPayPalHostedButton(
      'PCVZMAHAUCLEE',
      'paypal-container-PCVZMAHAUCLEE',
      'BAAMkzXjQ-Az2R2yBDRxEjBRXV6jyvZnIzxEhSyLJVT2Q5XwugbNRXTpsUkYWx_lAW468dLzobLEmnvuww'
    );
    
    // Tea Subscription - Subscription Button
    loadPayPalSubscriptionButton(
      'P-46T13876K0925810UNGMVWUQ',
      'paypal-button-container-P-46T13876K0925810UNGMVWUQ',
      'AdE_Z_W7TwFrNJbYftxbWO4LI_oFydXRUsmPigyTQu4oKWe_G_UWBvoMO1e5gFBj8iPKb17GS7h9IL4W',
      (subscriptionId) => {
        console.log('Subscription successful:', subscriptionId);
      }
    );
  }, []);

  return (
    <div className={`min-h-screen bg-canvas ${isRTL ? 'rtl' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Navbar 
        t={t} 
        language={language} 
        onLanguageChange={setLanguage} 
      />
      
      <main>
        <HeroSection t={t} />
        <ServicesSection t={t} />
        <WhyChinaSection t={t} />
        <PackagesSection t={t} />
        <TestimonialsSection t={t} />
        <ContactSection t={t} language={language} />
      </main>
      
      <Footer t={t} language={language} />
    </div>
  );
}

export default App;
