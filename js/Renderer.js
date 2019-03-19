class Renderer {
  constructor(context){
    this.objectsRenderd = [];
    this.context = context
  }

  drawimage(gameObject){
    var currentImage= gameObject.image;
    var position = gameObject.position;
    this.objectsRenderd.push(gameObject);
    //console.log(gameObject);
    this.context.drawImage(currentImage,position.x,position.y);
  }
}
