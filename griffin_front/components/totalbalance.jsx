import React from "react";
import "antd/dist/antd.css";
import { Card } from "antd";
import TotalBalancePie from "./totalBalancePie";

const TotalBalance = () => (
  <>
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
  </>
);

export default TotalBalance;
