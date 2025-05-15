import React, {useState, useEffect, useRef} from 'react'
import Ref1 from "./UseRef1"
//useState() = Re-renders the component when the state value changes.

// useRef() = "use Reference" Does not cause re-renders when its value changes.
//            When you want a component to "remember" some information,
//            but you don't want that information to trigger new renders.

//1. Accessing/Interacting with DOM elements
//2. Handling Focus, Animation, and Transitions
//3. Managing Timers and Intervals

function UseRef() {

  let [number, setNumber] = useState(0);


  useEffect(() => {
    console.log("COMPONENT RENDERED");
  });

  function handleClicks(){
    setNumber(n => n + 1);
  }

  const ref = useRef(0);

  // useEffect(() => {
  //   console.log("COMPONENT RENDERED");
  // });

  console.log(ref);

  function handleClick(){
    // ref.current = ref.current + 1;
    ref.current++;
    console.log(ref.current);
  }


  return (
    <>
        <div>
            <h2>UseRef</h2>
            <button onClick={handleClicks}>Click Me</button>
            <button onClick={handleClick}>Click Me</button>

            <Ref1 />
        </div>
    </>
  )
}

export default UseRef