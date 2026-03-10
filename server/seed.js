import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Products from './models/productModel.js';

dotenv.config();

const mockProducts = [
    // Men's Shoes
    {
        img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
        brand: 'Nike',
        title: 'Nike Air Max 270',
        rating: 4.5,
        reviews: 1280,
        sellPrice: 129,
        orders: '3200',
        mrp: '160',
        discount: 19,
        category: 'men',
    },
    {
        img: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500',
        brand: 'Adidas',
        title: 'Adidas Ultraboost 22',
        rating: 4.7,
        reviews: 2140,
        sellPrice: 149,
        orders: '5100',
        mrp: '190',
        discount: 22,
        category: 'men',
    },
    {
        img: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500',
        brand: 'Puma',
        title: 'Puma RS-X Bold',
        rating: 4.2,
        reviews: 870,
        sellPrice: 99,
        orders: '1500',
        mrp: '120',
        discount: 18,
        category: 'men',
    },
    {
        img: 'https://images.unsplash.com/photo-1556906781-9a412961d28a?w=500',
        brand: 'New Balance',
        title: 'New Balance 574 Classic',
        rating: 4.6,
        reviews: 1950,
        sellPrice: 89,
        orders: '4200',
        mrp: '110',
        discount: 19,
        category: 'men',
    },
    {
        img: 'https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?w=500',
        brand: 'Reebok',
        title: 'Reebok Classic Leather',
        rating: 4.3,
        reviews: 660,
        sellPrice: 79,
        orders: '2100',
        mrp: '95',
        discount: 17,
        category: 'men',
    },

    // Women's Shoes
    {
        img: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=500',
        brand: 'Nike',
        title: 'Nike Air Force 1 Shadow',
        rating: 4.8,
        reviews: 3200,
        sellPrice: 109,
        orders: '8700',
        mrp: '130',
        discount: 16,
        category: 'women',
    },
    {
        img: 'https://images.unsplash.com/photo-1581101767113-1677fc2beaa8?w=500',
        brand: 'Adidas',
        title: 'Adidas Stan Smith',
        rating: 4.6,
        reviews: 4100,
        sellPrice: 89,
        orders: '9400',
        mrp: '110',
        discount: 19,
        category: 'women',
    },
    {
        img: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500',
        brand: 'Vans',
        title: "Vans Old Skool Women's",
        rating: 4.5,
        reviews: 2780,
        sellPrice: 69,
        orders: '6200',
        mrp: '85',
        discount: 19,
        category: 'women',
    },
    {
        img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500',
        brand: 'Converse',
        title: 'Converse Chuck Taylor All Star',
        rating: 4.4,
        reviews: 5600,
        sellPrice: 59,
        orders: '12000',
        mrp: '75',
        discount: 21,
        category: 'women',
    },
    {
        img: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=500',
        brand: 'Skechers',
        title: "Skechers D'Lites Memory Foam",
        rating: 4.3,
        reviews: 1890,
        sellPrice: 75,
        orders: '3300',
        mrp: '95',
        discount: 21,
        category: 'women',
    },

    // Kids' Shoes
    {
        img: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=500',
        brand: 'Nike',
        title: 'Nike Flex Runner Kids',
        rating: 4.7,
        reviews: 980,
        sellPrice: 55,
        orders: '2800',
        mrp: '70',
        discount: 21,
        category: 'kids',
    },
    {
        img: 'https://images.unsplash.com/photo-1507464098880-e367bc5d2c08?w=500',
        brand: 'Adidas',
        title: 'Adidas Fortarun Kids',
        rating: 4.5,
        reviews: 720,
        sellPrice: 49,
        orders: '1900',
        mrp: '65',
        discount: 25,
        category: 'kids',
    },
    {
        img: 'https://images.unsplash.com/photo-1593081891731-fda0877988da?w=500',
        brand: 'Puma',
        title: 'Puma Anzarun Kids',
        rating: 4.4,
        reviews: 430,
        sellPrice: 44,
        orders: '1100',
        mrp: '58',
        discount: 24,
        category: 'kids',
    },
    {
        img: 'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=500',
        brand: 'New Balance',
        title: 'New Balance 680 Kids',
        rating: 4.6,
        reviews: 560,
        sellPrice: 52,
        orders: '1400',
        mrp: '68',
        discount: 24,
        category: 'kids',
    },
    {
        img: 'https://images.unsplash.com/photo-1471896432881-fbf56f4ef1cf?w=500',
        brand: 'Skechers',
        title: 'Skechers Nitro Sprint Kids',
        rating: 4.3,
        reviews: 390,
        sellPrice: 42,
        orders: '900',
        mrp: '55',
        discount: 24,
        category: 'kids',
    },
];

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');

        await Products.deleteMany({});
        console.log('Cleared existing products');

        await Products.insertMany(mockProducts);
        console.log(`✅ Seeded ${mockProducts.length} products successfully!`);

        await mongoose.disconnect();
        console.log('Disconnected from MongoDB');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error.message);
        process.exit(1);
    }
};

seedDB();
