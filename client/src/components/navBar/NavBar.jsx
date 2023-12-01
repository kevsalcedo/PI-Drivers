import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

const NavBar = () => {
  return (
    <div className={style.mainContainer}>
      <Link to={"/home"}>Home</Link>
      <Link to={"/form"}>Create</Link>
    </div>
  );
};

export default NavBar;
