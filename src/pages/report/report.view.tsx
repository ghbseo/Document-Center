/** @jsxImportSource @emotion/react */
import React from 'react';
import Stack from '@mui/material/Stack';
import { css } from '@emotion/react';
import ReportFinder from '@/components/ReportFinder/ReportFinder';

function ReportView() {
    return (
        <Stack
            direction="row"
            css={css`
                height: 100%;
            `}
        >
            <ReportFinder
                css={css`
                    width: 250px;
                    height: 100%;
                    border: 1px solid #e2e2e2;
                `}
            />
            asdfasdfasd
        </Stack>
    );
}

export default ReportView;
