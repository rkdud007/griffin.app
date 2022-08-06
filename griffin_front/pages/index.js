import DemoColumn from "../components/totalpayroll";
import Employee from "../components/employee";
import MoneyDashboard from "../components/moneyDashboard";
import Profile from "../components/profile";

import React, { useState } from "react";
import "antd/dist/antd.css";

import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";

const { Header, Content, Sider } = Layout;

const App = () => {
  const [switchMode, setSwitchMode] = useState(1);
  const items2 = [
    {
      key: `sub1`,
      icon: React.createElement(LaptopOutlined),
      label: `Dashboard`,
      onClick: () => setSwitchMode(1),
    },
    {
      key: `sub2`,
      icon: React.createElement(UserOutlined),
      label: `Employee`,
      onClick: () => setSwitchMode(2),
    },
  ];
  return (
    <Layout>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{
              height: "100%",
              borderRight: 0,
            }}
            items={items2}
          />
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {switchMode === 1 ? (
              <>
                <Profile />
                <MoneyDashboard />
              </>
            ) : (
              <Employee />
            )}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
