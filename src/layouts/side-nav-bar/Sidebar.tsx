/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux';
import SidebarItemList from '@/layouts/side-nav-bar/SidebarItem';

function Sidebar() {
    const isMenuOpen = useSelector((state: RootState) => state.menu.isOpen);
    return (
        <div
            css={css`
                left: 0;
                bottom: 0;
                width: 45px;
                height: 100%;
                background-color: #f3f3f3;
                overflow: hidden;
                z-index: 99;

                transition: width 0.3s ease-in-out;
                ${isMenuOpen &&
                css`
                    width: 320px;
                `}
            `}
        >
            <SidebarItemList />
        </div>
    );
}

export default Sidebar;
