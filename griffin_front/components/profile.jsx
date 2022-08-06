import styles from "../styles/navbar.module.css";
import { Descriptions } from "antd";
import "antd/dist/antd.css";

export default function Profile() {
  return (
    <Descriptions title="Info">
      <Descriptions.Item label="Name">Zhou Maomao</Descriptions.Item>
      <Descriptions.Item label="Description">hihihihih</Descriptions.Item>
      <Descriptions.Item label="Wallet">0xasegeegweg</Descriptions.Item>
      <Descriptions.Item label="Email">dkdgk@agekgwe</Descriptions.Item>
    </Descriptions>
  );
}
