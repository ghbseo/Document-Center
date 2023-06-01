import { MainPage, ReportViewPage, ReportConditionPage, ReportManagePage, ReportPage } from '@/pages';

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
        element: ReportViewPage
    },
    {
        path: '/report/condition',
        element: ReportConditionPage
    },
    {
        path: '/report/manage',
        element: ReportManagePage
    }
];

export default routes;
