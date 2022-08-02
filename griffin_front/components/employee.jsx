import { useState } from "react";
import styles from "../styles/employee.module.css";

export default function Employee() {
  return (
    <div className={styles.employeeWrapper}>
      <div>
        <div>
          <p>Name</p>
          <p>Email</p>
          <p>Role</p>
          <p>Payroll</p>
        </div>
      </div>
    </div>
  );
}
