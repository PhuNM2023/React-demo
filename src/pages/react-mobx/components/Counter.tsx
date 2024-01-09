import { observer } from "mobx-react";
import React from "react";
import { counterStore } from "../store/counter.store";
import { Button, Typography } from "@mui/material";

const CounterMobX = observer(() => {
  const handleFetch = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    const data = await response.json();

    counterStore.setData(data);
  };

  return (
    <div className="d-flex flex-column align-items-center mt-4">
      <Button
        variant="outlined"
        color="primary"
        onClick={() => counterStore.increaseCountA(9)}
      >
        Add count number A
      </Button>
      <Typography className="m-2">
        counter number A: <strong>{counterStore.count.numberA}</strong>
      </Typography>
      <Typography className="mx-2 mb-2">
        Total: <strong>{counterStore.total}</strong>
      </Typography>
      <Typography className="mx-2 mb-2">
        counter number A: <strong>{counterStore.count.numberB}</strong>
      </Typography>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => counterStore.increaseCountB(3)}
      >
        Add count number B
      </Button>
      <Button color="primary" onClick={handleFetch}>
      Fetch Data
      </Button>
      <div>Data: {counterStore.data?.title}</div>
    </div>
  );
});

export default CounterMobX;
