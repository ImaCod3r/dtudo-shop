import { useState } from "react";
import { account } from "../lib/appwrite.js";
import "../styles/Login.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (email, password) => {
    // Simulate authentication process
    account.createEmailPasswordSession({ email, password })
      .then(response => {
        console.log("Login successful:", response);
        window.location.href = "/admin/new"; // Redirect to admin page on success
      })
      .catch(error => {
        console.error("Login failed:", error);
        alert("Falha no login. Verifique suas credenciais.");
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password); 
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
            required
          />
        </div>

        <div className="form-group">
          <label>Senha</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
            required
          />
        </div>

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}