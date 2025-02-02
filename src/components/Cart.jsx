import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = ({ cart, setCart }) => {
  const removeFromCart = (id) => {
    // Filter out the product that we want to remove from the cart
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);

    toast.error("Item removed from cart", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="cart-container">
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.imgSrc} alt={item.title} />
              <div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <p>{item.price} ₹</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="btn btn-danger"
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <h3>Your cart is empty!</h3>
        )}
      </div>
    </>
  );
};

export default Cart;
