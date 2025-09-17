import { useState, useEffect } from "react";
import Categories from "../components/categories.jsx";
import ProductCard from "../components/productCard.jsx";
import { listProducts } from "../lib/appwrite.js";
import "../styles/Home.css";

function Home() {
    const [products, setProducts] = useState([])
    const handleFetchProducts = async () => {
        try {
            const data = await listProducts();
            setProducts(data);
        } catch {
            alert("Erro ao listar produtos");
        }
    }

    useEffect(()=> {
        handleFetchProducts();
    }, [])

    return (
        <>
            <Categories />
            <main>
                <section className="products-grid">
                    {products.map((item, idx) => (
                        <ProductCard name={item.name} key={item.slug} price={item.price} image_url={item.image_url} />
                    ))}
                </section>

                <section>
                    <h2>Mais Vendidos</h2>
                    <div className="products-grid">
                        {products.map((item, idx) => (
                            <ProductCard name={item.name} key={item.slug} price={item.price} image_url={item.image_url} />
                        ))}
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home;