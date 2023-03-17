import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Location from './components/Location';
import ResidentList from './components/ResidentList';
import { getRandomNumber } from './utils/getRandomNumber';
import banner from '/banner.png';

const App = () => {
  const [locationInfo, setLocationInfo] = useState(null);
  const [idLocationValue, setIdLocationValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const getIdLocationRandom = () => getRandomNumber(1, 126);

  const loadLocationInfo = async (idLocation) => {
    const url = `https://rickandmortyapi.com/api/location/${idLocation}`;

    try {
      const res = await axios.get(url);
      setLocationInfo(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const loadSuggestions = async (searchTerm) => {
    const url = `https://rickandmortyapi.com/api/location/?name=${searchTerm}`;

    try {
      const res = await axios.get(url);
      setSuggestions(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const idLocationHandleChange = (e) => {
    const newValue = e.target.value;

    if (/^[a-zA-Z\d]{0,3}$/.test(newValue)) setIdLocationValue(newValue);
    loadSuggestions(newValue);
  };

  const handleSuggestionClick = (id) => {
    setSuggestions([]);
    setIdLocationValue(id);
    loadLocationInfo(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (idLocationValue) loadLocationInfo(idLocationValue);
    else loadLocationInfo(getIdLocationRandom());
  };

  useEffect(() => {
    loadLocationInfo(getIdLocationRandom());
  }, []);

  return (
    <div className="bg-teal-800 h-min-full flex flex-col justify-center items-center text-white pb-6">
      <div>
        <img className="w-min-full" src={banner} alt="banner" />
      </div>
      <form className="my-10 w-10/12 flex" onSubmit={handleSubmit}>
        <div className="relative flex-1">
          <input
            className="text-white bg-teal-900 w-full p-3 pl-10 rounded-tl rounded-bl"
            type="search"
            name="id-location"
            value={idLocationValue}
            onChange={idLocationHandleChange}
            placeholder="Type a location name"
          />
          {suggestions.length > 0 && (
            <ul className="absolute z-10 bg-black w-full mt-1 rounded-b-md max-h-40 overflow-y-scroll">
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion.id}
                  className="px-4 py-2 hover:text-black hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSuggestionClick(suggestion.id)}
                >
                  {suggestion.name}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button
          type="submit"
          className="font-semibold cursor-pointer bg-teal-700 text-white py-3 px-4 hover:bg-teal-600 rounded-r-md w-auto"
        >
          Search
        </button>
      </form>

      {locationInfo && <Location {...locationInfo} />}
      {locationInfo && <ResidentList residents={locationInfo.residents} />}
    </div>
  );
};

export default App;
