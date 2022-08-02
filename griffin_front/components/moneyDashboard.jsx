import { useState } from "react";
import styles from "../styles/dashboard.module.css";

export default function MoneyDashboard() {
  const nightfall_balance = 32;
  const layer1_balance = 21;
  const [nightfall, setNightfall] = useState(true);
  return (
    <div className={styles.dashboardBox}>
      <p>Choose Network </p>
      <ul>
        {nightfall ? (
          <li className={styles.selected} onClick={() => setNightfall(true)}>
            <p>L2</p>
          </li>
        ) : (
          <li onClick={() => setNightfall(true)}>
            <p>L2</p>
          </li>
        )}

        {nightfall ? (
          <li onClick={() => setNightfall(false)}>
            <p>L1</p>
          </li>
        ) : (
          <li className={styles.selected} onClick={() => setNightfall(false)}>
            <p>L1</p>
          </li>
        )}
      </ul>
      <div className={styles.dashboard}>
        {nightfall ? (
          <div className={styles.totalBalance}>
            {" "}
            <p>Polygon Nightfall</p>
            <p>${nightfall_balance}</p>
          </div>
        ) : (
          <div className={styles.totalBalance}>
            {" "}
            <p>Layer 1</p>
            <p>${layer1_balance}</p>
          </div>
        )}
        <div className={styles.balanceTable}>
          <p>Balances on {nightfall ? "Nightfall" : "Ethereum"}</p>
          <div>
            <p>Name</p>
            <p>Balance</p>
          </div>
          <div>
            <p>ETH</p>
            <p>$0.0000</p>
          </div>
          <div>
            <p>MATIC</p>
            <p>$0.0000</p>
          </div>
          <div>
            <p>USDC</p>
            <p>$0.0000</p>
          </div>
        </div>
      </div>
    </div>
  );
}
