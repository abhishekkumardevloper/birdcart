// Mock data for Birdcarts E-commerce

export const categories = [
  { id: 'socks', name: 'Socks Collection', image: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=600&q=80' },
  { id: 'orthopedic', name: 'Orthopedic Support', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80' },
  { id: 'wellness', name: 'Wellness Products', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80' },
  { id: 'accessories', name: 'Accessories', image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&q=80' },
];

export const products = [
  {
    id: 'prod-1',
    name: 'Bamboo Diabetic Socks - 1 Pair',
    category: 'socks',
    price: 479,
    originalPrice: 799,
    rating: 4.8,
    reviews: 245,
    image: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=800&q=80',
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&q=80',
      'https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?w=800&q=80'
    ],
    description: 'Experience the benefits of bamboo diabetic socks for a healthier life. Crafted from eco-friendly bamboo, these socks offer superior breathability, moisture-wicking, and antimicrobial properties.',
    features: [
      'Made from premium bamboo fabric',
      'Excellent moisture-wicking properties',
      'Antimicrobial and odor-resistant',
      'Non-binding top for better circulation',
      'Seamless toe design prevents irritation'
    ],
    inStock: true,
    bestseller: true
  },
  {
    id: 'prod-2',
    name: 'Sports Socks - 3 Pairs',
    category: 'socks',
    price: 399,
    originalPrice: 1497,
    rating: 4.6,
    reviews: 189,
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&q=80',
      'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=800&q=80'
    ],
    description: 'High-performance sports socks designed for active lifestyles. Provides excellent cushioning, arch support, and moisture management.',
    features: [
      'Pack of 3 pairs',
      'Extra cushioning for impact protection',
      'Arch compression support',
      'Breathable mesh panels',
      'Available in multiple colors'
    ],
    inStock: true,
    bestseller: true
  },
  {
    id: 'prod-3',
    name: 'Ankle Ribbed Socks - 2 Pair',
    category: 'socks',
    price: 269,
    originalPrice: 998,
    rating: 4.5,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?w=800&q=80',
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&q=80'
    ],
    description: 'Stylish ribbed ankle socks perfect for daily wear. Soft, comfortable, and durable construction.',
    features: [
      'Classic ribbed design',
      'Comfortable ankle length',
      'Soft cotton blend',
      'Reinforced heel and toe',
      'Pack of 2 pairs'
    ],
    inStock: true,
    bestseller: false
  },
  {
    id: 'prod-4',
    name: 'Knee Cap Support',
    category: 'orthopedic',
    price: 279,
    originalPrice: 499,
    rating: 4.7,
    reviews: 203,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=800&q=80'
    ],
    description: 'Premium knee cap for joint support and pain relief. Ideal for sports, arthritis, and post-injury recovery.',
    features: [
      'Adjustable compression',
      'Breathable neoprene material',
      'Non-slip silicone grip',
      'Suitable for all activities',
      'Available in multiple sizes'
    ],
    inStock: true,
    bestseller: true
  },
  {
    id: 'prod-5',
    name: 'Cervical Collar Belt',
    category: 'orthopedic',
    price: 349,
    originalPrice: 599,
    rating: 4.6,
    reviews: 178,
    image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=800&q=80'
    ],
    description: 'Orthopedic cervical collar for neck support and pain relief. Helps maintain proper neck alignment.',
    features: [
      'Ergonomic design',
      'Adjustable height',
      'Soft foam padding',
      'Washable cover',
      'Universal size'
    ],
    inStock: true,
    bestseller: false
  },
  {
    id: 'prod-6',
    name: 'Posture Corrector Belt',
    category: 'orthopedic',
    price: 649,
    originalPrice: 999,
    rating: 4.8,
    reviews: 267,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80'
    ],
    description: 'Adjustable posture corrector for improved alignment and reduced back pain. Comfortable for all-day wear.',
    features: [
      'Adjustable shoulder straps',
      'Breathable material',
      'Invisible under clothing',
      'Helps reduce slouching',
      'Suitable for men and women'
    ],
    inStock: true,
    bestseller: true
  },
  {
    id: 'prod-7',
    name: 'Ankle Support Brace',
    category: 'orthopedic',
    price: 279,
    originalPrice: 499,
    rating: 4.5,
    reviews: 145,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80'
    ],
    description: 'Ankle support brace for stability and injury prevention. Ideal for sports and daily activities.',
    features: [
      'Figure-8 strapping system',
      'Lightweight and breathable',
      'Adjustable compression',
      'Fits left or right foot',
      'Available in multiple sizes'
    ],
    inStock: true,
    bestseller: false
  },
  {
    id: 'prod-8',
    name: 'Wrist Band Double Lock',
    category: 'orthopedic',
    price: 199,
    originalPrice: 399,
    rating: 4.4,
    reviews: 98,
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&q=80'
    ],
    description: 'Double lock wrist band for carpal tunnel relief and wrist support. Perfect for typing and repetitive activities.',
    features: [
      'Double lock system',
      'Removable metal splint',
      'Adjustable velcro straps',
      'Breathable fabric',
      'One size fits most'
    ],
    inStock: true,
    bestseller: false
  },
  {
    id: 'prod-9',
    name: 'Silicon Gel Heel Care Socks',
    category: 'wellness',
    price: 249,
    originalPrice: 499,
    rating: 4.7,
    reviews: 189,
    image: 'https://images.unsplash.com/photo-1584865482513-b899be05184c?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1584865482513-b899be05184c?w=800&q=80'
    ],
    description: 'Anti-crack heel care socks with silicon gel for soft, moisturized feet. Best foot care solution.',
    features: [
      'Medical grade silicon gel',
      'Heals cracked heels',
      'Moisturizes naturally',
      'Reusable and washable',
      'Unisex design'
    ],
    inStock: true,
    bestseller: false
  },
  {
    id: 'prod-10',
    name: 'Therapeutic Gel Stress Balls',
    category: 'wellness',
    price: 349,
    originalPrice: 699,
    rating: 4.6,
    reviews: 134,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80'
    ],
    description: 'Therapeutic gel stress balls for hand exercise and stress relief. Wellness & recovery tool.',
    features: [
      'Soft gel construction',
      'Multiple resistance levels',
      'Improves grip strength',
      'Portable and easy to use',
      'Set of 3 balls'
    ],
    inStock: true,
    bestseller: false
  },
  {
    id: 'prod-11',
    name: 'Knee Support Pillow',
    category: 'wellness',
    price: 845,
    originalPrice: 1299,
    rating: 4.8,
    reviews: 210,
    image: 'https://images.unsplash.com/photo-1584865482513-b899be05184c?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1584865482513-b899be05184c?w=800&q=80'
    ],
    description: 'Premium orthopedic knee support pillow for pain relief. Ideal for legs, hips & lower back.',
    features: [
      'Memory foam construction',
      'Ergonomic contour design',
      'Breathable cover',
      'Reduces pressure points',
      'Machine washable cover'
    ],
    inStock: true,
    bestseller: false
  },
  {
    id: 'prod-12',
    name: 'Cervical Pillow Contoured',
    category: 'wellness',
    price: 1199,
    originalPrice: 1999,
    rating: 4.9,
    reviews: 289,
    image: 'https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?w=800&q=80'
    ],
    description: 'Premium neck support pillow for pain relief & better sleep. Contoured design for optimal alignment.',
    features: [
      'Cervical contour design',
      'Memory foam core',
      'Hypoallergenic cover',
      'Improves sleep quality',
      'Reduces neck pain'
    ],
    inStock: true,
    bestseller: true
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Rohit Sharma',
    location: 'Mumbai, Maharashtra',
    rating: 5,
    comment: 'The bamboo diabetic socks are super soft and perfect for my diabetic feet. Love the comfort!',
    image: 'https://i.pravatar.cc/150?img=12'
  },
  {
    id: 2,
    name: 'Neha Mehta',
    location: 'Delhi, NCR',
    rating: 4,
    comment: 'No more cracked heels! These silicone socks worked wonders. Highly recommend!',
    image: 'https://i.pravatar.cc/150?img=5'
  },
  {
    id: 3,
    name: 'Prakash Desai',
    location: 'Pune, Maharashtra',
    rating: 5,
    comment: 'I gifted a pair to my father — he absolutely loves the comfort and quality.',
    image: 'https://i.pravatar.cc/150?img=33'
  },
  {
    id: 4,
    name: 'Anjali Verma',
    location: 'Bangalore, Karnataka',
    rating: 5,
    comment: 'The knee cap support is excellent! Helped me get back to my morning runs.',
    image: 'https://i.pravatar.cc/150?img=9'
  },
  {
    id: 5,
    name: 'Rajesh Kumar',
    location: 'Hyderabad, Telangana',
    rating: 4,
    comment: 'Great quality products at affordable prices. Fast delivery too!',
    image: 'https://i.pravatar.cc/150?img=15'
  }
];

export const faqs = [
  {
    question: 'What is the return policy?',
    answer: 'Our goal is for every customer to be totally satisfied with their purchase. If this isn\'t the case, let us know and we\'ll do our best to work with you to make it right. We offer a 7-day return policy for most products.'
  },
  {
    question: 'Are any purchases final sale?',
    answer: 'We are unable to accept returns on certain items like opened hygiene products and customized items. These will be clearly marked before purchase.'
  },
  {
    question: 'When will I get my order?',
    answer: 'We work quickly to ship your order as soon as possible. Once your order has shipped, you will receive an email with tracking information. Delivery typically takes 3-7 business days depending on your location.'
  },
  {
    question: 'Where are your products manufactured?',
    answer: 'Our products are manufactured both locally and globally. We carefully select our manufacturing partners to ensure our products are high quality and a fair value.'
  },
  {
    question: 'How much does shipping cost?',
    answer: 'We offer free shipping on orders above ₹999. For orders below that, shipping charges are calculated based on your location and will be shown at checkout.'
  },
  {
    question: 'Do you offer Cash on Delivery (COD)?',
    answer: 'Yes, we offer COD for orders across India. A nominal COD charge may apply depending on the order value.'
  },
  {
    question: 'Are your products suitable for diabetic patients?',
    answer: 'Yes! Our bamboo diabetic socks are specifically designed for diabetic patients with features like non-binding tops, seamless toes, and moisture-wicking fabric.'
  },
  {
    question: 'How do I track my order?',
    answer: 'Once your order is shipped, you\'ll receive a tracking link via email and SMS. You can also track your order by logging into your account on our website.'
  }
];