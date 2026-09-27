import { Menu, Avatar } from "antd";
import {
  AppstoreOutlined,
  UserOutlined,
  SettingOutlined,
  BarChartOutlined,
  FileTextOutlined,
  TeamOutlined,
  BookOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

import "./Sidebar.css";

const mainItems = [
  {
    key: "dashboard",
    icon: <AppstoreOutlined />,
    label: "Dashboard",
  },
  {
    key: "analytics",
    icon: <BarChartOutlined />,
    label: "Analytics",
  },
];

const managementItems = [
  {
    key: "students",
    icon: <TeamOutlined />,
    label: "Students",
  },
  {
    key: "teachers",
    icon: <UserOutlined />,
    label: "Teachers",
  },
  {
    key: "academics",
    icon: <BookOutlined />,
    label: "Academics",
    children: [
      {
        key: "subjects",
        label: "Subjects",
      },
      {
        key: "classes",
        label: "Classes",
      },
      {
        key: "attendance",
        label: "Attendance",
      },
    ],
  },
  {
    key: "calendar",
    icon: <CalendarOutlined />,
    label: "Calendar",
  },
];

const systemItems = [
  {
    key: "reports",
    icon: <FileTextOutlined />,
    label: "Reports",
  },
  {
    key: "settings",
    icon: <SettingOutlined />,
    label: "Settings",
  },
];

const Sidebar = ({ collapsed, onMenuClick }) => {
  return (
    <div className="sidebar-container">
      <div className="logo-section">
        <Avatar size={46} className="logo-avatar">
          SM
        </Avatar>

        {!collapsed && (
          <div>
            <h2>School MS</h2>
            <span>School Management System</span>
          </div>
        )}
      </div>

      <p className="menu-heading">MAIN</p>

      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["dashboard"]}
        items={mainItems}
        className="sidebar-menu"
        onClick={() => onMenuClick?.()}
      />

      <p className="menu-heading">MANAGEMENT</p>

      <Menu
        theme="dark"
        mode="inline"
        items={managementItems}
        className="sidebar-menu"
        onClick={() => onMenuClick?.()}
      />

      <p className="menu-heading">SYSTEM</p>

      <Menu
        theme="dark"
        mode="inline"
        items={systemItems}
        className="sidebar-menu"
        onClick={() => onMenuClick?.()}
      />

      {!collapsed && (
        <div className="sidebar-footer">
          <Avatar size={48} className="footer-avatar">
            A
          </Avatar>

          <div className="footer-info">
            <p>Admin User</p>

            <div className="status">
              <span className="online-dot"></span>
              Super Admin
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
