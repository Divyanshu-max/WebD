import react from 'react';
import {useHistory} from 'react-router-dom';
function Logout()
{  
     localStorage.setItem("login",false);
     const h=useHistory();
     
     return(
         <>
        
         </>
     )
}

export default Logout;