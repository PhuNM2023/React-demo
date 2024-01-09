import React, { useEffect, useState } from 'react'
import { UserInputInterface } from '../UserModel';

interface EditUserProps {
    editing: boolean;
    currentUser: UserInputInterface;
    updateUser: (id: number, user: UserInputInterface) => void;
    setEditing: (editing: boolean) => void;
    
}

const EditUser = ({
    editing, 
    currentUser, 
    updateUser,
    setEditing
}: EditUserProps) => {
        const [user, setUser] = useState(currentUser);
        useEffect(() => {
            setUser(currentUser);
        }, [currentUser])

        const handleInputChange = (event: any) => {
            const {name, value} = event.target;
            setUser({...user, [name]: value})
        }
  return (
    <form 
    onSubmit={(event) => {
        event.preventDefault();
        updateUser(user.id, user)
    }}
    >
        <label htmlFor="name">Name</label>
        <input 
            type="text" 
            name='name'
            value={user.name} 
            onChange={handleInputChange} 
        />
        <label htmlFor="username">Name</label>
        <input 
            type="text" 
            name='username'
            value={user.username} 
            onChange={handleInputChange} 
        />

        <button>Update user</button>
        <button onClick={() => setEditing(false)} className='button muted-button'>Cancel</button>

    </form>
  )
}

export default EditUser