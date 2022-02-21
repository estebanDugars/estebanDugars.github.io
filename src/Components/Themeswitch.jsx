import React, { useEffect, useState } from "react";

const Themeswitch = ({ cssLink }) => {
  let currTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(currTheme ? currTheme : "quartz");

  useEffect(() => {
    cssLink.href = `./bootswatch/${theme.toLowerCase()}/bootstrap.min.css`;
    localStorage.setItem("theme", theme);
  }, [theme, cssLink]);

  const test = (ev) => {
    setTheme(ev.currentTarget.value);
  };
  return (
    <div className="form-group mb-0">
      <label htmlFor="exampleSelect1" className="form-label mt-1 p-3">
        Change Theme
      </label>
      <select onChange={(event) => test(event)} className="form-select" id="exampleSelect1" defaultValue={theme}>
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
