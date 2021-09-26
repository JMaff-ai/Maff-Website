import{Link}from"react-router-dom";
import tartufo from "../images/tartufo.jpg";
import SoftservedIceCream from "../images/Soft served Ice cream.jpg";
import RedVeletCkae from "../images/Red Velet Ckae.jpg";
import Assortedcheesecake from "../images/Assorted cheesecake.jpg";




function DessertMenu () {
  return (
    <div>
      <h1>DessertMenu</h1>
     <p>a soft served ice cream in bowl with popular flavors of Vanilla, Choclate or Strawberry.
      <img src = {SoftservedIceCream}/>
      </p>
      <p>choclate and vanilla ice cream with a cherry in the middle smolthered in rich choclate for a choclate casing. 
        <img src ={tartufo}/>
      </p>
      <p>A fluffy red velvet cake with vanilla frosting and rainbow sprinkles.
        <img src ={RedVeletCkae}/>
      </p>
      <p>a platter full of many different cheese ckae flavors. 
        <img src ={Assortedcheesecake}/>
      </p>
      <p>
        <Link to="../Dessertbar.js">Back to Dessert Bar</Link>
      </p>
    </div>
  );
  }

export default DessertMenu();