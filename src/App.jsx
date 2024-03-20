import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import CheckoutPage from "./pages/CheckoutPage";
import Address from "./pages/Address";
import ServiceDashboard from "./pages/serviceDashboard";
import AdminDashboard from "./pages/adminDashboard";
import OrderManage from "./pages/ordermanage";
import OrderPlace from "./components/OrderPlace";

const App = () => {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState("");
  const correctPassword = "helloadmin"; // Set your actual password here

  // Check if the entered password matches the correct password
  const checkPassword = () => {
    if (enteredPassword === correctPassword) {
      setIsAdminAuthenticated(true);
    } else {
      alert("Incorrect password. Please try again.");
    }
  };

  return (
    <div>
      <div className="bg-slate-900">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/address" element={<Address />} />
        <Route path="/service" element={<ServiceDashboard />} />
        <Route
          path="/admin"
          element={
            isAdminAuthenticated ? (
              <AdminDashboard />
            ) : (
              <div>
                <h1>Admin Login</h1>
                <input
                  type="password"
                  value={enteredPassword}
                  onChange={(e) => setEnteredPassword(e.target.value)}
                  placeholder="Enter Password"
                />
                <button onClick={checkPassword}>Submit</button>
              </div>
            )
          }
        />
        <Route path="/order" element={<OrderManage />} />
        <Route path="/orderplace" element={<OrderPlace />} />
      </Routes>
    </div>
  );
};

export default App;
