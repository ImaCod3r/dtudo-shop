import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomHeader from "./components/customHeader.jsx"
import Home from "./pages/Home.jsx";
import ProtectedRoute from "./auth/ProtectedRoute.jsx";
import Admin from "./pages/Admin.jsx";
import Login from "./pages/Login.jsx";

function App() {

  return (
    <>
      <CustomHeader />
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin/new" element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            } />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
