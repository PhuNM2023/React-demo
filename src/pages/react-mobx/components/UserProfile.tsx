import { Button, TextField } from '@mui/material'
import { Observer } from 'mobx-react'
import React, { ChangeEvent, Fragment } from 'react'
import { userStore } from '../store/user.store'

const UserProfile = () => {
  let userId = "";
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    userId = event.target.value;
    console.log("UserId", userId);
  }

  const handleUpdate = () => {
    if(userId) {
      userStore.updateUserID(userId)
    }
  }
  return (
    <Observer>
      {() => (
        <Fragment>
          <h3>User profile</h3>
          <TextField label="Change userId"
          onChange={handleChange}
          defaultValue={userStore.userId}/>
          <p>
            UserName: <strong>{userStore.username}</strong>
          </p>
          <p>
            UserId: <strong>{userStore.userId}</strong>
          </p>
          <Button variant='outlined' onClick={handleUpdate}>
            Update
          </Button>
        </Fragment>
      )}
    </Observer>
  )
}

export default UserProfile