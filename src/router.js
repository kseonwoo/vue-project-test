import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import About from "./views/About";

Vue.use(VueRouter);

let routes = [
    {path: "/", component: Home},
    {path: "/About", component: About}
]

export const router = new VueRouter({
    base: 'public',
    mode: 'history',
    routes
})
