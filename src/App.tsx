import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "../src/components/ProductDetails";
import ProductInfo from "./pages/ProductInfoPage";
import Layout from "./components/layout/layout";
import Home from "./pages/Home";
import SalesRepDashboard from "./pages/DashboardPage";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} />
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductInfo />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/dashboard" element={<SalesRepDashboard />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
