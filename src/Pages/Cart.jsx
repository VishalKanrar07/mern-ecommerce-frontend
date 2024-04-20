import React, { useState } from "react";
import CartItems from "../Components/CartItems/CartItems";
import ConfirmedPage from "../Components/ConfirmationPage/ConfirmedPage";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [showConfirmedPage, setShowConfirmedPage] = useState(false);

  const checkUserLoggedIn = () => {
    return localStorage.getItem("auth-token") !== null;
  };

  const changePage = () => {
    setShowConfirmedPage(true);
  };

  return (
    <div>
      {showConfirmedPage ? (
        <ConfirmedPage />
      ) : (
        <CartItems checkUserLoggedIn={checkUserLoggedIn} />
      )}
    </div>
  );
};

export default Cart;
