import { SidebarItemProps } from '@/layouts/side-nav-bar/SidebarItem';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export const data: SidebarItemProps[] = [
    {
        name: '모든 도구',
        id: 1,
        path: '/',
        Icon: HomeOutlinedIcon
    },
    {
        name: '설정',
        id: 3,
        path: '/setting',
        Icon: SettingsOutlinedIcon
    }
];
