import { useState } from "react";
import Paper from "@mui/material/Paper";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Button from "@mui/material/Button";

import classes from "./counter.module.scss";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementClickHandler = () => {
    setCount((count) => count + 1);
  };

  const decrementClickHandler = () => {
    setCount((count) => count - 1);
  };

  const resetHandler = () => {
    setCount(0);
  };

  return (
    <Paper className={classes.wrapper} elevation={12}>
      <section className={classes.counter}>
        <ArrowBackIosNewIcon
          className={classes.arrow}
          onClick={decrementClickHandler}
        />
        <div className={classes.count}>{count}</div>
        <ArrowForwardIosIcon
          onClick={incrementClickHandler}
          className={classes.arrow}
        />
      </section>
      <Button size="small" onClick={resetHandler}>
        Reset
      </Button>
    </Paper>
  );
};

export default Counter;
