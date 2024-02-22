import { toast } from "react-toastify";
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
  position: toast.POSITION.TOP_CENTER,
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

const toastErrorOptions = {
  position: toast.POSITION.TOP_CENTER,
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
  position: toast.POSITION.TOP_CENTER,
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
  position: toast.POSITION.TOP_CENTER,
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

