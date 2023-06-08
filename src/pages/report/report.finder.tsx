/** @JsxImportSource @emotion/react */
import React from 'react';
import { Stack } from '@mui/material';
import { default as ReportList } from '@/components/ReportFinder/ReportFinder';

function ReportFinder() {
    return (
        <Stack direction={'row'} sx={{ height: '100%' }}>
            <ReportList columns={[{ dataField: 'name', caption: '보고서 명' }]} height={'100%'} width={'300px'} />
        </Stack>
    );
}

export default ReportFinder;
