import React, { useState } from "react";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const AdminDashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const routeKeyMap = {
    "/admin/locations": "2",
    "/admin/events": "1",
  };
  const location = useLocation();
  const selectedKey = routeKeyMap[location.pathname];
  const navigate = useNavigate();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100%" }}>
      {" "}
      {/* Full screen height */}
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="custom-sidebar"
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedKey]}
          onClick={({ key }) => {
            const route = Object.entries(routeKeyMap).find(
              ([path, k]) => k === key
            )?.[0];
            if (route) navigate(route);
          }}
          rootClassName="custom-sidebar"
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Events",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "Locations",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "nav 3",
            },
          ]}
        />
      </Sider>
      <Layout style={{ width: "100%" }}>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;
