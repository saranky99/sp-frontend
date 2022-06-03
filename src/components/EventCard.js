import "../components/EventCard.css";
import React, { useEffect, useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
const EventCard = () => {
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
    <>
      {data.map((event) => {
        return (
          <div className="searchItem">
            <img src={event.photo} alt="" className="siImg" />
            <div className="siDesc">
              <h1 className="siTitle">{event.title}</h1>
              <span className="siDistance">Learn anywhere</span>
              <span className="siTaxiOp">
                {" "}
                {moment(event.createdAt).format("MMM DD yyyy")}
              </span>
              <span className="siSubtitle">{event.breifDescription}</span>

              <span className="siCancelOp">Free cancellation </span>
              <span className="siCancelOpSubtitle">
                You can cancel later, so lock in this great price today!
                {/* {`eventInfo/${event._id}` */}
              </span>
            </div>
            <div className="siDetails">
              <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
              </div>
              <div className="siDetailTexts">
                <span className="siPrice">{event.price}</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button className="siCheckButton">
                  <Link to={`eventinfo/${event._id}`}>See booking</Link>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default EventCard;
