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
        <article className="relative h-full">
          <img className="rounded-tl-lg rounded-tr-lg" src={residentInfo.image} alt="" />
          <div className="bg-teal-900 rounded-bl-lg rounded-br-lg p-2">
            <h3 className="font-bold text-2xl border-b border-teal-400 mb-2 pl-1 pb-2">
              {residentInfo.name}
            </h3>
            <ul className="pl-2">
              <li className="pb-1 font-bold text-xl">
                <span className="text-base text-gray-400">SPECIE: </span>
                <br />
                {residentInfo.species}
              </li>
              <li className="absolute top-4 left-0 bg-teal-900 p-1 px-4 rounded-tr-xl rounded-br-xl">
                <span>
                  {residentInfo.status === 'Alive'
                    ? '🟢 '
                    : residentInfo.status === 'Dead'
                    ? '🔴 '
                    : '🔘 '}
                </span>
                {residentInfo.status}
              </li>
              <li className="pb-1 font-bold text-xl">
                <span className="text-base text-gray-400">ORIGEN: </span>
                <br />
                {residentInfo.origin.name}
              </li>
              <li className="pb-2 font-bold text-xl">
                <span className="text-base text-gray-400">EPISODE APPEARANCES: </span>
                <br />
                {residentInfo.episode.length}
              </li>
            </ul>
          </div>
        </article>
      )}
    </>
  );
};

export default ResidentInfo;
