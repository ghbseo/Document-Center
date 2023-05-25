/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Stack from '@mui/material/Stack';
import ConditionGrid from '@/components/ConditionGrid/ConditionGrid';

function ReportCondition() {
    return (
        <Stack direction={'column'}>
            <ConditionGrid />
            <Stack direction={'row'}></Stack>
        </Stack>
    );
}

export default ReportCondition;
