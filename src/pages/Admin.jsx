import { useState, useEffect } from "react";
import "../styles/Admin.css";
import { categories } from "../constants";
import { saveProduct, listProducts, deleteProduct } from "../lib/appwrite";
import Modal from "../components/modal.jsx";
import { formatPriceAOA } from "../utils/index.js";

function Admin() {
    const [ModalState, setModalState] = useState(false);
    const [products, setProducts] = useState([]);

    const [form, setForm] = useState({
        name: '',
        image_url: '',
        category: '',
        price: '',
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

    function handleSave(form) {
        saveProduct(form);
        setModalState(false)
    }

    async function handleDelete(item) {
        try {
            if(!confirm("Tem a certeza que deseja deletar este produto?")) return;
            await deleteProduct(item.$id);
            alert(`${item.name} deletado com sucesso!`);
            fetchProducts();
        } catch(error) {
            alert("Não foi possível deletar o produto!");
            console.error(error);
        }
    }

    // async function handleEditProduct(id) {
    //     const data = await fetchProducts();
    //     const filtered = data?.filter(item => item.$id === id)[0];
    //     console.log(filtered)

    //     setForm(filtered);

    //     setModalState(true);
    // }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            <div className="btn-wrapper">
                <button onClick={() => setModalState(true)} className="new-product default-button">Novo Produto</button>
            </div>
            <Modal isOpen={ModalState} onClose={() => setModalState(false)}>
                <form onSubmit={handleSave}>
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
                    <button className="default-button" onClick={() => handleSave(form)}>Salvar</button>
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
                                <button>Editar</button>
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