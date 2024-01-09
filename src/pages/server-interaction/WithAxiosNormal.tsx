import React, { Fragment, useRef, useState } from "react";
import { API_URL } from "../../AppApi";
import axios from "axios";

interface WithFetchProps {
  avatar: string;
  createdAt: string;
  id: string;
  name: string;
}

const WithAxiosNormal = () => {
  const [results, setResults] = useState<WithFetchProps[] | {}>({});
  const [name, setName] = useState<string>("");
  const [id, setId] = useState<string>("");
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const browserInfo = navigator.userAgent;

  const search = (userID: string) => {
    axios({
      method: "GET",
      url: API_URL + `/${userID}`,
      headers: {
        "Content-Type": "application/json",
        "Browser-Info": browserInfo,
      },
    })
      .then((response) => setResults(response.data))
      .catch((error) => console.log(error));

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

  const debounceSearch = (value: string) => {
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    debounceTimeoutRef.current = setTimeout(() => {
      search(value);
    }, 500); // Adjust the debounce time as needed
  };

  const postUser = () => {
    axios({
      method: "POST",
      url: API_URL,
      data: {name:name || ""},
      headers: {
        "Content-Type": "application/json",
        "Browser-Info": browserInfo,
      },
    })
      .then((data) => {
        setResults(data);
        setName("");
        alert("User created successfully")
      })
      .catch((error) => console.log(error));
  };


  // Update user
  const updateUser = () => {
    axios({
      method: "PUT",
      url: API_URL,
      data: {name:name || ""},
      headers: {
        "Content-Type": "application/json",
        "Browser-Info": browserInfo,
      },
    })
      .then((response) => {
        setResults(response.data);
        setName("");
        alert(`Updated user: ${response.data.id}`)
      })
      .catch((error) => console.log(error));
  };

  // Delete User
  const deleteUser = () => {
    axios({
      method: "DELETE",
      url: API_URL + `/${id}`,
      headers: {
        "Content-Type": "application/json",
        "Browser-Info": browserInfo,
      },
    })
      .then((response) => {
        setId("");
        alert(`Delete user: ${response.data.id}`);
      })
      .catch((error) => console.log(error));

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
        <h2>With Fetch API</h2>
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

export default WithAxiosNormal;
