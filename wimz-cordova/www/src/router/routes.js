import AboutUs from '@/components/templates/AboutUs';
import GiveInfo from '@/components/templates/GiveInfo';
import GetInfo from '@/components/templates/GetInfo';
import StartPage from '@/components/templates/StartPage'
import Imprint from '@/components/templates/Imprint';
import Development from '@/components/templates/Development';
import Privacy from '@/components/templates/Privacy';
import Donate from '@/components/templates/Donate';
import Contact from '@/components/templates/Contact';
import ACStartpage from '@/components/templates/ACStartpage';
import ACGiveInfo from '@/components/templates/ACGiveInfo';
import ACGetInfo from '@/components/templates/ACGetInfo';


const routes = [
    {
        path: '/',
        name: 'start',
        component: StartPage,
    },
    {
        path: '/ACStart',
        name: 'acstart',
        component: ACStartpage,
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
        path: '/share-love',
        name: 'share-love',
        component: ACGiveInfo,
    },
    {
        path: '/get-love',
        name: 'get-love',
        component: ACGetInfo,
    },
    {
        path: '/about-us',
        name: 'about-us',
        component: AboutUs,
    },
    {
        path: '/privacy',
        name: 'privacy',
        component: Privacy,
    },
    {
        path: '/development',
        name: 'development',
        component: Development,
    },
    {
        path: '/imprint',
        name: 'imprint',
        component: Imprint,
    },
    {
        path: '/donate',
        name: 'donate',
        component: Donate,
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact,
    },
];

export default routes;
