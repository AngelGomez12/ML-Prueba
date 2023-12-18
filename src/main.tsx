import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ProductsProvider } from "./contexts/Products.tsx";
import { BreadcrumbsProvider } from "./contexts/BreadcrumsContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ProductsProvider>
    <BreadcrumbsProvider>
      <App />
    </BreadcrumbsProvider>
  </ProductsProvider>
);
