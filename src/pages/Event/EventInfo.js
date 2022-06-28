import React, { useState, useEffect } from "react";
import StudentDefaultLayout from "../../Layout/StudentDefaultLayout";
import styles from "./EventInfo.module.css";
import { Link } from "react-router-dom";
import moment from "moment";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { message } from "antd";

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

  console.log(event);

  function bookNow() {
    fetch("/api/eventbooking/bookingevent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: event.title,
        userid: JSON.parse(localStorage.getItem("user"))._id,
        eventid: event._id,
        category: event.category,
        duedate: event.duedate,
        finaldate: event.finaldate,
        price: event.price,
        breifDescription: event.breifDescription,
        photo: event.photo,
      }),
    })
      .then((res) => res.json())
      .then((dataa) => {
        console.log(dataa);
        message.success("Your Booking Successful go with the payment  process");
      });
  }
  console.log();
  async function handleToken(token, addresses) {
    const response = await axios.post("http://localhost:5000/checkout", {
      token,
      data,
    });

    console.log(response.status);

    if (response.status === 200) {
      console.log("ok");
    } else {
      console.log("error");
    }
  }

  return (
    <div>
      <StudentDefaultLayout>
        {event && (
          <div className={styles.container}>
            <div className={styles.image}>
              <h1 className={styles.head}>
                <b className={styles.title}></b>
                {event.title}
              </h1>
              <img src={event.photo} className={styles.imgimg} alt="" />
            </div>

            <h2>
              <b className={styles.title}>Company</b> : {companyname.username}
            </h2>

            <h2>
              <b className={styles.title}>Full Description</b> :{" "}
              {event.fullDescription}
              environments.
            </h2>
            <h2>
              <b>Price</b> :{event.price}
            </h2>

            <h2>
              <b className={styles.title}>Time</b> : {event.time}
            </h2>

            <hr />

            <h2>
              <b className={styles.title}>Category</b> :{event.category}
            </h2>

            <h2 className={styles.arrange}>
              <b className={styles.title}>Total attend for event</b> :
              <p>
                <b className={styles.title}>Register Before</b> :{event.duedate}
              </p>
            </h2>

            <hr />

            <div className="flex justify-content-between">
              <p>
                <b className={styles.title}>
                  Posted on : {moment(event.createdAt).format("MMM DD yyyy")}
                </b>
              </p>
            </div>
            <br />
            <div className={styles.bbttn}>
              <button className={styles.btnpayhere} onClick={bookNow}>
                <Link
                  // to={`EventPayment/${event._id}`}
                  className="pay"
                >
                  Book Now
                </Link>
              </button>
              <StripeCheckout
                currency="USD"
                amount={event.price * 100}
                token={handleToken}
                stripeKey="pk_test_51LAsuiKZN7awioyBM2wHrfYcgtuBwGmCv5ynShqCcYtcYGGpEDFQ8Vks7Zq4XfzpSaHU72dBPfpvXO6vWTBwbewT00QgV4PlIo"
              ></StripeCheckout>
            </div>
          </div>
        )}
      </StudentDefaultLayout>
    </div>
  );
};

export default EventInfo;
