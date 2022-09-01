import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `
    ${reset}
    *, body {
        box-sizing: border-box;
        font-size: 16px;
    }
    a {
        text-decoration: none;
        color: #333;
    }
    a:active, a:focus {
        color: #333;
    }
    input {
        border: none;
        outline: none;
    }
    li {
        list-style: none;
        display: inline-block;
        padding: 10px;
    }

    .sub-layout {
        width: 1280px;
        margin: 0 auto;
    }

    @media only screen and (max-width: 768px) {
        body {
            font-size: 14px;
        }
    }
`;

export default GlobalStyle;