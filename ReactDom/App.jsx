// console.log("Hello, ReactDOM!");

const container = document.getElementById("container");
console.log(container);
const root = ReactDOM.createRoot(container);
// const h2 = React.createElement('h2',{style: {color: 'blue'}}, 'welcome')
// const div2 = '<div></div>'
// const h1 = React.createElement('h1',{style: {color: 'red'}}, 'Hello, ReactDOM!');
// const img = React.createElement('img', {src: 'https://imgs.search.brave.com/NVRNVrz10MLvdjlh7bzfygFIDKMBMuGWvUcO85g58LE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMubGVvbmFyZG8u/YWkvYVpTelFWV0xv/MFhrRW1rLV9pbWFn/ZTQ1OTUucG5nP2F1/dG89Y29tcHJlc3Ms/Zm9ybWF0JnE9ODAm/Zml0PW1heCZ3PTI1/NjA', alt: 'scenery', width: '200px', height: '200px'});
// const h11 = <h1>Hello, ReactDOM!</h1>
// const div = React.createElement('div', {style: {border: '10px solid black'}}, h1, h2, img,div2, h11);

const h1 = <h1 style={{color: 'red'}}>Hello, ReactDOM!</h1>
const h2 = <h2 style={{color: 'blue'}}>welcome</h2>
const div2 = <div></div>
const img = <img src='https://imgs.search.brave.com/NVRNVrz10MLvdjlh7bzfygFIDKMBMuGWvUcO85g58LE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMubGVvbmFyZG8u/YWkvYVpTelFWV0xv/MFhrRW1rLV9pbWFn/ZTQ1OTUucG5nP2F1/dG89Y29tcHJlc3Ms/Zm9ybWF0JnE9ODAm/Zml0PW1heCZ3PTI1/NjA' alt='scenery' width='200px' height='200px'/>
const div = <div style={{border: '10px solid black'}}>{h1}{h2}{img}{div2}</div>


root.render(div);