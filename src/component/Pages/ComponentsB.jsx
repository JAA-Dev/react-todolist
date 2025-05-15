import React from 'react'
import ComponentsC from './ComponentsC'

const ComponentsB = () => { 
    // tangalin din props dito
  return (
    <div className='box'>
        <h3>ComponentsB</h3>
        {/* <ComponentsC user={props.user}/> */}
        <ComponentsC />
    </div>
  )
}

export default ComponentsB