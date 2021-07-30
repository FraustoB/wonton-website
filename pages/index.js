import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss';
import Navbar from '../comps/Navbar';

export default function Home() {
  return (
    <>

      <Head>
        <title>WonTonSoup | Home</title>
        <meta name="WonTonSOup" content="WonTonSoup" />

        <link
          href=""
          rel="" />
      </Head>

      <Navbar />
      <div className={styles.Background}>
        Hello Moto
      </div>


    </>
  )
}
