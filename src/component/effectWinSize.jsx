import React, {useState, useEffect} from 'react'

function effectWinSize() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("EVENT LISTENER ADDED");

        //Clean up
        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("EVENT LISTENER REMOVE");
        }
    }, []);

    useEffect(() => {
        document.title = `Size: ${width}x ${height}`; 
    }, [width, height]);

    
    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
  return (
    <div>
        <h2>effectWinSize</h2>
        <p>Window Width: {width}px</p>
        <p>Window Height: {height}px</p>

    </div>
  )
}

export default effectWinSize