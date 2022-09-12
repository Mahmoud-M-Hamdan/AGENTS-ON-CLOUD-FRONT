import { Fragment, useContext } from "react";
import HeaderCartButton from "./HeaderCartButton";
import ItemsImage from "../../assets/shop.jpg";
import classes from "./Header.module.css";
import AddItemButton from "./AddItemButton";
import MainNavigation from "./MainNavigation";
import AuthContext from "./../../store/auth-context";

const Header = (props) => {
  const authCtx = useContext(AuthContext);

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>The Shop</h1>
        {authCtx.isLoggedIn && <AddItemButton onClick={props.onShowForm} />}
        {authCtx.isLoggedIn && <HeaderCartButton onClick={props.onShowCart} />}

        <MainNavigation />
      </header>
      <div className={classes["main-image"]}>
        <img src={ItemsImage} alt="Shop" />
      </div>
    </Fragment>
  );
};

export default Header;
