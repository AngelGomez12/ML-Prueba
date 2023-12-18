import { useContext } from "react";
import { productsContext } from "../contexts/Products";
import { Link } from "react-router-dom";
const Cards = () => {
  const { products } = useContext(productsContext);
  return (
    <div className="flex flex-col justify-center items-center">
      {products.length > 0 &&
        products.map((product: any) => (
          <Link
            key={product.id}
            to={`/details/${product.id}`}
            className="flex w-3/4 justify-center items-center border-y-2"
          >
            <div className="bg-white w-full h-96 flex justify-center items-center">
              <div>
                <img src={product.thumbnail} alt="" className="w-48 h-48" />
              </div>
              <div className="flex-col">
                <p className="text-2xl">{product.title}</p>
                <p className="text-2xl">{product.price}</p>
                <p className="text-2xl">{product.currency_id}</p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Cards;
