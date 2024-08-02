"use client";
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faSearch, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Loader from '../products/loader';
import { CartContext } from '../CartContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function ProductList() {
    const [productList, setProductList] = useState([]);
    const [filteredProductList, setFilteredProductList] = useState([]);
    const [searchStr, setSearchStr] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const { addToCart } = useContext(CartContext);
    const electronicImg = './images/electronicImg.png';
    const router = useRouter();

    useEffect(() => {
        console.log("Component mounted");
        getAllProducts();
    }, []);

    useEffect(() => {
        if (searchStr.length > 1) {
            const timer = setTimeout(() => {
                const temp = productList.filter(product =>
                    product.name.toLowerCase().includes(searchStr.toLowerCase())
                );
                setFilteredProductList(temp);
            }, 500);

            return () => clearTimeout(timer);
        } else {
            setFilteredProductList(productList);
        }
    }, [searchStr, productList]);

    const getAllProducts = async () => {
        try {
            const response = await axios.get('https://dummyapi.online/api/products');
            console.log("API response:", response.data);
            setProductList(response.data);
            setFilteredProductList(response.data); // Set filtered list on successful fetch
            setIsLoading(false);
        } catch (error) {
            console.log("Error fetching data:", error);
            setIsLoading(false);
        }
    };

    const handleAddToCart = (product) => {
        addToCart(product);
        toast.success(`${product.name} added to cart!`);
    };

    const moveToCart = () => {
        router.push('/cart');
        return null;
    };

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-6 text-center">Electronic Gadgets</h1>
            <div className="flex justify-center mb-4">
                <div className="relative w-3/4 md:w-1/2">
                    <input
                        className="shadow appearance-none border rounded-lg w-full py-1 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
                        type="text"
                        placeholder="Search product"
                        value={searchStr}
                        onChange={event => setSearchStr(event.target.value)}
                    />
                    <FontAwesomeIcon
                        icon={faSearch}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    />
                </div>
            </div>
            <div className="flex flex-wrap justify-center">
                {filteredProductList.map(product => (
                    <div key={product.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
                        <Image className="w-full" src={electronicImg} alt={product.name} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{product.name}</div>
                            <p className="text-gray-700 text-base">
                                Category: {product.productCategory}
                            </p>
                            <p className="text-gray-700 text-base">
                                Price: ${product.basePrice}
                            </p>
                            <p className="text-gray-700 text-base">
                                Description: {product.description}
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2 flex justify-between items-center">
                            <button
                                className="border-2 border-blue-500 text-blue-500 font-bold p-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300"
                                onClick={() => handleAddToCart(product)}
                            >
                                <FontAwesomeIcon icon={faCartPlus} />Add to Cart
                            </button>
                            <button
                                className="border-2 border-green-500 text-green-500 font-bold py-2 px-4 rounded-full hover:bg-green-500 hover:text-white transition-colors duration-300"
                                onClick={() => moveToCart()}
                            >
                                <FontAwesomeIcon icon={faCartShopping} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;
