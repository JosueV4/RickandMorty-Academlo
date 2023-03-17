import React, { useState } from 'react';
import ResidentInfo from './ResidentInfo';

const ResidentList = ({ residents }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const residentsPerPage = 15;
  const totalPages = Math.ceil(residents.length / residentsPerPage);

  const handleClick = (event, page) => {
    event.preventDefault();
    setCurrentPage(page);
  };

  const residentsToDisplay = residents.slice(
    (currentPage - 1) * residentsPerPage,
    currentPage * residentsPerPage,
  );

  return (
    <>
      <section className="gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-10/12">
        {residentsToDisplay.map((resident) => (
          <ResidentInfo key={resident} urlResident={resident} />
        ))}
      </section>
      <div className="flex justify-center mt-10 mb-10">
        <ul className="flex pl-0 rounded list-none flex-wrap">
          <li>
            <button
              className={`px-3 py-2 rounded ${
                currentPage === 1 ? 'bg-gray-500' : 'bg-teal-700 hover:bg-gray-400'
              }`}
              onClick={(event) => handleClick(event, currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
          </li>
          {Array.from({ length: totalPages }, (_, i) => (
            <li key={i}>
              <button
                className={`px-4 py-2 rounded ${
                  currentPage === i + 1 ? 'bg-teal-600' : 'bg-teal-900 hover:bg-gray-400'
                }`}
                onClick={(event) => handleClick(event, i + 1)}
              >
                {i + 1}
              </button>
            </li>
          ))}
          <li>
            <button
              className={`px-3 py-2 rounded ${
                currentPage === totalPages
                  ? 'bg-gray-500'
                  : 'bg-teal-700 hover:bg-gray-400'
              }`}
              onClick={(event) => handleClick(event, currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ResidentList;
