import Reacthook from 'react';

function Reacthook() {
    const [counter, setCount] =useState(100);
    function increaseCountervalue() {
        // alert('Hiii');
        setCount(counter + 10);
    }
return (
    <div>
        <h1 style={{ color: 'blue' }}>Working on React Hooks</h1>
        <h1> Counter Value: {counter}</h1>
        <button onClick={increaseCountervalue}>Increase Counter Value</button>
    </div>
);
}
export default Reacthook;