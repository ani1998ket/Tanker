class Screen {
      constructor(parent){
        this.layers = [];
        this.width = parent.width;
        this.height = parent.height;
        this.zIndex = 0;
        parent.screens.push(this);
      }



      pushLayer(layer){
        layer.zIndex = this.zIndex;
        this.layers.push(layer);
        this.zIndex++;
      }
}

let gameObj = {};
gameObj.width = 600;
gameObj.height = 600;


gameObj.screens = [];
let screen1 = new Screen (gameObj);
let screen2 = new Screen (gameObj);
//gameObj.screens.push(screen1);
//gameObj.screens.push(screen2);

function init(){
  document.body.style.height='1000px';
  gameObj.screens.forEach(screen => {
    let s =document.createElement('div');
    console.log(s);
    s.setAttribute('class','screen');
    //console.log(s.class);
    s.style.display = 'none';
    s.style.width = '100%';
    s.style.height = '100%';
    document.body.appendChild(s);
  });
}

init();

let DOMScreen = document.getElementsByClassName('screen');
console.log(DOMScreen);
DOMScreen[0].style.background='red';
DOMScreen[1].style.background='aqua';

function renderScreen(){
  DOMScreen[1].style.display='block';
}

renderScreen();
