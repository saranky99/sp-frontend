import React, { useState, useEffect } from "react";
import StudentDefaultLayout from "../../Layout/StudentDefaultLayout";
import styles from "./BlogCard.module.css";

function EditBlog({ match, history }) {
  const idid = match.params.id;
  console.log(idid);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`/api/blog/oneblog/${idid}`, {})
      .then((response) => {
        return response.json();
      })
      .then((singledata) => {
        const singleblog = singledata;
        setData(singleblog);
      });
  }, []);

  console.log(data);
  console.log(data.title)

  const fetchUpdate = () => {
    fetch(`/api/blog/editblog/${idid}`, {
      method: "PUT",
      body: JSON.stringify({
        // _id: idid,
        title: title,
        category:category,
        message:message
       
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        message.success("Blog Edited Successfully");
        //history.push("/postedevent");
      });
  };

  return (
    <div>
      <StudentDefaultLayout>
        {
           <div className={styles.right}>
           <h1 className={styles.head}>Edit Blog Here</h1>
           <lable hemlFor="title">Title  </lable>
           <input
             className={styles.hi}
             type="text"
             id="fname"
             name="title"
             value={data.title}
           
           onChange={(e) => setTitle(e.target.value)} 
           />
           <lable hemlFor="category">Category  </lable>
           <select className={styles.hi}  
           value={data.category} onChange={(e) => setCategory(e.target.value)}>

             <option value="australia">Experince</option>

             <option value="software">Software</option>
             <option value="Web Development">Web Development </option>
             <option value="Mobile Development">Mobile Development</option>
             <option value="Frontend Development">
               Frontend Development
             </option>
             <option value="Backend  Development">Backend Development</option>
             <option value="UX/UI Design ">UX/UI Design</option>
             <option value="Data Science">Data Science</option>
             <option value="Full Stack Development">
               Full Stack Development
             </option>
           </select>
           <lable hemlFor="message">Message  </lable>
           <textarea className={styles.hi + " " + styles.hii} value={data.message} onChange={(e) => setMessage(e.target.value)}>
            
           </textarea>
          
           <br />
           <button
             onClick={fetchUpdate}>
             Update
           </button>
         </div>
        }
      </StudentDefaultLayout>
    </div>
  );
}

export default EditBlog;
