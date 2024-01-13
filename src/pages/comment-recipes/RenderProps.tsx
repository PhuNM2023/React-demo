import { dividerClasses } from "@mui/material";
import { Fragment, ReactElement, useState } from "react";

const ButtonCounter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount((prevState) => (prevState += 1));

  return (
    <div>
      <button onClick={increaseCount}>Count: {count}</button>
    </div>
  );
};

const rectangleStyles: React.CSSProperties = {
  width: "100px",
  border: "1px solid black",
  padding: "2rem",
  textAlign: "center",
}

const RectangleHoverCount = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount((prevState) => (prevState += 1));

  return (
    <div style={rectangleStyles} onMouseEnter={increaseCount}>
      Hover times: {count}
    </div>
  )
}

// defined interface/ type for components

type CounterProps = {
  render: (count: number, increaseCount: () => void)=> ReactElement
}

const Counter = (props: CounterProps) => {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount((prevState) => (prevState += 1));

  return <div>{props.render(count, increaseCount)}</div>
}

export default function RenderProps() {
  return (
    <Fragment>
      {/* <ButtonCounter/>
      <hr />
      <RectangleHoverCount/> */}
      <Counter
        render={(count, increaseCount)=> (
          <button onClick={increaseCount}>Count: {count}</button>
        )}
      />
      <hr />
      <Counter
        render={(count, increaseCount)=> (
          <div onMouseEnter={increaseCount} style={rectangleStyles}>
              Hover times: {count}
          </div>
        )}
      />
  
    </Fragment>
  )
}