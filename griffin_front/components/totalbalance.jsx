import React from "react";
import "antd/dist/antd.css";
import { Card } from "antd";
import PieCard from './pieCard.jsx';
import TotalBalancePie from "./totalBalancePie";

const TotalBalance = () => (
  <PieCard
    pie={ <TotalBalancePie />} 
    title="total"
    statistics={234}
  />)

export default TotalBalance;
