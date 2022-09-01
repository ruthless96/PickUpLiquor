import * as React from 'react';
import type { NextPage } from 'next';

import { LoginLayout } from '../../styles/AccountStyle';

const login: NextPage = () => {

    return (
        <LoginLayout>
            <div className="login-background">
                <div className='login-layout'>
                    {/* 로그인 입력값 */}
                    <input type="text" />
                    <input type="password" />

                    {/* 회원가입 버튼 */}
                </div>
            </div>
            <button></button>
        </LoginLayout>
    );
}

export default login;