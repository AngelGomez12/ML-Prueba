import { useEffect, useRef, useState, useContext } from "react";
import { productsContext } from "../../contexts/Products";
import { breadcrumbsContext } from "../../contexts/BreadcrumsContext";

export const Search = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errror, setError] = useState();
  const [query, setQuery] = useState("");
  const { setProducts } = useContext(productsContext);
  const { setBreadcrumbs } = useContext(breadcrumbsContext);

  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const fetchSearch = async () => {
      try {
        if (query === "") return;
        const response = await fetch(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/sites/MLA/search?q=${query}&limit=4`,
          {
            signal: abortControllerRef.current?.signal,
          }
        );
        const { results, filters } = await response.json();
        console.log(results, filters);
        setProducts(results);
        setBreadcrumbs(filters[0].values[0].path_from_root);
      } catch (e: any) {
        if (e.name === "AbortError") {
          console.log("Request aborted");
          return;
        }
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSearch();
  }, [query]);

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const searchValue = (
      document.querySelector('input[name="search"]') as HTMLInputElement
    ).value;
    setQuery(searchValue);
  };

  return (
    <>
      <form action="">
        <input type="text" name="search" className="w-96" />
        <button onClick={handleSubmit} type="submit">
          Buscar
        </button>
      </form>
    </>
  );
};
