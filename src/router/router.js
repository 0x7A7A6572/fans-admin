const routes = [
    /*{
        name: 'index',
        path: '/index',
        component: () => import('../pages/index')
    },*/
    {
        name: 'channel',
        path: '/channel',
        component: () => import('../pages/channel/channel.vue')
    },
        {
        name: 'overview',
        path: '/overview',
        component: () => import('../pages/channel/overview/overview.vue')
    },
    
    
];

export default routes
