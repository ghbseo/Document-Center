/** @jsxImportSource @emotion/react */
import React, { useState, useCallback } from 'react';
import { css } from '@emotion/react';
import {
    Card,
    Box,
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio,
    Divider,
    Stack,
    Select,
    TextField,
    MenuItem,
    SelectChangeEvent
} from '@mui/material';
import ToolbarButton from '@/components/ToolbarItem/ToolbarButton';

function Query() {
    const [service, setService] = useState('dev');

    const handleServiceChange = useCallback((event: SelectChangeEvent) => {
        setService(event.target.value);
    }, []);

    return (
        <Card
            css={css`
                flex: 2;
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
                <FormControl>
                    <RadioGroup row defaultValue={'query'}>
                        <FormControlLabel
                            value="query"
                            control={
                                <Radio
                                    color="default"
                                    sx={{
                                        '& .MuiSvgIcon-root': {
                                            fontSize: 14
                                        }
                                    }}
                                />
                            }
                            label="쿼리사용"
                            sx={{
                                '& .MuiFormControlLabel-label': {
                                    fontSize: 14
                                }
                            }}
                        />
                        <FormControlLabel
                            value="service"
                            control={
                                <Radio
                                    color="default"
                                    sx={{
                                        '& .MuiSvgIcon-root': {
                                            fontSize: 14
                                        }
                                    }}
                                />
                            }
                            label="서비스 사용"
                            sx={{
                                '& .MuiFormControlLabel-label': {
                                    fontSize: 14
                                }
                            }}
                        />
                    </RadioGroup>
                </FormControl>
                <Box>
                    <ToolbarButton>쿼리 실행</ToolbarButton>
                    <ToolbarButton>가져오기</ToolbarButton>
                    <ToolbarButton>내보내기</ToolbarButton>
                </Box>
            </Box>
            <Divider />
            <Box>
                <Stack direction={'row'} alignItems={'center'} marginY={'4px'}>
                    <Box fontSize={'14px'} marginRight={'12px'}>
                        JDBC Service
                    </Box>
                    <Select
                        value={service}
                        onChange={handleServiceChange}
                        css={css`
                            height: 22px;
                            width: 180px;
                        `}
                    >
                        <MenuItem value={'dev'}>DEV</MenuItem>
                        <MenuItem value={'test'}>TEST</MenuItem>
                    </Select>
                </Stack>
                <TextField
                    multiline
                    css={css`
                        width: 100%;
                    `}
                    rows={8}
                >
                    Content
                </TextField>
            </Box>
        </Card>
    );
}

export default Query;
