import styles from '../styles/ImageButton.module.scss'
import Link from 'next/link';

export default function ImageButton({ item, image }) {


    return (

        <div className={styles.ImageButton} style={{ backgroundImage: `url(/${image})` }} >
            <div className={styles.Banner}></div>
            <div className={styles.BannerText}>{item}</div>
        </div>
    )
}