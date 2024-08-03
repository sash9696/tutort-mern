import React, { createContext, useContext, useState } from 'react'

//setup my react context api

const UserContext = createContext();

function UserProvider({children}) {
    const [userData, setUserData] = useState('John');
  return (
    <UserContext.Provider value={{userData, setUserData}} >
        {children}
    </UserContext.Provider>
  )
}


export default UserProvider

export const useUserData = () => useContext(UserContext)
