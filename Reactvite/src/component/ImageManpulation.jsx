import React from 'react'
import Cat from '../images/Cat.png'

function ImageManupulation() {

const[height, setHeight] = React.useState(200);
const[width, setWidth] = React.useState(200);
const[red, setRed] = React.useState(200);
const[green, setGreen] = React.useState(100);
const[blue, setBlue] = React.useState(30);

function EnhanceHeight() {
    setHeight(height + 10);
}

function EnhanceWidth() {
    setWidth(width + 10);
}

function ReduceHeight() {
    setHeight(height - 10);
}

function ReduceWidth() {
    setWidth(width - 10);
}

  return (
    <div>
        <h2 style={{color: "white", backgroundColor: "blue"}}>Image Manipulation using React</h2>
        <div style={{border: "2px solid red", backgroundColor: `rgb(${red}, ${green}, ${blue})`, height: "300px", width: "400px", marginLeft: "300px"}}>
       <img src={Cat} height={height} width={width}/>
       <div>
        <h2>Height = {height}</h2>
        <h2>Width = {width}</h2>
       </div>
        </div>
        <div>

        </div>
        <button onClick={EnhanceHeight}>EnhanceHeight</button>
        <button onClick={EnhanceWidth}>EnhanceWidth</button>
        <button onClick={ReduceHeight}>ReduceHeight</button>
        <button onClick={ReduceWidth}>ReduceWidth</button>
    </div>
  )
}

export default ImageManupulation