import { createRouter, createWebHistory } from "vue-router";
import guards from "./guards.js";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "root",
            component: () => import("@/layouts/admin.vue"),
            children: [
                {
                    path: "",
                    name: "home",
                    component: () => import("@/views/home.vue"),
                },
            ],
        },
    ],
});

Object.keys(guards.before).map((el) => router.beforeEach(guards.before[el]));
Object.keys(guards.after).map((el) => router.afterEach(guards.after[el]));

export default router;
