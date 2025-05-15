import React, {useContext} from 'react'
import {UserContext} from './ComponentsA'


function ComponentsD() {
    
    const user = useContext(UserContext);

  return (
    <div className='box'>
        <h3>ComponentsD</h3>
        <h4>{`Bye ${user}`}</h4>
    </div>
  )
}

export default ComponentsD