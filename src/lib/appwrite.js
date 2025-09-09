import { Client, Account } from "appwrite";

const endpoint = import.meta.env.VITE_APPWRITE_ENDPOINT;
const project_id = import.meta.env.VITE_APPWRITE_PROJECT_ID;

const client = new Client()
  .setEndpoint(endpoint) 
  .setProject(project_id);
const account = new Account(client);

export { account };