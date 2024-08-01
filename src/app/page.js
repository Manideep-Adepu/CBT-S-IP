"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from '../app/products/loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from "next/navigation";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchStr, setSearchStr] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();
  const slides = [
    './carousel1.jpg', // Replace with your image paths
    './carousel2.png',
    './carousel3.jpg'
  ];
  const defaultImage = './default.png';

  useEffect(() => {
    console.log('Component mounted');
    getProducts();

    // Set up the automatic slide transition
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 3 seconds

    // Clear interval on component unmount
    return () => clearInterval(slideInterval);
  }, [slides.length]);

  useEffect(() => {
    if (searchStr.length > 1) {
      const timer = setTimeout(() => {
        const temp = products.filter(product =>
          product.name.toLowerCase().includes(searchStr.toLowerCase())
        );
        setFilteredProducts(temp);
      }, 500);

      return () => clearTimeout(timer);
    } else {
      setFilteredProducts(products);
    }
  }, [searchStr, products]);

  const getProducts = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products/categories');
      console.log(response.data);
      setProducts(response.data);
      setFilteredProducts(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  if (isLoading) {
    return <Loader />;
  }
  const redirectTo = ()=> {
    router.push('/products');
    return null;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Categories</h1>
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

      {/* Carousel */}
      <div className="relative mb-8">
        <div className="relative w-full overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((src, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <Image
                  className="w-full h-64 object-cover"
                  src={src}
                  alt={`Carousel Image ${index + 1}`}
                  width={800}
                  height={400}
                />
              </div>
            ))}
          </div>
          <button
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
            onClick={prevSlide}
          >
            &lt;
          </button>
          <button
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
            onClick={nextSlide}
          >
            &gt;
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        {filteredProducts.map((product, index) => (
          <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
            <Image
              className="w-full h-48 object-cover"
              src={defaultImage}
              alt={product.name}
              width={400}
              height={300}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{product.name}</div>
              <p className="text-gray-600 text-base">
                Slug: {product.slug}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-end">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=> redirectTo()}>
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
