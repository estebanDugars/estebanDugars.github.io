import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
/* import DataTable from "react-data-table-component"; */

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
        <div className="text-start p-2">
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
          <br />
          <hr />
          <Wizard />
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default HomePage;

const Wizard = (props) => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [currentStep, setCurrentStep] = useState(1);

  const handleOnChange = (e) => {
    e.preventDefault();
    if (currentStep === 1) {
      setEmailValue(e.target.value);
    } else {
      setPasswordValue(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <br />
        {currentStep === 1 && (
          <>
            {" "}
            <label>
              Login:
              <InputStyled type="email" value={emailValue} onChange={handleOnChange} />
            </label>
            <br />
            <NextButton onClick={() => setCurrentStep(2)} className="btn btn-outline-secondary">
              Next step
            </NextButton>
          </>
        )}
        {currentStep === 2 && (
          <>
            <label>
              Password:
              <InputStyled type="password" value={passwordValue} onChange={handleOnChange} />
            </label>
            <br />
            <SubmitButton type="submit" className="btn btn-outline-secondary">
              Submit
            </SubmitButton>
            <PrevButton onClick={() => setCurrentStep(1)} className="btn btn-outline-secondary">
              Prev step
            </PrevButton>
          </>
        )}
      </form>
    </div>
  );
};

const InputStyled = styled.input`
  margin-left: 1rem;
`;

const NextButton = styled.button`
  float: right;
  margin-top: 1rem;
`;

const PrevButton = styled.button`
  float: left;
  margin-top: 1rem;
`;

const SubmitButton = styled.button`
  float: right;
  margin-top: 1rem;
`;
