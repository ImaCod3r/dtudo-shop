const storage_key = "@dtudo_cart";

export const addToCart = (item) => {
  const cart = JSON.parse(localStorage.getItem(storage_key)) || [];
  const existingItem = cart.find(cartItem => cartItem.slug === item.slug);

  if (existingItem) {
    existingItem.quantity = (existingItem.quantity || 1) + 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }
  localStorage.setItem(storage_key, JSON.stringify(cart));
};

export const listItems = () => {
    const data = JSON.parse(localStorage.getItem(storage_key));
    return data;
};

export const deleteItem = (idx) => {
    const data = JSON.parse(localStorage.getItem(storage_key));
    const updatedData = data.filter((element) => data.indexOf(element) !== idx);
    localStorage.setItem(storage_key, JSON.stringify(updatedData));
};