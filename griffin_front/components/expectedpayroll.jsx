import React from "react";
import "antd/dist/antd.css";
import PieCard from './pieCard.jsx';
import { Card } from "antd";
import ExpectedPayrollPie from "./expectedPayrollPie";



const ExpectedPay = () => (
    <PieCard
    pie={ <ExpectedPayrollPie />} 
    title="expectedPayroll"
    statistics={234}
/>);


export default ExpectedPay;
