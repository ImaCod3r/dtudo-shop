import { Client, Account, Storage, ID, TablesDB, Query } from "appwrite";
import { createSlug } from "../utils";

const endpoint = import.meta.env.VITE_APPWRITE_ENDPOINT;
const project_id = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const bucket_id = import.meta.env.VITE_APPWRITE_BUCKET_ID;
const database_id = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const table_id = import.meta.env.VITE_APPWRITE_TABLE_ID;

const client = new Client()
  .setEndpoint(endpoint)
  .setProject(project_id);

const account = new Account(client);
const storage = new Storage(client);
const table = new TablesDB(client);

const handleProductSaving = async (form) => {
  await table.createRow({
    databaseId: database_id,
    tableId: table_id,
    rowId: ID.unique(),
    data: {
      name: form.name,
      price: +form.price,
      description: form.description,
      category: form.category,
      slug: createSlug(form.name),
      image_url: form.image_url
    }
  })
}

const listProducts = async () => {
  const response = await table.listRows({ databaseId: database_id, tableId: table_id });
  return response.rows || [];
}

const getProductBySlug = async (slug) => {
  const response = await table.listRows({databaseId: database_id, tableId: table_id, queries: [Query.equal("slug", slug)] })
  return response.rows || [];
}

const UpdateProduct = async (row_id, newProduct) => {
  const response = await table.updateRow({
    databaseId: database_id,
    tableId: table_id,
    rowId: row_id, data: {
      
    } });
}

export { account, handleProductSaving, listProducts, getProductBySlug };