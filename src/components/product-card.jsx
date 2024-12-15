import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/product-reducer";

export const ProductCard = (props) => {
  const { data } = props;
  const dispatch = useDispatch();

  const addCart = () => {
    const price = data?.price
      .split(" ")
      .filter((item) => item !== " ")
      .join("");

    dispatch(addProduct({ ...data, price: Number(price) }));
  };
  return (
    <div>
      <img src={data.img} alt="img" />
      <h1>{data.title}</h1>
      <p>{data.price} sum</p>
      <button onClick={addCart} className="bg-green-500">
        buy
      </button>
    </div>
  );
};
