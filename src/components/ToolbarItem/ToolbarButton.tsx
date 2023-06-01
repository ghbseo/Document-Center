/** @jsxImportSource @emotion/react */
import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import { css } from '@emotion/react';

type ToolbarButtonProps = {};

function ToolbarButton({ children, ...rest }: ToolbarButtonProps & ButtonProps) {
    return (
        <Button
            variant="outlined"
            css={css`
                color: black;
                box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
                border-color: #e2e2e2;
                &:hover {
                    background-color: #efefef;
                    border-color: #e2e2e2;
                }
                & + & {
                    margin-left: 8px;
                }
                height: 26px;
            `}
            {...rest}
        >
            {children}
        </Button>
    );
}

export default ToolbarButton;
