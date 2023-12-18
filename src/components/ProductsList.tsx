import Cards from "./Cards";
import Breadcumbs from "./Breadcumbs";
import { useContext } from "react";
import { breadcrumbsContext } from "../contexts/BreadcrumsContext";

const ProductsList = () => {
  const { breadcrumbs } = useContext(breadcrumbsContext);
  return (
    <div className="flex flex-col justify-center items-center">
      <Breadcumbs breadcrumbs={breadcrumbs} />
      <Cards />
    </div>
  );
};

export default ProductsList;
