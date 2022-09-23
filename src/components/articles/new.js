import React from 'react'
import axios from 'axios';

  
function New() {

    const [formValue, setformValue] = React.useState({
        title: '',
        description: ''
      });
  
      const handleSubmit = (event) => {
          // we will fill this in the coming paragraph
          const loginFormData = new FormData();
  loginFormData.append("title", formValue.title)
  loginFormData.append("description", formValue.description)

  try {
    // make axios post request
    const response = axios({
      method: "post",
      url: "http://[::1]:4000/articles",
      data: loginFormData,
      headers: { "Content-Type": "multipart/form-data" },
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
      <p>Create New Article</p>
      <input
        type="string"
        name="title"
        placeholder="enter title"
        value={formValue.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="enter description"
        value={formValue.description}
        onChange={handleChange}
      />
      <button
        type="submit"
      >
        Create Article
      </button>
    </form>
    </div>
  )
}

export default New
