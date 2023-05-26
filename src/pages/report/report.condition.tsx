/** @jsxImportSource @emotion/react */
import { Stack, Fade, Modal } from '@mui/material';
import ConditionGrid from '@/components/ConditionGrid/ConditionGrid';
import ConditionTypeGrid from '@/components/ConditionGrid/ConditionTypeGrid';

function ReportCondition() {
    return (
        <Stack direction={'column'} spacing={4} height={'100%'}>
            <ConditionGrid />
            <ConditionTypeGrid />
        </Stack>
    );
}

export default ReportCondition;
