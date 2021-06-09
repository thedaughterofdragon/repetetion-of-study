class Slingshot{
    constructor(bodyA,pointB){
        var options={
        bodyA: bodyA,
        pointB: pointB,
        length:150,
        stiffness:0.1
    }
    this.pointB=pointB;

    this.sling= Constraint.create(options)
        World.add(world,this.sling)
    }

    display (){

        if(this.sling.bodyA){
            strokeWeight(6)
            line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y)
        
        }


    }

}