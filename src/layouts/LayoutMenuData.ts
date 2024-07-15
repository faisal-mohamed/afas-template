import {
  DashboardIcon,
  FindingsIcon,
  iamDashIcon,
  EmployeesIcon,
  regulatoryDashIcon,
  RegulationIcon,
} from "../assets/Images";
export type MenuItems = {
  label: string;
  icon: string;
  path: string;
  childNavs?: SubMenuItems[];
};

type SubMenuItems = {
  label: string;
  path: string;
  childNavs?: SubMenuItems[];
};

// export const menuItems: MenuItems[] = [
//   {
//     label: "Executive Dashboard",
//     icon: DashboardIcon,
//     path: "/executive-dashboard",
//   },
//   {
//     label: "Management Dashboard",
//     icon: FindingsIcon,
//     path: "/executive-dashboard",
//   },
//   {
//     label: "Department Dashboard",
//     icon: iamDashIcon,
//     path: "/executive-dashboard",
//   },
//   {
//     label: "Employee Dashboard",
//     icon: EmployeesIcon,
//     path: "/executive-dashboard",
//   },
//   {
//     label: "Hr Advisor Dashboard",
//     icon: RegulationIcon,
//     path: "/executive-dashboard",
//   },
//   {
//     label: "Reports",
//     icon: regulatoryDashIcon,
//     path: "/reports",
//     childNavs: [
//       {
//         label: "Test-1",
//         path: "/reports",
//       }, 
//       {
//         label: "Test-2",
//         path: "/reports",
//       }
//     ]
//   },
// ];


export const menuItems: MenuItems[] = [
  {
    label: "Dashboard",
    icon: DashboardIcon,
    path: "/dashboard",
  },
  {
    label: "Member Journey",
    icon: FindingsIcon,
    path: "/member-journey",
  },
  {
    label: "Child Portal",
    icon: iamDashIcon,
    path: "/child-portal",
  },
  {
    label: "Reports",
    icon: EmployeesIcon,
    path: "/reports",
  },
];