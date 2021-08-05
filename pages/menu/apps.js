import FoodCards from "../../comps/FoodCards";
import styles from '../../styles/food.module.scss';
const Apps=[
    {
        name: "Sushi",
        price: 9.99,
        imgSrc: "/images/FoodSushi.jpg",
        description: "Coder Roll"
    },
    {
        name: "Chicken Skewers",
        price: 9.99,
        imgSrc: "/images/FoodChicken.jpg",
        description: "Grilled Chicken Skewers"
    },
    {
        name: "Dumplings",
        price: 9.99,
        imgSrc: "/images/food3.jpg",
        description: "Handmade Dumplings"
    }
]


export default function menu() {

    return (
        <>
            <h1 className={styles.h1}>Appetizers</h1>
            <div className={styles.Container}>


                {Apps.map(food => {
                    return (<FoodCards key={food.name} imgSrc={food.imgSrc} name={food.name} price={food.price} />)
                })}
            </div>
        </>
    )
}