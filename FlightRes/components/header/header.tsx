import * as React from 'react';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import Link from 'next/link';
import styled from 'styled-components';

const header: NextPage = () => {

    return (
        <HeaderCss>
            <nav className="header">
                <div className="header-logo">
                    <Link href="/">Flight Res</Link>
                </div>
                <ul>
                    <li>
                        <Link href="/">
                            <a onClick={() => { alert("상품 준비중입니다."); }}>항공권 예매</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a onClick={() => { alert("상품 준비중입니다."); }}>뭐하지</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/user/login">로그인</Link>
                    </li>
                </ul>
            </nav>
        </HeaderCss>
    )
}

const HeaderCss = styled.div`
    .header {
        width: 100%;
        height: 48px;
        padding: 0 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid #E9E9E9;
    }

    .header-logo {
        float: left;
        flex: 1;
        font-size: 28px;
        font-weight: bold;
    }
`;

export default header;