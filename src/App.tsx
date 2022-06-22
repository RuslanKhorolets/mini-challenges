import React from "react";

import classes from "./styles/app.module.scss";
import Counter from "./challenges/counter/Counter";
import Chess from "./challenges/chess/Chess";
import PhoneMask from "./challenges/phone_mask/PhoneMask";

function App() {
  return (
    <div className="app">
      <h1 className={classes.title}>Mini Challenges</h1>
      <section>
        <Counter></Counter>
        <Chess></Chess>
        <PhoneMask></PhoneMask>
      </section>
    </div>
  );
}

export default App;
