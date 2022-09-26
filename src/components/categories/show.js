import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function get_category_data(category_URL) {
    console.log(category_URL);
   return axios.get(category_URL).then((response) => response.data)
}


function Show() {
    const params=useParams();
    const category_URL = ("http://[::1]:4000/categories/"+params.id);
	
    <h1>Show Category</h1>
    const [category, setCategory] = useState([]);

	useEffect(() => {
		let mounted = true;
		get_category_data(category_URL).then((item) => {
			if (mounted) {
				setCategory(item);
			}
		});
		return () => { (mounted = false) };
	}, []);

        return (
           
       <div key={category.id}>
  {/* {console.log(category.id)} */}
         <p className="card-text">{category.name}</p>    
      
    </div>
  )
       
}

export default Show