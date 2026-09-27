import { useState } from "react";
import { Layout, Button, Drawer, Grid, Input, Avatar, Badge } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MenuOutlined,
  BellOutlined,
  SearchOutlined,
} from "@ant-design/icons";

import Sidebar from "./components/Sidebar";
import "./App.css";

const { Header, Sider, Content } = Layout;
const { useBreakpoint } = Grid;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const screens = useBreakpoint();
  const isMobile = !screens.md;

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {!isMobile && (
        <Sider
          width={260}
          collapsedWidth={80}
          collapsible
          collapsed={collapsed}
          trigger={null}
          className="app-sider"
        >
          <Sidebar collapsed={collapsed} />
        </Sider>
      )}

      {isMobile && (
        <Drawer
          placement="left"
          width={260}
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          bodyStyle={{ padding: 0 }}
        >
          <Sidebar onMenuClick={() => setDrawerOpen(false)} />
        </Drawer>
      )}

      <Layout>
        <Header className="app-header">
          <Button
            type="text"
            className="menu-btn"
            icon={
              isMobile ? (
                <MenuOutlined />
              ) : collapsed ? (
                <MenuUnfoldOutlined />
              ) : (
                <MenuFoldOutlined />
              )
            }
            onClick={() =>
              isMobile ? setDrawerOpen(true) : setCollapsed(!collapsed)
            }
          />

          <Input
            className="header-search"
            prefix={<SearchOutlined />}
            placeholder="Search students, teachers..."
          />

          <div className="header-right">
            <Badge count={3} size="small">
              <BellOutlined className="notification-icon" />
            </Badge>

            <Avatar size={38}>A</Avatar>
          </div>
        </Header>

        <Content className="app-content">
          <div className="content-card">
            <h1>Dashboard</h1>
            <p>Welcome to the School Management Dashboard.</p>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
