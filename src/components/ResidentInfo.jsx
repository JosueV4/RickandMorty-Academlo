import axios from 'axios';
import React, { useState, useEffect } from 'react';

const ResidentInfo = ({ urlResident }) => {
  const [residentInfo, setResidentInfo] = useState(null);

  const loadResidentInfo = async () => {
    try {
      const res = await axios.get(urlResident);

      setResidentInfo(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadResidentInfo();
  }, []);

  return (
    <>
      {residentInfo && (
        <article>
          <div>
            <img src={residentInfo.image} alt="" />
          </div>
          <h3>{residentInfo.name}</h3>
          <ul>
            <li>
              <span>Specie: </span>
              {residentInfo.species}
            </li>
            <li>
              <span>Status: </span>
              {residentInfo.status}
            </li>
            <li>
              <span>Origen: </span>
              {residentInfo.origin.name}
            </li>
            <li>
              <span>Appearances in episodes: </span>
              {residentInfo.episode.length}
            </li>
          </ul>
        </article>
      )}
    </>
  );
};

export default ResidentInfo;
