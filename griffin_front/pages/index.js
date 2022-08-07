import DemoColumn from "../components/totalpayroll";
import Nf3 from '../../../nightfall_3/cli/lib/nf3.mjs';
import Employee from "../components/employee";
import MoneyDashboard from "../components/moneyDashboard";
import Profile from "../components/profile";
import { useRouter } from "next/router";
import React, { useState } from "react";
import "antd/dist/antd.css";

import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import Navbar from "../components/navbar";

const nf3 = new Nf3('0x4775af73d6dc84a0ae76f8726bda4b9ecf187c377229cb39e1afa7a18236a69e', {
  clientApiUrl: "http://localhost:8080",
  optimistApiUrl: "http://localhost:8081",
  optimistWsUrl: "ws://localhost:8082",
  web3WsUrl: "ws://localhost:8546",
});

const { Header, Content, Sider } = Layout;

const App = async() => {
  const router = useRouter();
  const { pathname, query } = router;
  const { employerId, tab } = query;
  console.log("query", query, pathname);

  await nf3.init('trip differ bamboo bundle bonus luxury strike mad merry muffin nose auction');
  // await nf3.init(generateMnemonic());
  console.log(nf3.zkpKeys);
  const items2 = [
    {
      key: `sub1`,
      icon: React.createElement(LaptopOutlined),
      label: `Dashboard`,
      onClick: () =>
        router.push({
          pathname: "/",
          query: { employerId: employerId, tab: "Dashboard" },
        }),
    },
    {
      key: `sub2`,
      icon: React.createElement(UserOutlined),
      label: `Employee`,
      onClick: () =>
        router.push({
          pathname: "/",
          query: { employerId: employerId, tab: "Employee" },
        }),
    },
  ];
  return (
    <>
      <Navbar />
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
              {tab === "Dashboard" ? (
                <>
                  <Profile />
                  <MoneyDashboard />
                </>
              ) : tab === "Employee" ? (
                <Employee />
              ) : (
                <p>nothing to show</p>
              )}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

export default App;
