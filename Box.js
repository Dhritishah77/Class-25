class Box extends BaseClass {
  constructor(x, y, width, height){
    //super will override the parent properties with the values given
    super(x,y,width,height);
    this.image = loadImage("sprites/wood1.png");
  }

};
