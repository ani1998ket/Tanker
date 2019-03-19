class GameObject {
  constructor(parent, width, height, position = new Vec2(), image = new Image(), velocity = new Vec2(),
   acceleration = new Vec2(), angularRotation = 0, angularVelocity = 0, angularAcceleration = 0){
    this.position = position;
    this.velocity = velocity
    this.acceleration = acceleration;
    this.image = image;
    this.width = width;
    this.height = height;
    this.angularRotation = angularRotation;
    this.angularVelocity = angularVelocity;
    this.angularAcceleration = angularAcceleration;
    this.parent = parent;
  }
}
