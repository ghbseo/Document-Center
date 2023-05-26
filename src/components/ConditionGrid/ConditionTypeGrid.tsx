/** @jsxImportSource @emotion/react */
import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    IconButton,
    Box,
    Card,
    Button
} from '@mui/material';
import { css } from '@emotion/react';
import ToolbarIcon from '@/components/ToolbarIcon/ToolbarIcon';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

interface ConditionTypeGridProps {
    open: () => void;
}

function makeColumn() {
    return (
        <TableRow>
            <TableCell>순서</TableCell>
            <TableCell>필드명</TableCell>
            <TableCell>기본값</TableCell>
            <TableCell>키 필드</TableCell>
            <TableCell>컬럼 표시 여부</TableCell>
            <TableCell>화면 표시 컬럼</TableCell>
        </TableRow>
    );
}

function ConditionTypeGrid({ open }: ConditionTypeGridProps) {
    return (
        <Box>
            <Box
                css={css`
                    margin-bottom: 8px;
                    display: flex;
                    justify-content: space-between;
                `}
            >
                <Box
                    css={css`
                        display: flex;
                    `}
                >
                    <Box
                        css={css`
                            display: flex;
                            justify-content: flex-start;
                            align-items: center;
                            margin-right: 16px;
                            font-size: 12px;
                        `}
                    >
                        조건 타입
                    </Box>
                    <Button
                        endIcon={<KeyboardArrowDownIcon />}
                        css={css`
                            margin-right: 8px;
                            background-color: white;
                            height: 32px;
                            border: 1px solid #e2e2e2;
                            box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
                            border-radius: 4px;
                            color: rgba(0, 0, 0, 0.54);
                            font-weight: 600;
                            justify-content: flex-start;
                        `}
                    >
                        Combo
                    </Button>
                </Box>
                <Box>
                    <ToolbarIcon title={'쿼리 편집'} onClick={open}>
                        <EditOutlinedIcon />
                    </ToolbarIcon>
                    <ToolbarIcon title={'추가'}>
                        <AddIcon />
                    </ToolbarIcon>
                    <ToolbarIcon title={'삭제'}>
                        <RemoveIcon />
                    </ToolbarIcon>
                </Box>
            </Box>
            <Card>
                <TableContainer
                    css={css`
                        background-color: white;
                        border: 1px solid white;
                        border-radius: 4px;
                        padding: 8px;
                        min-height: 360px;
                    `}
                >
                    <Table size="small">
                        <TableHead>{makeColumn()}</TableHead>
                        <TableBody></TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </Box>
    );
}

export default ConditionTypeGrid;
