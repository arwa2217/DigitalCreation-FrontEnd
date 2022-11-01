import React from "react";
import { productData } from "./data";

const Product = () => {
  return (
    <>
      <div
				style={{
					// display: "flex",
					justifyContent:"space-around",
          width: "300px",
          height: "auto",
          border: "1px solid black",
          boxShadow: "1px 2px 1px grey",
          margin: "10px",
          padding:"10px",
        }}
      >
        {productData.map((item,i) => {
          return (
						<React.Fragment key={i}>
							<div><h1>{item.name}</h1></div>
							<div><p>{item.description}</p></div>
							<div><p>${item.price}</p></div>
						</React.Fragment>
					  
          );
        })}
      </div>
    </>
  );
};

export default Product;
