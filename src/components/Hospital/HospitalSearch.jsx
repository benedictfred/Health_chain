import React, { useState } from "react";

const HospitalSearch = ({ hospitals }) => {
  const [searchText, setSearchText] = useState("");
  const [filteredHospitals, setFilteredHospitals] = useState(hospitals);

  const handleSearchChange = (e) => {
    const text = e.target.value;
    setSearchText(text);
    
    const filtered = hospitals.filter(hospital =>
      hospital.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredHospitals(filtered);
  };

  return (
    <div className="my-4 md:w-2/5 w-4/5 flex items-center justify-center mx-auto">
      <input
        type="text"
        placeholder="Search hospitals by name..."
        value={searchText}
        onChange={handleSearchChange}
        className="border border-gray-300 p-2 rounded w-full"
      />

      <div className="mt-4">
        {filteredHospitals.map((hospital, index) => (
          <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-md mb-2">
            <strong className="text-lg">{hospital.name}</strong>
            <p>Address: {hospital.vicinity}</p>
            <p>Rating: {hospital.rating || "N/A"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HospitalSearch;
