import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>WonTonSoup | Home</title>
        <meta name="WonTonSuup" content="WonTonSoup" />
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Tokyo+Zoo&display=swap"
          rel="stylesheet"
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Lobster&display=swap'
          rel="stylesheet" />
      </Head>

      <div className={styles.Intro}>
        Welcome To <span>WonTonSoup</span><Image src='/favicon.ico' height={50} width={50} />
      </div>
      <div className={styles.Photos}>
        <span><Image src='/food1.jpg' height={350} width={500} /> Authentic</span>
        <span><Image src='/food2.jpg' height={350} width={500} /> Asian</span>
        <span><Image src='/food3.jpg' height={350} width={500} /> Cuisine</span>
      </div>
      <div className={styles.Hours}>
        <h2> OPEN: MONDAY-SATURDAY</h2>
        <h3> HOURS: 11-7</h3>
      </div>


    </div>
  )
}
