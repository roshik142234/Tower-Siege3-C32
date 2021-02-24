class Box{

    constructor(x,y){
     
        var options={
            isStatic:false,
            restituiton:1
            
        }
 
        this.body=Bodies.rectangle(x,y,30,40,options);
        World.add(myworld,this.body);
        this.V=255;
        
    }

    display(){
       
        //console.log(this.body.speed)

        if(this.body.speed<5){
        push()
        angleMode(RADIANS)
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle)
        rectMode(CENTER)
        rect(0,0,30,40);
        pop()
        }

        else{
           push()
            World.remove(myworld,this.body);
            this.V=this.V-5;
            if(this.V===250){
                score++;
            }
            fill(255,255,255,this.V);
            noStroke()
            rectMode(CENTER)
            rect(this.body.position.x,this.body.position.y,30,40);
            pop()
        }

    }
}