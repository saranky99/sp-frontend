import React, { useEffect, useState } from "react";
import StudentDefaultLayout from "../../Layout/StudentDefaultLayout";
import BlogCard from "./BlogCard";
import styles from "./BlogHomePage.module.css";
import { message } from "antd";
import axios from "axios";
import {Link} from "react-router-dom"


const BlogHomePage = () => {
 
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/blog/allblogs")
      .then((data) => {
        console.log(data.data)
        setBlogs(data.data);

      }).catch((e) => {
        console.log(e);
      });
  }, []);


  return (
    <div>
      <h1>hello world</h1>
      {/* <StudentDefaultLayout>
        <input
          type="text"
          name="search"
          placeholder="Search.."
          className={styles.search}
        />
        <button>
            <Link to="/createblog">
                Create Blog
            </Link>
        </button>
        <div className={styles.container}>
          <div className={styles.left}>
            {blogs.map((blog) => <BlogCard blog={blog} />)}
          </div>
        </div>
      </StudentDefaultLayout> */}
    </div>
  );
};

export default BlogHomePage;
