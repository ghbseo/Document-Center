/** @jsxImportSource @emotion/react */
import React from 'react';
import { Card, CardContent, CardActions, CardProps, Box } from '@mui/material';
import { css } from '@emotion/react';
import { SvgIconComponent } from '@mui/icons-material';

type ToolCardProps = {
    Icon: SvgIconComponent;
    title: string;
    desc: string;
};

function ToolCard({ Icon, title, desc, ...rest }: ToolCardProps & CardProps) {
    return (
        <Card
            css={css`
                background-color: #fdfdfd;
                width: 173px;
                height: 316px;
                border: 1px solid transparent;
                &:hover {
                    border: 1px solid #e2e2e2;
                }
            `}
            {...rest}
        >
            <CardContent>
                <Box
                    css={css`
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 160px;
                    `}
                >
                    <Icon
                        css={css`
                            font-size: 96px;
                        `}
                    />
                </Box>
                <Box
                    css={css`
                        font-weight: 700;
                        font-size: 16px;
                        margin-bottom: 2px;
                        max-height: 44px;
                        overflow: hidden;
                    `}
                >
                    {title}
                </Box>
                <Box
                    css={css`
                        font-size: 14px;
                        color: #606060;
                        max-height: 92px;
                        overflow: hidden;
                    `}
                >
                    {desc}
                </Box>
            </CardContent>
            <CardActions></CardActions>
        </Card>
    );
}

export default ToolCard;
