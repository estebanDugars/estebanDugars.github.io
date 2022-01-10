import React, { useEffect, useState } from "react";

const Themeswitch = ({ cssLink }) => {
  const [theme, setTheme] = useState("Spacelab");

  useEffect(() => {
    //let cssLink = document.head.querySelector("#bootswatch");
    if (theme === "Morph") {
      cssLink.href = `./bootswatch/${theme.toLowerCase()}/bootstrap.min.css`;
      return;
    }

    cssLink.href = `https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/${theme.toLowerCase()}/bootstrap.min.css`;
  }, [theme, cssLink]);

  const test = (ev) => {
    setTheme(ev.currentTarget.value);
  };
  return (
    <div className="form-group mb-0">
      <label htmlFor="exampleSelect1" className="form-label mt-1 p-3">
        Change Theme
      </label>
      <select onChange={(event) => test(event)} className="form-select" id="exampleSelect1" defaultValue={"Spacelab"}>
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
