import React, { Fragment, useContext, useState } from "react";
import UserContext from "./user.context";

const NotificationContextMain = React.createContext([] as string[]);
const NotificationContextSub = React.createContext([] as string[]);

const UseContext = () => {
  const [username, setUsername] = useState<string>("FPT");
  const [email, setEmail] = useState<string>("FPT@fpt.com");

  const userContextValue = {
    username,
    email,
    onUpdateUsername: setUsername,
    onUpdateEmail: setEmail,
  };

  const notificationListMain = ["Noti1", "Noti2", "Noti3"];
  const notificationListSub = ["Noti4", "Noti5", "Noti6", "Noti7", "Noti8"];

  return (
    <UserContext.Provider value={userContextValue}>
      <NotificationContextMain.Provider value={notificationListMain}>
        <NotificationContextSub.Provider value={notificationListSub}>
          <UserSub/>
        </NotificationContextSub.Provider>
      </NotificationContextMain.Provider>
    </UserContext.Provider>
  );
};

const UserSub = () => {
  return <UserSub1 />;
};
const UserSub1 = () => {
  return <UserSub2 />;
};
const UserSub2 = () => {
  return <UserSub3 />;
};
const UserSub3 = () => {
  const { username, email, onUpdateUsername, onUpdateEmail } =
    useContext(UserContext);
    const notificationMain = useContext(NotificationContextMain)

  return (
    <Fragment>
      <h2>Component Sub 3 - Welcome to {username} Academy</h2>
      <h3>Our email: {email}</h3>
      <h3>We have {notificationMain.length} new notifications</h3>
      <ul>
        {notificationMain.map((noti, index) => (
          <li key={index}> - {noti}</li>
        ))}
      </ul>
      <button
        className="btn btn-primary"
        onClick={() => onUpdateUsername("FPT Software")}
      >
        Change username
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => onUpdateEmail("Fsoft@fpt.com")}
      >
        Change email
      </button>
      <UserSub4 />
    </Fragment>
  );
};
const UserSub4 = () => {
  const { username, email, onUpdateUsername, onUpdateEmail } =
  useContext(UserContext);
  const notificationSub = useContext(NotificationContextSub)
  return (
    <Fragment>
      <h2>Component Sub 3 - Welcome to {username} Academy</h2>
      <h3>Our email: {email}</h3>
      <h3>We have {notificationSub.length} new notifications</h3>
      <ul>
        {notificationSub.map((noti, index) => (
          <li key={index}> - {noti}</li>
        ))}
      </ul>
      <button
        className="btn btn-primary"
        onClick={() => onUpdateUsername("FPT Software")}
      >
        Change username
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => onUpdateEmail("Fsoft@fpt.com")}
      >
        Change email
      </button>
      <UserSub5 />
    </Fragment>
  );
};
const UserSub5 = () => {
  return <UserMain />;
};

const UserMain = () => {
  const { username, email, onUpdateUsername, onUpdateEmail } =
    useContext(UserContext);

  return (
    <Fragment>
      <h2>Component SubMain Welcome to {username} Academy</h2>
      <h3>Our email: {email}</h3>
      <button
        className="btn btn-primary"
        onClick={() => onUpdateUsername("FPT Software")}
      >
        Change username
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => onUpdateEmail("Fsoft@fpt.com")}
      >
        Change email
      </button>
    </Fragment>
  );
};

export default UseContext;
