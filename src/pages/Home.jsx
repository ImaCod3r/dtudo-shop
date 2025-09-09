import Categories from "../components/categories.jsx";
import ProductCard from "../components/productCard.jsx";

function Home() {
    const MockedProducts = [
        {
            name: "Produto 1",
            price: 29000,
            image: "https://b2bleonorashop.vtexassets.com/arquivos/ids/160885/headset-gamer-p3-line-letron-74429---1.png?v=637991896972170000"
        }
    ]

    return (
        <>
            <Categories />
            <main>
                <section className="products-grid">
                    {MockedProducts.map((item, idx) => (
                        <ProductCard name={item.name} id={idx} price={item.price} image={item.image} />
                    ))}
                </section>

                <section>
                    <h2>Mais Vendidos</h2>
                    <div className="products-grid">
                        {MockedProducts.map((item, idx) => (
                            <ProductCard name={item.name} id={idx} price={item.price} image={item.image} />
                        ))}
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home;