import React, { useState ,useEffect} from "react";
import TimeAgo from 'timeago-react';
import {Link} from 'react-router-dom';
import axios from "axios";
const users_URL = "http://[::1]:4000/users";



function get_users_data() {

	return axios.get(users_URL).then((response) => response.data)

}

function Users(props) {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		let mounted = true;
		get_users_data().then((items) => {
			if (mounted) {
				setUsers(items);
			}
		});
		return () => { (mounted = false) };
	}, []);


    return (
       
<div>
			<h1>Users from api are </h1>

			<div className="container ">
				{users.map((user) => {
					return (
						<div key={user.id}>

							<div className="row justify-content-md-center">
								<div className="col-8 mt-3 ">

									<div className="card text-center shadow mb-3 bg-white rounded">
										<div className="card-header font-italic">
											{/* <p2>{article.user}</p2>
											<div className="mt-2">
												<p2>{article.categories}</p2>
											</div> */}
												<h5>{user.id}</h5>
										

										</div>
										<div className="card-body">

											<h5 className="card-title">{user.username}</h5>
											<p className="card-text">{user.email}</p>
											<Link to="/articles" className="btn btn-outline-success" >View</Link>&nbsp;
											<Link to="/articles" className="btn btn-outline-warning" >Edit</Link>&nbsp;
											<Link to="/users" className="btn btn-outline-danger" >Delete</Link>
    {/* <% if loggedin? && (current_user == article.user || current_user.admin?) %>
    <%= link_to "Edit", edit_article_path(article), className: "btn btn-outline-warning" %>
    <%= link_to "Delete", article_path(article), className: "btn btn-outline-danger",
                                           data: { turbo_confirm: "Are You Sure ?",
                                            turbo_method: :delete } %>
    <% end %> */}

										</div>
										<div className="card-footer text-muted">
											 {/* <small> TimeAgo{article.created_at}, 
 edited time_ago_in_words{article.updated_at} ago</small>
										 */}
										 <p1> Created  &nbsp;
<TimeAgo
  datetime={user.created_at}
  locale='ENG'
/> </p1>
<p1> , Updated &nbsp;
<TimeAgo
  datetime={user.updated_at}
  locale='ENG'
/> </p1> </div> 


									</div>

								</div>

								<div className="row mb-5 text-center">

									{/* <%= link_to "[Create a New Article]", new_article_path, className: "text-success " %> */}

								</div>

							</div>
						</div>
					)
				})}
			</div>

		</div>


    )

}



export default Users;