import { useState } from "react";
import styles from "../styles/dashboard.module.css";
import BalanceAnalytics from "./balanceAnalytics";
import CommitPayroll from "./commitpayroll";
import ExpectedPay from "./expectedpayroll";
import RecentEmployee from "./recentEmployee";
import RecentPayrollActivity from "./recentpayrollactivity";
import RigisterPayroll from "./registerpayroll";
import TotalBalance from "./totalbalance";
import TotalPayroll from "./totalpayroll";

export default function MoneyDashboard() {
  const nightfall_balance = 32;
  const layer1_balance = 21;
  const [nightfall, setNightfall] = useState(true);
  const L1connect = true;
  return (
    <div className={styles.dashboardBox}>
      <div className={styles.dashboardFirst}>
        <TotalBalance />
        <ExpectedPay />
        <RigisterPayroll />
        <CommitPayroll />
      </div>
      <div className={styles.dashboardSecond}>
        <TotalPayroll />
        <RecentEmployee />
      </div>
      <div className={styles.dashboardThird}>
        <BalanceAnalytics />
        <RecentPayrollActivity />
      </div>
    </div>
  );
}
