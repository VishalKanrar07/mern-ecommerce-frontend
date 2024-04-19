import React, { useState } from "react";
import { Link } from "react-router-dom";

const ConfirmedPage = () => {
  let [menu, setMenu] = useState("shop");
  return (
    <div class="border shadow-xl bg-red-300 h-40 mx-5 my-10 pt-12 rounded-md sm:flex-col sm:items-center sm:h-[250px] sm:w-[600px] sm:mx-[450px] sm:pt-24">
      <div className="text-xl font-semibold flex items-center justify-center">
        Your Order is Confirmed..!!!
      </div>
      <div className="text-sm mt-2 flex items-center justify-center">
        <Link
          to="/"
          onClick={() => {
            setMenu("shop");
          }}
        >
          <p className="hover:text-slate-600 	sm:hover:text-slate-600  text-decoration-line: underline">
            Redirect to Shop...
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ConfirmedPage;
