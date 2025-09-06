const ProductCard = ({ name, image, price }) => {
    return (
        <div className="product-card">
            <div className="image-wrapper">
                <img src={image} alt={`${name} image`} />
            </div>

            <div className="info">
                <h3>{name}</h3>
                <p>{price}Kz</p>
            </div>
        </div>
    )
}

export default ProductCard;