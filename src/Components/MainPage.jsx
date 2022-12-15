import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

const MainPage = () => {
  const [countries, setCountries] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const API =
    "https://gist.githubusercontent.com/agamm/3578385792e08971a37bdf1db3115e31/raw/d892f1fbd0c15356d8e581008da735f057393a39/gistfile1.txt";

  const getCountries = async () => {
    const response = await fetch(API);
    const data = await response.json();
    setCountries(Object.values(data));
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div className="page">
      <nav className="navbar">
        <input
          type="text"
          placeholder="Search for..."
          className="input"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <select
          name="region"
          id="region"
          className="input"
        >
          <option value="none">Select Region</option>
          <option value="europe">Europe</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="asia">Asia</option>
          <option value="oceania">Oceania</option>
          <option value="antarctic">Antarctic</option>
        </select>
      </nav>
      <div className="countries">
        {countries &&
          countries
            .filter((c) => {
              return (
                c.name.toLowerCase().includes(searchInput) ||
                c.capital.toLowerCase().includes(searchInput)
              );
            })
            .map((country, index) => (
              <CountryCard props={country} key={index} />
            ))}
      </div>
    </div>
  );
};

export default MainPage;
