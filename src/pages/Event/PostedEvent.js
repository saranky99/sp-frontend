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

  // const id = data[0]._id;
  const deleteEvent = (id) => {
    fetch("/api/event/deleteevent/" + id, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <div>
      <CompanyDefaultLayout>
        <h1
          style={{
            color: "#0071c2",
            fontWeight: "bold",
          }}
        >
          PostedEvents
        </h1>

        <table>
          <tr>
            <th>Event ID</th>
            <th>Title</th>
            <th>PostedOn</th>
            <th>Categories</th>
            <th>Action</th>
          </tr>
          {data.map((event) => {
            return (
              <tr>
                <td>{event._id}</td>
                <td>{event.title}</td>
                <td> {moment(event.createdAt).format("MMM DD yyyy")}</td>
                <td>{event.category}</td>

                <td>
                  <Link to={`eventedit/${event._id}`}>
                    <BsFillPencilFill />
                  </Link>

                  <Link>
                    <BsFillTrashFill onClick={() => deleteEvent(event._id)} />
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
