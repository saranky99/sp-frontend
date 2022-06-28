import React from "react";
import { Input, Space } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  FilterOutlined,
} from "@ant-design/icons";
const { Search } = Input;

const Fillter = () => {
  return (
    <div>
      <Search enterButton="Search" size="large" />

      <FilterOutlined />
    </div>
  );
};

export default Fillter;
