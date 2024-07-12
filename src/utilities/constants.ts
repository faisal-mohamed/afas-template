import { ToastPosition, toast } from "react-toastify";
import {
  cmdbDashIcon,
  executiveDashIcon,
  iamDashIcon,
  regulatoryDashIcon,
} from "../assets/Images";

export type TableInfo = {
  title: string;
  accessor: string;
  type?: string;
};

const toastSuccessOptions = {
  className: "toast_success",
  position: "top_center" as ToastPosition,
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

const toastErrorOptions = {
  position: "top_center" as ToastPosition,
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  progressStyle: {
    backgroundColor: "red",
  },
};

const toastWarningOption = {
  position: "top_center" as ToastPosition,
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  progressStyle: {
    backgroundColor: "#F1C411",
  },
};

const toastInfoOption = {
  position: "top_center" as ToastPosition,
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  progressStyle: {
    backgroundColor: "#3698DB",
  },
};

const Success = (message: string) => {
  toast.success(message, toastSuccessOptions);
};

const Failure = (message: string) => {
  toast.error(message, toastErrorOptions);
};

const Info = (message: string) => {
  toast.info(message, toastInfoOption);
};

const Warning = (message: string) => {
  toast.warn(message, toastWarningOption);
};

export { Success, Failure, Info, Warning };

export const DashboardTabs = [
  {
    icon: executiveDashIcon,
    link: "/executive-dashboard",
    name: "HR Insights & Reporting",
  },
];

