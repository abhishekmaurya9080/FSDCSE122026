import React from 'react'
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
function Home() {
  return (
    <div >
        <nav>
            <ul style  ={{display:"flex",justifyContent:"space-evenly",listStyleType:"none",backgroundColor:"lightblue"}}>
                <li><Link to="/login">login</Link></li>
                <li><Link to="/register">Registration</Link></li>

            </ul>
        </nav>
        <Outlet />
    </div>
  )
}

export default Home