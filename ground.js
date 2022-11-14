class Ground{
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Matter.Bodies.rectangle(x, y, width, height, {isStatic: true});
        World.add(world, this.body)
    }
    
    display(){
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}