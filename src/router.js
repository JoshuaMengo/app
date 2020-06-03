import Vue from 'vue'
import VueRouter from 'vue-router'//使用路由时，要引入vue-router
// import detail from '@/components/HelloWorld.vue'
// import list from '@/components/list.vue'

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter)

export default new VueRouter({
    routes: [
    //     {
    //     path: '/',
    //     component: (resolve) => require(['@/components/HelloWorld.vue'], resolve),
    // },
    
    // {
    //     path: '/list',
    //     component: (resolve) => require(['@/components/list.vue'], resolve),
    // },
    {
        path: '/',
        name:'index',
        component: () => import('@/page/ins.vue'),
    },
    {
        path: '/list',
        name:'list',
        component: () => import('@/components/list.vue'),
    },
    {
        path: '/detail',
        name:'detail',
        component: () => import('@/components/detail.vue'),
    }
]
})