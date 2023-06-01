/** @jsxImportSource @emotion/react */
import React, { useState, useCallback, useEffect } from 'react';
import { SvgIconComponent } from '@mui/icons-material';
import { data } from '@/layouts/side-nav-bar/data';
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux';
import { Divider, Box } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export type SidebarItemProps = {
    Icon: SvgIconComponent;
    name: string;
    path: string;
    id: string;
    depth?: number;
    children?: SidebarItemProps[];
};

function SidebarItem({ Icon, name, path, id, children, depth = 0 }: SidebarItemProps) {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const menuId = useSelector((state: RootState) => state.menu.id);
    const menuisOpen = useSelector((state: RootState) => state.menu.isOpen);

    useEffect(() => {
        setOpen(false);
    }, [menuisOpen]);

    const handleMenuClick = useCallback(() => {
        if (menuisOpen) {
            setOpen(!open);
        }
    }, [open, menuisOpen]);

    return (
        <React.Fragment>
            <Box
                css={css`
                    display: flex;
                    position: relative;
                    align-items: center;
                    padding: 8px 0;
                    margin: 4px;
                    border-radius: 8px;
                    &:hover {
                        background-color: #eaeaea;
                    }
                    &:active {
                        background-color: #d3d3d3;
                    }
                    ${menuId === id &&
                    css`
                        background-color: #d3d3d3;
                    `}
                    ${depth &&
                    css`
                        padding-left: ${depth * 20}px;
                    `}
                `}
                onClick={() => {
                    dispatch({ type: 'menu/SELECT', payload: id });
                    if (children && menuisOpen) {
                        handleMenuClick();
                    }
                    navigate(path);
                }}
            >
                <Icon
                    css={css`
                        width: 34px;
                    `}
                />
                <Box
                    css={css`
                        margin-left: 8px;
                        width: 180px;
                        white-space: nowrap;
                        overflow: hidden;
                    `}
                >
                    {name}
                </Box>
                {children &&
                    (open ? (
                        <KeyboardArrowUpIcon
                            css={css`
                                margin-right: 4px;
                            `}
                        />
                    ) : (
                        <KeyboardArrowDownIcon
                            css={css`
                                margin-right: 4px;
                            `}
                        />
                    ))}
            </Box>
            {children &&
                menuisOpen &&
                open &&
                children.map((child) => (
                    <SidebarItem
                        key={child.id}
                        Icon={child.Icon}
                        name={child.name}
                        path={child.path}
                        id={child.id}
                        depth={depth + 1}
                    />
                ))}
        </React.Fragment>
    );
}

function SidebarItemList() {
    return (
        <React.Fragment>
            {data.map((item, index) => {
                return (
                    <React.Fragment key={item.id}>
                        <SidebarItem
                            Icon={item.Icon}
                            name={item.name}
                            path={item.path}
                            id={item.id}
                            children={item.children}
                        />
                        {index === 0 && (
                            <Divider
                                css={css`
                                    margin: 0 4px;
                                `}
                            />
                        )}
                    </React.Fragment>
                );
            })}
        </React.Fragment>
    );
}

export default SidebarItemList;
