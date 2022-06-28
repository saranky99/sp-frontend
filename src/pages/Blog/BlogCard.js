import React from "react";
import { FiTrash2, FiEdit2, FiThumbsUp } from "react-icons/fi";
import styels from "./BlogCard.module.css";
import {Link} from "react-router-dom";

const BlogCard = ({blog}) => {
  

  const deleteBlog = (id) => {
    fetch("/api/blog/deleteblog/" + id, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <div className={styels.container}>
      <div className={styels.card}>
        <div className={styels.card__header}>
          <img
            src={blog.photo}
            alt="card__image"
            className={styels.card__image}
            width="600"
          />
        </div>
        <div className={styels.card__body}>
          <div>
            <span className={styels.tag + " " + styels.tag_blue}>
              {blog.category}
            </span>
            <Link to={`editblog/${blog._id}`}>
                    <FiEdit2 />
                  </Link>
            <FiTrash2 style={{color:"red"}}  onClick={() => deleteBlog(blog._id)}/>
          </div>

          <h4><Link to={`view/${blog._id}`}>
                  {blog.title}</Link></h4>
          <p>
            {blog.message}
          </p>
        </div>
        <div className={styels.card__footer}>
          <div className={styels.user}>
            <div className={styels.user__info}>
              <FiThumbsUp /> <b>10 Likes</b>
              <h5>
                Jane Doe{" "}
                <span>
                  {" "}
                  <small>2h ago</small>
                </span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
