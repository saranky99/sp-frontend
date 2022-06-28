import React, { useEffect, useState } from "react";
import StudentDefaultLayout from "../../../Layout/StudentDefaultLayout";
import styles from "./StudentProfile.module.css";
import { Tabs } from "antd";
import axios from "axios";
const { TabPane } = Tabs;
const StudentProfile = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {}, []);

  return (
    <div>
      <StudentDefaultLayout>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Profile" key="1">
            <h2>UseName : {user.username} </h2>
            <h2>Email : {user.email} </h2>
            <h2>Loogin as : {user.role} </h2>
          </TabPane>
          <TabPane tab="Events" key="2">
            <StudentEventsBooking />
          </TabPane>
        </Tabs>
      </StudentDefaultLayout>
    </div>
  );
};

export default StudentProfile;

export const StudentEventsBooking = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [eventbooking, setEventBooking] = useState([]);
  async function booking() {
    try {
      const book = await (
        await axios.post("/api/eventbooking/eventbookingBtId", {
          userid: user._id,
        })
      ).data;
      console.log(book);
      setEventBooking(book);
    } catch (error) {
      console.log(error);
    }
  }

  booking();
  return (
    <div className={styles.bookcardconatiner}>
      {eventbooking &&
        eventbooking.map((books) => {
          return (
            <div className={styles.bookcard}>
              <h2>{books.title}</h2>
              <h3>BookedId:{books._id}</h3>
              <h3>FinalDate: {books.finaldate}</h3>
              <h3>Price :{books.price}</h3>
              <h3>
                Status :
                <span className={styles.stus}>
                  {books.status === "booked" ? "Confirmed" : "Canceled"}
                </span>
              </h3>

              <div>
                <button className={styles.btnbtn}>Cancel Booking</button>
              </div>
            </div>
          );
        })}
    </div>
  );
};
