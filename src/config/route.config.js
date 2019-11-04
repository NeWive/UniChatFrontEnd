import Vue from 'vue';
import VueRouter from 'vue-router';
// import IndexPanel from '../components/IndexPanel';
// import MainPanel from '../components/MainPanel';
// import LogInPanel from '../components/LogInPanel';
// import RegisterPanel from '../components/RegisterPanel';
// import SessionPanel from '../components/SessionPanel';
// import FriendsPanel from '../components/FriendsPanel';

const IndexPanel = () => import('../components/IndexPanel');
const MainPanel = () => import('../components/MainPanel');
const LogInPanel = () => import('../components/LogInPanel');
const RegisterPanel = () => import('../components/RegisterPanel');
const SessionPanel = () => import('../components/SessionPanel');
const FriendsPanel = () => import('../components/FriendsPanel');

Vue.use(VueRouter);

const routersConfig = [
    {
        path: '/main',
        component: MainPanel,
        redirect: {
            name: 'login'
        },
        children: [
            {
                path: 'login',
                name: 'login',
                component: LogInPanel
            },
            {
                path: 'register',
                name: 'register',
                component: RegisterPanel
            }
        ]
    },
    {
        path: '/index',
        component: IndexPanel,
        redirect: {
            name: 'session'
        },
        children: [
            {
                path: 'session/',
                name: 'session',
                component: SessionPanel
            },
            {
                path: 'friends/',
                name: 'friends',
                component: FriendsPanel
            }
        ]
    },
    {
        path: '/',
        redirect: {
            name: 'login'
        }
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routersConfig
});

export default router;
