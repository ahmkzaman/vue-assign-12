import { createRouter, createWebHistory } from "vue-router";
import Product from "../components/Product.vue";
import Details from "../components/Details.vue";

const routes = [
    {path: "/", component: Product},
    {path: "/product/:id", component: Details, name: "product"},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;