import styles from '../styles/404.module.scss';
import { useRouter } from 'next/router'



export default function errorPage() {
    const router=useRouter();

    return (
        <div className={styles.container}>
            <h1>404: PAGE NOT FOUND</h1>
            <h2>Hmmm..... you're princess is in another castle</h2>

            <span onClick={router.back}> Head back from where you came from</span>
        </div>
    )

}
