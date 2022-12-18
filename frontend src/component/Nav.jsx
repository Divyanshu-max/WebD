import react from 'react';
import {NavLink} from 'react-router-dom';
function Nav(){

  const st={
     textDecoration:"none",
     color:"white",
      fontSize: 20
  }
    return(
      
      <>
      <div  class="d-flex justify-content-around bg-primary h-50  ">
        
           <NavLink  to="/" class="mb-4 mt-3 link"  style={st} > Home</NavLink>
           <NavLink  to="/Login" class="mb-4  mt-3 link " style={st}> Login</NavLink>

           <NavLink  to="/Register" class="mb-4  mt-3 link" style={st}> Register</NavLink>
           <NavLink  to="/search" class="mb-4  mt-3  link" style={st}> Find</NavLink>

           <NavLink  to="/contactus" class="mb-4  mt-3 link" style={st}> Contact us</NavLink>
           <NavLink  to="/aboutus" class="mb-4  mt-3 link " style={st}> About us</NavLink>
           
           </div>
      </>
    );
}

export default Nav;