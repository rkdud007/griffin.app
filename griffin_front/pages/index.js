import Head from "next/head";
import Image from "next/image";
import Bridge from "../components/bridge";
import MoneyDashboard from "../components/moneyDashboard";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <MoneyDashboard />
      <Bridge />
    </div>
  );
}
