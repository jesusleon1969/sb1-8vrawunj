import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div id="home" className="pt-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Transforma tu negocio con los expertos en consultoria
            </h1>
            <p className="text-xl mb-8 text-blue-100">
            Ayudamos a las empresas a alcanzar su máximo potencial a través de consultoría estratégica y soluciones innovadoras.
            </p>
            <a href="#contact" className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Empezar
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
              alt="Business consulting"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;