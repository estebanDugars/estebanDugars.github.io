import React, { useEffect, useState } from "react";

const Themeswitch = ({ cssLink }) => {
  let currTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(currTheme ? currTheme : "sketchy");

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
      <select onChange={(event) => test(event)} className="form-select" id="exampleSelect1">
        <option value="Materia" selected={theme === "Materia"}>
          Material Theme
        </option>
        <option value="Sketchy" selected={theme === "sketchy"}>
          Sketchy
        </option>
        <option value="Spacelab" selected={theme === "Spacelab"}>
          Spacelab
        </option>
        <option value="Morph" selected={theme === "Morph"}>
          Morph
        </option>
        <option value="solar" selected={theme === "solar"}>
          Solar
        </option>
        <option value="slate" selected={theme === "slate"}>
          Slate
        </option>
        <option value="quartz" selected={theme === "quartz"}>
          quartz
        </option>
        <option value="lux" selected={theme === "lux"}>
          lux
        </option>
        <option value="journal" selected={theme === "journal"}>
          journal
        </option>
        <option value="darkly" selected={theme === "darkly"}>
          darkly
        </option>
        <option value="flatly" selected={theme === "flatly"}>
          flatly
        </option>
        <option value="cerulean" selected={theme === "cerulean"}>
          cerulean
        </option>
      </select>
    </div>
  );
};

export default Themeswitch;
