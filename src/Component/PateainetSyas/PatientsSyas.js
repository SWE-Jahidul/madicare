import React from 'react';
import usepatients from '../Hooks/usepatients';
import PatientSay from '../PatientSay/PatientSay';

const PatientsSyas = () => {
    const [patients] = usepatients();

    return (
        <div className="container">
        <div className="row mt-3 mb-3">
          {patients.map((patient) => (
            <PatientSay key={patient.id} patient={patient}></PatientSay>
          ))}
        </div>
      </div>
    );
};

export default PatientsSyas;