import React from 'react';
import { useParams } from 'react-router';

const DoctorDetails = () => {

    const {  doctorsId } = useParams(); 
    return (
        <div>
          <div className="headerdiv">
          <h1>{doctorsId}</h1>
          </div>
        </div>
    );
};

export default DoctorDetails;