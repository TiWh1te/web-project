import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrderForm from "../pages/OrderForm/OrderForm.jsx";
import OrderSummary from "../pages/OrderSummary/OrderSummary.jsx";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OrderForm />} />
        <Route path="/order-summary" element={<OrderSummary />} />
      </Routes>
    </BrowserRouter>
  );
}
