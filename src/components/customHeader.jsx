import { useCart } from "../hooks/useCart.js";

const CustomHeader = () => {
    const { itemCount } = useCart();
    return (
        <header>
            <a href="/" className="logo">
                <img src={new URL("../assets/logo.png", import.meta.url)} alt="logo" style={{ width: 100 }} />
            </a>

            <nav>
                <ul>
                    <li>
                        <a href="/cart" style={{ display: "flex", alignItems: "center" }}>
                            <span>{itemCount}</span>
                            <img src={new URL("../assets/shopping-cart-icon.svg", import.meta.url)} alt="Shopping cart" style={{ width: 30 }} />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default CustomHeader;