import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
/* import DataTable from "react-data-table-component"; */
import KitchenSinkStory from "react-data-table-component";

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
          <br />
          <hr />
          <MyDataTable />
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default HomePage;

// A super simple expandable component.
/* const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>; */

const columns = [
  {
    name: "Title",
    selector: (row) => row.title,
    sortable: true,
  },
  {
    name: "Year",
    selector: (row) => row.year,
    sortable: true,
  },
];

const data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
    price: "21",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
    price: "21",
  },
  {
    id: 3,
    title: "Beetlejuice",
    year: "1988",
    price: "21",
  },
  {
    id: 4,
    title: "Ghostbusters",
    year: "1984",
    price: "21",
  },
  {
    id: 5,
    title: "Beetlejuice",
    year: "1988",
    price: "21",
  },
  {
    id: 6,
    title: "Ghostbusters",
    year: "1984",
    price: "21",
  },
  {
    id: 7,
    title: "Beetlejuice",
    year: "1988",
    price: "21",
  },
  {
    id: 8,
    title: "Ghostbusters",
    year: "1984",
    price: "21",
  },
  {
    id: 9,
    title: "Beetlejuice",
    year: "1988",
    price: "21",
  },
  {
    id: 10,
    title: "Ghostbusters",
    year: "1984",
    price: "21",
  },
  {
    id: 11,
    title: "Beetlejuice",
    year: "1988",
    price: "21",
  },
  {
    id: 12,
    title: "Ghostbusters",
    year: "1984",
    price: "21",
  },
];

function MyDataTable() {
  /* return <DataTable columns={columns} data={data} selectableRows expandableRowsComponent={ExpandedComponent} />; */
  return (
    <KitchenSinkStory
      direction="auto"
      columns={columns}
      data={data}
      fixedHeaderScrollHeight="300px"
      pagination
      responsive
      selectableRows
      selectableRowsHighlight
      selectableRowsRadio="radio"
      subHeaderAlign="right"
      subHeaderWrap
    />
  );
}
