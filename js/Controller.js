class Controller {
  constructor(){
    this.velocity = new Vec2(0,0);

  }
  handleKeyDown(e,control){

    switch (e.code) {
      case "ArrowDown":
        control.velocity.y = 20;
        break;
      case "ArrowUp":
              control.velocity.y = -20  ;
        break;
      case "ArrowRight":
              control.velocity.x = 20 ;
        break;
      case "ArrowLeft":
              control.velocity.x = -20 ;
        break;
      case "Space":

        break;
      default:
          console.log("wrong key");
          break;
    }
  }

  handleKeyUp(a, control){
    switch (a.code) {
      case "ArrowDown":
            control.velocity.y = 0;
        break;
      case "ArrowUp":
            control.velocity.y = 0;
        break;
      case "ArrowRight":
            control.velocity.x = 0;
        break;
      case "ArrowLeft":
            control.velocity.x = 0;
        break;
      case "Space":

        break;
      default:
          console.log("wrong key");
          break;
    }
  }

  keyMove(object){
    let control = this;
    window.addEventListener('keydown',function(e){
      control.handleKeyDown(e,control);
    });
    window.addEventListener('keyup',function(e){
      control.handleKeyUp(e,control);
    });
    object.velocity = this.velocity;
  }
}
