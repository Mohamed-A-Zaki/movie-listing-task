import BurgerIcon from "./BurgerIcon";
import FilterBar from "./FilterBar";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import SheetComponent from "./SheetComponent";

export default function Navbar() {
  return (
    <nav className="bg-main_color p-3">
      <div className="container flex items-center justify-between gap-10">
        <Logo />

        <div className="hidden lg:flex items-center gap-10 flex-1">
          <SearchBar />
          <FilterBar />
        </div>

        <div className="lg:hidden">
          <BurgerIcon />
        </div>

        <SheetComponent />
      </div>
    </nav>
  );
}
