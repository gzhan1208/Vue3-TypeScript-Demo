import type {RouteRecordRaw} from "vue-router";
import Layout from '@/layout/index.vue'

const Statistic: Array<RouteRecordRaw> = [
    {
        path: '/statistic',
        name: 'Statistic',
        component: Layout,
        redirect: 'noredirect',
        children: [
            {
                path: '/index',
                name: 'Statistic',
                component: () => import("@/views/statistic/index.vue"),
                meta: {
                    title: '',
                    noCache: true
                }
            }
        ],
    }
]

export default Statistic;
