import dynamic from 'next/dynamic';
import Footer from '@/components/index/Footer';
import { useInView } from 'react-intersection-observer';
import Migration from '@/components/solutions/Migration';
import React, { useRef } from 'react';
import ContactForm from '@/components/index/ContactForm';
import SolutionCard from '@/components/solutions/SolutionCard';

const DynamicNavbar = dynamic(() => import('../components/index/Navbar'), {
  ssr: false,
  loading: () => <p> Im f</p>,
});

export default function Solutions() {
  const contactFormRef = useRef(null);

  const scrollToContactForm = () => {
    if (contactFormRef.current) {
      contactFormRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const ContactForm1 = React.forwardRef((props, ref) => (
    // Renderiza el componente ContactForm y asigna la referencia al elemento principal.
    <div ref={ref}>
      <ContactForm />
    </div>
  ));
  ContactForm1.displayName = 'ContactForm1';

  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.7, // Percentage of element visibility to trigger the animation
  });
  const fadeInStylesLeft = {
    opacity: 1,
    transform: 'translateX(-50px)',
    transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
  };
  return (
    <>
      <div className="container-homePrincipal">
        <DynamicNavbar scrollToContactForm={scrollToContactForm} />

        <div style={{ opacity: '0' }}>.</div>
        <SolutionCard />
        <Migration />
        <ContactForm1 ref={contactFormRef} />
        <Footer scrollToContactForm={scrollToContactForm} />
      </div>
    </>
  );
}
