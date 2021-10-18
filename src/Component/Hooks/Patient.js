import React, { useEffect } from 'react';

const Patient = () => {

    useEffect(() =>{
        console.log("Tes");
        fetch("../patientssyas.json")
        .then(res => res.json)
        .then(data =>console.log(data))
    })
    return (
        <div>
            
        </div>
    );
};

export default Patient;