import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage.vue";
import AdminDashboard from "../views/AdminDashboard.vue";
import InterviewerDashboard from "../views/InterviewerDashboard.vue";
import CandidateDashboard from "../views/CandidateDashboard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/admin-dashboard",
    name: "AdminDashboard",
    component: AdminDashboard,
  },
  {
    path: "/interviewer-dashboard",
    name: "InterviewerDashboard",
    component: InterviewerDashboard,
  },
  {
    path: "/candidate-dashboard",
    name: "CandidateDashboard",
    component: CandidateDashboard,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
