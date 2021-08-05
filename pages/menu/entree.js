import FoodCards from "../../comps/FoodCards";
import styles from '../../styles/food.module.scss';

const Entree=[
    {
        name: "Fried Noodles",
        price: 8.99,
        imgSrc: "/images/food1.jpg",
        description: "Fried Egg Noodle"
    },
    {
        name: "Rice",
        price: 7.99,
        imgSrc: "/images/FoodRice.jpg",
        description: "Simple Rice"
    },
    {
        name: "Bowl of Chicken",
        price: 4.99,
        imgSrc: "/images/FoodBowl.jpg",
        description: "Fried Chicken in a bowl"
    },
    {
        name: "Noodles",
        price: 10.99,
        imgSrc: "/images/FoodNoodle.jpg",
        description: "House Made Noodles"
    },

]

export default function menu() {


    return (
        <>
            <h1 className={styles.h1}>Entree</h1>
            <div className={styles.Container}>


                {Entree.map(food => {
                    return (<FoodCards key={food.name} imgSrc={food.imgSrc} name={food.name} price={food.price} />)
                })}
            </div>
        </>
    )
}