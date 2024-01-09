import { Button, Typography } from "@mui/material";
import React from "react";
import { CounterState, RootState } from "../types/model";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increaseCountA, increaseCountB } from "../actions/counter.action";

const CounterRedux = () => {
  const counterState = useSelector((state: RootState) => state.counterReducer);
  const dispatch = useDispatch()

  return (
    <div className="d-flex flex-column align-item-center mt-4">
      <Button variant="outlined" color="primary" onClick={() => {
        dispatch(increaseCountA(9))
      }}>
        Add count Number A
      </Button>
      <Typography className="m-2">
        Count number A: {counterState.countA}
      </Typography>
      <Typography className="mx-2 mb-2">Total: {counterState.total}</Typography>
      <Typography className="mx-2 mb-2">
        Count number B: {counterState.countB}
      </Typography>
      <Button variant="outlined" color="primary" onClick={() => {
        dispatch(increaseCountB(1))
      }}>
        Add count Number B
      </Button>
    </div>
  );
};

export default CounterRedux;
