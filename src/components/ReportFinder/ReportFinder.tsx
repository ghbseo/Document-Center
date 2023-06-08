/** @JsxImportSource @emotion/react */
import React from 'react';
import TreeList, { Column } from 'devextreme-react/tree-list';
import { RootState } from '@/redux';
import { useSelector } from 'react-redux';
import { Box, BoxProps } from '@mui/material';

type ReportFinderProps = {
    height?: string | number;
    columns: {
        dataField: string;
        caption?: string;
    }[];
};

function ReportFinder({ height, columns, ...rest }: ReportFinderProps & BoxProps) {
    const data = useSelector((state: RootState) => state.report);

    return (
        <Box {...rest}>
            <TreeList dataSource={data} keyExpr={'id'} parentIdExpr={'pid'} height={height}>
                {columns.map((column) => (
                    <Column key={column.dataField} dataField={column.dataField} caption={column.caption}></Column>
                ))}
            </TreeList>
        </Box>
    );
}

export default ReportFinder;
