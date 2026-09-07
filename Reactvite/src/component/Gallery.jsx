import React from 'react'
import ICard from './ICard'

function Gallery() {
    const students = [
    {
        pic: "https://i.pravatar.cc/150?img=1",
        name: "Abhishek",
        roll: "2400320100050",
        branch: "CSE",
        college: "ABES"
    },
    {
        pic: "https://i.pravatar.cc/150?img=2",
        name: "Rahul",
        roll: "2400320100051",
        branch: "CSE",
        college: "ABES"
    },
    {
        pic: "https://i.pravatar.cc/150?img=3",
        name: "Aman",
        roll: "2400320100052",
        branch: "CSE",
        college: "ABES"
    },
    {
        pic: "https://i.pravatar.cc/150?img=4",
        name: "Rohit",
        roll: "2400320100053",
        branch: "CSE",
        college: "ABES"
    },
    {
        pic: "https://i.pravatar.cc/150?img=5",
        name: "Karan",
        roll: "2400320100054",
        branch: "CSE",
        college: "ABES"
    },
    {
        pic: "https://i.pravatar.cc/150?img=6",
        name: "Vikas",
        roll: "2400320100055",
        branch: "CSE",
        college: "ABES"
    },
    {
        pic: "https://i.pravatar.cc/150?img=7",
        name: "Arjun",
        roll: "2400320100056",
        branch: "CSE",
        college: "ABES"
    },
    {
        pic: "https://i.pravatar.cc/150?img=8",
        name: "Mohit",
        roll: "2400320100057",
        branch: "CSE",
        college: "ABES"
    },
    {
        pic: "https://i.pravatar.cc/150?img=9",
        name: "Sahil",
        roll: "2400320100058",
        branch: "CSE",
        college: "ABES"
    },
    {
        pic: "https://i.pravatar.cc/150?img=10",
        name: "Nikhil",
        roll: "2400320100059",
        branch: "CSE",
        college: "ABES"
    }
];
  return (
    <div style={{display:'flex',border:'2px solid red'}}>
        {/* <ICard name={students.name} roll={students.roll} branch={students.branch} college={students.college}></ICard> */}
        {/* <ICard name="Shyam" roll="456" branch="CSE" college="ABES"></ICard>
        <ICard name="Hari" roll="789" branch="CSE" college="ABES"></ICard>
        <ICard name="Ramesh" roll="101" branch="CSE" college="ABES"></ICard> */}
        {/* <ICard data={students}></ICard> */}
         
         {
            students.map((ele)=>(
                <div>
                    <ICard data={ele}></ICard>
                    </div>
            ))
         }
    </div>
  )
}

export default Gallery