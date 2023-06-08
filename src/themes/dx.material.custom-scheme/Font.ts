import dxiconsmaterialTtf from './icons/dxiconsmaterial.ttf';
import dxiconsmaterialWoff from './icons/dxiconsmaterial.woff';
import dxiconsmaterialWoff2 from './icons/dxiconsmaterial.woff2';
import Roboto300Ttf from './fonts/Roboto-300.ttf';
import Roboto300Woff from './fonts/Roboto-300.woff';
import Roboto300Woff2 from './fonts/Roboto-300.woff2';
import Roboto400Ttf from './fonts/Roboto-400.ttf';
import Roboto400Woff from './fonts/Roboto-400.woff';
import Roboto400Woff2 from './fonts/Roboto-400.woff2';
import Roboto500Ttf from './fonts/Roboto-500.ttf';
import Roboto500Woff from './fonts/Roboto-500.woff';
import Roboto500Woff2 from './fonts/Roboto-500.woff2';
import Roboto700Ttf from './fonts/Roboto-700.ttf';
import Roboto700Woff from './fonts/Roboto-700.woff';
import Roboto700Woff2 from './fonts/Roboto-700.woff2';

export const font = `
    @font-face {
        font-family: DXIcons;
        src: local('DevExtreme Material Icons'), local('devextreme_material_icons'),
            url('${dxiconsmaterialWoff2}') format('woff2'), url('${dxiconsmaterialWoff}') format('woff'),
            url('${dxiconsmaterialTtf}') format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: RobotoFallback;
        font-style: normal;
        font-weight: 300;
        src: local('Roboto Light'), local('Roboto-Light'), url('${Roboto300Woff2}') format('woff2'),
            url('${Roboto300Woff}') format('woff'), url('${Roboto300Ttf}') format('truetype');
    }
    @font-face {
        font-family: RobotoFallback;
        font-style: normal;
        font-weight: 400;
        src: local('Roboto'), local('Roboto-Regular'), url('${Roboto400Woff2}') format('woff2'),
            url('${Roboto400Woff}') format('woff'), url('${Roboto400Ttf}') format('truetype');
    }
    @font-face {
        font-family: RobotoFallback;
        font-style: normal;
        font-weight: 500;
        src: local('Roboto Medium'), local('Roboto-Medium'), url('${Roboto500Woff2}') format('woff2'),
            url('${Roboto500Woff}') format('woff'), url('${Roboto500Ttf}') format('truetype');
    }
    @font-face {
        font-family: RobotoFallback;
        font-style: normal;
        font-weight: 700;
        src: local('Roboto Bold'), local('Roboto-Bold'), url('${Roboto700Woff2}') format('woff2'),
            url('${Roboto700Woff}') format('woff'), url('${Roboto700Ttf}') format('truetype');
    }
`;
