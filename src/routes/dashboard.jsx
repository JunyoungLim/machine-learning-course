import Started from "views/Started/Started";
import Syllabus from "views/Syllabus/Syllabus";
import Schedule from "views/Schedule/Schedule";
import Main from "views/Main/Main";

const dashboardRoutes = [
  {
    path: "/started",
    name: "Getting Started",
    component: Started
  },
  {
    path: "/schedule",
    name: "Schedule",
    component: Schedule
  },
  {
    path: "/syllabus",
    name: "Syllabus",
    component: Syllabus
  },
  {
    path: "/",
    name: "Main",
    component: Main
  }
];

export default dashboardRoutes;
