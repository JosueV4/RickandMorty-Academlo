import React from 'react';

const Location = ({ name, type, dimension, residents }) => {
  return (
    <section className="bg-teal-900 p-3 w-10/12 mb-7 pb-5">
      <h2 className="text-green-300 text-center text-2xl font-bold pb-4">{name}</h2>
      <ul className="flex justify-evenly">
        <li>
          <span className="text-green-500 font-bold">Type: </span>
          {type}
        </li>
        <li>
          <span className="text-green-500 font-bold">Dimension: </span>
          {dimension}
        </li>
        <li>
          <span className="text-green-500 font-bold">Population: </span>
          {residents.length}
        </li>
      </ul>
    </section>
  );
};

export default Location;
