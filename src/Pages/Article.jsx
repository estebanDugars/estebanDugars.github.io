import React from "react";

const Article = () => {
  return (
    <>
      <h1>Article</h1>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#0">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#0">
                  Home
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#0">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#0">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#0">
                  Kanban
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#0" role="button" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#0">
                    Action
                  </a>
                  <a className="dropdown-item" href="#0">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#0">
                    Something else here
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#0">
                    Separated link
                  </a>
                </div>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-sm-2" type="text" placeholder="Search" />
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" checked="" onChange={console.log} />
        <label className="btn btn-outline-primary" htmlFor="btnradio1">
          Radio 1
        </label>
        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" checked="" onChange={console.log} />
        <label className="btn btn-outline-primary" htmlFor="btnradio2">
          Radio 2
        </label>
        <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" checked="" onChange={console.log} />
        <label className="btn btn-outline-primary" htmlFor="btnradio3">
          Radio 3
        </label>
      </div>
      <div className="container fs-5" style={{ width: "50%" }}>
        <div className="row justify-content-center">
          <form>
            <fieldset>
              <legend>Legend</legend>
              <div className="form-group row">
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
                  Email
                </label>
                <div className="col-sm-10">
                  <input type="text" readOnly="" className="form-control-plaintext" id="staticEmail" value="email@example.com" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="form-label mt-4">
                  Email address
                </label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1" className="form-label mt-4">
                  Password
                </label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleSelect1" className="form-label mt-4">
                  Example select
                </label>
                <select className="form-select" id="exampleSelect1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="exampleSelect2" className="form-label mt-4">
                  Example multiple select
                </label>
                <select multiple="" className="form-select" id="exampleSelect2">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="exampleTextarea" className="form-label mt-4">
                  Example textarea
                </label>
                <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="formFile" className="form-label mt-4">
                  Default file input example
                </label>
                <input className="form-control" type="file" id="formFile" />
              </div>
              <fieldset className="form-group">
                <legend className="mt-4">Radio buttons</legend>
                <div className="form-check">
                  <label className="form-check-label">
                    <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked="" onChange={console.log} />
                    Option one is this and that—be sure to include why it's great
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2" />
                    Option two can be something else and selecting it will deselect option one
                  </label>
                </div>
                <div className="form-check disabled">
                  <label className="form-check-label">
                    <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios3" value="option3" disabled="" />
                    Option three is disabled
                  </label>
                </div>
              </fieldset>
              <fieldset className="form-group">
                <legend className="mt-4">Checkboxes</legend>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Default checkbox
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked="" onChange={console.log} />
                  <label className="form-check-label" htmlFor="flexCheckChecked">
                    Checked checkbox
                  </label>
                </div>
              </fieldset>
              <fieldset>
                <legend className="mt-4">Switches</legend>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                    Default switch checkbox input
                  </label>
                </div>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="" onChange={console.log} />
                  <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
                    Checked switch checkbox input
                  </label>
                </div>
              </fieldset>
              <fieldset className="form-group">
                <legend className="mt-4">Ranges</legend>
                <label htmlFor="customRange1" className="form-label">
                  Example range
                </label>
                <input type="range" className="form-range" id="customRange1" />
                <label htmlFor="disabledRange" className="form-label">
                  Disabled range
                </label>
                <input type="range" className="form-range" id="disabledRange" disabled="" />
                <label htmlFor="customRange3" className="form-label">
                  Example range
                </label>
                <input type="range" className="form-range" min="0" max="5" step="0.5" id="customRange3" />
              </fieldset>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
};

export default Article;
