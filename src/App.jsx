import { useState } from 'react'
import ToDo  from './component/toDoList.jsx'
import Effect from './component/UseEffect.jsx'
import WinSize from './component/effectWinSize.jsx'
import Clock from './component/digitalClock.jsx'
import Context from './component/UseContext.jsx'
import Ref from './component/UseRef.jsx'
function App() {
  

  return (
    <>
      <ToDo />
      <Effect />
      <WinSize />
      <Clock />
      <Context />
      <Ref />
    </>
  )
}

export default App
