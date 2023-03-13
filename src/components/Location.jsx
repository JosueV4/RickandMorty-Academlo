import React from 'react';

const Location = ({ name, type, dimension, residents }) => {
  return (
    <section className="bg-teal-900 p-3 w-10/12 mb-7">
      <h2 className="text-black text-center">{name}</h2>
      <ul className='flex justify-evenly'>
        <li>
          <span>Type: </span>
          {type}
        </li>
        <li>
          <span>Dimension:</span>
          {dimension}
        </li>
        <li>
          <span>Population: </span>
          {residents.length}
        </li>
      </ul>
    </section>
  );
};

export default Location;
