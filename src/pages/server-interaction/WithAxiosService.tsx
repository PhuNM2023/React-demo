import React, { Fragment, useRef, useState } from "react";
// import { API_URL } from "../../AppApi";
// import axios from "axios";
import UsersService from "./UsersServices";

interface WithFetchProps {
  avatar: string;
  createdAt: string;
  id: string;
  name: string;
}

const WithAxiosService = () => {
  const [results, setResults] = useState<WithFetchProps[] | {}>({});
  const [name, setName] = useState<string>("");
  const [id, setId] = useState<string>("");
  const [status, setStatus] = useState<string | null>(null);

  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  // const browserInfo = navigator.userAgent;

  const search = async (userID: string) => {
    try {
      const response = await UsersService.getUser(userID);
      setResults(response);
    } catch (error) {
      console.log("Error in search", error);
      setStatus("Error in search");
    }

    // axios({
    //   method: "GET",
    //   url: API_URL + `/${userID}`,
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Browser-Info": browserInfo,
    //   },
    // })
    //   .then((response) => setResults(response.data))
    //   .catch((error) => console.log(error));
  };

  const debounceSearch = (value: string) => {
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    debounceTimeoutRef.current = setTimeout(() => {
      search(value);
    }, 500); // Adjust the debounce time as needed
  };

  const postUser = async () => {
    try {
      const response = await UsersService.postUser({ name });
      setResults(response);
      setName("");
      alert("User created");
    } catch (error) {
      console.log("Error in User created", error);
      setStatus("Error in User created");
    }
  };

  // Update user
  const updateUser = async () => {
    try {
      const response = await UsersService.updateUser(id, { name });
      setResults(response);
      setName("");
      setId("");
      alert(`Updated user: ${response.id}`);
    } catch (error) {
      console.log("Error in Updated user", error);
      setStatus("Error in Updated user");
    }
  };

  // Delete User
  const deleteUser = async () => {
    try {
      const response = await UsersService.deleteUser(id);
      setId("")
      alert(`Deleted user: ${response.id}`);
    } catch (error) {
      console.log("Error in deleteUser", error);
      setStatus("Error in deleteUser");
    }

    // axios
    // .get(API_URL + `/${userID}`, {
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Browser-Info": browserInfo,
    //     },
    //   })
    //   .then((response) => setResults(response.data))
    //   .catch((error) => console.log(error));
  };

  const handleChangeUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleChangeUserID = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };
  return (
    <Fragment>
      <div className="container">
        <h2>With Axios service</h2>
        <h3>Search user</h3>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Type to search"
            onKeyUp={(e) => debounceSearch(e.currentTarget.value)}
          />
        </div>
        <ul
          className="list-group"
          style={{ maxHeight: "300px", overflowY: "auto" }}
        >
          {Array.isArray(results) ? (
            results.map((item: WithFetchProps) => (
              <li
                key={item.id}
                className="list-group-item"
              >{`${item?.id} - ${item?.name}`}</li>
            ))
          ) : (
            <li className="list-group-item">{`${
              (results as WithFetchProps)?.id
            } - ${(results as WithFetchProps)?.name}`}</li>
          )}
        </ul>
        <hr />

        <h3>Create User</h3>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Type user's name"
            onChange={handleChangeUser}
            value={name}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary" onClick={postUser}>
            Create User
          </button>
        </div>
        <hr />
        <h3>Delete User</h3>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Type user's id"
            onChange={handleChangeUserID}
            value={id}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary" onClick={deleteUser}>
            Delete User
          </button>
        </div>

        <hr />
        <h3>Update User</h3>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Type user's id"
            onChange={handleChangeUserID}
            value={id}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Type user's name"
            onChange={handleChangeUser}
            value={name}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary" onClick={updateUser}>
            Update User
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default WithAxiosService;
