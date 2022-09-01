import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/CommonStyle';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps}></Component>
        </>
    )
}

export default MyApp;