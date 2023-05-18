import './style.scss';

import Navigation from "../../molecules/Navigation";
import Search from "../../molecules/Search";

const Header = () => {
  return (
    <header>
      <Navigation />
      <Search />
    </header>
  );
}

export default Header;