import { useState, useEffect } from "react";
import { listItems } from "../storage";
import "../styles/Cart.css";

export default function Cart() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const data = listItems();
        setItems(data);
    }, []);

    return (
        <main>
            <div className="products-list">
                {items.map((item) => (
                    <div className="product-item">
                        <img src={item.image_url} />
                        <h3>{item.name}</h3>
                        <p>{item.price}</p>
                    </div>
                ))}
            </div>
        </main>
    )
}