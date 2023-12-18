import { Link } from "react-router-dom";
import { Search } from "./ui/Search";

export const Header = () => {
  return (
    <div className=" bg-yellow-300 h-14 w-screen flex justify-center items-center">
      <Link to={"/"} className="mr-2">
        Home
      </Link>
      <Search />
    </div>
  );
};
