import{Link}from"react-router-dom";

function Dessertbar() {
   return(
   <div>
    <title>Maff's Dessert Bar</title>
    <link type="text/css" rel="stylesheet" href="Dessertbar.css" />
    <link
    href="Dessertbar-compact.css"
    rel="stylesheet"
    media="screen and (max-width: 480px)"
    />
    <link
    href="./DessertBar-medium.css"
    rel="stylesheet"
    media="screen and (min-width: 481px)"
    />
    <h1>Welcome to Maff's dessert bar</h1>
    <p id="Hiring">
      We are currently looking for more employees to help out around the bar with serving food and cleaning tables, and we have fun board games for not only the adults but the kids and employees as well like <em>Hungry Hungry Hippos</em> Wifi is free for both employees and quests.
      <img src="images.Desserts.gif"/>
    </p>
    <h2>Directions</h2>
    <p>
      We are locatied in Gecka Town near some Geico Town. Come Join Us! 
      <Link to="Directions/Directions.js">Go to Directions Page.</Link>
    </p>
    <h3>Menu</h3>
    <p>
      Below is a sample of what we serve, we got varity of cakes and some italian delicaties. Enjoy them however you like!
      <Link to="Dessets/DessertMenu.js">Go to Dessert Menu.</Link>
    </p>
    </div>
   );
}