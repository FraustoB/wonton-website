import styles from '../styles/location.module.scss';
import Head from 'next/head'

export default function Location() {

    return (

        <>
            <Head>
                <link
                    href='https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300&family=Oswald:wght@500&family=Rubik:ital,wght@1,300&display=swap'
                    rel="stylesheet"
                />
            </Head>
            <div className={styles.container}>
                <div className={styles.information}>
                    <h1> COME EAT WITH US</h1>

                    <div className={styles.address}>
                        <h2>Name of location goes here</h2>
                        <p>
                            Physical Address Here
                        </p>

                    </div>


                </div>



                <div className={styles.location}><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24901.728647891334!2d35.49573188228035!3d38.7243270120259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152b1213e9655553%3A0x53437fa18cd5bbd6!2sMehliya%20Restaurant%20Central%20Asian%20Cuisine!5e0!3m2!1sen!2sus!4v1628124657755!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy"></iframe></div>

            </div>
        </>
    )
}