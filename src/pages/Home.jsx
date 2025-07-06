import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Portfolio from '../components/home/Portfolio';
import About from '../components/home/About';
import Team from '../components/home/Team';
import Testimonials from '../components/home/Testimonials';
import Contact from '../components/home/Contact';

const Home = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Team />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default Home;