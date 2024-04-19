import React from "react";
import "./NewCollections.css";
import Item from "../Item/Item";

const NewCollections = (props) => {
  return (
    <div className="new-collections">
      <h1 className="text-3xl font-extrabold sm:text-5xl">NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {props.data.map((item, i) => {
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
        })}
      </div>
    </div>
  );
};

export default NewCollections;
