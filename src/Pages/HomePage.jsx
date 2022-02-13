import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const styles = {
  loginBut: {
    marginLeft: "1rem",
  },
};

const HomePage = ({ logged, setLogged }) => {
  const [value, setValue] = useState("");

  let navigate = useNavigate();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const validateCredentials = () => {
    return value === "admin";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateCredentials()) {
      setLogged(true);
      navigate("/Kanban");
    } else {
      setValue("");
    }
  };

  return (
    <main>
      <div className="d-flex flex-column align-items-center fs-5 ">
        <div className="text-start p-2 bd-highlight">
          <h1>Page maison</h1>
          <div className="w-100 h-10">
            <hr />
          </div>
          {!logged && (
            <form onSubmit={handleSubmit}>
              <label htmlFor="inputField">Value :&nbsp;</label>
              <input className="my-2" type="text" value={value} onChange={handleChange} placeholder="admin" />
              <p>You entered : {value}</p>
              <button className="btn btn-outline-secondary" type="submit">
                Submit
              </button>
              <button className="btn btn-outline-secondary" style={styles.loginBut} type="reset" value="Reset" onClick={() => setValue("")}>
                Reset
              </button>
            </form>
          )}{" "}
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
