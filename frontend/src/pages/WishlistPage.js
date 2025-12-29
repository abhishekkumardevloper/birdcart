import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { Heart, Trash2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { toast } from 'sonner';

const WishlistPage = () => {
  const { wishlist, removeFromWishlist, addToCart } = useCart();
  const { isAuthenticated } = useAuth();

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success('Added to cart!');
  };

  const handleRemove = (productId) => {
    removeFromWishlist(productId);
    toast.info('Removed from wishlist');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <Heart className="w-24 h-24 mx-auto mb-6 text-gray-300" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Login to View Wishlist</h2>
          <p className="text-gray-600 mb-8">
            Please login to save and view your favorite products
          </p>
          <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
            <Link to="/login">Login Now</Link>
          </Button>
        </div>
      </div>
    );
  }

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <Heart className="w-24 h-24 mx-auto mb-6 text-gray-300" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Wishlist is Empty</h2>
          <p className="text-gray-600 mb-8">
            Start adding your favorite products to your wishlist
          </p>
          <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
            <Link to="/products">Browse Products</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          My Wishlist ({wishlist.length})
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden border hover:shadow-lg transition-shadow">
              <Link to={`/product/${product.id}`} className="block aspect-square bg-gray-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </Link>
              <div className="p-4">
                <Link
                  to={`/product/${product.id}`}
                  className="font-medium text-gray-900 hover:text-emerald-600 line-clamp-2 mb-2 block"
                >
                  {product.name}
                </Link>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={() => handleAddToCart(product)}
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700"
                    size="sm"
                  >
                    Add to Cart
                  </Button>
                  <Button
                    onClick={() => handleRemove(product.id)}
                    variant="outline"
                    size="sm"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;