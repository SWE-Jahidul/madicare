import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const DoctorDetails = () => {

    const {  doctorsId } = useParams(); 
    const [doctors, setDoctors] = useState([]);
    const [ currentDoctor, setCurrentDoctor] = useState()

    useEffect(() => {
      console.log('I have called!')
      fetch("../doctors.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setDoctors(data);        
      });
    },[])

    useEffect(() => {
      let myDoctor = doctors.filter( doctor => doctor.id == doctorsId)
      setCurrentDoctor(myDoctor[0])
      //console.log(myDoctor)
    },[doctors])
    return (
        <div>
          <div className="headerdiv">
          <h1>{doctorsId}</h1>
           {
             currentDoctor &&
             <div>
                               <p>Name: {currentDoctor.id} </p>

                <p>Name: {currentDoctor.name} </p>
                <p>Price: {currentDoctor.price} </p>
             </div>
           }
          </div>
        </div>
    );
};

export default DoctorDetails;