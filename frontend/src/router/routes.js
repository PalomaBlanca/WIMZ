import AboutUs from '@/components/templates/AboutUs';
import GiveInfo from '@/components/templates/GiveInfo';
import GetInfo from '@/components/templates/GetInfo';
import StartPage from '@/components/templates/StartPage'

export default [
    {
        path: '/',
        name: 'start',
        components: {
            'start': StartPage,
        },
    },
    {
        path: '/info',
        name: 'give-info',
        components: {
            'give-info': GiveInfo,
        },
    },
    {
        path: '/train',
        name: 'get-info',
        components: {
            'get-info': GetInfo,
        },
    },
    {
        path: '/about-us',
        name: 'about-us',
        components: {
            'about-us': AboutUs,
        },
    },
];