import React, { useEffect, useState } from "react";
import "./CSS/ShopCategory.css";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";
import { Link } from "react-router-dom";

const ShopCategory = (props) => {
  const [allproducts, setAllProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState(""); // State to manage sorting order

  const fetchInfo = () => {
    fetch("https://mernappbackend-xpdn.onrender.com/allproducts")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  // Function to sort products based on price
  const sortProducts = (order) => {
    const sortedProducts = [...allproducts];
    if (order === "lowToHigh") {
      sortedProducts.sort((a, b) => a.new_price - b.new_price);
    } else if (order === "highToLow") {
      sortedProducts.sort((a, b) => b.new_price - a.new_price);
    }
    setAllProducts(sortedProducts);
  };

  return (
    <div className="shopcategory">
      <img src={props.banner} className="shopcategory-banner" alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1 - {allproducts.length}</span> out of total Products
        </p>

        <div className="flex">
          <span className="pt-2">Sort By:</span>
          <button
            className="border  mx-3 rounded-2xl p-2 px-4 bg-orange-600 text-white cursor-pointer hover:bg-orange-500"
            onClick={() => sortProducts("lowToHigh")}
          >
            Low to High
          </button>
          <button
            className="border rounded-2xl p-2 px-4 bg-orange-600 text-white cursor-pointer hover:bg-orange-500"
            onClick={() => sortProducts("highToLow")}
          >
            High to Low
          </button>
        </div>
      </div>
      <div className="shopcategory-products">
        {allproducts.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                id={item.id}
                key={i}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        <Link to="/" style={{ textDecoration: "none" }}>
          Explore More
        </Link>
      </div>
    </div>
  );
};

export default ShopCategory;
