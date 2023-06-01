import { SidebarItemProps } from '@/layouts/side-nav-bar/SidebarItem';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

export const data: SidebarItemProps[] = [
    {
        name: '모든 도구',
        id: '1',
        path: '/',
        Icon: HomeOutlinedIcon
    },
    {
        name: '보고서 관리',
        id: '2',
        path: '/report',
        Icon: ArticleOutlinedIcon,
        children: [
            {
                name: '보고서 탐색기',
                id: '2-1',
                path: '/report/finder',
                Icon: ArticleOutlinedIcon
            },
            {
                name: '조건 관리',
                id: '2-2',
                path: '/report/condition',
                Icon: ArticleOutlinedIcon
            },
            {
                name: '보고서 관리',
                id: '2-3',
                path: '/report/manage',
                Icon: ArticleOutlinedIcon
            }
        ]
    },
    {
        name: '설정',
        id: '3',
        path: '/setting',
        Icon: SettingsOutlinedIcon
    }
];
