import React from "react";
import "antd/dist/antd.css";
import PieCard from './pieCard.jsx';
import { Card } from "antd";
import ExpectedPayrollPie from "./expectedPayrollPie";
import { asDataPairs } from './calculate';

const ExpectedPay = ({statistics, byToken}) => (
    <PieCard
    pie={ <ExpectedPayrollPie statistics={statistics} data={asDataPairs(byToken)} />} 
    title="expectedPayroll"
    statistics={234}
/>);


export default ExpectedPay;
