import React from "react";
import ReactDOM from "react-dom";

import MenuItem from './MenuItem';

let name = 'Soft served Ice Cream';
let price = 2.00
let description = 'a soft served ice cream in bowl with popular flavors of Vanilla, Choclate or Strawberry.';

const menuItemElement1 = (
  <div>
    <h2>
      {name}, ${price}
    </h2>
    <p>{description}</p>
  </div>

);

 name = 'Tartufo';
 price = 3.50
 description = 'choclate and vanilla ice cream with a cherry in the middle smolthered in rich choclate for a choclate casing.'

const menuItemElement2 = (
  <div>
    <h2>
      {name}, ${price}
    </h2>
    <p>{description}</p>
  </div>

);

name = 'Red Velet Cake'
price = 2.85
description = 'A fluffy red velvet cake with vanilla frosting and raindow sprinkles.'


const menuItemElement3 = (
  <div>
    <h2>
      {name}, ${price}
    </h2>
    <p>{description}</p>
  </div>
);


name = 'Assorted Cheesecakes'
price = 4.80
description = 'a platter full of many different cheesecake flavors.'

const menuItemElement4 = (
  <div>
    <h2>
      {name}, ${price}
    </h2>
    <p>{description}</p>
  </div>
)




const menuElement = (
  <div>
    {menuItemElement1}
    <MenuItem name = 'Tartufo' price = "3.50"> 'choclate and vanilla ice cream with a cherry in the middle smolthered in rich choclate for a choclate casing.'</MenuItem>
    <MenuItem name = "Red Velet Cake" price = "2.85"> 'A fluffy red velvet cake with vanilla frosting and raindow sprinkles.'</MenuItem>
    <MenuItem name = "Assorted CheeseCakes" price = "4.80"> 'a platter full of many different cheese cake flavors.'</MenuItem>
  </div>

);


ReactDOM.render(menuElement, document.getElementById("root"));
