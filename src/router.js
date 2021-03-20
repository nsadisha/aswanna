import Vue from 'vue';
import Router from 'vue-router';

import HomePage from './screens/HomePage.vue';
import RegisterPage from './screens/RegisterPage.vue';
import SigninPage from './screens/SigninPage.vue';
import AboutPage from './screens/AboutPage.vue';
import AccountPage from './screens/AccountPage.vue';
import DetailsPage from './screens/DetailsPage.vue';
import SellItem from './screens/SellNewItem.vue';
import ErrorPage from './screens/ErrorPage.vue';

Vue.use(Router);

let router = new Router({
    // mode: 'history',
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: HomePage
        },
        {
            path: '/register',
            name: 'RegisterPage',
            component: RegisterPage
        },
        {
            path: '/signin',
            name: 'SigninPage',
            component: SigninPage
        },
        {
            path: '/sell',
            name: 'SellItem',
            component: SellItem
        },
        {
            path: '/account',
            name: 'AccountPage',
            component: AccountPage
        },
        {
            path: '/about',
            name: 'AboutPage',
            component: AboutPage
        },
        {
            path: '/details/:id',
            name: 'DetailsPage',
            component: DetailsPage
        },
        {
            path: '*',
            name: 'ErrorPage',
            component: ErrorPage
        }
    ],
});

export default router;