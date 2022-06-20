import React from "react";

import classes from "./styles/app.module.scss";
import Counter from "./challenges/counter/Counter";

function App() {
  return (
    <div className="app">
      <h1 className={classes.title}>Mini Challenges</h1>
      <section>
        <Counter></Counter>
      </section>
    </div>
  );
}

export default App;
