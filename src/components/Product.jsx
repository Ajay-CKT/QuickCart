import { useState } from "react";
import Rating from "./Rating";

const Product = ({ product, onAddToCart }) => {
  const [read, setRead] = useState(false);
  const handleRead = () => {
    setRead(!read);
  };
  return (
    <li
      key={product.id}
      className="relative flex flex-col justify-between mt-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96"
    >
      <div className="relative h-56 m-2.5 overflow-hidden rounded-md py-2 px-6 flex items-center justify-center hover:cursor-pointer">
        <img src={product.image} alt="card-image" className="w-[65%] h-full" />
      </div>
      <div className="p-4">
        <h6 className="mb-2 text-xl font-['Righteous'] hover:cursor-pointer hover:text-blue-800">
          {product.title}
        </h6>
        <p
          className="text-zinc-600 leading-normal text-sm font-light font-['Inter']"
          onClick={handleRead}
        >
          {read
            ? product.description
            : product.description.slice(0, 99) + "..."}
        </p>
        <Rating
          rate={product.rating.rate}
          count={product.rating.count}
          id={product.id}
        />
      </div>
      <div className="px-4 pb-4 pt-0 mt-2 flex justify-between font-['Inter']">
        <p>₹ {product.price}</p>
        <button
          className="font-['Poppins'] rounded-md bg-[#89023E] py-2 px-4 text-center text-sm text-white hover:shadow-md hover:bg-[#FFD9DA] hover:text-[#89023E] hover:border-[#89023E]"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </li>
  );
};

export default Product;
