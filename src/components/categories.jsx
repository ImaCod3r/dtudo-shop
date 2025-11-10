import { useState } from "react";
import { categories } from "../constants";

const Categories = ({ onSelect }) => {
  const [active, setActive] = useState(null);

  const handleClick = (category) => {
    setActive(category);
    onSelect(category);
  };

  return (
    <div className="categories">
      {categories.map((category, idx) => (
        <button
          key={idx}
          onClick={() => handleClick(category)}
          className={active === category ? "active" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;