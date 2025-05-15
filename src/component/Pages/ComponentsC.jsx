import React, { useContext } from 'react'
import ComponentsD from './ComponentsD'
import { UserContext } from './ComponentsA'

function ComponentsC() {
    const user = useContext(UserContext);
  return (
    <div className='box'>
        <h3>ComponentsC</h3>
        <h4>{`Hello again ${user}`}</h4>
        <ComponentsD />
    </div>
  )
}

export default ComponentsC