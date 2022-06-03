import React, { useState, useEffect } from "react";
import styles from "./PostEvent.module.css";
import CompanyDefaultLayout from "../../Layout/CompanyDefaultLayout";
import { Row, Col, Form } from "antd";
import { message } from "antd";
import axios from "axios";
function EditEvent({
  match,
  title1,
  duedate1,
  time1,
  price1,
  photo1,
  category1,
  breifDescription1,
  fullDescription1,
  id,
}) {
  const [title, setTitle] = useState(title1);
  const [duedate, setDate] = useState(duedate1);
  const [time, setTime] = useState(time1);
  const [price, setPrice] = useState(price1);
  const [photo, setPhoto] = useState(photo1);
  const [category, setCategories] = useState(category1);
  const [breifDescription, setBreifDescription] = useState(breifDescription1);
  const [fullDescription, setFullDescription] = useState(fullDescription1);
  const [url, setUrl] = useState("");
  const [update, setUpdate] = useState(false);

  const fetchUpdate = () => {
    const data = {
      title: title,
      duedate: duedate,
      time: time,
      price: price,
      photo: photo,
      category: category,
      breifDescription: breifDescription,
      fullDescription: fullDescription,
    };
    axios
      .put(`http://localhost:5000/api/event/editevent/${id}`, data)
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <CompanyDefaultLayout>
        {update && (
          <Form layout="vertical" method="post" className={styles.form_form}>
            <h2 className={styles.heading}>Edit your post</h2>

            <Row gutter={16}>
              <Col lg={8} sm={24}>
                <div className={styles.divdiv}>
                  <label className={styles.select_label} f>
                    Title of the Event
                  </label>
                  <input
                    value={title}
                    name="title"
                    type="text"
                    className={styles.input_input}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </Col>

              <Col lg={8} sm={24}>
                <label className={styles.select_label}>
                  Choose your the date
                </label>
                <input
                  value={duedate}
                  name="date"
                  type="date"
                  className={styles.input_input}
                  onChange={(e) => setDate(e.target.value)}
                />
              </Col>

              <Col lg={8} sm={24}>
                <label className={styles.select_label} for="role">
                  Choose your the time
                </label>
                <input
                  name="time"
                  value={time}
                  type="text"
                  className={styles.input_input}
                  onChange={(e) => setTime(e.target.value)}
                />
              </Col>

              <Col lg={8} sm={24}>
                <label className={styles.select_label} for="role">
                  Price of the Event
                </label>
                <input
                  name="price"
                  value={price}
                  type="text"
                  className={styles.input_input}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Col>
              <Col lg={8} sm={24}>
                <label className={styles.select_label} for="role">
                  Choose Event Categories
                </label>
                <select
                  className={styles.select_select}
                  onChange={(e) => setCategories(e.target.value)}
                  value={category}
                >
                  <option>Web Development </option>
                  <option>Mobile Development</option>
                  <option>UX/UI Design</option>
                  <option>Data Science</option>
                  <option>Full Stack Development</option>
                  <option>Artificial Intelligence</option>
                  <option>Machine Learning</option>
                </select>
              </Col>
              <Col lg={8} sm={24}>
                <label className={styles.select_label}>Choose image</label>
                <input
                  type="file"
                  className={styles.input_input}
                  onChange={(e) => setPhoto(e.target.files[0])}
                />
              </Col>
            </Row>

            <Row gutter={16}>
              <Col lg={24} sm={24}>
                <label className={styles.select_label}>
                  Type your Brief Describation
                </label>

                <textarea
                  name="brief"
                  value={breifDescription}
                  type="text"
                  className={styles.text_area}
                  onChange={(e) => setBreifDescription(e.target.value)}
                  rows={7}
                ></textarea>
              </Col>

              <Col lg={24} sm={24}>
                <label className={styles.select_label} for="role">
                  Type your Full Describation
                </label>

                <textarea
                  name="full"
                  value={fullDescription}
                  type="text"
                  className={styles.text_area}
                  rows="4"
                  onChange={(e) => setFullDescription(e.target.value)}
                ></textarea>
              </Col>
            </Row>

            <button
              className={styles.button_button}
              onClick={() => setUpdate(true)}
            >
              Update
            </button>
          </Form>
        )}
      </CompanyDefaultLayout>
    </div>
  );
}

export default EditEvent;
