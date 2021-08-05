import FoodCards from "../../comps/FoodCards";
import styles from '../../styles/food.module.scss';

const Drinks=[
    {
        name: "Boba",
        price: 6.99,
        imgSrc: "/images/FoodBoba.jpg",
        description: "Thai Tea Boba"
    },
    {
        name: "Thai Tea",
        price: 7.99,
        imgSrc: "/images/FoodTea.jpg",
        description: "Slow Brewed Thai Tea"
    },
    {
        name: "Soda",
        price: 5.99,
        imgSrc: "/images/FoodSoda.jpg",
        description: "No-brand Soda"
    }
]


export default function menu() {


    return (
        <>
            <h1 className={styles.h1}>Drinks</h1>
            <div className={styles.Container}>


                {Drinks.map(food => {
                    return (<FoodCards key={food.name} imgSrc={food.imgSrc} name={food.name} price={food.price} />)
                })}
            </div>
        </>

    )
}