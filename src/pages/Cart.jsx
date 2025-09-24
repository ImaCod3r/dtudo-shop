import { useState, useEffect } from "react";
import { useCart } from "../hooks/useCart";
import { formatPriceAOA } from "../utils";
import "../styles/Cart.css";

export default function Cart() {
    const { cart, increase, decrease, remove, clear } = useCart();
    const [total, setTotal] = useState(0);

    const calculateTotal = (items) => {
        let result = 0;
        items.forEach((item) => {
            result += item.price * item.quantity;
        });
        setTotal(result);
    }

    useEffect(()=> {
        calculateTotal(cart);   
    })

    return (
        <main>
            <div className="total">
                <span>Total</span>
                <h2>{formatPriceAOA(total)}</h2>

                <button>Finalizar Compra</button>
            </div>
            <div className="products-list">
                {cart && cart.map((item, idx) => (
                    <div className="product-item" key={idx}>
                        <div className="info-wrapper">
                            <div className="image-wrapper">
                                <img src={item.image_url} />
                            </div>
                            <div className="info">
                                <h3>{item.name}</h3>
                                <p>{formatPriceAOA(item.price)}</p>

                                <div className="controls">
                                    <button onClick={() => increase(item)}>+</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => decrease(item)}>-</button>
                                </div>
                            </div>
                        </div>

                        <button onClick={() => remove(item)}>x</button>
                    </div>
                ))}
            </div>
        </main>
    )
}