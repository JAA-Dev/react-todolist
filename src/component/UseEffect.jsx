import React, {useState, useEffect} from 'react'

// useEffect() = React Hook that tells React DO SOME CODE WHEN (pick one):
//              This component re-renders
//              this component mounts
//              The state of a value

// useEffect(function, [dependencies])

//1. useEffect(() => {}) runs after every re-render
//2. useEffect(() => {}, []) runs only on mount
//3. useEffect(() => {}, [value]) runs on mount + when value changes

// USES
//1. Event Listeners
//2. DOM manipulation
//3. Subscriptions (real-time updates)
//4. Fetching data from an API
//5. Clean up when a component unmounts


function UseEffect() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState('green');
    
    // useEffect(() => {
    //     document.title = `Count: ${count}`;
    // }); //eto naman once na naupdate nababago agad siya

    // useEffect(() => {
    //     document.title = `Count: ${count}`;
    // }, []); //Napapalitan lang siya once for example String siya My title, my Title lang lalabas

    // useEffect(() => {
    //     document.title = `Count: ${count}`;
    // }, [count]); //pag na mount siya saka palang gagawin ying document title, saka mababago

    //gumagana naman siya kahit hindi gumamit ng useEffect
    //ang benifits niya ay code organize, kung gusto mong mag render,
    //mount or dependencies

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;

        // return () => {
        //     //SOME CLEAN UP CODE
        // }
    }, [count, color]);

    function addCount(){
        setCount(c => c + 1);
    }
    function subCount(){
        setCount(c => c - 1);
    }
    function changeColor(){
        setColor(c => c === "green" ? "red" : "green");
    }
  return (
    <>
        <h1 style={{color}}>useEffect</h1>
        <p>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subCount}>Subtract</button><br />
        <button onClick={changeColor}>Change Color</button>
    </>
  )
}

export default UseEffect;