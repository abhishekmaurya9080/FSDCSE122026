import React from 'react'
import pic from '../images/wallpaper.jpg'

function ICard({data}) {
      // let name="Abhishek"
      // let roll="2400320100050"
      // let branch="CSE"
      // let college="ABES"
  return (
 <>
    <div style={{border:'5px solid white',height:'250px',width:'250px'}}>
      <img src={data.pic} height={50} width={50} style={{borderRadius:'50%',marginTop:'5px'}}></img>
          <h2>Name:{data.name}</h2>
          <h2>roll no:{data.roll}</h2>
          <h2>branch:{data.branch}</h2>
          <h2>college:{data.college}</h2>
    </div>
    <div>

    </div>
 </>

  )
}

export default ICard