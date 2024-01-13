import { useState } from "react";

type DumbButtonProps = {
  onClick: () => void;
  label: string;
};

// Dumb component | Presentational component

const DumbButton = (props: DumbButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      style={{ backgroundColor: "red", color: "white" }}
    >
      {props.label}
    </button>
  );
};

// smart component | container component
export default function SmartLoginComponent() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const onToggleLogin = (state: boolean) => setLoggedIn(state);

  return (
    <div>
      {isLoggedIn ? (
        <DumbButton label="logout" onClick={() => onToggleLogin(false)}/>
      ) : (
        <DumbButton label="login" onClick={() => onToggleLogin(true)}/>
      )}
    </div>
  )
}