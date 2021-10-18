import React from 'react';
import Doctor from '../Doctor/Doctor';
import useDoctors from '../Hooks/useDoctors';

const Doctors = () => {
    const [doctors] = useDoctors();
    return (
        <div className="container">
        <div className="row mt-3 mb-3">
          {doctors.map((doctor) => (
            <Doctor key={doctor.id} doctor={doctor}></Doctor>
          ))}
        </div>
      </div>
    );
};

export default Doctors;