class Gamestate{

    constructor(){

    }

    getState(){

        var dataState = database.ref("gamestate")
        dataState.on("value", function(data){
            gameState = data.val()
        } )
    }

    updateState(state){

        database.ref("/").update({gamestate: state})

    }

    async start(){

        if (gameState === 0){

            player = new Player()
            var playerCountRef = await database.ref('playerCount').once("value"); 

            if(playerCountRef.exists()){ 
                playerCount = playerCountRef.val(); 
                player.getCount(); 
            }

            
            form = new Form();
            form.display();

        }
        
        if(gameState === 1){

            player1 = createSprite(100,100,80,100);
            player1.addImage(car1);
            player2 = createSprite(100,100,80,100);
            player2.addImage(car2);
            player3 = createSprite(100,100,80,100);
            player3.addImage(car3);
            player4 = createSprite(100,100,80,100);
            player4.addImage(car4);

            playerCars.push(player1)
            playerCars.push(player2)
            playerCars.push(player3)
            playerCars.push(player4)

            

        }

    }

    play(){

        form.hide();
        textSize(25)
        text("The game is starting!", displayWidth/2-50, displayHeight/4-100)
        Player.getPlayerInfo();
        if (allPlayers !== undefined){
            //var display_position = 130;
            var index = 0;
            var x = 0;
            var y = 0;
            background("brown");
            image(track, 0,0, displayWidth, displayHeight )
        
            for(var plr in allPlayers){ 
                /*if (plr === "player" + player.index) fill("red") 
                else fill("black"); 
                display_position+=40; 
                textSize(20); 
                text(allPlayers[plr].name + ": " + allPlayers[plr].distance, displayWidth/2,display_position+60) */

                index++
                x+=400;
                y = displayHeight-allPlayers[plr].distance-100;
                playerCars[index-1].x = x
                playerCars[index-1].y = y
               
                text(allPlayers[plr].name, x -40,y+80)
                

                

            }

            if(index===player.index){
                console.log(playerCars)
                fill("red")
                strokeWeight(5)
                ellipse(x, y, 80,80);
                
            
            }

            if (keyDown(UP_ARROW) && playerIndex !== null){

                player.distance+=50;
                player.update()

            }
            drawSprites()
        }

        

    }
}