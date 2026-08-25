//console.log("Abhishek");
const container = document.getElementById('container');

const root = ReactDOM.createRoot(container);

const h2 = React.createElement(
    'h2',
    {style:{color:'red'}},
    'Welcome to react js'
);
const div2 ='<div></div>';
const img=React.createElement('img',{src:'https://www.sportico.com/wp-content/uploads/2020/09/0911_IMG.jpg?w=1280&h=720&crop=1',style:{height:'120px',width:'150px'}});
const h1=React.createElement('h1',{},'working');
const div=React.createElement('div',{style:{border:'10px solid black'}},img,h1,h2,div2);
root.render(div);