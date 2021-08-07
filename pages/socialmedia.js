import styles from '../styles/socialmedia.module.scss';
import Head from 'next/head';
import Link from 'next/link';


export default function Socialmedia() {



    return (

        <>
            <Head>
                <link
                    href='https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300&family=Oswald:wght@500&family=Rubik:ital,wght@1,300&display=swap'
                    rel="stylesheet"
                />
            </Head>
            <div className={styles.container}>
                <h1>CONNECT WITH US</h1>
                <div className={styles.facebook}>
                    <Link href='/socialmedia/facebook'><a> Facebook </a></Link>
                </div>
                <div className={styles.instagram}>
                    <Link href='socialmedia/instagram'><a> Instagram </a></Link>
                </div>
                <div className={styles.twitter}>
                    <Link href='socialmedia/twitter'><a> Twitter </a></Link>
                </div>
            </div>
        </>
    )
}