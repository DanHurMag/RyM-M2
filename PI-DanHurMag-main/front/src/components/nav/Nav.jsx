import SearchBar from "../searchBar/SearchBar";
import MyNavLink from "../myNavLink/MyNavLink";
import style from "./Nav.module.css";
export default function Nav({ onSearch }) {
  return (
    <nav className={style.navBar}>
      <h1>Hola, soy el Nav 😄</h1>
      <MyNavLink name="Home" />
      <MyNavLink name="About" />
      <MyNavLink name="Favorites" />
      <SearchBar onSearch={onSearch} />
      <MyNavLink name="Login" />
    </nav>
  );
}
