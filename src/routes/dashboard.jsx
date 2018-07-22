import Started from "views/Started/Started";
import Syllabus from "views/Syllabus/Syllabus";
import Schedule from "views/Schedule/Schedule";
import Main from "views/Main/Main";

const dashboardRoutes = [
  {
    path: "/started",
    name: "Getting Started",
    icon: "pe-7s-user",
    component: Started
  },
  {
    path: "/schedule",
    name: "Schedule",
    icon: "pe-7s-note2",
    component: Schedule
  },
  {
    path: "/syllabus",
    name: "Syllabus",
    icon: "pe-7s-note2",
    component: Syllabus
  },
  {
    path: "/",
    name: "Main",
    icon: "pe-7s-science",
    component: Main
  }
];

export default dashboardRoutes;
