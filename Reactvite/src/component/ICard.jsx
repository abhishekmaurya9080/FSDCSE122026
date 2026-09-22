import React from 'react'
import pic from '../Images/studentimage.jpg'

function Icard({data}) {
//     let a =23;
// let name = "Abhishek Verma"
// let roll = "2400320100055"
// let branch = "CSE"
// let College = "ABESEC"
  return (
    <div>
      {/* <h2 style={{color: 'red'}}>Welcome to React Using Vite</h2>
      <h1 style={{backgroundColor:'cyan'}}>Value of a = {a}</h1> */}
      <div style={{padding :'5px',margin:'3px', border: '3px solid white',height:'400px',width:'300px',backgroundColor:'aqua',borderRadius : '10px'}}>
        <img src={data.pic} height={200} width={200} style={{borderRadius: '50%'}}></img>
      {/* <h2 style={{color :  'black'}}>Name : {name}</h2>
      <h2 style={{color :  'black'}}>Roll No. : {roll}</h2>
     <h2 style={{color :  'black'}}>Branch : {branch}</h2>
      <h2 style={{color :  'black'}}>College : {College}</h2> */}
       <h2 style={{color :  'black'}}>Name : {data.name}</h2>
        <h2 style={{color :  'black'}}>Roll No. : {data.roll}</h2>
        <h2 style={{color :  'black'}}>Branch : {data.branch}</h2>
        <h2 style={{color :  'black'}}>College : {data.College}</h2>
      </div>
    </div>
  )
}

export default Icard