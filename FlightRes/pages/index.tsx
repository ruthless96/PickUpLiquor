import * as React from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import Link from 'next/link';

// call component
import Header from '../components/header/header';

// css called]
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {

    const router = useRouter();

    useEffect(() => {
        console.log(router.pathname, " : use router");
        console.log(router.pathname === '/', " : use router pathname");
        let test = router.pathname;
        console.log(test==='/'?'/user/login':'', " : test");
    }, [])

    return (
        <>
            <Header></Header>
            <div className="sub-layout">
                <Link href={router.pathname==='/'?'/user/login':''}>
                    로그인
                </Link>
                <Link href="/user/signup">
                    회원가입
                </Link>
            </div>
        </>
    )
}

export default Home;