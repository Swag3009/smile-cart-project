import Cart from "components/Cart";
import Checkout from "components/Checkout";
import PageNotFound from "components/commons/PageNotFound";
import Product from "components/Product";
import { Route, Switch, Redirect } from "react-router-dom";

import ProductList from "./components/ProductList";
import routes from "./route";

const App = () => (
  <Switch>
    <Route exact component={ProductList} path={routes.products.index} />
    <Route exact component={Product} path={routes.products.show} />
    <Redirect exact from={routes.root} to={routes.products.index} />
    <Route exact component={Cart} path={routes.cart} />
    <Route exact component={Checkout} path={routes.checkout} />
    <Route component={PageNotFound} path="*" />
  </Switch>
);
export default App;
