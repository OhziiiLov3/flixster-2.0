import "../styles/Header.css";
import logo from "../assets/images/play-buttton_14782545.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1 className="title">Flixor</h1>
      </div>
      <div className="header-right">
        <input
          type="text"
          className="search-bar"
          placeholder="Search movies..."
        />
        <select className="dropdown">
          <option>Sort By</option>
          <option>Popularity</option>
          <option>Rating</option>
          <option>Release Date</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
