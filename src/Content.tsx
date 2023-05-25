/** @jsxImportSource @emotion/react */
import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import routes from '@/routes';
import Header from '@/layouts/header/Header';
import Sidebar from '@/layouts/side-nav-bar/Sidebar';
import { css } from '@emotion/react';

function Content() {
    const location = useLocation();
    return (
        <div
            css={css`
                height: 100%;
                width: 100%;
                display: flex;
                flex-direction: column;
            `}
        >
            <Header />
            <div
                css={css`
                    display: flex;
                    flex-direction: row;
                    height: 100%;
                `}
            >
                <Sidebar />
                <div
                    css={css`
                        width: 100%;
                        height: 100%;
                        background-color: #f9f9f9;
                        border-top: 1px solid #ebebeb;
                        border-left: 1px solid #ebebeb;
                        border-radius: 12px 0 0 0;
                        padding: 0 56px;
                        padding-top: 50px;
                    `}
                >
                    <div
                        css={css`
                            font-size: 24px;
                            font-weight: bold;
                            margin-bottom: 16px;
                        `}
                    >
                        asdf
                    </div>

                    <div
                        css={css`
                            height: calc(100% - 70px);
                        `}
                    >
                        <Routes>
                            {routes.map(({ path, element }) => (
                                <Route key={path} path={path} element={element()} />
                            ))}
                            <Route path="*" element={<Navigate to="/home" />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
