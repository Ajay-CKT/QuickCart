import { useState } from "react";

const Cart = ({ cartItems, handleCartClick }) => {
  const [hovered, setHovered] = useState("");
  const handleMouseEnter = (cart) => setHovered(cart);
  const handleMouseLeave = () => setHovered("");
  return (
    <div className="flex justify-around items-center">
      <div
        className="social-media-btns relative"
        onMouseEnter={() => handleMouseEnter("cart")}
        onMouseLeave={handleMouseLeave}
        onClick={handleCartClick}
      >
        <img
          src={hovered === "cart" ? "/cart.gif" : "/cart.png"}
          alt="Facebook"
          className="size-8"
        />
        <div className="absolute right-[-5px] top-0 bg-[#89023E] size-6 flex items-center justify-center text-white font-['Righteous'] rounded-full">
          <span className="text-sm">{cartItems.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
