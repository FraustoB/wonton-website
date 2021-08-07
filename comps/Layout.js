import styles from '../styles/layout.module.scss';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {


    return (
        <div className={styles.Content}>
            <div className={styles.Navbar}>
                <Navbar />
            </div>

            {children}
            {/* <div className={styles.Footer}>
                <Footer />
            </div> */}
        </div>
    );
}