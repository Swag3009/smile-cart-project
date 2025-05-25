import { useState } from "react";

import PageNotFound from "components/commons/PageNotFound";
import Product from "components/Product";
import { Route, Switch, Redirect } from "react-router-dom";

import ProductList from "./components/ProductList";
import CarItemsContext from "./contexts/CartItemsContext";
import routes from "./route";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <CarItemsContext.Provider value={[cartItems, setCartItems]}>
      <Switch>
        <Route exact component={ProductList} path={routes.products.index} />
        <Route exact component={Product} path={routes.products.show} />
        <Redirect exact from={routes.root} to={routes.products.index} />
        <Route component={PageNotFound} path="*" />
      </Switch>
    </CarItemsContext.Provider>
  );
};
export default App;
