/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { Grid } from '@mui/material';

type ToolGridTemplateProps = {
    children: React.ReactNode;
};

function ToolGrid({ children }: ToolGridTemplateProps) {
    return (
        <Grid
            container
            rowSpacing={'32px'}
            columnSpacing={'16px'}
            css={css`
                transition: all 0.3s;
            `}
        >
            {React.Children.map(children, (child) => (
                <Grid item>{child}</Grid>
            ))}
        </Grid>
    );
}

export default ToolGrid;
