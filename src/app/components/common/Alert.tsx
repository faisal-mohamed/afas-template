import { UncontrolledAlert } from "reactstrap";
import { capitalize } from "lodash";

interface AlertProps {
  type: string;
  message: string;
  className?: string;
}

const Alert = ({ type, message, className }: AlertProps) => {
  const color = type === "error" ? "danger" : type;

  const alterIcon = () => {
    switch (type) {
      case "error":
        return "ri-information-line";
      case "success":
        return "ri-check-double-line";
      case "warning":
        return "ri-alert-line";
      default:
        return "ri-airplay-line";
    }
  };
  return (
    <UncontrolledAlert
      color={color}
      data-aos="fade-left"
      data-aos-offset="500"
      data-aos-duration="500"
      className={`alert-border-left mb-xl-0 ${className} `}
      style={{ width: "35%" }}
    >
      <i className={alterIcon() + " me-3 align-middle fs-18"}></i>
      <strong>{capitalize(type)}</strong> - {message}
    </UncontrolledAlert>
  );
};

export default Alert;
