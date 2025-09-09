function createSlug(string) {
    const formatedString = string.replace(" ", "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return formatedString;
}

function formatPriceAOA(valor) {
    return valor.toLocaleString('pt-AO', {
        style: 'currency',
        currency: 'AOA',
        minimumFractionDigits: 2
    });
}

export { createSlug, formatPriceAOA };