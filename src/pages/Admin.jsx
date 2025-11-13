import { useState, useEffect } from "react";
import "../styles/Admin.css";
import { categories } from "../constants";
import { saveProduct, listProducts, deleteProduct, updateProduct } from "../lib/appwrite";
import Modal from "../components/modal.jsx";
import { formatPriceAOA } from "../utils/index.js";

function Admin() {
    const [ModalState, setModalState] = useState(false);
    const [products, setProducts] = useState([]);
    const [formMode, setFormMode] = useState("save");
    const [target, setTarget] = useState({});

    const [form, setForm] = useState({
        name: '',
        image_url: '',
        category: '',
        price: 0,
        description: '',
        slug: ''
    });

    const fetchProducts = async () => {
        try {
            const data = await listProducts();
            setProducts(data);
        } catch {
            alert("Erro ao listar produtos");
        }
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setForm(f => ({ ...f, [name]: value }));
    }

    async function handleSave() {
        try {
            await saveProduct(form);

            setModalState(false);
            alert("Produto salvo com sucesso!");
            fetchProducts();
        } catch (error) {
            alert("Não foi possível salvar o produto!");
            console.error(error);
        }
    }

    async function handleDelete(item) {
        try {
            if (!confirm("Tem a certeza que deseja deletar este produto?")) return;
            await deleteProduct(item.$id);
            alert(`${item.name} deletado com sucesso!`);
            fetchProducts();
        } catch (error) {
            alert("Não foi possível deletar o produto!");
            console.error(error);
        }
    }

    async function handleEdit(item) {
        try {
            await updateProduct(item.$id, form);
            alert("Produto atualizado com sucesso!");
            setModalState(false);
            fetchProducts();
        } catch (error) {
            alert("Não foi possível atualizar o produto.");
            console.error(error);
        }
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        switch (formMode) {
            case "save":
                handleSave();
                break;
            case "edit":
                handleEdit(target);
                break;
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            <div className="btn-wrapper">
                <button onClick={() => setModalState(true)} className="new-product default-button">Novo Produto</button>
            </div>
            <Modal isOpen={ModalState} onClose={() => setModalState(false)}>
                <form onSubmit={(e) => handleFormSubmit(e)}>
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
                            onChange={handleChange}
                            value={form.image_url}
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
                            onChange={(e) => setForm(f => ({ ...f, price: parseInt(e.target.value, 10) || 0 }))}
                            required
                            min="0"
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
                    <button type="submit" className="default-button">Salvar</button>
                </form>
            </Modal>

            <table className="admin-table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Imagem</th>
                        <th>Categoria</th>
                        <th>Preço</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item, idx) => (
                        <tr key={idx}>
                            <td>{item.name}</td>
                            <td>
                                <img src={item.image_url} alt="Produto" style={{ width: 50, height: 50 }} />
                            </td>
                            <td>{item.category}</td>
                            <td>{formatPriceAOA(item.price)}</td>
                            <td>
                                <button onClick={() => {
                                    setForm(item);
                                    setFormMode("edit");
                                    setTarget(item);
                                    setModalState(true);
                                }}>Editar</button>
                                <button onClick={() => handleDelete(item)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Admin;