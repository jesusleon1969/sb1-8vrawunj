import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <div id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
              alt="Nuestro Equipo"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Sobre nosotros</h2>
            <p className="text-lg text-gray-600 mb-8">
            Con más de 15 años de experiencia, hemos ayudado a cientos de empresas a alcanzar sus objetivos a través de consultoría estratégica y soluciones innovadoras.

            </p>
            <div className="space-y-4">
              {[
                'Consultores expertos con trayectoria comprobada',
                'Soluciones personalizadas para sus necesidades únicas',
                'Enfoque basado en datos para la resolución de problemas',
                'Enfoque de asociación a largo plazo'
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-2" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;