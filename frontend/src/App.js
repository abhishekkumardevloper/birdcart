import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "sonner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderSuccessPage from "./pages/OrderSuccessPage";
import WishlistPage from "./pages/WishlistPage";
import LoginPage from "./pages/LoginPage";

// Placeholder components for static pages
const AboutPage = () => (
  <div className="container mx-auto px-4 py-16 max-w-4xl">
    <h1 className="text-4xl font-bold text-gray-900 mb-6">About Birdcarts</h1>
    <div className="prose max-w-none">
      <p className="text-lg text-gray-600 mb-4">
        Birdcarts brings you premium socks and orthopedic essentials designed for comfort, style, and foot health. 
        Crafted with quality materials and expert care, our products support every step you take.
      </p>
      <p className="text-gray-600 mb-4">
        We're committed to delivering comfort, durability, and customer care you can trust. Our mission is to make 
        wellness accessible to everyone through high-quality, affordable products.
      </p>
      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Promise</h2>
      <p className="text-gray-600 mb-4">
        We believe comfort is a right, not a luxury. That's why we use high-quality materials, ergonomic designs, 
        and expert craftsmanship to deliver products that truly care for your feet while matching your lifestyle.
      </p>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="container mx-auto px-4 py-16 max-w-4xl">
    <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
        <div className="space-y-3">
          <p><strong>Address:</strong><br />83/10, Chetan Vihar, Gopal Nagar Extension<br />Najafgarh, New Delhi-110043</p>
          <p><strong>Phone:</strong><br />+91 9546620662 / 9205330385</p>
          <p><strong>Email:</strong><br />support@birdcarts.com</p>
          <p><strong>Working Hours:</strong><br />Mon-Fri: 9AM-6PM<br />Sat-Sun: 10AM-4PM</p>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">Send us a Message</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded-lg" />
          <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border rounded-lg" />
          <textarea placeholder="Your Message" rows="4" className="w-full px-4 py-2 border rounded-lg"></textarea>
          <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700">Send Message</button>
        </form>
      </div>
    </div>
  </div>
);

const FAQPage = () => {
  const faqs = [
    { q: "What is the return policy?", a: "We offer a 7-day return policy for most products." },
    { q: "When will I get my order?", a: "Delivery typically takes 3-7 business days." },
    { q: "Do you offer Cash on Delivery (COD)?", a: "Yes, we offer COD for orders across India." },
    { q: "How do I track my order?", a: "You'll receive a tracking link via email and SMS once your order is shipped." }
  ];
  
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
            <p className="text-gray-600">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const TermsPage = () => (
  <div className="container mx-auto px-4 py-16 max-w-4xl">
    <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms & Conditions</h1>
    <div className="prose max-w-none text-gray-600">
      <p>By accessing and using Birdcarts website, you agree to be bound by these terms and conditions.</p>
      <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-3">Use of Website</h2>
      <p>You may use this website for lawful purposes only. You agree not to misuse the website or its content.</p>
      <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-3">Product Information</h2>
      <p>We strive to provide accurate product information. However, we do not warrant that product descriptions are error-free.</p>
    </div>
  </div>
);

const OrdersPage = () => (
  <div className="container mx-auto px-4 py-16">
    <h1 className="text-4xl font-bold text-gray-900 mb-6">My Orders</h1>
    <div className="bg-white rounded-lg p-12 text-center">
      <p className="text-gray-600 mb-4">You don't have any orders yet.</p>
      <a href="/products" className="text-emerald-600 hover:underline">Start Shopping</a>
    </div>
  </div>
);

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <div className="App">
            <Header />
            <main className="min-h-screen">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/product/:id" element={<ProductDetailPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/order-success" element={<OrderSuccessPage />} />
                <Route path="/wishlist" element={<WishlistPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/orders" element={<OrdersPage />} />
              </Routes>
            </main>
            <Footer />
            <Toaster position="top-center" richColors />
          </div>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
