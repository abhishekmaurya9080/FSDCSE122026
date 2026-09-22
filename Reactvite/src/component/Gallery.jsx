import React from 'react'
import Icard from './Icard'

function Gallery() {
    const student = [{
        pic: 'https://cdn.pixabay.com/photo/2022/12/13/08/42/free-smart-boy-handsome-images-7652808_1280.jpg',
        name: "Abhishek Maurya",
        roll: "2400320100050",
        branch: "CSE",
        College: "ABESEC"
    },
    {
        pic: 'https://cdn.pixabay.com/photo/2023/02/17/16/25/man-7796384_1280.jpg',
        name: "John Doe",
        roll: "2400320100056",
        branch: "ECE",
        College: "ABESEC"
    },
    {
        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSseUBR60TrfFUspDkZEPIi-rnQ9m5d0vq1xEZnpRhnpT8otBnoq_NWJb7Y&s=10',               
        name: "Jane Smith",
        roll: "2400320100057",
        branch: "ME",
        College: "ABESEC"
    },
    {
        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHsgVrWI95GtR2SvnFJQSmtgug2_OyWyfDd-flBr_JUJw_0KFZQ_QkW1Ra&s=10',
        name: "Alice Johnson",  
      roll: "2400320100058",
        branch: "CE",
        College: "ABESEC"
    }
    ]
  return (
    <div style={{display: 'flex',border: '1px solid white',padding: '10px',margin: '5px',  }}>
        {/* <Icard pic='https://cdn.pixabay.com/photo/2022/12/13/08/42/free-smart-boy-handsome-images-7652808_1280.jpg' name="Abhishek Verma" roll="2400320100055" branch="CSE" College="ABESEC"/>
        <Icard pic='https://cdn.pixabay.com/photo/2023/02/17/16/25/man-7796384_1280.jpg' name="John Doe" roll="2400320100056" branch="ECE" College="ABESEC"/>
        <Icard pic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSseUBR60TrfFUspDkZEPIi-rnQ9m5d0vq1xEZnpRhnpT8otBnoq_NWJb7Y&s=10' name="Jane Smith" roll="2400320100057" branch="ME" College="ABESEC"/>
        <Icard pic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHsgVrWI95GtR2SvnFJQSmtgug2_OyWyfDd-flBr_JUJw_0KFZQ_QkW1Ra&s=10' name="Alice Johnson" roll="2400320100058" branch="CE" College="ABESEC"/>
       */}
         {/* <Icard data={student[0]}/>
            <Icard data={student[1]}/>
            <Icard data={student[2]}/>
            <Icard data={student[3]}/> */}

            {
                student.map((ele) => (
                    <div>
                        <Icard data={ele}/>
                    </div>
                ))
            }

    </div>
  )
}

export default Gallery