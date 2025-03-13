import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";

const Cart = () => {
    const [firstItem, setFirstItem] = useState({name:"Biryani", quantity:2});

    useEffect(() => {
        setTimeout(() => {
            setFirstItem(item => {
                return {
                    ...item,
                    quantity: 10
                }
            });
        }, 5000);
    });

    return <section className="max-w-sm m-auto text-xl">
        <h1>Cart</h1>
        <ul>
        <MenuItem item={firstItem}/>
        <MenuItem item={{name: "Chicken Handi", quantity: 1}}/>
        <MenuItem item={{name: "Halva Puri", quantity: 7}}/>
        </ul>
    </section>
}

export default Cart;