class Bob {
    constructor(x, y){
        var options = {
            isStatic: false,
            'restitution': 1.05,
            'friction': 0,
            'density': 7.8,
            'stiffness': 1
        }

        this.body = Bodies.circle(x, y,30, options);
        this.radius = 30;
       
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(2);
        stroke("black")
        fill("#FF00FF");
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius);
        pop();
    }
}