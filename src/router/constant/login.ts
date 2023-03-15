import type {RouteRecordRaw} from "vue-router";

const Login: Array<RouteRecordRaw> = [
    {
        path: '/Login',
        name: 'Login',
        component: () => import("@/views/LoginView.vue")
    },
]

export default Login;
