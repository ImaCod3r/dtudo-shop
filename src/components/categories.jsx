import { categories } from "../constants";

const Categories = () => {

    return (
        <>
            <h2 className="subtitle">Categorias</h2>
            <div className="categories">
                {categories.map((category, idx) => (
                    <button key={idx}>{category}</button>
                ))}
            </div>
        </>
    )
}

export default Categories;