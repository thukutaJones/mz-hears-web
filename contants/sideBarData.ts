import { IoIosPeople } from "react-icons/io";
import { IoMedical } from "react-icons/io5";
import { FaSuitcaseMedical } from "react-icons/fa6";
import { TiTickOutline } from "react-icons/ti";
import { RiHome5Fill } from "react-icons/ri";

export const operatorDashboardSideBarData = [
  {
    title: "Home",
    icon: RiHome5Fill,
    route: "/operator",
  },
  {
    title: "Staff",
    icon: IoMedical,
    route: "/operator/staff",
  },
  {
    title: "Staff",
    icon: IoIosPeople,
    route: "/operator/emergencies",
  },
  {
    title: "Services",
    icon: FaSuitcaseMedical,
    route: "/operator/services",
  },
];
