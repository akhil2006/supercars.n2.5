class Rank{
    constructor(){

    }
    display(){
        var message= createElement('h3')
        message.position(displayWidth/2 -100 ,displayHeight/2)
   message.html("player rank : " +player.rank)
   message.style('color','white')
message.style('font-size','30px')
    }
}
