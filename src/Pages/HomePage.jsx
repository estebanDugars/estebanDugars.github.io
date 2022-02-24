import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { createRef } from "react/cjs/react.production.min";
import styled from "styled-components";
import usePrevious from "./Hooks/usePrevious";
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
              <input className="my-2 form-control" type="text" value={value} onChange={handleChange} placeholder="admin" />
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
          <br />
          <br />
          <br />
          <hr />
          <Counter />
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
  /* const [isInitialMount, setisInitialMount] = useState(true); */

  const emailInput = createRef();
  const passInput = createRef();
  let prevStep = usePrevious(currentStep);

  useEffect(() => {
    if (prevStep === 2 && currentStep === 1) emailInput.current?.focus();
    if (prevStep === 1 && currentStep === 2) passInput.current?.focus();
  }, [currentStep, emailInput, passInput, prevStep]);

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
              <InputStyled ref={emailInput} type="email" value={emailValue} onChange={handleOnChange} className="form-control" />
            </label>
            <br />
            <NextButton
              onClick={() => {
                setCurrentStep(2);
                passInput.current?.focus();
              }}
              className="btn btn-outline-secondary"
            >
              Next step
            </NextButton>
          </>
        )}
        {currentStep === 2 && (
          <>
            <label>
              Password:
              <InputStyled ref={passInput} type="password" value={passwordValue} onChange={handleOnChange} className="form-control" />
            </label>
            <br />
            <SubmitButton type="submit" className="btn btn-outline-secondary">
              Submit
            </SubmitButton>
            <PrevButton
              onClick={() => {
                setCurrentStep(1);
                emailInput.current?.focus();
              }}
              className="btn btn-outline-secondary"
            >
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

const Counter = () => {
  const [count, setCount] = useState(0);
  //the useRef Hook allows you to persist data between renders
  const prevCountRef = usePrevious(count);

  return (
    <>
      Now: {count}, before: {prevCountRef}
      {/*Increment  */}
      <button onClick={() => setCount((count) => count + 1)} className="btn btn-outline-secondary mx-2">
        Increment
      </button>
    </>
  );
};
