import React, { useMemo } from "react";
import "../styles/Cart.css";
import { useCart } from "../hooks/useCart";
import { formatPriceAOA } from "../utils";
import Back from "../components/backButton.jsx";

const Cart = () => {
    const { cart, increase, decrease, remove } = useCart();

    const subtotal = useMemo(
        () => cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
        [cart]
    );

    const OrderWhatsapp = (cart) => {
        let message = "Olá, gostaria de fazer o seguinte pedido:\n\n";
        cart.forEach((item) => {
            message += `- ${item.quantity} x ${item.name} (${formatPriceAOA(item.price * item.quantity)})\n`;
        });
        message += `\nTotal: ${formatPriceAOA(subtotal)}\n\nObrigado!`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/244929087734?text=${encodedMessage}`;

        window.open(whatsappUrl, "_blank"); 
    }

    const total = subtotal;

    return (
        <div className="cart-container">
            <div className="cart-header">
                <Back />
            </div>

            <div className="cart-items">
                {cart.length === 0 ? (
                    <div className="empty-cart">
                        <p>
                            O seu carrinho está vazio 😕
                        </p>
                    </div>
                ) : (
                    cart.map((item) => (
                        <div className="cart-item" key={item.id}>
                            <div className="item-info">
                                <img src={item.image_url} alt={item.name} />
                                <div className="item-details">
                                    <h4>{item.name}</h4>
                                    <p>{item.category}</p>
                                    <span>{formatPriceAOA(item.price)}</span>
                                </div>
                            </div>
                            <div className="item-quantity">
                                <button onClick={() => decrease(item)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => increase(item)}>+</button>
                                <button className="remove-btn" onClick={() => remove(item)}>
                                    ✕
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <div className="cart-summary">
                <div className="summary-row">
                    <span>Subtotal</span>
                    <span>{formatPriceAOA(subtotal)}</span>
                </div>
                <div className="summary-total">
                    <span>Total</span>
                    <span>{formatPriceAOA(total)}</span>
                </div>
                <button className="checkout-btn" onClick={() => OrderWhatsapp(cart)}>Finalizar compra</button>
            </div>
        </div>
    );
};

export default Cart;