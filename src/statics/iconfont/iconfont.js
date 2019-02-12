import { createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1550747619903'); /* IE9 */
  src: url('iconfont.eot?t=1550747619903#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('iconfont.woff?t=1550747619903') format('woff'),
  url('iconfont.ttf?t=1550747619903') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1550747619903#iconfont') format('svg'); /* iOS 4.1- */
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

.icon-Aa:before {
  content: "\e636";
}

.icon-bige:before {
  content: "\e601";
}
`;
