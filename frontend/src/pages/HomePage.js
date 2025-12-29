import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Truck, ShieldCheck, HeadphonesIcon } from 'lucide-react';
import { Button } from '../components/ui/button';
import ProductCard from '../components/ProductCard';
import { products, categories, testimonials } from '../data/mock';

const HomePage = () => {
  const bestsellerProducts = products.filter(p => p.bestseller);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)' }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <span className="bg-white/20 text-white px-6 py-2 rounded-full text-sm font-medium border border-white/30">
              ✨ Wellness Products Since 2020
            </span>

            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Shop Quality Products
              <br />
              <span className="text-white/90">Fast Delivery Across India</span>
            </h1>

            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Birdcarts brings wellness to life – premium socks and orthopedic
              essentials designed for comfort and care.
            </p>

            <div className="flex gap-4 justify-center pt-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-emerald-600 hover:bg-gray-100 px-10 py-7 text-lg font-semibold shadow-xl"
              >
                <Link to="/products">
                  Shop Now <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="px-10 py-7 text-lg font-semibold border-2 border-white text-white hover:bg-white/10"
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
              {[
                ['1L+', 'Pairs Delivered'],
                ['7K+', 'Happy Customers'],
                ['300+', 'Cities'],
                ['4.8★', 'Rating'],
              ].map(([v, l]) => (
                <div key={l} className="text-center">
                  <p className="text-4xl font-bold text-white">{v}</p>
                  <p className="text-white/80 text-sm">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="border-y bg-white py-8">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            [Truck, 'Free Shipping', 'On orders ₹999+'],
            [ShieldCheck, 'Secure Payment', '100% Protected'],
            [HeadphonesIcon, '24/7 Support', 'Always here'],
            [ShoppingBag, 'Easy Returns', '7 Days Return'],
          ].map(([Icon, title, sub]) => (
            <div key={title} className="flex items-center gap-3">
              <div className="p-3 bg-emerald-100 rounded-lg">
                <Icon className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">{title}</p>
                <p className="text-sm text-gray-600">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Shop By Collection
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map(cat => (
              <Link
                key={cat.id}
                to={`/products?category=${cat.id}`}
                className="relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform"
                />
                <div className="absolute inset-0 bg-black/50 flex items-end p-6">
                  <h3 className="text-white font-bold">{cat.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between mb-12">
            <h2 className="text-4xl font-bold">Best Sellers</h2>
            <Button asChild variant="outline">
              <Link to="/products">
                View All <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestsellerProducts.slice(0, 4).map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            What Our Customers Say
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map(t => (
              <div
                key={t.id}
                className="p-6 rounded-xl border bg-emerald-50 border-emerald-100"
              >
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-gray-600 mb-2">{t.location}</p>
                <p className="italic text-gray-700">"{t.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-4xl font-bold">
            Ready to Experience Premium Comfort?
          </h2>
          <p className="text-gray-600 text-lg">
            Get FLAT 10% OFF + FREE GIFT on orders above ₹1499
          </p>
          <Button
            asChild
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white"
          >
            <Link to="/products">
              Start Shopping <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
