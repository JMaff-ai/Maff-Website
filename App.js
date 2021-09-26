import "./style.css";
import{BrowserRouterasRouter,Switch,Route}from"react-router-dom";
import DessertBar from "./src/Dessertbar.js";
import DessertMenu from "./Dessets/DessertMenu.js";
import Directions from"./Dessertbar/about/Directions.js";

export default function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/DessertBar.js" component={DessertBar} />
      <Route exact path="/about/directions.js">
      <Directions /> (additional HTML/JSX can be added here) </Route>
      <Route exact path="/Dessets/DessertMenu.js">
        <DessertMenu />
      </Route>

      </Switch>
    </Router>
  );
}