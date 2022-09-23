import React from 'react'
import axios from 'axios';

  
function New() {

    const [formValue, setformValue] = React.useState({
        name: ''
            });
  
      const handleSubmit = (event) => {
          // we will fill this in the coming paragraph
          const loginFormData = new FormData();
  loginFormData.append("name", formValue.name)

  try {
    // make axios post request
    const response = axios({
      method: "post",
      url: "http://[::1]:4000/categories",
      data: loginFormData,
      headers: { "Content-Type": "form-data" },
    });
  } catch(error) {
    console.log(error)
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
      <p>Create New Category</p>
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
        Create Category
      </button>
    </form>
    </div>
  )
}

export default New
