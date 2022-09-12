import { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useContext } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Items/Items";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import AddMeal from "./components/Items/lItem/AddItem";
import AuthPage from "./pages/AuthPage";
import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);

  const [cartIsShown, setCartIsShown] = useState(false);
  const [FormIsShown, setFormIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const showFormHandler = () => {
    setFormIsShown(true);
  };

  const hideFormHandler = () => {
    setFormIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      {FormIsShown && <AddMeal onClose={hideFormHandler} />}
      <Header onShowCart={showCartHandler} onShowForm={showFormHandler} />
      <Switch>
        <Route path="/" exact>
          <main>
            <Meals />
          </main>
        </Route>

        {!authCtx.isLoggedIn && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </CartProvider>
  );
}

export default App;
