import React, {useState} from "react";

function ReactHook() {
const [counter, setCounter] = useState(100);

function IncreaseCounter() {
// alert((`Hii`));
setCounter(counter + 10);
}

function DecreaseCounter() {
// alert((`Hii`));
setCounter(counter - 5);
}

  return (
    <div>
     <h2 style={{color : "red"}}>Working with React Hook</h2>
     <h1>Counter Value = {counter}</h1>
     <button onClick = {IncreaseCounter}>Increase Counter</button>
     <button onClick = {DecreaseCounter}>Decrease Counter</button>
    </div>
  );
}

export default ReactHook;
