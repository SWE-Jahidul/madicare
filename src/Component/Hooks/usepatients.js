import React, { useEffect, useState } from "react";

const usepatients = () => {
  const [patients, setPatients] = useState([]);
  useEffect(() => {
    fetch("./patientnsay.json")
      .then((res) => res.json())
      .then((data) => {
        setPatients(data);
        console.log(data);
      }, []);
  })
  return [patients];
};

export default usepatients;
