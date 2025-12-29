import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/button';
import { toast } from 'sonner';

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();
  const navigate = useNavigate();

  const shipping = getCartTotal() > 999 ? 0 : 50;
  const discount = getCartTotal() > 1499 ? getCartTotal() * 0.1 : 0;
  const total = getCartTotal() + shipping - discount;

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.error('Your cart is empty!');
      return;
    }
    navigate('/checkout');
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <ShoppingBag className="w-24 h-24 mx-auto mb-6 text-gray-300" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h2>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added anything to your cart yet. Start shopping now!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700"
          >
            <Link to="/products">
              Start Shopping <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg p-6 flex flex-col sm:flex-row gap-6 hover:shadow-md transition-shadow"
              >
                {/* Image */}
                <Link
                  to={`/product/${item.id}`}
                  className="flex-shrink-0 w-full sm:w-32 h-32 bg-gray-100 rounded-lg overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </Link>

                {/* Details */}
                <div className="flex-1 space-y-2">
                  <Link
                    to={`/product/${item.id}`}
                    className="font-semibold text-gray-900 hover:text-emerald-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-gray-900">₹{item.price}</span>
                    {item.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        ₹{item.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-gray-50 transition-colors"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-gray-50 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <button
                      onClick={() => {
                        removeFromCart(item.id);
                        toast.success('Removed from cart');
                      }}
                      className="text-red-500 hover:text-red-600 transition-colors flex items-center gap-1"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span className="text-sm">Remove</span>
                    </button>
                  </div>
                </div>

                {/* Subtotal */}
                <div className="text-right">
                  <p className="text-sm text-gray-600 mb-1">Subtotal</p>
                  <p className="text-xl font-bold text-gray-900">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">₹{getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    {shipping === 0 ? (
                      <span className="text-green-600">FREE</span>
                    ) : (
                      `₹${shipping}`
                    )}
                  </span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount (10%)</span>
                    <span className="font-medium">-₹{discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-emerald-600">₹{total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Promotions */}
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-4 mb-6">
                {getCartTotal() > 1499 ? (
                  <p className="text-sm text-emerald-700 font-medium">
                    🎉 You're getting 10% OFF + FREE GIFT!
                  </p>
                ) : getCartTotal() > 999 ? (
                  <p className="text-sm text-emerald-700">
                    ✓ Free shipping unlocked! Add ₹{(1499 - getCartTotal()).toFixed(2)} more for 10% OFF + FREE GIFT
                  </p>
                ) : (
                  <p className="text-sm text-gray-700">
                    Add ₹{(999 - getCartTotal()).toFixed(2)} more for FREE shipping
                  </p>
                )}
              </div>

              <Button
                onClick={handleCheckout}
                className="w-full bg-emerald-600 hover:bg-emerald-700 py-6 text-lg"
              >
                Proceed to Checkout <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                asChild
                variant="outline"
                className="w-full mt-3"
              >
                <Link to="/products">Continue Shopping</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
