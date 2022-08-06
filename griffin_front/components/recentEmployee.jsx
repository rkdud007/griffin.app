import React from "react";
import "antd/dist/antd.css";
import { Avatar, List } from "antd";
import styles from "../styles/employee.module.css";


const RecentEmployee = ({employees}) => (
  <List
    itemLayout="horizontal"
    dataSource={employees}
    renderItem={(item) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={item.avatarUrl || "https://joeschmoe.io/api/v1/random"} />}
          title={<a href="https://ant.design">{item.name} {item.id}</a>}
          description={item.position}
        />
      </List.Item>
    )}
  />
);

export default RecentEmployee;
