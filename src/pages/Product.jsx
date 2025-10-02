import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductBySlug } from "../lib/appwrite";
import { formatPriceAOA } from "../utils";
import { useCart } from "../hooks/useCart";

import CustomFooter from "../components/customFooter.jsx";

import { IoIosArrowBack } from "react-icons/io";
import "../styles/Product.css";

export default function Product() {
    const { slug } = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();
    const { add } = useCart();

    const handleFetchProduct = async () => {
        try {
            const data = await getProductBySlug(slug);
            setProduct(data[0]);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        handleFetchProduct();
    })

    return (
        <>
            <div className="product-container">
                <button className="back" onClick={() => navigate(-1)}>
                    <IoIosArrowBack size={30} color="#000" />
                </button>
                {product && (
                    <div className="product">
                        <img src={product.image_url} alt={`Imagem ${product.name}`} />
                        <div className="info">
                            <h1>{product.name}</h1>
                            <p>{product.category}</p>
                            <br />
                            <h2>{formatPriceAOA(product.price)}</h2>

                            <div style={{ marginTop: 20 }}>
                                <p>{product.description}</p>
                            </div>

                            <button onClick={() => add(product)}>Adicionar ao carrinho</button>
                        </div>
                    </div>
                )}
                <CustomFooter />
            </div>
        </>
    )
}