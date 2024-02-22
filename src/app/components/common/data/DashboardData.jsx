// Import Images
import product1 from "../../../../assets/Images/products/img-1.png";
import product2 from "../../../../assets/Images/products/img-2.png";
import product3 from "../../../../assets/Images/products/img-3.png";
import product4 from "../../../../assets/Images/products/img-4.png";
import product5 from "../../../../assets/Images/products/img-5.png";

import company1 from "../../../../assets/Images/companies/img-1.png";
import company2 from "../../../../assets/Images/companies/img-2.png";
import company3 from "../../../../assets/Images/companies/img-3.png";
import company5 from "../../../../assets/Images/companies/img-5.png";
import company8 from "../../../../assets/Images/companies/img-8.png";

import avatar1 from "../../../../assets/Images/users/avatar-1.jpg";
import avatar2 from "../../../../assets/Images/users/avatar-2.jpg";
import avatar3 from "../../../../assets/Images/users/avatar-3.jpg";
import avatar4 from "../../../../assets/Images/users/avatar-4.jpg";
import avatar6 from "../../../../assets/Images/users/avatar-6.jpg";

const ecomWidgets = [
  {
    id: 1,
    cardColor: "primary",
    label: "Overtime Cost",
    badge: "ri-arrow-right-up-line",
    badgeClass: "success",
    percentage: "+16.24",
    counter: "559.25",
    link: "View net earnings",
    bgcolor: "success",
    icon: "bx bx-dollar-circle",
    decimals: 2,
    prefix: "$",
    suffix: "k",
  },
  {
    id: 2,
    cardColor: "secondary",
    label: "Average Cost",
    badge: "ri-arrow-right-down-line",
    badgeClass: "danger",
    percentage: "-3.57",
    counter: "36894",
    link: "View all orders",
    bgcolor: "info",
    icon: "bx bx-shopping-bag",
    decimals: 0,
    prefix: "",
    separator: ",",
    suffix: "",
  },
  {
    id: 3,
    cardColor: "success",
    label: "Average Days",
    badge: "ri-arrow-right-up-line",
    badgeClass: "success",
    percentage: "+29.08",
    counter: "183.35",
    link: "See details",
    bgcolor: "warning",
    icon: "bx bx-user-circle",
    decimals: 2,
    prefix: "",
    suffix: "M",
  },
];

const projectsWidgets = [
  {
      id: 1,
      feaIcon: "briefcase",
      feaIconClass: "primary",
      label: "Overtime Cost",
      badgeClass: "danger",
      icon: "ri-arrow-down-s-line",
      percentage: "5.02 %",
      caption: "Overtime cost this month",
      subCounter: [{ id: 1, counter: "825", suffix: "" }]
  },
  {
      id: 2,
      feaIcon: "award",
      feaIconClass: "warning",
      label: "Average Cost",
      badgeClass: "success",
      icon: "ri-arrow-up-s-line",
      percentage: "3.58 %",
      caption: "Average Overtime cost this month",
      subCounter: [{ id: 1, counter: "7522", suffix: "", separator: "," }]
  },
  {
      id: 3,
      feaIcon: "clock",
      feaIconClass: "info",
      label: "Average Days",
      badgeClass: "danger",
      icon: "ri-arrow-down-s-line",
      percentage: "10.35 %",
      caption: "Average days this month",
      subCounter: [{ id: 1, counter: "168", suffix: "h" }, { id: 1, counter: "40", suffix: "m" }]
  }
];

export {
  ecomWidgets,
  projectsWidgets
};
