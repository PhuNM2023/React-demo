import React, { Fragment, useRef, useState } from "react";
import { API_URL } from "../../AppApi";

interface WithFetchProps {
  avatar: string;
  createdAt: string;
  id: string;
  name: string;
}

const WithFetch = () => {
  const [results, setResults] = useState<WithFetchProps[] | {}>({});
  const [name, setName] = useState<string>("");
  const [id, setId] = useState<string>("");

  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const search = (userID: string) => {
    // console.log(event.currentTarget.value);
    fetch(API_URL + `/${userID}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => setResults(data))
      .catch((error) => console.log(error));
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
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    })
      .then((response) => response.json())
      .then((data) => {
        setResults(data);
        setName("");
        alert("User created");
      })
      .catch((error) => console.log(error));
  };

  const updateUser = () => {
    fetch(API_URL + `/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({name})
    })
      .then((response) => response.json())
      .then((data) => {
        setResults(data);
        setName("");
        setId("");
        alert(`Updated user: ${data.id}`);
      })
      .catch((error) => console.log(error));
  };

  const deleteUser = () => {
    fetch(API_URL + `/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        setId("");
        alert(`Deleted user: ${data.id}`);
      })
      .catch((error) => console.log(error));
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

export default WithFetch;
