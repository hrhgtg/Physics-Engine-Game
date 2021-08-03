class Box{
    constructor (x, y, width, height){
        var options = {
            'restitution': 0.3,
            'density': 0.002,
             'friction' : 1.0
        }
        this.Visibility = 255;
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

    score(){
        if (this.visibility<0 && this.visibility>-105){
            score = score + 20;
        }    
        }

    display(){
        //console.log(this.body.speed);
        if (this.body.speed < 4){
            var angle = this.body.angle;
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(3);
        stroke("black");
        fill("yellow");
        rect(0,0,this.width,this.height);
        pop();
        }
        else{
            World.remove(world,this.body);
            push();
            tint(255,this.Visiblity);
            this.visibility = -5;
            pop();
        }
    }
}


