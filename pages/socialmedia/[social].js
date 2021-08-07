
import styles from '../../styles/smpage.module.scss';
import { useRouter } from 'next/router'

export default function socialpage() {

    const router=useRouter();

    const handleClick=(e) => {
        e.preventDefault();
        router.push('/')

    }

    return (
        <div className={styles.container}>
            Now normally, from that link you just clicked, this would be that social media page. However, because this
            restaurant isnt real, there is nowhere to go.

            <div className={styles.redirect} onClick={handleClick}>Return to home page</div>
        </div>
    )
}