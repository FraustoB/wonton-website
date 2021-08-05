import styles from '../styles/Navbar.module.scss';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';


export default function Navbar() {

    return (

        <>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Zen+Tokyo+Zoo&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <nav className={styles.Navbar}>
                <span>WonTonSoup </span>
                <ul>
                    <li><Link href='/'><a> Home </a></Link></li>
                    <li><Link href='/menu'><a> Menu </a></Link></li>
                    <li><Link href='/location'><a> Location </a></Link></li>
                </ul>

                <div className={styles.Socials}>
                    <ul>
                        <li><Link href='/socialmedia'><a> Connect with us</a></Link></li>
                    </ul>

                </div>
            </nav>
        </>
    )
}