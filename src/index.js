import React from "react";
import ReactDOM from "react-dom";

import MenuItem from './MenuItem';

<html>
  <head>
    <title>Maff's Dessert Bar</title>
  </head>
  <body>
    <h1>Welcome to Maff's dessert bar</h1>
    <p>
      We are currently looking for more employees to help out around the bar with serving food and cleaning tables, and we have fun board games for not only the adults but the kids and employees as well like <em>Hungry Hungry Hippos</em> Wifi is free for both employees and quests.
    </p>
    <h2>Directions</h2>
    <p>
      We are locatied in On Sunrise Highway near Bellmore, right around Home Depot. Come enjoy desserts or start working today!
    </p>
    <h3>Menu</h3>
    <p>
      Below is a sample of what we serve, we got varity of cakes and some italian delicaties. Enjoy them however you like!
    </p>
  </body>
</html>

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
    <MenuItem name = "Soft served Ice Cream" price = '2.00'> 'a soft served ice cream in bowl with popular flavors of Vanilla, Choclate or Strawberry.'</MenuItem>
    <MenuItem name = 'Tartufo' price = "3.50"> 'choclate and vanilla ice cream with a cherry in the middle smolthered in rich choclate for a choclate casing.'</MenuItem>
    <MenuItem name = "Red Velet Cake" price = "2.85"> 'A fluffy red velvet cake with vanilla frosting and raindow sprinkles.'</MenuItem>
    <MenuItem name = "Assorted CheeseCakes" price = "4.80"> 'a platter full of many different cheese cake flavors.'</MenuItem>
  </div>

);


ReactDOM.render(menuElement, document.getElementById("root"));