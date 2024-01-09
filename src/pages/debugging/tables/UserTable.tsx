import React from "react";
import ActionButton from "../components/ActionButton";

interface UserInterface {
  id: number;
  name: string;
  username: string;
  isEdit: boolean;
  isDelete: boolean;
}

interface PropsInterface {
  users: UserInterface[];
  editRow?: (user: UserInterface) => void;
  deleteUser?: (id: number) => void;
}

const UserTable = ({ users, editRow, deleteUser }: PropsInterface) => {
  return (
    <table>
      <thead>
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Username</td>
          <td>Actions</td>
        </tr>
      </thead>
      <tbody>
        {users.length <= 0 ? (
          <tr>
            <td colSpan={4}>No users</td>
          </tr>
        ) : (
          users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>
                <ActionButton
                  title="Edit"
                  isShow={user.isEdit}
                  action={() => editRow && editRow(user)}
                  className="button"
                />
                <ActionButton
                  title="Delete"
                  isShow={user.isDelete}
                  action={() => deleteUser && deleteUser(user)}
                  className="button muted-button"
                />
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default UserTable;
