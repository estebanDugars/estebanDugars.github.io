import React, { useEffect, useState } from "react";

const Themeswitch = ({ cssLink }) => {
  let currTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(currTheme ? currTheme : "Sketchy");

  useEffect(() => {
    cssLink.href = `./bootswatch/${theme.toLowerCase()}/bootstrap.min.css`;
    localStorage.setItem("theme", theme);
    setTheme(theme);
  }, [theme, cssLink]);

  const test = (ev) => {
    setTheme(ev.currentTarget.value);
  };
  return (
    <div className="form-group mb-0">
      <label htmlFor="exampleSelect1" className="form-label mt-1 p-3">
        Change Theme
      </label>
      <select onChange={(event) => test(event)} className="form-select" id="exampleSelect1" value={theme}>
        <option value="Materia">Material Theme</option>
        <option value="Sketchy">Sketchy</option>
        <option value="Spacelab">Spacelab</option>
        <option value="Morph">Morph</option>
        <option value="solar">Solar</option>
        <option value="slate">Slate</option>
        <option value="quartz">quartz</option>
        <option value="lux">lux</option>
        <option value="journal">journal</option>
        <option value="darkly">darkly</option>
        <option value="flatly">flatly</option>
        <option value="cerulean">cerulean</option>
      </select>
    </div>
  );
};

export default Themeswitch;

/* 
pour factorisation

handleChange(value, selectOptionSetter) => {
  selectOptionSetter(value)
  // handle other stuff like persisting to store etc
}

const Dropdown = (props) => {
const { options } = props;
const [selectedOption, setSelectedOption] = useState(options[0].value);
return (
   <select
     value={selectedOption}
     onChange={e => handleChange(e.target.value, setSelectedOption)}>
     {options.map(o => (
       <option key={o.value} value={o.value}>{o.label}</option>
     ))}
   </select>
);
}; */
