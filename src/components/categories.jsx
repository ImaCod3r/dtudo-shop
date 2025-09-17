import { categories } from "../constants";
import { useState } from "react";

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