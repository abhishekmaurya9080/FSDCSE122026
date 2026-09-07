import React,{useState} from 'react'
import cat from '../images/cat.jpg'

function ImageManipulation() {
    const [height, setHeight] = useState(200);
    const [width, setWidth] = useState(200);
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);                

    function enhanceheight(){
        setHeight(height + 10);
    }

    function enhancewidth(){
        setWidth(width + 10);
    }

    return(
        <div style={{border: "2px solid black", height: "300px", width: "300px", marginLeft:"300px",background: `rgb(${red}, ${green}, ${blue})`}}>
            <h2 style={{color:'red', background: "brown"}}> Image Manipulation using React</h2>

            <img src={cat} height={height} width={width} alt="Cat" />

            <div>
                <h2>cat height: {height}</h2>
                <h2>cat width: {width}</h2>
            </div>

            <div>
                <button onClick={enhanceheight}>Enhance Height</button>
                <button onClick={enhancewidth}>Enhance Width</button>
                <button onClick={() => {setHeight(200); setWidth(200)}}>Reset</button>
                <button onClick={() => {setHeight(height - 10); setWidth(width - 10)}}>Reduce</button>
            </div>
        </div>
    )
}

export default ImageManipulation;