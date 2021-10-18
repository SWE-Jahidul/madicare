import React from 'react';
import AllServices from '../AllServices/AllServices';
import useServices from '../Hooks/useServices';

const Services = () => {
    const [ services ] = useServices();
    return (
        <div className="container">
        <div className="row mt-3 mb-3">
          {services.map((service) => (
            <AllServices key={service.id} service={service}></AllServices>
          ))}
        </div>
      </div>
    );
};

export default Services;