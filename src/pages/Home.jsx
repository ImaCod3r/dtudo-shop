import { useState, useEffect } from "react";

// Components
import Categories from "../components/categories.jsx";
import ProductCard from "../components/productCard.jsx";
import CustomHeader from "../components/customHeader.jsx";
import CustomFooter from "../components/customFooter.jsx";
import Spinner from "../components/loadingSpinner.jsx";

import { listProducts } from "../lib/appwrite.js";
import "../styles/Home.css";

function Home() {
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState("Todos")
    const [loading, setLoading] = useState(false);

    const handleFetchProducts = async () => {
        try {
            setLoading(true)
            const data = await listProducts();
            if(category !== "Todos") {
                const filtered = data.filter(item => item.category === category)
                setProducts(filtered);
            } else {
                setProducts(data);
            }
            setLoading(false);
        } catch {
            alert("Erro ao listar produtos.");
        }
    }

    useEffect(() => {
        handleFetchProducts();
    }, [category]);

    return (
        <>
            <CustomHeader />
            <main>
                <Categories onSelect={setCategory}/>
                <hr color="#f1f1f1" />
                <section className="products-grid">
                    {products.map((item) => (
                        <ProductCard name={item.name} key={item.$id} id={item.$id} slug={item.slug} price={item.price} image_url={item.image_url} />
                    ))}
                </section>

                <section>
                    <h2>Populares</h2>
                    <div className="products-grid">
                        {products.map((item) => (
                            <ProductCard name={item.name} key={item.$id} id={item.$id} slug={item.slug} price={item.price} image_url={item.image_url} />
                        ))}
                    </div>
                </section>
            </main>
            <CustomFooter />
        </>
    )
}

export default Home;