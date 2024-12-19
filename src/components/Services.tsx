import React from 'react';
import { LineChart, Users, Lightbulb, Target } from 'lucide-react';

const services = [
  {
    icon: <LineChart className="h-8 w-8 text-blue-600" />,
    title: 'Planificación Estratégica',
    description: 'Desarrollar estrategias comerciales integrales para alcanzar los objetivos de su organización.'
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: 'Desarrollo del equipo',
    description: 'Cree y optimice equipos de alto rendimiento que impulsen el éxito.'
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-blue-600" />,
    title: 'Consultoría de Innovación',
    description: 'Transforme su negocio a través de soluciones innovadoras y transformación digital.'
  },
  {
    icon: <Target className="h-8 w-8 text-blue-600" />,
    title: 'Optimización del rendimiento',
    description: 'Mejore la eficiencia operativa y maximice el rendimiento empresarial.'
  }
];

const Services = () => {
  return (
    <div id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600">Soluciones integrales para las necesidades de su negocio</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;