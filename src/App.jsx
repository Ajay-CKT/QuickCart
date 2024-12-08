import { useEffect, useState } from "react";
import CartPage from "./components/CartPage";
import Product from "./components/Product";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import "./App.css";

const App = () => {
  const fakeStoreURL = "https://fakestoreapi.com/products/";
  const [productsArr, setProductsArr] = useState([]);
  const [categories, setCategories] = useState("all");
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartViewToggle, setCartViewToggle] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(fakeStoreURL);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProductsArr(data);
        setLoading(false);
      } catch (error) {
        setLoading(true);
        console.error("Error fetching data: ", error);
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  const handleAddToCart = (product) => {
    const isProductInCart = cartItems.find((item) => item.id === product.id);
    isProductInCart
      ? alert("Item already added to the cart")
      : setCartItems([...cartItems, product]);
  };

  const handleRemoveFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  const handleCartClick = () => setCartViewToggle(!cartViewToggle);

  return (
    <>
      {/* Hedear */}
      <header className="flex justify-between items-center py-4 pl-2 pr-4 border-b border-[#89023e]">
        <div className="flex items-center gap-4">
          <img src="/quickCart.png" alt="" className="size-12" />
          <h1 className="text-3xl font-['Righteous'] text-[#89023E]">
            QuickCart
          </h1>
        </div>
        <Cart
          cartItems={cartItems}
          onRemove={handleRemoveFromCart}
          handleCartClick={handleCartClick}
        />
      </header>

      {/* Products */}
      {cartViewToggle ? (
        <section className="bg-[hsl(11,48%,95%)] flex flex-col items-center py-4">
          <div className="font-['Quicksand'] mt-2">
            <select
              name={categories}
              onChange={(e) => setCategories(e.target.value)}
              defaultValue={categories}
              id="category-select"
              className="rounded-md bg-[#FFD9DA] hover:bg-[#ffccce] text-center outline-none py-2 md:py-1 px-2 md:px-0 text-sm"
            >
              <option value="all">Select all category</option>
              <option value="men's clothing">Men&lsquo;s Clothings</option>
              <option value="women's clothing">Women&lsquo;s Clothings</option>
              <option value="jewelery">Jewelery</option>
              <option value="electronics">Electronics</option>
            </select>
          </div>
          <ul className="flex flex-wrap justify-center md:gap-4">
            {cartItems
              .filter((product) =>
                categories === "all" ? true : product.category === categories
              )
              .map((filteredProduct) => (
                <CartPage
                  key={filteredProduct.id}
                  product={filteredProduct}
                  totalProducts={cartItems.length}
                  onRemove={handleRemoveFromCart}
                />
              ))}
          </ul>
        </section>
      ) : (
        <main className="flex items-center justify-center">
          {loading ? (
            <div className="flex justify-center items-center py-60">
              <div className=" w-48 h-48 border-4 border-[#89023E] border-t-transparent border-dotted rounded-full animate-spin"></div>
            </div>
          ) : (
            <section className="bg-[hsl(11,48%,95%)] flex flex-col items-center py-4">
              <div className="font-['Quicksand'] mt-2">
                <select
                  name={categories}
                  onChange={(e) => setCategories(e.target.value)}
                  defaultValue={categories}
                  id="category-select"
                  className="rounded-md bg-[#FFD9DA] hover:bg-[#ffccce] text-center outline-none py-2 md:py-1 px-2 md:px-0 text-sm"
                >
                  <option value="all">Select all category</option>
                  <option value="men's clothing">Men&lsquo;s Clothings</option>
                  <option value="women's clothing">
                    Women&lsquo;s Clothings
                  </option>
                  <option value="jewelery">Jewelery</option>
                  <option value="electronics">Electronics</option>
                </select>
              </div>
              <ul className="flex flex-wrap justify-center md:gap-4">
                {productsArr
                  .filter((product) =>
                    categories === "all"
                      ? true
                      : product.category === categories
                  )
                  .map((filteredProduct) => (
                    <Product
                      key={filteredProduct.id}
                      product={filteredProduct}
                      onAddToCart={handleAddToCart}
                    />
                  ))}
              </ul>
            </section>
          )}
        </main>
      )}

      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;
