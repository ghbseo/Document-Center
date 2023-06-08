import { MainPage, ReportPage, ReportFinderPage, ReportConditionPage } from '@/pages';

const routes = [
    {
        path: '/',
        element: MainPage
    },
    {
        path: '/report',
        element: ReportPage
    },
    {
        path: '/report/finder',
        element: ReportFinderPage
    },
    {
        path: '/report/condition',
        element: ReportConditionPage
    }
];

export default routes;
