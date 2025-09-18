import { formatPriceAOA } from "../utils";
import AddShoppingCart from "../assets/add-shopping-cart.svg";

import { addToCart } from "../storage";

const ProductCard = ({ id, name, image_url, price, slug }) => {
   const handleAddToCart = () => {
    const data = {
        name: name,
        price: price,
        image_url: image_url
    };

    const success = addToCart(data);
    
    if (success) {
        console.log('Item adicionado ao carrinho:', data.name);
    }
};
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

            <button onClick={() => handleAddToCart()} className="add-to-cart"><img src={AddShoppingCart} /></button>
        </div>
    )
}

export default ProductCard;