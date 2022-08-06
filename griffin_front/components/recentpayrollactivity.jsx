import React from "react";
import "antd/dist/antd.css";
import { Table } from "antd";
import styles from "../styles/dashboard.module.css";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];
const data = [];

for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const RecentPayrollActivity = () => {
  return (
    <div className={styles.recentPayrollCont}>
      <h1>Recent Payroll Activity</h1>
      <Table columns={columns} dataSource={data} />;
    </div>
  );
};

export default RecentPayrollActivity;
