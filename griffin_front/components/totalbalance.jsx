import React from "react";
import "antd/dist/antd.css";
import { Card } from "antd";
import TotalBalancePie from "./totalBalancePie";
import styles from "../styles/dashboard.module.css";

const TotalBalance = () => (
  <div className={styles.balanceBox}>
    <Card
      title="Total Balance"
      extra={<a href="#">More</a>}
      style={{
        width: 300,
      }}
    >
      <p>$235,353</p>
      <TotalBalancePie />
    </Card>
  </div>
);

export default TotalBalance;
