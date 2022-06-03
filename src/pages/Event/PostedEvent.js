import React, { useState, useEffect } from "react";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import CompanyDefaultLayout from "../../Layout/CompanyDefaultLayout";
import "./PostedEvent.module.css";
import { Link } from "react-router-dom";
import moment from "moment";

const PostedEvent = () => {
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

  console.log(data.eventappliedcandaitedIds);
  return (
    <div>
      <CompanyDefaultLayout>
        <h1>PostedEvents</h1>

        <table>
          <tr>
            <th>Event ID</th>
            <th>Title</th>
            <th>PostedOn</th>
            <th>Categories</th>
            <th>AppliedCandaited</th>
            <th>Action</th>
          </tr>
          {data.map((event) => {
            return (
              <tr>
                <td>{event._id}</td>
                <td>{event.title}</td>
                <td> {moment(event.createdAt).format("MMM DD yyyy")}</td>
                <td>{event.category}</td>
                <td>{event.eventappliedcandaitedIds.length}</td>
                <td>
                  <Link to={`eventedit/${event._id}`}>
                    {" "}
                    <BsFillPencilFill />
                  </Link>

                  <Link to={`eventedit/${event._id}`}>
                    <BsFillTrashFill />
                  </Link>
                </td>
              </tr>
            );
          })}
        </table>
      </CompanyDefaultLayout>
    </div>
  );
};

export default PostedEvent;
