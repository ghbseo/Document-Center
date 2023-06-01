/** @jsxImportSource @emotion/react */
import React from 'react';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    TableContainerProps,
    Box
} from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';
import { css } from '@emotion/react';
import { Report } from '@/types/report';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux';

type ReportGridProps = {
    reports?: Report[];
    columns: string[];
};

type IconMap = {
    [key: number]: SvgIconComponent;
};

const iconMap: IconMap = {
    0: FolderOpenOutlinedIcon,
    1: ModeOutlinedIcon,
    2: ArticleOutlinedIcon
};

function ReportGrid({ reports, columns, ...rest }: ReportGridProps & TableContainerProps) {
    const data = useSelector((state: RootState) => state.report);
    const nest = (data: Report[], id = 0): Report[] => {
        return data.filter((item) => item['pid'] === id).map((item) => ({ ...item, childrens: nest(data, item.id) }));
    };

    const createTableRow = (report: Report & { [index: string]: any }, depth = 0) => {
        return (
            <React.Fragment key={report.id}>
                <TableRow
                    css={css`
                        ${depth &&
                        css`
                            padding-left: ${depth * 16}px;
                        `}
                    `}
                >
                    {columns.map((column, index) => (
                        <TableCell key={column}>
                            {index === 0 && <Box component={iconMap[report.type]} color="inherit"></Box>}
                            {report[column]}
                        </TableCell>
                    ))}
                </TableRow>
                {Array.isArray(report.childrens) && report.childrens.map((report) => createTableRow(report, depth + 1))}
            </React.Fragment>
        );
    };

    return (
        <TableContainer {...rest}>
            <Table>
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell key={column}>{column}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>{nest(data).map((report) => createTableRow(report))}</TableBody>
            </Table>
        </TableContainer>
    );
}

export default ReportGrid;
