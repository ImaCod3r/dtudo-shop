import { useState, useEffect } from "react";
import { listItems } from "../storage";
import { formatPriceAOA } from "../utils";
import "../styles/Cart.css";

export default function Cart() {
    const [items, setItems] = useState(null);
    const [total, setTotal] = useState(0);

    const calculateTotal = (items) => {
        let result = 0;
        items.map((item) => {
            result += item.price;
        });
        setTotal(result);
    }

    useEffect(() => {
        const data = listItems();
        setItems(data);
    }, []);

    useEffect(() => {
        if(items) {
            calculateTotal(items);
        }
    }, [items]);

    return (
        <main>
            <div className="products-list">
                {items && items.map((item, idx) => (
                    <div className="product-item" key={idx}>
                        <div className="info-wrapper">
                            <div className="image-wrapper">
                                <img src={item.image_url} />
                            </div>
                            <div className="info">
                                <h3>{item.name}</h3>
                                <p>{formatPriceAOA(item.price)}</p>

                                <div className="controls">
                                    <button>+</button>
                                    <span>0</span>
                                    <button>-</button>
                                </div>
                            </div>
                        </div>

                        <button>x</button>
                    </div>
                ))}
            </div>

            <div className="total">
                <h2>Total</h2>
                <span>{total}</span>
            </div>
        </main>
    )
}