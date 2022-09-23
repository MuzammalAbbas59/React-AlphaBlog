import React from 'react'
import {Link} from 'react-router-dom';

function Categories(props) {
    return (
        <div>
            <h1>Categories from api are </h1>

            <div className="container ">
                {props.categories.map((category) => {
                    return (
                        <div key={category.id}>

                            <div className="row justify-content-md-center">
                                <div className="col-8 mt-3 ">

                                    <div className="card text-center shadow mb-3 bg-white rounded">
                                        {/* <div className="card-header font-italic">
                                        <p2>{article.user}</p2>
                                        <div className="mt-2">
                                            <p2>{article.categories}</p2>
                                        </div>

                                    </div> */}
                                        <div className="card-body">

                                            <h5 className="card-title">{category.id}</h5>
                                            <p className="card-text">{category.name}</p>
                                            {/* <Link to="/articles" className="btn btn-outline-success" >View</Link>&nbsp;
                                            <Link to="/articles" className="btn btn-outline-warning" >Edit</Link>&nbsp;
                                            <Link to="/users" className="btn btn-outline-danger" >Delete</Link> */}
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
                                            {/* <p1> Articles Count =  &nbsp;
                                                {category.articles.count}
                                            </p1> */}
                                        </div>


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





export default Categories
