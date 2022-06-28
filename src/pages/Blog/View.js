import React, { useState, useEffect } from "react";
import StudentDefaultLayout from "../../Layout/StudentDefaultLayout";
import styles from "./BlogCard.module.css";

function View({ match, history }) {
  const idid = match.params.id;
  console.log(idid);

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`/api/blog/oneblog/${idid}`, {})
      .then((response) => {
        return response.json();
      })
      .then((singledata) => {
        const singleblog = singledata;
        setData(singleblog);
        console.log(data.title)

      });
  }, []);

  console.log(data);
  console.log(data.title)

  return (
    <div>
      <StudentDefaultLayout>
        {data && (
          <div className={styles.container}>
            <div className={styles.image}>
              <h1 className={styles.head}>
                <b className={styles.title}></b>
                {data.title}
              </h1>
              <img src={data.photo} className={styles.imgimg} alt="" />
            </div>
            <h2>
              <b className={styles.title}>Category </b> :{" "}
              {data.category}
            
            </h2>
            <hr />
            <h2>
              <b className={styles.title}>Message </b> :{" "}
              {data.mesage}
            
            </h2>
            
            </div>
        )}

      </StudentDefaultLayout>
    </div>
  );
}

export default View;
