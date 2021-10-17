import "./style.css";
import{BrowserRouterasRouter,Switch,Route}from"react-router-dom";
import DessertBar from "./src/Dessertbar.js";
import DessertMenu from "./Dessets/DessertMenu.js";
import Directions from"./Dessertbar/about/Directions.js";
import ImageFigure from "./src/ImageFigure.js";
import assortedcheesecake from "./images/Assorted cheesecake.jpg";
import redveletcake from "./images/Red Velet Ckae.jpg";
import softservedicecream from "./images/Soft served Ice cream.jpg";
import tartufo from "./images/tartufo.jpg";

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
      <Route exact path="/html/assortedcheesecake.html">
        <ImageFigure
        imgsrc={assortedcheesecake}
        width={300}
        height={150}
        alt="Assorted Cheese Cakes"
        />
      </Route>
      <Route exact path="/html/redveletcake.html">
        <ImageFigure
        imgsrc={redveletcake}
        width={300}
        height={150}
        alt="Red Velvet Cake"
        />
      </Route>
      <Route exact path="/html/softservedicecream.html">
        <ImageFigure
        imgsrc={softservedicecream}
        width={300}
        height={150}
        alt="Soft Served Ice Cream"
        />
      </Route>
      <Route exact path="/html/tartufo.html">
        <ImageFigure
        imgsrc={tartufo}
        width={300}
        height={150}
        alt="Tartufo"
        />
      </Route>
      <Route path="/"><h1>Error 404: File Not Found </h1></Route>

      </Switch>
    </Router>
  );
}