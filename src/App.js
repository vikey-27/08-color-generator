import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState([]);
  const [error, setError] = useState(false);
  const [shadePercent, setShadePercent] = useState();
  const [list, setList] = useState(new Values("#f15025").all(40));

  const handleSubmit = (e) => {
    e.preventDefault();
    let shade=parseInt(shadePercent);
    
    try {
      let colors = new Values(color).all(shade);
      setList(colors);
      setError(false);
      
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };
  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            className={`${error ? "error" : null}`}
            value={color}
            type="text"
            onChange={(e) => {
              setColor(e.target.value);
            }}
            placeholder="#f15025"
          />

          <input
      

            type="text"
            onChange={(e) => {
              setShadePercent(e.target.value);

            }}
            placeholder="shadePercent"
          />

          <button className="btn" type="submit">
            Generate
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} index={index} />;
        })}
      </section>
    </>
  );
}

export default App;
