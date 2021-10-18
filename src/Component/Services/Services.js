import React from 'react';
import useServices from '../Hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const [ services ] = useServices();
    return (
        <div className="container">
        <div className="row mt-3 mb-3">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    );
};

export default Services;