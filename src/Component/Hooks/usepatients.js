import React, { useEffect, useState } from "react";

const usePatients = () => {
  const [patients, setPatients] = useState([])
  useEffect(() => {
    fetch("./services.json")
      .then(res => res.json())
      .then(data => {
        setPatients(data);
        console.log(data);
      }, []);
  })
  return (
    [patients]
    );
};

export default usePatients;
