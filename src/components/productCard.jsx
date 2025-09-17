import { formatPriceAOA } from "../utils";
import AddShoppingCart from "../assets/add-shopping-cart.svg";

import { addToCart } from "../storage";

const ProductCard = ({ name, image_url, price, slug }) => {
    const handleAddToCart = () => {
        const data = {
            name,
            price,
            image_url
        }

        addToCart(data);
    }

    return (
        <div className="product-card" key={slug}>
            <div className="image-wrapper">
                <img
                    src={image_url || "https://via.placeholder.com/1200x800?text=No+Image"}
                    alt={name ? `Imagem de ${name}` : "Imagem do produto"}
                    style={{ maxWidth: "100%", height: "auto" }}
                />
            </div>

            <div className="info">
                <h3>{name}</h3>
                <p>{formatPriceAOA(price)}</p>
            </div>

            <button onClick={() => handleAddToCart()}><img src={AddShoppingCart} /></button>
        </div>
    )
}

export default ProductCard;