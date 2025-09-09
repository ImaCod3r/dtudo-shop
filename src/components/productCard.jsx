import { formatPriceAOA } from "../utils";

const ProductCard = ({ name, image_url, price, slug }) => {
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
        </div>
    )
}

export default ProductCard;