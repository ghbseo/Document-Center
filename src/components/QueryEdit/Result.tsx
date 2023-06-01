/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { Card, Box, Divider, TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

function Result() {
    return (
        <Card
            css={css`
                padding: 8px;
                height: 200px;
            `}
        >
            <Box
                css={css`
                    display: flex;
                    align-items: center;
                    margin-bottom: 8px;
                    font-size: 12px;
                    font-weight: 100;
                `}
            >
                컬럼을 그룹화하기 위하여 컬럼의 헤더를 여기에 끌어다 놓으십시오.
            </Box>
            <Divider />
            <TableContainer>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>TYPE_ID</TableCell>
                            <TableCell>TYPE_NAME</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>100</TableCell>
                            <TableCell>NAME1</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>101</TableCell>
                            <TableCell>NAME2</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>102</TableCell>
                            <TableCell>NAME3</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
    );
}

export default Result;
