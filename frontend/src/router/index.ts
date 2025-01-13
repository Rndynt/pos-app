import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import MainLayout from '@/layouts/MainLayout.vue';
import TestPageOne from '@/pages/TestPageOne.vue';
import TestPageTwo from '@/pages/TestPageTwo.vue';
// import LoginView from '@/pages/Auth/LoginView.vue';
// import DashboardView from '@/pages/Dashboard/DashboardView.vue';
// import POSView from '@/pages/POS/POSView.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: MainLayout,
        children: [
            { path: '', component: TestPageOne },  // Default halaman
            { path: 'test-one', component: TestPageOne },
            { path: 'test-two', component: TestPageTwo },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
