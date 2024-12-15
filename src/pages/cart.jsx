import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleEmount, deleteProduct } from "../store/product-reducer";

export const Cart = () => {
  const { productList } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const incrementCount = (id) => {
    dispatch(toggleEmount({ id, type: "inc" }));
  };

  const decrementCount = (id) => {
    dispatch(toggleEmount({ id, type: "dec" }));
  };

  return (
    <div className="container mx-auto grid grid-cols-4">
      {productList.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.img} alt="img" />
            <h1>{item.title}</h1>
            <p className="font-bold">{item.usePrice} sum</p>
            <button
              onClick={() => incrementCount(item.id)}
              className="p-[5px] bg-blue-300"
            >
              +
            </button>
            <span>{item.userCount}</span>
            {item.userCount > 1 ? (
              <button
                onClick={() => decrementCount(item.id)}
                className="p-[5px] bg-blue-300"
              >
                -
              </button>
            ) : (
              <button
                onClick={() => dispatch(deleteProduct(item.id))}
                className="p-[5px] bg-red-300"
              >
                X
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};
