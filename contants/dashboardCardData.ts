import { IoIosPeople } from "react-icons/io";
import { TbMedicalCross } from "react-icons/tb";
import { MdOutlineMedicalServices } from "react-icons/md";
import { TiTickOutline } from "react-icons/ti";
import { FaUserTie } from "react-icons/fa";
import { FaHospital } from "react-icons/fa6";

export const dashboardCardData = [
  {
    title: "Emergencies",
    icon: TbMedicalCross,
    iconColor: "text-red-600",
    iconBg: "bg-red-100",
  },
  {
    title: "Staff",
    icon: IoIosPeople,
    iconColor: "text-purple-600",
    iconBg: "bg-purple-100",
  },
  {
    title: "Services",
    icon: MdOutlineMedicalServices,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
  },
  {
    title: "Completed",
    icon: TiTickOutline,
    iconColor: "text-green-600",
    iconBg: "bg-green-100",
  },
];

export const responderDashboadData = [
  {
    title: "Emergencies",
    icon: TbMedicalCross,
    iconColor: "text-red-600",
    iconBg: "bg-red-100",
  },
  {
    title: "Completed",
    icon: TiTickOutline,
    iconColor: "text-green-600",
    iconBg: "bg-green-100",
  },
];
export const adminDashboardCardData = [
  {
    title: "Operators",
    icon: FaUserTie,
    iconBg: "bg-primary",
    textColor: "text-primary",
    borderColor: "border-primary",
    route: "/admin/operators",
  },
  {
    title: "Users",
    icon: IoIosPeople,
    iconBg: "bg-secondary",
    textColor: "text-secondary",
    borderColor: "border-secondary",
    route: "/admin/users",
  },
  {
    title: "Facilities",
    icon: FaHospital,
    iconBg: "bg-green-500",
    textColor: "text-green-500",
    borderColor: "border-green-500",
    route: "/admin/facilities",
  },
  {
    title: "Emergencies",
    icon: TbMedicalCross,
    iconBg: "bg-purple-500",
    textColor: "text-purple-500",
    borderColor: "border-purple-500",
    route: "/admin/emergencies",
  },
];
