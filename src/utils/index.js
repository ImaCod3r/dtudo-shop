function createSlug(string) {
    const formatedString = string.replace(" ", "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return formatedString;
}

export { createSlug }