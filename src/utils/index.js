function createSlug(string) {
  return string
    .normalize("NFD")                         // separa acentos das letras
    .replace(/[\u0300-\u036f]/g, "")          // remove acentos
    .toLowerCase()                            // tudo em minúsculas
    .trim()                                   // remove espaços do início/fim
    .replace(/[^a-z0-9\s-]/g, "")             // remove caracteres especiais
    .replace(/\s+/g, "-")                     // troca espaços por hífen
    .replace(/-+/g, "-");                     // evita múltiplos hífens seguidos
}

function formatPriceAOA(valor) {
    return valor.toLocaleString('pt-AO', {
        style: 'currency',
        currency: 'AOA',
        minimumFractionDigits: 2
    });
}

export { createSlug, formatPriceAOA };