class Box{
constructor(){

  var options = {
    restitution:0.8,
    friction:1,
    density=0.04

}




this.body=Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
World.add(world,this.body)






}
display(){
  var pos =this.body.position;
  rectMode(CENTER)
rect(pos.x,pos.y,this.width,this.height)



}





}


