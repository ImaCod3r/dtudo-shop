import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import ProtectedRoute from "./auth/ProtectedRoute.jsx";
import Admin from "./pages/Admin.jsx";
import Login from "./pages/Login.jsx";
import Product from "./pages/Product.jsx";

function App() {

  return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin/" element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/produto/:slug" element={<Product />} />
          </Routes>
        </BrowserRouter>
  )
}

export default App;
