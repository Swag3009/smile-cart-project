import PageNotFound from "components/commons/PageNotFound";
import Product from "components/Product";
import { Route, Switch, Redirect } from "react-router-dom";

import ProductList from "./components/ProductList";

const App = () => (
  <Switch>
    <Route exact component={ProductList} path="/products" />
    <Route exact component={Product} path="/product/:slug" />
    <Redirect exact from="/" to="/products" />
    <Route component={PageNotFound} path="*" />
  </Switch>
);
export default App;
