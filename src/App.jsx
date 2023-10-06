/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react"


function App() {
  const initialColor = localStorage.getItem("backgroundColor") || "white";

  const [ col, setCol ] = useState(initialColor);
  // Function to update the color and save it to local storage
  const updateColor = (newColor) => {
    setCol(newColor);
    localStorage.setItem("backgroundColor", newColor);
  };

  return (


    <div className="w-full h-screen duration-200"
      style={ { backgroundColor: `${ col }` }
      }>
      <div className="fixed flex flex-wrap justify-center
      bottom-12 inset-x-0 px-2 ">

        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2   rounded-3xl ">
          <button onClick={ () => { setCol("red") } } className="outline-none px-5 rounded-full text-white
          "style={ { backgroundColor: "red" } }>Red</button>

          <button onClick={ () => { setCol("green") } } className="outline-none px-5 rounded-full text-white
          "style={ { backgroundColor: "green" } }>Green</button>

          <button onClick={ () => { setCol("yellow") } } className="outline-none px-5 rounded-full text-white
          "style={ { backgroundColor: "yellow" } }>Yellow</button>

          <button onClick={ () => { setCol("blue") } } className="outline-none px-5 rounded-full text-white
          "style={ { backgroundColor: "blue" } }>Blue</button>

          <button onClick={ () => { setCol("black") } } className="outline-none px-5 rounded-full text-white
          "style={ { backgroundColor: "#313131" } }>Black</button>

          <button onClick={ () => { setCol("orange") } } className="outline-none px-5 rounded-full text-white
          "style={ { backgroundColor: "orange" } }>Orange</button>
        </div>
      </div>
    </div >

  )
}

export default App
