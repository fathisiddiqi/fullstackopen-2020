import React from "react";

const CountriesForm = ({ filter, handleFilterChange }) => {
  return (
    <div>
      find countries <input value={filter} onChange={handleFilterChange} />
    </div>
  );
};

export default CountriesForm;
