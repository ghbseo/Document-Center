/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { forwardRef } from 'react';
import {
    Box,
    ButtonProps,
    RadioGroup,
    FormControlLabel,
    FormControl,
    Radio,
    Stack,
    Card,
    Divider,
    Select
} from '@mui/material';
import ToolbarButton from '@/components/ToolbarItem/ToolbarButton';
import Query from '@/components/QueryEdit/Query';
import Parameter from '@/components/QueryEdit/Parameter';
import Result from '@/components/QueryEdit/Result';

type QueryEditProps = {
    close: () => void;
};

function TextButton({ children, ...rest }: ButtonProps) {
    return (
        <ToolbarButton
            css={css`
                height: 30px;
                color: black;
            `}
            {...rest}
        >
            {children}
        </ToolbarButton>
    );
}

function QueryEdit({ close }: QueryEditProps, ref: React.Ref<HTMLDivElement>) {
    return (
        <Box
            css={css`
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background-color: #f9f9f9;
                border-radius: 4px;
                width: 900px;
                height: 600px;
                padding: 8px;
                border: 1px solid #e2e2e2;
            `}
        >
            <Box>쿼리 편집</Box>
            <Divider />
            <Stack
                direction={'row'}
                height={'300px'}
                spacing={2}
                css={css`
                    margin-top: 4px;
                `}
            >
                <Query />
                <Parameter />
            </Stack>
            <Box>쿼리 실행 결과</Box>
            <Result />
            <Box
                css={css`
                    display: flex;
                    justify-content: flex-end;
                    margin-top: 8px;
                `}
            >
                <TextButton>확인</TextButton>
                <TextButton onClick={close}>취소</TextButton>
            </Box>
        </Box>
    );
}

export default forwardRef(QueryEdit);
