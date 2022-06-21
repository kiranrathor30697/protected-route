import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

 function Logout() {

    let navigate = useNavigate()
       
        // console.log(token)
        setTimeout(()=>{
            localStorage.removeItem('token') ;
            navigate('/');
        },[1000])       
 
  return (
    <div>
       <h1 className='text-center mt-5 text-light'>Logout Successfully</h1>
    </div>
  );
}
export default Logout;