import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [value, setValue] = useState("");
  let navigate = useNavigate();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const validateCredentials = () => {
    return value === "admin";
  };

  const handleSubmit = () => {
    if (validateCredentials()) navigate("/About");
  };

  return (
    <main>
      <div className="d-flex flex-column align-items-center fs-5 ">
        <div className="text-start p-2 bd-highlight">
          <h1>Page maison</h1>
          <div className="w-100 h-10">
            <hr />
          </div>

          <form action="">
            <label htmlFor="inputField">Value :</label>
            <input type="text" value={value} onChange={handleChange} id="inputField" />
            <p>You entered: {value}</p>
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
