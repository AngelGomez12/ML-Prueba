import React from "react";

interface Breadcrumb {
  name: string;
}

interface BreadcrumbsProps {
  breadcrumbs: Breadcrumb[];
}

const Breadcumbs: React.FC<BreadcrumbsProps> = ({ breadcrumbs }) => {
  return (
    <div className="w-full m-2 pr-20">
      {breadcrumbs && breadcrumbs.length > 0 && (
        <ul className="flex">
          {breadcrumbs.map((category, index) => (
            <li key={index}>
              <span>{category.name}</span>
              {index < breadcrumbs.length - 1 && <span> {">"} </span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Breadcumbs;
