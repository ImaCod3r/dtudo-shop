const Categories = () => {
    const categories = [
        "Todos",
        "Escritório",
        "Acessórios",
        "Electrônicos"
    ]

    return (
        <>
            <h2 className="subtitle">Categorias</h2>
            <div className="categories">
                {categories.map((category) => (
                    <button>{category}</button>
                ))}
            </div>
        </>
    )
}

export default Categories;