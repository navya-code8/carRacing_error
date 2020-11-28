class Form{
    constructor() {
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.greeting = createElement('h2');
        this.reset = createButton("Reset");

      }

    

    hide(){

        this.button.hide()
        this.input.hide()
        this.greeting.hide()

    }

    display(){

     var title = createElement("h1");
     title.html("Car Racing Game");
     title.position(displayWidth/2-60, displayHeight/3-300);
     this.reset.position(displayWidth-100, 100)

     this.input.position(displayWidth/2-30, displayHeight/2-400);
     this.button.position(displayWidth/2+30, displayHeight/2-350);
    // console.log(input.value())
     
    this.button.mousePressed(()=>{
        console.log(this.input);
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        console.log(player.index)
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name +"!")
        this.greeting.position(displayWidth/2-10, 100);
      });

      this.reset.mousePressed(()=>{

        game.updateState(0);
        player.updateCount(0);
        
        

      })
  
     
    }


}