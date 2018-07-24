import Started from "views/Started/Started";
import Syllabus from "views/Syllabus/Syllabus";
import Schedule from "views/Schedule/Schedule";
import Main from "views/Main/Main";
import Tutorial from "views/Tutorial/Tutorial";

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
    path: "/tutorial",
    name: "Tutorial",
    component: Tutorial
  },
  {
    path: "/",
    name: "Main",
    component: Main
  }
];

export default dashboardRoutes;
