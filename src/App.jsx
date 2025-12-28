import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Premium from "./pages/Premium";
import Payment from "./pages/Payment";
import PaymentResult from "./pages/PaymentResult";
import ResetPassword from "./pages/ResetPassword";
import Privacy from "./pages/Privacy";
import Kvkk from "./pages/Kvkk";
import Terms from "./pages/Terms";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/odeme" element={<Payment />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

        <Route path="/gizlilik" element={<Privacy />} />
        <Route path="/kvkk" element={<Kvkk />} />
        <Route path="/kullanim-kosullari" element={<Terms />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
