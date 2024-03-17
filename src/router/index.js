import { createWebHistory, createRouter } from 'vue-router'

import MainPage from '@/views/MainPage.vue'
import CorpInfo from '@/views/CorpInfo/CorpInfo.vue'
import ProdInfo from '@/views/ProdInfo/ProdInfo.vue'
import CustomService from '@/views/CustomService/CustomService.vue'

const routes = [
    { // Index
        path: '/',
        name: 'Index',
        component: MainPage
    },
    { // Corporation Info
        path: '/info',
        name: 'About Us',
        component: CorpInfo,
        meta: {
            heroImage: 'sub-page-temp-01.jpg',
            heroTitle: 'Alien Made Tools',
            heroText: 'We Are Making Tools That Out Of This World'
        },
        children: [
            { // About Us
                path: '',
                name: 'Alien Made Tools',
                component: () => import(/* webpackChunkName: 'corporation-info' */ '@/views/CorpInfo/CorpInfoHome.vue')
            }
        ]
    },
    { // Product Info
        path: '/products',
        name: 'Products',
        component: ProdInfo,
        meta: {
            heroImage: 'sub-page-temp-02.jpg',
            heroTitle: 'Products',
            heroText: 'Our Best Products'
        },
        children: [
            { // Product List
                path: '',
                name: 'List',
                component: () => import(/* webpackChunkName: 'product-info' */ '@/views/ProdInfo/ProdInfoHome.vue')
            },
            { // Product Details
                path: 'details/:itemID',
                name: 'Product Detail',
                component: () => import(/* webpackChunkName: 'product-info' */ '@/views/ProdInfo/ProdInfoDetails.vue')
            }
        ]
    },
    { // Customer Service
        path: '/services',
        name: 'Services',
        component: CustomService,
        meta: {
            heroImage: 'sub-page-temp-03.jpg',
            heroTitle: 'Customer Support',
            heroText: 'We Are Here For You'
        },
        children: [
            { // Service Home
                path: '',
                name: 'Services',
                component: () => import(/* webpackChunkName: 'customer-service' */ '@/views/CustomService/CustomServiceHome.vue')
            },
            { // Service Notice
                path: 'notice',
                name: 'Notice',
                component: () => import(/* webpackChunkName: 'customer-service' */ '@/views/CustomService/CustomServiceNotice.vue')
            },
            { // Service Ask
                path: 'ask',
                name: 'Q&A',
                component: () => import(/* webpackChunkName: 'customer-service' */ '@/views/CustomService/CustomServiceAsk.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    }
})

export default router