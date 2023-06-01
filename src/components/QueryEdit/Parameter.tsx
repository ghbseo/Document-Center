/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { Card, Box, Divider, TableContainer, Table, TableHead, TableRow, TableBody, TableCell } from '@mui/material';
import ToolbarButton from '@/components/ToolbarItem/ToolbarButton';

function Parameter() {
    return (
        <Card
            css={css`
                flex: 1;
                padding: 8px;
            `}
        >
            <Box
                css={css`
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 28px;
                    margin-bottom: 4px;
                `}
            >
                <Box
                    css={css`
                        font-size: 14px;
                    `}
                >
                    쿼리 파라미터
                </Box>
                <Box>
                    <ToolbarButton>추가</ToolbarButton>
                    <ToolbarButton>삭제</ToolbarButton>
                </Box>
            </Box>
            <Divider />
            <TableContainer>
                <Table size="small" stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell>순서</TableCell>
                            <TableCell>파라미터 필드명</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>1</TableCell>
                            <TableCell>NAME</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>2</TableCell>
                            <TableCell>AGE</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
    );
}

export default Parameter;
