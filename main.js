let colors = ['red', 'yellow', 'orange', 'green', 'violet', 'grey', 'blue', 'black', 'pink', 'brown' ];
let counter = 0;

var container= document.getElementById("container");

const buttonBlock = `
    <div id="button-block">
      <button onclick="previousColor()">prev</button>
      <button onclick="nextColor()">next</button>
    </div>
`;
container.innerHTML += buttonBlock;


var blockColor = '<div id="blockColor"></div>';
container.innerHTML += blockColor;


function previousColor() {
      counter--;
      if (counter < 1)
            counter = colors.length - 1;
      let divBllock = document.getElementById("blockColor");
      divBllock.setAttribute("style", `background-color: ${colors[counter]};`);
} 

function nextColor() {
      counter++;
      if (counter > 9)
            counter = 0;
      let divBllock = document.getElementById("blockColor");
      divBllock.setAttribute("style", `background-color: ${colors[counter]};`);
}




