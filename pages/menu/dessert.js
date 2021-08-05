import FoodCards from "../../comps/FoodCards";
import styles from '../../styles/food.module.scss';

const Dessert=[
    {
        name: "Strawberry Ice Cream",
        price: 3.99,
        imgSrc: "/images/FoodDessert.jpg",
        description: "Bar of Strawberry Icecream"
    },
    {
        name: "Carrot Cake",
        price: 8.99,
        imgSrc: "/images/FoodDessertCarrot.jpg",
        description: "Housemade Carrot Cake"
    },
    {
        name: "Trios of Donuts",
        price: 2.99,
        imgSrc: "/images/FoodDonuts.jpg",
        description: "Trio of donuts. Chocolate or Glazed"
    }
]

export default function menu() {

    return (
        <>
            <h1 className={styles.h1}>Dessert</h1>
            <div className={styles.Container}>


                {Dessert.map(food => {
                    return (<FoodCards key={food.name} imgSrc={food.imgSrc} name={food.name} price={food.price} />)
                })}
            </div>
        </>
    )
}