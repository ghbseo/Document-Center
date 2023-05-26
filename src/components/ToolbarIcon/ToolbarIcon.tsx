/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { IconButton, Tooltip } from '@mui/material';

function ToolbarIcon({ title, children }: { title?: string; children: React.ReactNode }) {
    return (
        <Tooltip
            title={title}
            PopperProps={{
                modifiers: [
                    {
                        name: 'offset',
                        options: {
                            offset: [0, -10]
                        }
                    }
                ]
            }}
        >
            <IconButton
                css={css`
                    background-color: white;
                    height: 32px;
                    border: 1px solid #e2e2e2;
                    box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
                    border-radius: 4px;
                    & + & {
                        margin-left: 8px;
                    }
                `}
            >
                {children}
            </IconButton>
        </Tooltip>
    );
}

export default ToolbarIcon;
