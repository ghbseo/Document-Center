/** @jsxImportSource @emotion/react */
import React, { useCallback } from 'react';
import { IconButton, Box } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { css } from '@emotion/react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleIconClick = useCallback(() => {
        dispatch({ type: 'menu/TOGGLE' });
    }, []);

    return (
        <Box
            css={css`
                display: flex;
                align-items: center;
                width: 100%;
                height: 45px;
                padding: 0 2px;
            `}
        >
            <IconButton
                css={css`
                    border-radius: 0;
                    &:hover {
                        background-color: #eaeaea;
                    }
                `}
                onClick={handleIconClick}
            >
                <MenuRoundedIcon fontSize={'medium'} sx={{ color: 'black' }} />
            </IconButton>
            <Box
                onClick={() => {
                    navigate('/');
                }}
                css={css`
                    font-size: 16px;
                    font-weight: bold;
                    color: black;
                    cursor: pointer;
                    margin-left: 4px;
                `}
            >
                Document Center
            </Box>
        </Box>
    );
}

export default Header;
