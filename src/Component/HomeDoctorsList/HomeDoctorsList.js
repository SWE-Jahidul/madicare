import React from 'react';
import Doctor from '../Doctor/Doctor';
import useDoctors from '../Hooks/useDoctors';

const HomeDoctorsList = () => {
    const [doctors] = useDoctors();
    return (
        <div className="container">
            <h1 className="pt-3"> <span className="color-chage-header-title">  Meet our </span> Medical Specialists </h1>
        <div className="row mt-3 mb-3">
          {doctors.slice(0, 4).map((doctor) => (
            <Doctor key={doctor.id} doctor={doctor}></Doctor>
          ))}
        </div>
      </div>
    );
};

export default HomeDoctorsList;