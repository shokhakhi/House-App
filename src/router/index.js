import { createRouter, createWebHistory } from "vue-router";
import Houses from "../views/Houses.vue";
import About from "../views/About.vue";
import HouseDetails from "../views/HouseDetails.vue";
import EditListing from "../views/EditListing.vue";
import AddHouse from "../views/AddHouse";

const routes = [
  {
    path: "/",
    name: "Houses",
    component: Houses
  },
  {
    path: "/house/:id",
    name: "HouseDetails",
    component: HouseDetails,
    props: true
  },
  {
    path: "/create",
    name: "CreateListing",
    component: AddHouse
  },
  {
    path: "/edit/:id",
    name: "EditListing",
    component: EditListing,
    props: true
  },
  {
    path: "/add-house",
    name: "AddHouse",
    component: AddHouse
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
