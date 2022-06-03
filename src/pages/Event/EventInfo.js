import React, { useState, useEffect } from "react";
import StudentDefaultLayout from "../../Layout/StudentDefaultLayout";
import styles from "./EventInfo.module.css";
import { Tag } from "antd";
import { Link } from "react-router-dom";
import moment from "moment";
const EventInfo = ({ match }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/api/event/getallevents")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const getAllevents = data;
        setData(getAllevents);
      });
  }, []);

  const companyname = JSON.parse(localStorage.getItem("user"));

  const event = data.find((event) => event._id === match.params.id);

  return (
    <div>
      <StudentDefaultLayout>
        <h1>Event info</h1>

        {/* {event && <h1>{event.title}</h1>} */}

        {event && (
          <div className={styles.container}>
            <p>
              <b className={styles.title}>Title</b> :{event.title}
            </p>
            <p>
              <b className={styles.title}>Company</b> : {companyname.username}
            </p>

            <p>
              <b className={styles.title}>Full Description</b> :{" "}
              {event.fullDescription}
              environments.
            </p>
            <p>
              <b>Price</b> :{event.price}
            </p>

            <p>
              <b className={styles.title}>Time</b> : {event.time}
            </p>

            <hr />

            <p>
              <b className={styles.title}>Category</b> :{event.category}
            </p>

            <p>
              <b className={styles.title}>Total attend for event</b> :
              {event.eventappliedcandaitedIds.length}
            </p>
            <p>
              <b className={styles.title}>Register Before</b> :{event.duedate}
            </p>

            <hr />

            <div className="flex justify-content-between">
              <button className={styles.btnpayhere}>
                <Link to={`EventPayment/${event._id}`}>Pay Here</Link>
              </button>

              <p>
                <b className={styles.title}>Posted on</b> :{" "}
                {moment(event.createdAt).format("MMM DD yyyy")}
              </p>
            </div>
          </div>
        )}
      </StudentDefaultLayout>
    </div>
  );
};

export default EventInfo;
