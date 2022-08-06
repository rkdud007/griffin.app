import React from "react";
import "antd/dist/antd.css";

import { Card } from "antd";
import expectedPayrollPie from "./expectedPayrollPie";
import ExpectedPayrollPie from "./expectedPayrollPie";

const ExpectedPay = () => (
  <>
    <Card
      title="Expected Payroll"
      extra={<a href="#">More</a>}
      style={{
        width: 300,
      }}
    >
      <p>$235,353</p>
      <ExpectedPayrollPie />
    </Card>
  </>
);

export default ExpectedPay;
