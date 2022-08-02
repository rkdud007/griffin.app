import Head from "next/head";
import Image from "next/image";
import MoneyDashboard from "../components/moneyDashboard";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <MoneyDashboard />
    </div>
  );
}
