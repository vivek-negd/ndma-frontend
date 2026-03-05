import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  SettingOutlined,
  FileTextOutlined,
  GlobalOutlined,
  TeamOutlined,
  FileOutlined,
  UploadOutlined,
  UsergroupAddOutlined,
  ScheduleOutlined,
  ReadOutlined,
  PlayCircleOutlined,
  SolutionOutlined,
  FileProtectOutlined,
  DeploymentUnitOutlined,
  WalletOutlined,
  PhoneOutlined,
  BarChartOutlined,
  ApartmentOutlined,
  FieldTimeOutlined,
  CheckCircleOutlined,
  HomeOutlined,
  EnvironmentOutlined,
  SafetyOutlined,
  DollarCircleOutlined,
  BankOutlined,
  MoneyCollectOutlined,
  ShoppingCartOutlined,
  TruckOutlined,
  SafetyCertificateOutlined,
  FileDoneOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AuthService } from "../../../services";
import { ROLE_MENU_KEYS, UserRole } from "../../../utils/rbac";

const { Sider } = Layout;

// const SidebarHeader = () => (
//   <div className="sidebar-header">
//     <div className="sidebar-header__brand">
//       <img
//         src="/core-admin-logo.svg"
//         alt="Core Admin"
//         className="sidebar-header__logo"
//       />
//       <div className="sidebar-header__title-wrap">
//         <span className="sidebar-header__title">Core Admin</span>
//         <span className="sidebar-header__subtitle">Navigation</span>
//       </div>
//     </div>
//   </div>
// );

export const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Inject custom CSS for exact color matching
  useEffect(() => {
    const styleId = 'sidebar-custom-styles';

    // Check if style already exists
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        .app-sidebar .ant-menu-dark {
          background-color: #0a2e5f !important;
        }
        
        .app-sidebar .ant-menu-dark .ant-menu-item,
        .app-sidebar .ant-menu-dark .ant-menu-submenu-title {
          color: #ffffff !important;
          background-color: transparent !important;
        }
        
        .app-sidebar .ant-menu-dark .ant-menu-item:hover,
        .app-sidebar .ant-menu-dark .ant-menu-submenu-title:hover {
          background-color: #1a3d7a !important;
          color: #ffffff !important;
        }
        
        .app-sidebar .ant-menu-dark .ant-menu-item-selected,
        .app-sidebar .ant-menu-dark .ant-menu-submenu-title-selected {
          background-color: #1a3d7a !important;
          color: #ffffff !important;
        }
        
        .app-sidebar .ant-menu-dark .ant-menu-submenu-open > .ant-menu-submenu-title {
          background-color: #1a3d7a !important;
          color: #ffffff !important;
        }
        
        .app-sidebar .ant-menu-dark .ant-menu-submenu .ant-menu-item {
          background-color: #0d3a6d !important;
          color: #e0e0e0 !important;
        }
        
        .app-sidebar .ant-menu-dark .ant-menu-submenu .ant-menu-item:hover {
          background-color: #1a4d8a !important;
          color: #ffffff !important;
        }
        
        .app-sidebar .ant-menu-dark .ant-menu-submenu .ant-menu-item-selected {
          background-color: #1a3d7a !important;
          color: #ffffff !important;
        }
        
        .app-sidebar .ant-menu-item-icon {
          color: #ffffff !important;
        }
        
        .app-sidebar .ant-menu-submenu-arrow {
          color: #ffffff !important;
        }
      `;
      document.head.appendChild(style);
    }

    return () => {
      // Cleanup style on component unmount
      const existingStyle = document.getElementById(styleId);
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, []);

  // Determine selected key based on current path
  const getSelectedKey = () => {
    if (location.pathname.startsWith("/pages")) {
      return "/pages";
    }
    if (location.pathname.startsWith("/content")) {
      return "/content";
    }
    if (location.pathname.startsWith("/seo")) {
      return "/seo";
    }
    if (
      location.pathname.startsWith("/account") ||
      location.pathname.startsWith("/users") ||
      location.pathname.startsWith("/rbac")
    ) {
      return "/account";
    }
    return location.pathname;
  };

  const menuItems = [
    {
      key: "/dashboard",
      icon: <DashboardOutlined />,
      label: "Dashboard",
    },
    {
      key: "/youth-organization-record",
      icon: <ApartmentOutlined />,
      label: "Youth Organization Record",
    },
    {
      key: "/training-workflow",
      icon: <ReadOutlined />,
      label: "Training Workflow",
      children: [
        {
          key: "/training-schedule-records",
          icon: <ScheduleOutlined />,
          label: "Training Schedule",
        },
        {
          key: "/first-day-training-records",
          icon: <PlayCircleOutlined />,
          label: "1st Day Training",
        },
        {
          key: "/fourth-day-training-records",
          icon: <FieldTimeOutlined />,
          label: "4th Day Training",
        },
        {
          key: "/seventh-day-training-records",
          icon: <CheckCircleOutlined />,
          label: "7th Day Training",
        },

      ],
    },

    {
      key: "/volunteer-details",
      icon: <UsergroupAddOutlined />,
      label: "Volunteer Details",
      // children: [
      //   {
      //     key: "/uploaded-volunteers-list",
      //     icon: <FileOutlined />,
      //     label: "Volunteers List",
      //   },
      //   {
      //     key: "/bulk-volunteer-upload",
      //     icon: <UploadOutlined />,
      //     label: "Bulk Volunteer Upload",

      //   },
      // ],
    },
    {
      key: "/master-trainers-detail",
      icon: <SolutionOutlined />,
      label: "Master Trainers Detail",
    },
    {
      key: "/mou",
      icon: <FileProtectOutlined />,
      label: "MoU Details",
      children: [
        {
          key: "/mou/state-mou",
          icon: <BankOutlined />,
          label: "State MoU",
        },
        {
          key: "/mou/insurance-mou",
          icon: <SafetyCertificateOutlined />,
          label: "Insurance MoU",
        },
      ],
    },
    {
      key: "/erk",
      icon: <DeploymentUnitOutlined />,
      label: "ERK Details",
      children: [
        {
          key: "/erk/procurement",
          icon: <ShoppingCartOutlined />,
          label: "Procurement",
        },
        {
          key: "/erk/distribution",
          icon: <TruckOutlined />,
          label: "Distribution",
        },
      ],
    },
    {
      key: "/account",
      icon: <WalletOutlined />,
      label: "Account",
      children: [
        {
          key: "/accounts/bank-details",
          icon: <BankOutlined />,
          label: "Bank Details",
        },
        {
          key: "/accounts/amount-released",
          icon: <MoneyCollectOutlined />,
          label: "Amount Released",
        },
        {
          key: "/accounts/statement-of-expenditure",
          icon: <BarChartOutlined />,
          label: "Statement of Expenditure",
        },
        {
          key: "/accounts/uc-details",
          icon: <FileDoneOutlined />,
          label: "UC Details",
        },
      ],
    },
    {
      key: "/contact",
      icon: <PhoneOutlined />,
      label: "Contact",
      children: [
        {
          key: "/contact/sdma-contact",
          icon: <HomeOutlined />,
          label: "SDMA Office",
        },
        {
          key: "/contact/ddma-contact",
          icon: <EnvironmentOutlined />,
          label: "DDMA",
        },
        {
          key: "/contact/youth-organization-contact",
          icon: <TeamOutlined />,
          label: "Youth Organization",
        },
        {
          key: "/contact/insurance",
          icon: <SafetyOutlined />,
          label: "Insurance",
        },
      ],
    },
    {
      key: "/statistics",
      icon: <BarChartOutlined />,
      label: "Statistics",
      children: [
        {
          key: "/statistics/national-level",
          icon: <GlobalOutlined />,
          label: "National Level",
        },
        {
          key: "/statistics/financial-view",
          icon: <PieChartOutlined />,
          label: "Financial View",
        },

      ],
    },
    // {
    //   key: "/pages",
    //   icon: <FileTextOutlined />,
    //   label: "Manage Pages",
    // },
    {
      key: "/content",
      icon: <FileTextOutlined />,
      label: "Manage Content",
    },
    {
      key: "/banner-section",
      // icon: <BannerSection />,
      label: "Banner Section",
    },
    // {
    //   key: "/seo",
    //   icon: <GlobalOutlined />,
    //   label: "Manage SEO",
    // },
    // {
    //   key: "/settings",
    //   icon: <SettingOutlined />,
    //   label: "Manage Settings",
    // }

  ];

  // Filter menu items based on user role
  const role = AuthService.getRole() as UserRole | null;
  const allowedKeys = role ? ROLE_MENU_KEYS[role] : [];

  const visibleMenuItems = allowedKeys === '*'
    ? menuItems
    : menuItems.filter((item) => allowedKeys.includes(item.key));

  return (
    <Sider
      width={240}
      className="app-sidebar"
      style={{
        backgroundColor: "#0a2e5f",
        borderRight: "1px solid #1a3d7a",
      }}
    >
      {/* <SidebarHeader /> */}
      <Menu
        mode="inline"
        theme="dark"
        selectedKeys={[getSelectedKey()]}
        className="sidebar-menu"
        style={{
          backgroundColor: "#0a2e5f",
          borderRight: 0,
          paddingTop: 8,
          overflow: "auto",
        }}
        items={visibleMenuItems}
        onClick={({ key }) => navigate(key)}
      />
    </Sider>
  );
};
