import react from 'react';
import {Redirect} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Tpper()
{
  const [empfname, setfname] = useState("");
  const [emplname, setlname] = useState("");
  const [empemail, setemail] = useState("");
  const [empphoto, setempphoto] = useState("");

  useEffect(() => {
     
    const empemail=localStorage.getItem("email")
console.log(empemail)

   
    axios.post('http://localhost:5000/profile',{ empemail:empemail})
      .then(response => {
        console.log(response.data.emplname);
        setfname(response.data.empfname)
        setlname(response.data.emplname)
        setemail(response.data.empemail)
        setempphoto(response.data.empphoto)




      })
      .catch((error) => {
        console.log(error);
      })
  })

  const history=useHistory();
    
  const a="cf"
    const b="ss";
    const c="sd"
      
    function handleSubmit()
    {
      history.push('/add')
    }
    function handle()
    {
      history.push('/delete')
    }
    return(
        <div class="d-flex  ">
        
      






<div  class="d-flex flex-row w-50">
      <div class="w-50">
      <img src={empphoto} class="card-img-top" alt="..." style={{  height:"300px", weidth:"500px" }}></img>
      </div>
        <div class="card  w-50 ">
  <div class="card-header d-flex  justify-content-center " style={{ color: "red", fontWeight:"bolder" }}>
   WELCOME !!
  </div>
  <ul class="list-group list-group-flush d-flex       justify-content-center">
    <li class="list-group-item d-flex  border-0     justify-content-center"  style={{ color: "green" ,fontWeight:"bolder"}}>{empfname}</li>
    <li class="list-group-item  d-flex    border-0    justify-content-center" style={{ color: "blue",fontWeight:"bolder" }}>{emplname}</li>
    <li class="list-group-item  d-flex   border-0     justify-content-center" style={{ color: "brown",fontWeight:"bolder" }}>{empemail}</li><br></br>
    <li class="list-group-item  d-flex   border-0     justify-content-center" style={{ color: "black",fontWeight:"bolder" }}>lkjnh kjbwd k;jqnwdnwdbjunnwd</li>
  </ul>
  
</div>

</div>



<div class="d-flex flex-row justify-content-center  align-items-center">
<button type="button" class="btn btn-primary btn-lg btn-block"  onClick={handleSubmit}>ADD YOUR PLACE</button>
<button type="button" class="btn btn-secondary btn-lg btn-block"onClick={handle}>DELETE YOUR PLACE</button>
</div>

</div>


        

        
    );
}
export default Tpper;