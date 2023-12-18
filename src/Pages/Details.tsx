import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcumbs from "../components/Breadcumbs";

const Details = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  const [description, setDescription] = useState<any>(null);
  const [breadcrumbs, setBreadcrumbs] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res1 = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/items/${id}`
        );
        const data1 = await res1.json();
        setProduct(data1);
        const category_id = data1.category_id;

        const res2 = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/items/${id}/description`
        );
        const data2 = await res2.json();
        setDescription(data2.plain_text);

        const res3 = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/categories/${category_id}`
        );
        const data3 = await res3.json();
        setBreadcrumbs(data3.path_from_root);
      } catch (error) {
        console.log(error);
      } finally {
        console.log("Finalizó");
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="flex flex-col items-center bg-gray-200 h-screen">
      <div className="w-1/2 items-start">
        <Breadcumbs breadcrumbs={breadcrumbs} />
      </div>
      <div className="bg-white w-1/2 h-3/4">
        <div className="flex items-center">
          <img
            src={product?.thumbnail}
            alt={product?.title}
            className="w-96 h-96"
          />
          <div className="flex-col">
            <p>{product?.price}</p>
            <h2>{product?.title}</h2>
            <p>{product?.sold_quantity}</p>
          </div>
        </div>
        <h2 className="mb-4 text-2xl">Descripcion del Producto</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Details;
