/** @jsxImportSource @emotion/react */
import React, { useState, useCallback } from 'react';
import { Stack, Fade, Modal } from '@mui/material';
import ConditionGrid from '@/components/ConditionGrid/ConditionGrid';
import ConditionTypeGrid from '@/components/ConditionGrid/ConditionTypeGrid';
import QueryEdit from '@/components/ConditionGrid/QueryEdit';

function ReportCondition() {
    const [open, setOpen] = useState(false);

    const handleOpen = useCallback(() => {
        setOpen(true);
    }, []);

    const handleClose = useCallback(() => {
        setOpen(false);
    }, []);

    return (
        <React.Fragment>
            <Stack direction={'column'} spacing={4} height={'100%'}>
                <ConditionGrid />
                <ConditionTypeGrid open={handleOpen} />
            </Stack>
            <Modal open={open} onClose={close}>
                <Fade in={open}>
                    <QueryEdit close={handleClose} />
                </Fade>
            </Modal>
        </React.Fragment>
    );
}

export default ReportCondition;
