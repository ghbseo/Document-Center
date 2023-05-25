import { MainPage, ReportViewPage, ReportConditionPage, REportManagePage } from '@/pages';

const routes = [
    {
        path: '/',
        element: MainPage
    },
    {
        path: '/report',
        element: ReportViewPage
    },
    {
        path: '/report/condition',
        element: ReportConditionPage
    },
    {
        path: '/report/manage',
        element: REportManagePage
    }
];

export default routes;
