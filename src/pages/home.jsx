import React from "react";
import { request } from "../config/request";
import { ProductCard } from "../components/product-card";

export const Home = () => {
  const [pData, setPdata] = React.useState([]);

  React.useEffect(() => {
    request.get("/phones").then((res) => {
      setPdata(res.data);
    });
  }, []);
  return (
    <div className="container mx-auto ">
      <div className="grid grid-cols-4">
        {pData.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};
