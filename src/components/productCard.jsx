import { formatPriceAOA } from "../utils";
import AddShoppingCart from "../assets/add-shopping-cart.svg";
import { useCart } from "../hooks/useCart.js";

const ProductCard = ({ id, name, image_url, price, slug }) => {
    const { add } = useCart();

    console.log(id)
   const handleAddToCart = () => {
    const data = {
        id,
        name,
        price,
        image_url,
        slug
    };

    add(data);
};
    return (
        <div className="product-card" key={id}>
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