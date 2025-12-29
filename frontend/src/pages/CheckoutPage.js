import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Wallet, Building2, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/button';
import { toast } from 'sonner';

const CheckoutPage = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'razorpay',
  });

  const [isProcessing, setIsProcessing] = useState(false);

  const shipping = getCartTotal() > 999 ? 0 : 50;
  const discount = getCartTotal() > 1499 ? getCartTotal() * 0.1 : 0;
  const total = getCartTotal() + shipping - discount;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      const mockOrderId = 'ORDER' + Date.now();
      clearCart();
      setIsProcessing(false);
      toast.success('Order placed successfully!');
      navigate(`/order-success?orderId=${mockOrderId}`);
    }, 2000);
  };

  if (cartItems.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Checkout
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* FORM */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Shipping */}
              <div className="bg-white rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Shipping Information
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    ['name', 'Full Name'],
                    ['email', 'Email Address'],
                    ['phone', 'Phone Number'],
                    ['city', 'City'],
                    ['state', 'State'],
                    ['pincode', 'PIN Code'],
                  ].map(([key, label]) => (
                    <div key={key}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {label} *
                      </label>
                      <input
                        type="text"
                        name={key}
                        value={formData[key]}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                        style={{ borderColor: '#2C68B0' }}
                      />
                    </div>
                  ))}

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address *
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      rows="3"
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                      style={{ borderColor: '#2C68B0' }}
                    />
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div className="bg-white rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Payment Method
                </h2>

                <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer mb-3"
                  style={{ borderColor: '#2C68B0' }}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="razorpay"
                    checked={formData.paymentMethod === 'razorpay'}
                    onChange={handleChange}
                    className="mr-3"
                  />
                  <Wallet className="w-5 h-5 mr-3" style={{ color: '#2C68B0' }} />
                  Razorpay (UPI, Cards, Wallets)
                </label>

                <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer"
                  style={{ borderColor: '#2C68B0' }}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={handleChange}
                    className="mr-3"
                  />
                  <Building2 className="w-5 h-5 mr-3" style={{ color: '#2C68B0' }} />
                  Cash on Delivery
                </label>
              </div>

              <Button
                type="submit"
                disabled={isProcessing}
                className="w-full py-6 text-lg"
                style={{ backgroundColor: '#2C68B0' }}
              >
                {isProcessing ? 'Processing...' : `Place Order – ₹${total.toFixed(2)}`}
              </Button>
            </form>
          </div>

          {/* SUMMARY */}
          <div>
            <div className="bg-white rounded-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Order Summary
              </h2>

              <div className="space-y-3 border-t pt-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between">
                    <span>Discount</span>
                    <span>-₹{discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-lg font-bold pt-3 border-t">
                  <span>Total</span>
                  <span style={{ color: '#2C68B0' }}>
                    ₹{total.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="mt-6 space-y-2 text-sm text-gray-600">
                {['100% Secure Payment', '7 Days Easy Returns', 'Fast Delivery'].map(
                  (t) => (
                    <div key={t} className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" style={{ color: '#2C68B0' }} />
                      {t}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
