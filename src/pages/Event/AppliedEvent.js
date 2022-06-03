import React from "react";
import StudentDefaultLayout from "../../Layout/StudentDefaultLayout";
import { Table } from "antd";
import { Row, Col, Form, Tabs, Input, Button, Select } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
const AppliedEvent = () => {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Title",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "PostedOn",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "AppliedCandiates",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Catagaries",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Actions",
      render: (text, data) => {
        return (
          <div>
            <EditOutlined />
            <DeleteOutlined />
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <StudentDefaultLayout>
        <h1>PostedEvents</h1>
        <Table dataSource={dataSource} columns={columns} />;
      </StudentDefaultLayout>
    </div>
  );
};

export default AppliedEvent;
