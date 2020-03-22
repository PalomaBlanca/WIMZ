import AboutUs from '@/components/templates/AboutUs';
import GiveInfo from '@/components/templates/GiveInfo';
import GetInfo from '@/components/templates/GetInfo';
import StartPage from '@/components/templates/StartPage'

const routes = [
    {
        path: '/',
        name: 'start',
        component: StartPage,
    },
    {
        path: '/info',
        name: 'give-info',
        component: GiveInfo,
    },
    {
        path: '/train',
        name: 'get-info',
        component: GetInfo,
    },
    {
        path: '/about-us',
        name: 'about-us',
        component: AboutUs,
    },
];

export default routes;