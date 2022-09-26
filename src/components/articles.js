import axios from "axios";
import React, { useEffect, useState } from "react";
import TimeAgo from 'timeago-react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

const articles_URL = "http://[::1]:4000/articles";

function get_articles_data() {

	return axios.get(articles_URL).then((response) => response.data)

}
function Articles() {
	const [articles, setArticles] = useState([]);
	
	useEffect(() => {
		let mounted = true;
		get_articles_data().then((items) => {
			if (mounted) {
				setArticles(items);
			}
		});
		return () => { (mounted = false) };
	}, []);


	return (
		<div>
			<h1>Articles from api are </h1>

			<div className="container ">
				{articles.map((article) => {
					return (
						<div key={article.id}>

							<div className="row justify-content-md-center">
								<div className="col-8 mt-3 ">

									<div className="card text-center shadow mb-3 bg-white rounded">
										<div className="card-header font-italic">
											<p2>{article.user}</p2>
											<div className="mt-2">
												<p2>{article.categories}</p2>
											</div>

										</div>
										<div className="card-body">

											<h5 className="card-title">{article.title}</h5>
											<p className="card-text">{article.description}</p>
											<Link to={"/articles/"+article.id} className="btn btn-outline-success" >View</Link>&nbsp;
											<Link to={"/articles/" + article.id + "/edit"} className="btn btn-outline-warning" >Edit</Link>&nbsp;
											<Link to={"/articles/" + article.id + "/delete"}  className="btn btn-outline-danger" >Delete</Link>
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
  datetime={article.created_at}
  locale='ENG'
/> </p1>
<p1> , Updated &nbsp;
<TimeAgo
  datetime={article.updated_at}
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




export default Articles;