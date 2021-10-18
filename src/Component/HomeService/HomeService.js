import React from "react";
import useServices from "../Hooks/useServices";
import Service from "../Service/Service";

const HomeService = () => {
  const [services] = useServices();
  return (
    <div className="container">
      <h1 className="pt-3">
        {" "}
        <span className="color-chage-header-title"> We are Offering</span>{" "}
        Reliable Services{" "}
      </h1>

      <div className="row mt-3 mb-3">
        {services.slice(0, 4).map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default HomeService;
