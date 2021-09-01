import "./App.css";
import Banner from "./components/Banner";
import Deals from "./components/Deals";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";
import Utilities from "./components/Utilities";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact>
          <Header />
          <Utilities />
          <Banner />
          <Deals />
          <Products />
          <Footer />
        </Route>
        <Route className="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
