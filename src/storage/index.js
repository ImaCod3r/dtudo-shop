const storage_key = "@dtudo_cart";

export const addToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem(storage_key)) || [];
    cart.push(item);
    localStorage.setItem(storage_key, JSON.stringify(cart));
};

export const listItems = () => {
    const data = JSON.parse(localStorage.getItem(storage_key));
    return data;
}