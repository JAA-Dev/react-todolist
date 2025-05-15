import React, { useState, createContext } from 'react'
import ComponentsB from './ComponentsB'

export const UserContext = createContext();


const ComponentsA = () => {

    const [user, setUser] = useState("JAADev");


  return (
    <div className='box'>
        <h3>ComponentsA</h3>
        <h4>{`Hello ${user}`}</h4>
        <UserContext.Provider value={user}>
            <ComponentsB user={user} />
        </UserContext.Provider>
    </div>
  )
}

export default ComponentsA