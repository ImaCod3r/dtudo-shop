import { categories } from "../constants";

const Categories = () => {

    return (
        <>
            <div className="categories">
                {categories.map((category, idx) => (
                    <button key={idx}>{category}</button>
                ))}
            </div>
        </>
    )
}

export default Categories;