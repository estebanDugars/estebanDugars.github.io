import React, { useState } from "react";

const HomePage = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <main>
      <div className="d-flex flex-column align-items-center fs-5 ">
        <div className="text-start p-2 bd-highlight">
          <h1>Page maison</h1>
          <div className="w-100 h-10">
            <hr />
          </div>

          <label htmlFor="inputField">Value :</label>
          <input type="text" value={value} onChange={handleChange} id="inputField" />
          <p>You entered: {value}</p>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
