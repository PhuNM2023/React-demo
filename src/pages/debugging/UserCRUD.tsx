import React, { Fragment, useState } from 'react'
import './UserCRUD.css'
import UserTable from './tables/UserTable';
import EditUser from './forms/EditUser';
import {  UserInterface } from './UserModel';

const UserCRUD = () => {
    const usersData: UserInterface[] = [
        {id: 1, name: "Thuyet", 
        username: "ThuyetCT", isEdit: true,
        isDelete: false},
        {id: 2, name: "Huyen", 
        username: "HuyenDT", isEdit: true,
        isDelete: false},
        {id: 3, name: "Ngoc", 
        username: "NgocLB", isEdit: true,
        isDelete: false},
        {id: 4, name: "Hieu", 
        username: "HieuBM", isEdit: true,
        isDelete: false},
        {id: 5, name: "Phu", 
        username: "PhuNM", isEdit: true,
        isDelete: true},
    ];

    const initialFormState = {id: 0, name: "", username: ""};

    const [users, setUsers] = useState(usersData);
    const [currentUser, setCurrentUser] = useState(initialFormState);
    const [editing, setEditing] = useState(false);

    const editRow = (user: UserInterface) => {
        setEditing(true);  
        setCurrentUser ({id: user.id, name: user.name,
        username: user.username})
    }

    const deleteUser = (userId: number) => {
        setEditing(false); 
        setUsers(users.filter((user) => user.id !== userId))
    }

    const updateUser = (id: number, updateUser: UserInterface)=> {
        setEditing(false); 
        setUsers(users.map((user) => (
            user.id === id ? {...updateUser, isEdit: true, isDelete: false} :
            user
            )))
    }

  return (
    <div className='container'>
        <h2>CRUD APP</h2>
        <div className='flex-row'>
            <div className='flex-large'>
                {/* Check if editing */}
                {editing ? (
                    <Fragment>
                        {/* <h3> Editing User</h3> */}
                        {/* form to edit user */}
                        <EditUser
                        editing={editing}
                        currentUser={currentUser}
                        updateUser={updateUser}
                        setEditing={setEditing}
                        />
                    </Fragment>
                ) : (
                    <Fragment>
                        <h3>Create User</h3>
                        {/* form to create user */}
                    </Fragment>
                )}
            </div>
            <div className='flex-large'>
                <h3>View Users</h3>
                <UserTable users={users} editRow={editRow} deleteUser={deleteUser}/>
            </div>
        </div>         
    </div>
  )
}

export default UserCRUD