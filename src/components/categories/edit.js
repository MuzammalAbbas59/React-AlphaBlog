import React from 'react'
import axios from 'axios';
import { Redirect, useParams,useHistory } from 'react-router-dom';

function redirect_to_categories(){
 
}

function Edit() {
  const params = useParams();
  let history=useHistory();
   console.log(params.id)
    const [formValue, setformValue] = React.useState({
        name: ''
            }); 
          // const id=props.match.params.id
      const handleSubmit = (event) => {
        
  const loginFormData = new FormData();
  loginFormData.append("name", formValue.name)
      
  try {
    // make axios post request
    const response = axios({
      method: "put",
      url: ('http://[::1]:4000/categories/'+params.id),
      data: loginFormData,
      headers: { "Content-Type": "form-data" },
    });

  } catch(error) {
    console.log(error)
  }
  finally{
  history.push("/categories")
  }
        }
      
      const handleChange = (event) => {
          setformValue({
            ...formValue,
            [event.target.name]: event.target.value
          });
        }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <p>Update Category</p>
      <input
        type="string"
        name="name"
        placeholder="enter name"
        value={formValue.name}
        onChange={handleChange}
      />
      <button
        type="submit"
      >
        Update
      </button>
   
    </form>
    </div>

  )
  
}

export default Edit
