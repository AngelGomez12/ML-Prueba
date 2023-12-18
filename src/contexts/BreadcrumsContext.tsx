import React, { createContext, useState } from "react";

const breadcrumbsContext = createContext({
  breadcrumbs: [],
  setBreadcrumbs: (breadcrumbs: any) => {},
});

const BreadcrumbsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  return (
    <breadcrumbsContext.Provider value={{ breadcrumbs, setBreadcrumbs }}>
      {children}
    </breadcrumbsContext.Provider>
  );
};

export { breadcrumbsContext, BreadcrumbsProvider };
