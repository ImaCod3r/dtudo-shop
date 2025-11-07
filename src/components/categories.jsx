import { categories } from "../constants";

const Categories = ({ onSelect }) => {
    return (
        <>
            <div className="categories">
                {categories.map((category, idx) => (
                    <button key={idx} onClick={() => onSelect(category)}>{category}</button>
                ))}
            </div>
        </>
    )
}

export default Categories;