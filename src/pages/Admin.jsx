import { useState } from "react";
import "../styles/Admin.css";
import { categories } from "../constants";
import { handleProductSaving } from "../lib/appwrite";

function Admin() {
    const [form, setForm] = useState({
        name: '',
        image_url: '',
        category: '',
        price: '',
        description: ''
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setForm(f => ({ ...f, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        handleProductSaving(form);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>
                    Nome
                </label>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>
                    URL da imagem
                </label>
                <input
                    type="text"
                    name="image_url"
                />
            </div>
            <div className="form-group">
                <label>
                    Categoria
                </label>
                <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select category</option>
                    {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
            </div>
            <div className="form-group">
                <label>
                    Preço
                </label>
                <input
                    type="number"
                    name="price"
                    value={form.price}
                    onChange={handleChange}
                    required
                    min="0"
                    step="0.01"
                />
            </div>
            <div className="form-group">
                <label>
                    Descrição
                </label>
                <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Salvar</button>
        </form>
    );
}

export default Admin;