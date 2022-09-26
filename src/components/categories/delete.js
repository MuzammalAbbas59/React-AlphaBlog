import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { Redirect, Route, useParams } from 'react-router-dom';
import Categories from '../categories';

function DeleteCategory() {
const params=useParams();
	console.log(params.id);
	useEffect(() => {
		
		axios.delete('http://[::1]:4000/categories/'+params.id)
				
}, []);


  return (
    <div>
      <Redirect to="/categories" />
    </div>
  )
}

export default DeleteCategory
