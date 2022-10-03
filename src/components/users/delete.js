import axios from 'axios';
import React, { useEffect } from 'react'
import { Redirect, useParams } from 'react-router-dom';


function DeleteUser() {
    const params=useParams();
        console.log(params.id);
        useEffect(() => {
            
            axios.delete('http://[::1]:4000/users/'+params.id ,{ withCredentials: true })
                    
    }, []);
    
    
      return (
        <div>
          <Redirect to="/users" />
        </div>
      )
    }
    
    export default DeleteUser
    