import React, { useEffect, useState } from "react";
import StudentDefaultLayout from "../../Layout/StudentDefaultLayout";
import styles from "./EventHome.module.css";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import moment from "moment";
import List from "../../components/List";
const EventHome = () => {
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

  return (
    <StudentDefaultLayout>
      {/* <Row gutter={16}>
        {data.map((event) => {
          return (
            <Col lg={24} sm={24} md>
              <div className={styles.main_container}>
                <div className={styles.card}>
                  <div className={styles.card_left}>
                    <img src={event.photo} />
                  </div>
                  <div className={styles.card_right}>
                    <div className={styles.content}>
                      <h2 className={styles.heading}>{event.title}</h2>
                    </div>
                    <div className={styles.content}>
                      <div className={styles.content_company}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMxWBQhqdpOuV3ZRge-harpC9aMfcsMAbeCxQ63GBDRstIjbazHFPw0o9muSRCuL4VoA4&usqp=CAU" />
                        <h4 className={styles.company_name}>Virtuza</h4>
                      </div>
                    </div>

                    <div className={styles.content}>
                      <p>{event.breifDescription}</p>

                      <h3>
                        <b>{event.price}</b>
                        <button className={styles.btn}>
                          intrested <b>02</b>
                        </button>
                      </h3>
                    </div>
                    <div className={styles.content}></div>
                    <div className={styles.content}>
                      <div className={styles.content_button}>
                        <button>
                          <Link to={`eventInfo/${event._id}`}>View</Link>
                        </button>
                        <p className={styles.date}>
                          Posted on
                          <b className={styles.datavalue}>
                            {moment(event.createdAt).format("MMM DD yyyy")}
                          </b>{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row> */}

      <List />
    </StudentDefaultLayout>
  );
};

export default EventHome;
