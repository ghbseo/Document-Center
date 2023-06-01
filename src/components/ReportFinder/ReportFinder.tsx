/** @jsxImportSource @emotion/react */
import React from 'react';
import { TreeView, TreeItem, TreeItemProps, TreeViewProps } from '@mui/lab';
import { Report } from '@/types/report';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux';
import { SvgIconComponent } from '@mui/icons-material';
import { Box } from '@mui/material';
import { css } from '@emotion/react';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

type StyledTreeItemProps = {
    color?: string;
    labelText: string;
    labelIcon?: SvgIconComponent;
};

type IconMap = {
    [key: number]: SvgIconComponent;
};

const iconMap: IconMap = {
    0: FolderOpenOutlinedIcon,
    1: ModeOutlinedIcon,
    2: ArticleOutlinedIcon
};

function StyledTreeItem({ labelIcon, labelText, ...rest }: StyledTreeItemProps & TreeItemProps) {
    return (
        <TreeItem
            css={css`
                .MuiTreeItem-content {
                    padding: 0;
                }
            `}
            {...rest}
            label={
                <Box
                    css={css`
                        display: flex;
                        align-items: center;
                    `}
                >
                    <Box component={labelIcon} color={'inherit'} />
                    <Box
                        css={css`
                            white-space: nowrap;
                        `}
                    >
                        {labelText}
                    </Box>
                </Box>
            }
        />
    );
}

function ReportFinder({ ...rest }: TreeViewProps) {
    const data = useSelector((state: RootState) => state.report);
    const nest = (data: Report[], id = 0): Report[] => {
        return data.filter((item) => item['pid'] === id).map((item) => ({ ...item, childrens: nest(data, item.id) }));
    };
    const renderTree = (nodes: Report) => (
        <StyledTreeItem
            key={nodes.id}
            nodeId={nodes.id.toString()}
            labelText={nodes.name}
            labelIcon={iconMap[nodes.type]}
        >
            {Array.isArray(nodes.childrens) ? nodes.childrens.map((node) => renderTree(node)) : null}
        </StyledTreeItem>
    );

    return (
        <TreeView
            defaultCollapseIcon={<ArrowDropDownIcon />}
            defaultExpandIcon={<ArrowRightIcon />}
            css={css`
                overflow: auto;
                height: 100%;
            `}
            {...rest}
        >
            {nest(data).map((item) => renderTree(item))}
        </TreeView>
    );
}

export default ReportFinder;
