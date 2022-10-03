import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';

function DeleteArticles() {
const params=useParams();
	console.log(params.id);
	useEffect(() => {
		
		axios.delete('http://[::1]:4000/articles/'+params.id,{withCredentials: true} 
  
  )}
	,[]);


  return (
    <div>
      <Redirect to="/articles" />
    </div>
  )
}

export default DeleteArticles
