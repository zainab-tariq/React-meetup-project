import { useContext } from 'react';
import CartContext from '../../../store/Cart-context';
import classes from './MealItem.module.css'
import MealItemFrom from './MealItemForm';

const MealItem = (props) => {
    const price = `€${props.price.toFixed(2)}`;
    const cartctx = useContext(CartContext);
    const addToCartHandler = (amount) => {
        cartctx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
        });
    };
    return (
        <li className={classes.meal}>
            <div>
                <div><h3>{props.name}</h3></div>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <MealItemFrom id={props.id} onAddToCart={addToCartHandler} />
        </li>
    );
}
export default MealItem;