import Link from 'next/link';
import styles from '../styles/footer.module.scss';
export default function Footer() {

    return (
        <div className={styles.Footer}>
            <p>created by frausto</p>
            <p>find more <Link href='https://frausto.dev' ><a target="_blank"> @ frausto.dev </a></Link> </p>
        </div>
    )
}