import "../styles/Header.css";
import logo from "../assets/images/play_6994728.png";
import SearchBar from "./SearchBar";
import SortDropdown from "./SortDropdown";

const Header = ({onSearch, onClear,onSort}) => {

  return (
    <header className="header">
      <div className="header-left">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1 className="title">Flixor</h1>
      </div>
      <div className="header-right">
      <SearchBar onSearch={onSearch} onClear={onClear}/>
       <SortDropdown onSort={onSort}/>
      </div>
    </header>
  );
};

export default Header;
