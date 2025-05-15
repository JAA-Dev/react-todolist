import React from 'react'

// useContext() = React Hook that allows you to share value
//                between multiple levels of components
//                without passing props through each level

//PROVIDER COMPONENT
//1. import {createContext} from 'react'
//2. export const MyContext = createContext();
//3. <MyContext.Provider value={value}>
//      <Child />
//   </MyContext.Provider>

//CONSUMER COMPONENTS
//1. import React, {useContext} from 'react'
//   import {MyContext} from './ComponentsA'
//2. const value = useContext(MyContext)

import ComponentsA from './Pages/ComponentsA'

function UseContext() {
  return (
    <>
        <div>
            <h2>UseContext</h2>
        </div>
        <ComponentsA />
    </>
  )
}

export default UseContext