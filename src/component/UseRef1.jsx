import React, {useState, useEffect, useRef} from 'react'

function UseRef1() {

    const inputRef = useRef(null);
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    
    useEffect(() => {
        console.log("COMPONENTS RENDERED");
        // console.log(inputRef);
    });

    function handleClick(){
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "yellow";
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
    }
    function handleClick1(){
        inputRef1.current.focus();
        inputRef.current.style.backgroundColor = "";
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
    }
    function handleClick2(){
        inputRef2.current.focus();
        inputRef.current.style.backgroundColor = "";
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "yellow";
    }
  return (
    <>
        <h2>UseRef1</h2>
        <div>
            <button onClick={handleClick}>Click me</button>
            <input ref={inputRef} /> <br />
            <button onClick={handleClick1}>Click me1</button>
            <input ref={inputRef1} /> <br />
            <button onClick={handleClick2}>Click me2</button>
            <input ref={inputRef2} />
        </div>
    </>
  )
}

export default UseRef1