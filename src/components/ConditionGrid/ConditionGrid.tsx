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
    Paper
} from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux';
import { TableVirtuoso, TableComponents } from 'react-virtuoso';
import { css } from '@emotion/react';
import ToolbarIcon from '@/components/ToolbarItem/ToolbarIcon';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function ConditionGrid() {
    const conditionList = useSelector((state: RootState) => state.condition);
    return (
        <Box>
            <Box
                css={css`
                    margin-bottom: 8px;
                    display: flex;
                    justify-content: flex-end;
                `}
            >
                <ToolbarIcon title={'추가'}>
                    <AddIcon />
                </ToolbarIcon>
                <ToolbarIcon title={'삭제'}>
                    <RemoveIcon />
                </ToolbarIcon>
            </Box>
            <TableContainer
                component={Paper}
                css={css`
                    padding: 8px;
                    min-height: 360px;
                `}
            >
                <Table size="small" stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell>조건명</TableCell>
                            <TableCell>조건 타입</TableCell>
                            <TableCell>조건 설명</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {conditionList.map((condition) => (
                            <TableRow
                                key={condition.id}
                                css={css`
                                    &:hover {
                                        background-color: #f9f9f9;
                                    }
                                `}
                            >
                                <TableCell>{condition.name}</TableCell>
                                <TableCell>{condition.type}</TableCell>
                                <TableCell>{condition.desc}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default ConditionGrid;
