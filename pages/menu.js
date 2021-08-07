import Head from 'next/head';
import styles from '../styles/menu.module.scss';
import ImageButton from '../comps/ImageButton';
import Link from 'next/link';
export default function Food() {
    return (
        <>
            <Head>
                <title>WonTonSoup | Menu</title>
                <meta name='wontonsoup' content='wontonsoup' />
            </Head>
            <div>
                <div className={styles.Header}>
                    <p>MENU</p>
                </div>

                <div className={styles.imageGridContainer}>

                    <div><Link href='/menu/entree'><a> <ImageButton image='images/Food1.jpg' item='Entree' /> </a></Link></div>
                    <div><Link href='/menu/apps'><a> <ImageButton image='images/food3.jpg' item='Appetizer' /> </a></Link></div>
                    <div><Link href='/menu/dessert'><a> <ImageButton image='images/FoodDessert.jpg' item='Dessert' /> </a></Link></div>
                    <div><Link href='/menu/drinks'><a> <ImageButton image='images/food2.jpg' item='Drinks' /> </a></Link></div>

                </div>
            </div>
        </>
    )
}