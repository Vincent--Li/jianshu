import { createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1551367135018'); /* IE9 */
  src: url('iconfont.eot?t=1551367135018#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('iconfont.woff?t=1551367135018') format('woff'),
  url('iconfont.ttf?t=1551367135018') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1551367135018#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-fangdajing:before {
  content: "\e617";
}

.icon-spin:before {
  content: "\e851";
}

.icon-Aa:before {
  content: "\e636";
}

.icon-bige:before {
  content: "\e601";
}
`;
