import React from "react"

const UserContext = React.createContext({
  username: "",
  email: "",
  onUpdateUsername: (value: string) => {},
  onUpdateEmail: (value: string) => {}
})

export default UserContext