/** @jsxImportSource @emotion/react */
import ToolGrid from '@/components/ToolGrid/ToolGrid';
import ToolCard from '@/components/ToolCard/ToolCard';
import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined';
import { useNavigate } from 'react-router-dom';

function Report() {
    const navigate = useNavigate();

    return (
        <ToolGrid>
            <ToolCard
                Icon={ContentPasteOutlinedIcon}
                title={'보고서 탐색기'}
                desc={'보고서 탐색기'}
                onClick={() => {
                    navigate('/report/finder');
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
        </ToolGrid>
    );
}

export default Report;
