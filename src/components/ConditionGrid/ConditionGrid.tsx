/** @jsxImportSource @emotion/react */
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Box, Card } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux';
import { TableVirtuoso, TableComponents } from 'react-virtuoso';
import { css } from '@emotion/react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function ToolbarIcon({ children }: { children: React.ReactNode }) {
    return (
        <IconButton
            css={css`
                background-color: white;
                height: 32px;
                border: 1px solid #e2e2e2;
                box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
                border-radius: 4px;
                & + & {
                    margin-left: 8px;
                }
            `}
        >
            {children}
        </IconButton>
    );
}

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
                <ToolbarIcon>
                    <AddIcon />
                </ToolbarIcon>
                <ToolbarIcon>
                    <RemoveIcon />
                </ToolbarIcon>
            </Box>
            <Card>
                <TableContainer
                    css={css`
                        background-color: white;
                        border: 1px solid white;
                        border-radius: 4px;
                        padding: 8px;
                        height: 360px;
                    `}
                >
                    <Table size="small">
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
            </Card>
        </Box>
    );
}

export default ConditionGrid;
