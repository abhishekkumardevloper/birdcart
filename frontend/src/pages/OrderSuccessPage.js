import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle, Package, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';

const OrderSuccessPage = () => {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('orderId');

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="max-w-md w-full mx-auto px-4">
        <div className="bg-white rounded-xl p-8 text-center shadow-lg">
          <div className="mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Placed Successfully!</h1>
            <p className="text-gray-600">Thank you for shopping with Birdcarts</p>
          </div>

          {orderId && (
            <div className="bg-emerald-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-600 mb-1">Order ID</p>
              <p className="font-mono font-bold text-emerald-600">{orderId}</p>
            </div>
          )}

          <div className="space-y-3 text-left mb-6">
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900">Order Confirmed</p>
                <p className="text-sm text-gray-600">You'll receive a confirmation email shortly</p>
              </div>
            </div>
            <div className="flex items-start">
              <Package className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900">Processing Your Order</p>
                <p className="text-sm text-gray-600">We'll notify you when it ships</p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700">
              <Link to="/orders">
                View Order Details <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link to="/products">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessPage;