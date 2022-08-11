import React from "react";
import "antd/dist/antd.css";
import { Card } from "antd";
import PieCard from "./pieCard.jsx";
import TotalBalancePie from "./totalBalancePie";
import styles from "../styles/dashboard.module.css";

const TotalBalance = () => (
  <div className={styles.cardbox}>
    <PieCard pie={<TotalBalancePie />} title="TOTAL" statistics={234} />
  </div>
);

export default TotalBalance;
