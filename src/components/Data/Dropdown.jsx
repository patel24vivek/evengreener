import React, { useState } from "react";
import Post from "./Post"; // your data file

const NestedDropdown = () => {
  const [openCountry, setOpenCountry] = useState(null);
  const [openState, setOpenState] = useState(null);

  return (
    <div className="bg p-6">
      <div className="postcontainer space-y-4">
        {Post.map((country) => (
          <div key={country.id}>
            {/* Country */}
            <h1
              className="cursor-pointer text-xl font-bold hover:text-blue-600"
              onClick={() =>
                setOpenCountry(openCountry === country.id ? null : country.id)
              }
            >
              {country.country}
            </h1>

            {/* Show States if country is open */}
            {openCountry === country.id && (
              <div className="ml-6 mt-2 space-y-2">
                {country.state.map((st) => (
                  <div key={st.id}>
                    {/* State */}
                    <h2
                      className="cursor-pointer text-lg font-semibold hover:text-green-600"
                      onClick={() =>
                        setOpenState(openState === st.id ? null : st.id)
                      }
                    >
                      {st.state}
                    </h2>

                    {/* Show Cities if state is open */}
                    {openState === st.id && (
                      <div className="ml-6 mt-1 space-y-1">
                        {st.city.map((ct) => (
                          <h3
                            key={ct.id}
                            className="cursor-pointer text-base hover:text-purple-600"
                          >
                            {ct.city}
                          </h3>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NestedDropdown;
