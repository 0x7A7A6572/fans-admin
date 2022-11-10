//配置路由页面
const routes = [
    {
        path: '/',
        component: () => import('../pages/index/index.vue')
    },
    {
        name: 'index',
        path: '/index',
        component: () => import('../pages/index/index.vue')
    },
    // {
    //     name: 'channel',
    //     path: '/channel',
    //     component: () => import('../pages/channel/channel.vue')
    // },
    {
        name: 'overview',
        path: '/channel/overview',
        component: () => import('../pages/channel/overview/overview.vue')
    },
    {
        name: 'optimization',
        path: '/channel/optimization',
        component: () => import('../pages/channel/optimization/optimization.vue')
    },
    {
        name: 'assets',
        path: '/assets/assets',
        component: () => import('../pages/assets/assets.vue')
    },

];

export default routes
