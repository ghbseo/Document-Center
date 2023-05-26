/** @jsxImportSource @emotion/react */
import React from 'react';
import { SvgIconComponent } from '@mui/icons-material';
import { data } from '@/layouts/side-nav-bar/data';
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux';
import { Divider, Box } from '@mui/material';

export interface SidebarItemProps {
    Icon: SvgIconComponent;
    name: string;
    path: string;
    id: number;
}

function SidebarItem({ Icon, name, path, id }: SidebarItemProps) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const menuId = useSelector((state: RootState) => state.menu.id);

    return (
        <Box
            css={css`
                display: flex;
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
            `}
            onClick={() => {
                dispatch({ type: 'menu/SELECT', payload: id });
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
                    white-space: nowrap;
                `}
            >
                {name}
            </Box>
        </Box>
    );
}

function SidebarItemList() {
    return (
        <React.Fragment>
            {data.map((item, index) => {
                return (
                    <React.Fragment key={item.id}>
                        <SidebarItem Icon={item.Icon} name={item.name} path={item.path} id={item.id} />
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
