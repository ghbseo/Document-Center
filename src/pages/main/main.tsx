/** @jsxImportSource @emotion/react */
import ToolGrid from '@/components/ToolGrid/ToolGrid';
import ToolCard from '@/components/ToolCard/ToolCard';
import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined';
import { useNavigate } from 'react-router-dom';

function Main() {
    const navigate = useNavigate();

    return (
        <ToolGrid>
            <ToolCard
                Icon={ContentPasteOutlinedIcon}
                title={'보고서 탐색기'}
                desc={'보고서 탐색기'}
                onClick={() => {
                    navigate('/report');
                }}
            />
            <ToolCard
                Icon={ContentPasteOutlinedIcon}
                title={'조건 관리 마법사'}
                desc={'보고서의 조건 추가/수정/삭제 수행하기'}
                onClick={() => {
                    navigate('/report/condition');
                }}
            />
            <ToolCard
                Icon={ContentPasteOutlinedIcon}
                title={'보고서 관리 마법사'}
                desc={'보고서 추가/수정/삭제 수행하기'}
                onClick={() => {
                    navigate('/report/manage');
                }}
            />
            <ToolCard
                Icon={ContentPasteOutlinedIcon}
                title={'일괄 내보내기 마법사'}
                desc={'보고서 및 분석 컨텐츠에 대한 일괄 내보내기 수행하기'}
                onClick={() => {
                    navigate('/export');
                }}
            />
            <ToolCard
                Icon={ContentPasteOutlinedIcon}
                title={'보고서 내보내기/가져오기 마법사'}
                desc={'보고서 내보내기/가져오기 수행하기'}
                onClick={() => {
                    navigate('/import');
                }}
            />
        </ToolGrid>
    );
}

export default Main;
