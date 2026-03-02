import { Tabs } from "antd";
import {
  UserOutlined,
  SafetyOutlined,
  KeyOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { Users } from "../users/Users";
import { Roles } from "../rbac/Roles";
import { Privileges } from "../rbac/Privileges";
import { AccessControl } from "../rbac/AccessControl";

export const ManageAccount = () => {
  const tabItems = [
    {
      key: "users",
      label: (
        <span style={{ fontSize: "14px", fontWeight: 500 }}>
          <UserOutlined style={{ marginRight: "8px" }} />
          Users
        </span>
      ),
      children: <Users />,
    },
    {
      key: "roles",
      label: (
        <span style={{ fontSize: "14px", fontWeight: 500 }}>
          <SafetyOutlined style={{ marginRight: "8px" }} />
          Roles
        </span>
      ),
      children: <Roles />,
    },
    {
      key: "privileges",
      label: (
        <span style={{ fontSize: "14px", fontWeight: 500 }}>
          <KeyOutlined style={{ marginRight: "8px" }} />
          Privileges
        </span>
      ),
      children: <Privileges />,
    },
    {
      key: "access",
      label: (
        <span style={{ fontSize: "14px", fontWeight: 500 }}>
          <LockOutlined style={{ marginRight: "8px" }} />
          Access Control
        </span>
      ),
      children: <AccessControl />,
    },
  ];

  return (
    <div>
      <Tabs
        type="card"
        defaultActiveKey="users"
        items={tabItems}
        style={{ fontSize: "14px" }}
      />
    </div>
  );
};
