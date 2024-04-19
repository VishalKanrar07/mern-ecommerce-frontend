import React, { useState } from "react";
import CartItems from "../Components/CartItems/CartItems";
import ConfirmedPage from "../Components/ConfirmationPage/ConfirmedPage";

const Cart = () => {
  const [showConfirmedPage, setShowConfirmedPage] = useState(false);
  const changePage = () => {
    setShowConfirmedPage(true);
  };

  return (
    <div>
      {showConfirmedPage ? (
        <ConfirmedPage />
      ) : (
        <CartItems changePage={changePage} />
      )}
    </div>
  );
};

export default Cart;
