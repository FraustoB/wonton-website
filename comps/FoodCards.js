import styles from '../styles/FoodCards.module.scss';
import Image from 'next/image';

export default function FoodCards({ name, price, imgSrc }) {

    return (
        <div className={styles.CardContainer}>
            <div className={styles.imgContainer}>
                <Image src={imgSrc} height={450} width={650} />
            </div>
            <h2>{name}</h2>
            <div className={styles.Price}>
                Price: {price}
            </div>



        </div>
    )
};