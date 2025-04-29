import Vue from "vue";
import Router from "vue-router";
import Login from "@componentes/Login.vue"

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {path: "/login", component: Login}
    ]
})