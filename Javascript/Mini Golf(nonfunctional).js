/* Peterson, May 18, 2021
Mini Golf
Drag ball in opposite direction that you want the ball to go in.
Try and get the ball in the hole in the least amount of strokes possible
Three Levels

Cheat Codes
Type "Hole In One" Without quotations
No Walls

Images used
https://static.wikia.nocookie.net/ssb/images/3/3b/Mii-updated.png/revision/latest?cb=20140707130426
https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepnglogos.com%2Fpics%2Fgolf-flag&psig=AOvVaw0HlwC4hujmZvjjJFFOjefJ&ust=1623719088109000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPi55ZD3lfECFQAAAAAdAAAAABAD
https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.clipartkey.com%2Fview%2FoRTRix_info-icon-blue-png-clipart-png-download-info%2F&psig=AOvVaw0off1aXbBykG2xLHwQxM83&ust=1623719124487000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCf5aD3lfECFQAAAAAdAAAAABAD
https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fsingle-flat-close-icon-icon-with-long-shadow-vector-2715630&psig=AOvVaw08Z63W0ed9wV-Aj9xg7dks&ust=1623719248279000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPiAlNv3lfECFQAAAAAdAAAAABAD
https://www.miicharacters.com/?mii=16741
https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2F0%2F07%2FDefault_Miis.jpeg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FMii&tbnid=dZiawZp7da4BjM&vet=12ahUKEwip6rfMgJbxAhUCL60KHRoDDb0QMygAegUIARDNAQ..i&docid=AWhJFv1cTqL6gM&w=225&h=224&itg=1&q=mii%20characters&ved=2ahUKEwip6rfMgJbxAhUCL60KHRoDDb0QMygAegUIARDNAQ
https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.slashgear.com%2Fnintendo-will-be-releasing-a-mii-mobile-app-13369064%2F&psig=AOvVaw3vWHBeTupIy8byygeBqk89&ust=1623721637139000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMi78-GAlvECFQAAAAAdAAAAABAE
https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.searchpng.com%2Fwp-content%2Fuploads%2F2019%2F02%2FReload-Blue-Icon-PNG.png&imgrefurl=https%3A%2F%2Fwww.searchpng.com%2F2019%2F02%2F12%2Freload-blue-icon-transparent-png-free-download%2F&tbnid=MHgqKso8zXccGM&vet=12ahUKEwj3jLePjJjxAhWQdqwKHdEdDc4QMygAegUIARDCAQ..i&docid=zv4yxmcABlecbM&w=2048&h=2048&q=reload%20icon%20no%20background%20blue&ved=2ahUKEwj3jLePjJjxAhWQdqwKHdEdDc4QMygAegUIARDCAQ
https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F221520875402671710%2F&psig=AOvVaw3f5mFWO_GBzAilrjzDv4ls&ust=1624113089929000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCIiHk_OyofECFQAAAAAdAAAAABAU

Audio Used 
https://www.youtube.com/watch?v=Z6YisONwIm0&ab_channel=Raizord
https://www.youtube.com/watch?v=FQRt0Cm-_PY&ab_channel=TeamLatinite
https://www.youtube.com/watch?v=jPX0zp2HLFw&ab_channel=DystifyMusic
https://www.youtube.com/watch?v=UsCPBlOEyfg&ab_channel=TeamLatiniteTeamLatinite
https://www.youtube.com/watch?v=8r_QFR_kuuo&ab_channel=JamesGao

Could not get the player to stop changing the direction of the ball while it is in motion without increasing ball speed
Collision on edge of rectangle
*/
var ball = new Circle(10);
var x = 0;
var y = 0;
var background;
var hole;
var level = 0;
var count = 0;
var horizontal_walls;
var vertical_walls;
var score;
var score_circle;
var how_to_play;
var reload = new WebImage("https://codehs.com/uploads/a5bc120367e0169db13e392214d4bda1");
var close;
var rectangle;
var image;
var instructions;
var start_button;
var start_text;
var instruction1;
var instruction_cont;
var instruction_button;
var instruction_text;
var character_button;
var character_text;
var you;
var play_again;
var play_again_button;
var line;
var line2;
var line3;
var line4;
var line5;
var balls = [];
var bouncy_circles = [];
var horizontal = [];
var vertical = [];
var cheats;
var water;
var volume = new WebImage("https://codehs.com/uploads/94f701ba3dbb06b9ac2b8da71b47059a");
var vol_rectangle;
var vol_slider;
var vol_slider2;
var next_level = new Text("Next Level");
var next_level_button = new Rectangle(next_level.getWidth(),next_level.getHeight());
var audio = new Audio("https://codehs.com/uploads/1943a94616508a7805419d6f4fb95663");
var music = new Audio("https://codehs.com/uploads/c8855b8dfd2f4b9d82fba11bd5d255f5");
var character_select_music = new Audio("https://codehs.com/uploads/e5f2fc3785e1cdaf92af4080d21c63b2");
var win_music = new Audio("https://codehs.com/uploads/f79fd70ed04c3f0e6a2985a631fa9fe0");
var we_are_champions = new Audio("https://codehs.com/uploads/2f71a094a4f67ef425304c794ed35f9d");
//global variables for characters
var red_guy = new WebImage("https://codehs.com/uploads/a16cebb278e0cd14ada0bc1ae614d507");
var red_girl = new WebImage("https://codehs.com/uploads/ad822dfab14db07c84a839f9538b2526");
var orange = new WebImage("https://codehs.com/uploads/95d4d9e344a7fd040a524c0ee43d6947");
var pink = new WebImage("https://codehs.com/uploads/239e140d4481de583fe7442e51497a98");
var glasses = new WebImage("https://codehs.com/uploads/846b269bf0a76f60f460a5dbcf5ebd53");
var blue = new WebImage("https://codehs.com/uploads/8f4b4258cac366d43d0dc45e7cd3f11e");
var green = new WebImage("https://codehs.com/uploads/e6c475f8f3b16705ed55af645f2c0855");
var yellow = new WebImage("https://codehs.com/uploads/a7a483be8517359031713a9616a31dda");
var character;

//set beginning items
function start(){
    for(var i = 0; i < 6; i++){
        var ball2 = new Circle(5);
        balls.push(ball2);
    }
    for(var i = 0; i < 2; i++){
        var bouncy_circle = new Circle(30);
        bouncy_circles.push(bouncy_circle);
        var vertical_rectangle = new Rectangle(10,Randomizer.nextInt(100,200));
        var horizontal_rectangle = new Rectangle(Randomizer.nextInt(100,200),10);
        vertical.push(vertical_rectangle);
        horizontal.push(horizontal_rectangle);
    }
    
    
    //music
    we_are_champions.volume = 0.5;
    win_music.volume = 0.5;
    character_select_music.volume = 0.3;
    music.volume = 0.5;
    audio.volume = 0.5;
    
    music.currentTime = 0.5;
    music.play();
    
    //green background
    background = new Rectangle(getWidth(),getHeight());
	background.setColor(Color.green);
	add(background);
	
	//text
	var text = new Text("MINI GOLF","40pt Staatliches");
	text.setColor(Color.white);
	text.setPosition(getWidth()/2-text.getWidth()/2,getHeight()/4);
	add(text);
	
	//start button
	start_button = new Rectangle(getWidth()/3,getHeight()/16);
	start_button.setColor(Color.white);
	start_button.setPosition(getWidth()/2 - start_button.getWidth()/2,getHeight()/2 - start_button.getHeight()/2);
	add(start_button);
	
	//text
	start_text = new Text("START");
	start_text.setPosition(getWidth()/2 - start_text.getWidth()/2,start_button.getY() + start_text.getHeight()-3);
	start_text.setColor(Color.green);
	add(start_text);
	
	//instruction button
	instruction_button = new Rectangle(getWidth()/3,getHeight()/16);
	instruction_button.setColor(Color.white);
	instruction_button.setPosition(getWidth()/2 - instruction_button.getWidth()/2, start_button.getY() + instruction_button.getHeight() + 15);
	add(instruction_button);
	
	//text
	instruction_text = new Text("HOW TO PLAY", "14pt Arial");
	instruction_text.setColor(Color.green);
	instruction_text.setPosition(getWidth()/2 - instruction_text.getWidth()/2,instruction_button.getY() + instruction_text.getHeight() + 3);
	add(instruction_text);
	
	volume.setSize(100,30);
	volume.setPosition(0,getHeight()-volume.getHeight());
	add(volume);
	
	var color = new Color(238,238,238);
	
	vol_rectangle = new Rectangle(70,20);
	vol_rectangle.setPosition(volume.getX() + 20, volume.getY() + vol_rectangle.getHeight()/2);
	vol_rectangle.setColor(color);
	add(vol_rectangle);
	
	vol_slider = new Rectangle(50,2);
	vol_slider.setPosition(30,volume.getY() + volume.getHeight()/2 - vol_slider.getHeight()/2);
	add(vol_slider);
	
	var color2 = new Color(109,109,109);
	vol_slider2 = new Circle(5);
	vol_slider2.setPosition(50,volume.getY() + volume.getHeight()/2);
    vol_slider2.setColor(color2);
	add(vol_slider2);
	
	play_again = new Text("PLAY AGAIN");
	play_again.setPosition(getWidth()/2-play_again.getWidth()/2,getHeight()-getHeight()/3);
	play_again.setColor(Color.white);
	
	play_again_button = new Rectangle(play_again.getWidth(),play_again.getHeight());
	play_again_button.setColor(Color.green);
	play_again_button.setPosition(getWidth()/2-play_again_button.getWidth()/2,play_again.getY()-play_again.getHeight());
	
	next_level.setPosition(getWidth()/2-next_level.getWidth()/2,getHeight()-getHeight()/3);
	next_level.setColor(Color.white);
	
	next_level_button.setColor(Color.green);
	next_level_button.setPosition(getWidth()/2-next_level_button.getWidth()/2,next_level.getY()-next_level.getHeight());
	
	//checks if buttons are clicked
    mouseClickMethod(items);
    mouseDragMethod(volumeMethod);
}

//adds items depending on what button was clicked
function items(e){
    var elem = getElementAt(e.getX(),e.getY());
    
    //adds items if start is clicked
    if(elem == start_button || elem == start_text){
        characterSelection();
        mouseClickMethod(character);
	//adds items if instructions are clicked
    }else if(elem == instruction_button || elem == instruction_text){
        remove(start_button);
        remove(start_text);
        remove(character_button);
        remove(character_text);
        
        rectangle = new Rectangle(getWidth() - 100, getHeight()/3 + 20);
        rectangle.setPosition(getWidth()/2-rectangle.getWidth()/2,getHeight()/2-rectangle.getHeight()/2);
        rectangle.setColor(Color.white);
        add(rectangle);
        
        instructions = new Text("How To Play");
        instructions.setPosition(getWidth()/2 - instructions.getWidth()/2,rectangle.getY() + instructions.getHeight());
        add(instructions);
    
        instruction1 = new Text("Drag your mouse to move the ball.","9pt Arial");
        instruction1.setPosition(getWidth()/2 - instruction1.getWidth()/2, instructions.getY() + instruction1.getHeight()*2);
        add(instruction1);
    
        instruction_cont = new Text("Try to get the ball in the hole in as little hits as possible.","9pt Arial");
        instruction_cont.setPosition(getWidth()/2 - instruction_cont.getWidth()/2, instruction1.getY() + instruction_cont.getHeight() + 5);
        add(instruction_cont);
        
        line5 = new Text("There are three levels all with a different feature", "9pt Arial");
        line5.setPosition(getWidth()/2-line5.getWidth()/2,instruction_cont.getY()+line5.getHeight()+10);
        add(line5);
        
        line3 = new Text("Do not touch the ball until it is fully stopped","9pt Arial");
        line3.setPosition(getWidth()/2-line3.getWidth()/2,line5.getY()+line3.getHeight()+10);
        add(line3);
        
        line = new Text("Click on the info button at the top right","9pt Arial");
        line.setPosition(getWidth()/2-line.getWidth()/2,line3.getY()+line.getHeight()+10);
        add(line);
        
        line2 = new Text("at anytime during the game to pull up this menu again","9pt Arial");
        line2.setPosition(getWidth()/2-line2.getWidth()/2,line.getY() + line2.getHeight());
        add(line2);
        
        line4 = new Text("Level too hard? Just click the reload icon.","9pt Arial");
        line4.setPosition(getWidth()/2-line4.getWidth()/2,line2.getY()+line4.getHeight()+10);
        add(line4);
        
        start_button.setPosition(getWidth()/2 - start_button.getWidth()/2, line2.getY() + 40);
        start_text.setPosition(getWidth()/2 - start_text.getWidth()/2,start_button.getY() + start_text.getHeight());
        add(start_button);
        add(start_text);
    }
}

function volumeMethod(e){
    var elem = getElementAt(e.getX(),e.getY());
    if(elem == volume || elem == vol_slider2 || elem == vol_slider || elem == vol_rectangle){
        if(e.getX() <= vol_slider.getX()){
            vol_slider2.setPosition(30,volume.getY() + volume.getHeight()/2);
            var vol = 0;
        }else if(e.getX() >= vol_slider.getX() + vol_slider.getWidth()){
            vol_slider2.setPosition(30 + vol_slider.getWidth(),volume.getY() + volume.getHeight()/2);
            var vol = (vol_slider2.getX()*2)/100-0.6;
        }else{
            vol_slider2.setPosition(e.getX(),volume.getY() + volume.getHeight()/2);
            var vol = (vol_slider2.getX()*2)/100-0.6;
        }
        
        we_are_champions.volume = vol;
        win_music.volume = vol;
        character_select_music.volume = vol;
        music.volume = vol;
        audio.volume = vol;
    }
}

function characterSelection(){
    remove(start_button);
    remove(instruction_button);
    remove(rectangle);
    remove(instructions);
    remove(instruction1);
    remove(instruction_cont);
    remove(start_text);
    remove(instruction_text);
    remove(line);
    remove(line2);
    remove(line3);
    remove(line4);
    remove(line5);
    
    music.pause();
    audio.currentTime = 0;
    audio.play();
    
    character_select_music.currentTime = 0;
    character_select_music.play();
    
    var choose = new Text("CHOOSE YOUR CHARACTER");
    choose.setColor(Color.white);
    choose.setPosition(getWidth()/2 - choose.getWidth()/2, getHeight()/2 - 25);
    add(choose);
        
    rectangle = new Rectangle(getWidth(), getHeight()/6);
    rectangle.setPosition(getWidth()/2-rectangle.getWidth()/2,getHeight()/2);
    rectangle.setColor(Color.white);
    add(rectangle);
    
    start_text.setPosition(getWidth()/2 - start_text.getWidth()/2,rectangle.getY() + rectangle.getHeight() + 50);
    start_text.setColor(Color.white);
    add(start_text);
    
    red_guy.setSize(50,50);
    red_guy.setPosition(10,rectangle.getY() + rectangle.getHeight()/5);
	add(red_guy);
	
	yellow.setSize(30,50);
	yellow.setPosition(red_guy.getX() + red_guy.getWidth() + 10,rectangle.getY() + rectangle.getHeight()/5);
	add(yellow);
	
    red_girl.setPosition(yellow.getX() + yellow.getWidth() + 10,rectangle.getY() + rectangle.getHeight()/5);
    red_girl.setSize(50,50);
    add(red_girl);
    
    orange.setPosition(red_girl.getX() + red_girl.getWidth() + 10,rectangle.getY() + rectangle.getHeight()/5);
    orange.setSize(50,50);
    add(orange);
    
    pink.setPosition(orange.getX() + orange.getWidth() + 10,rectangle.getY() + rectangle.getHeight()/5);
    pink.setSize(30,50);
    add(pink);
    
    glasses.setPosition(pink.getX() + pink.getWidth() + 10,rectangle.getY() + rectangle.getHeight()/5);
    glasses.setSize(30,50);
    add(glasses);
    
    blue.setPosition(glasses.getX() + glasses.getWidth() + 10,rectangle.getY() + rectangle.getHeight()/5);
    blue.setSize(30,50);
    add(blue);
    
    green.setPosition(blue.getX() + blue.getWidth() + 10,rectangle.getY() + rectangle.getHeight()/5);
	green.setSize(30,50);
	add(green);
}

function character(e){
    var elem = getElementAt(e.getX(),e.getY());
    
    if(elem == red_guy){
	    red_guy.setPosition(getWidth()/60,getHeight()/60);
	    character = 0;
    }else if(elem == yellow){
        yellow.setPosition(getWidth()/60 + 10,getHeight()/60);
        character = 1;
    }else if(elem == red_girl){
        red_girl.setPosition(getWidth()/60,getHeight()/60);
        character = 2;
    }else if(elem == orange){
        orange.setPosition(getWidth()/60,getHeight()/60);
        character = 3;
    }else if(elem == pink){
        pink.setPosition(getWidth()/60 + 10,getHeight()/60);
        character = 4;
    }else if(elem == glasses){
        glasses.setPosition(getWidth()/60 + 10,getHeight()/60);
        character = 5;
    }else if(elem == blue){
        blue.setPosition(getWidth()/60 + 10,getHeight()/60);
        character = 6;
    }else if(elem == green){
        green.setPosition(getWidth()/60 + 10,getHeight()/60);
        character = 7;
    }else if(elem == start_text){
        startClick();
        cheats = readLine("Enter Cheat Code: ");
        //mouse methods
	    //moves ball
	    mouseDragMethod(move);
	    //checks if blue instruction button is clicked
	    mouseClickMethod(click);
    }
}

function startClick(){
    character_select_music.pause();
    music.play();
    music.loop = true;
    removeAll();
    
    level++;
    
    add(background);
    
    //adds chosen character, text, and score
    if(character == 0){
        add(red_guy);
    }else if(character == 1){
        add(yellow);
    }else if(character == 2){
        add(red_girl);
    }else if(character == 3){
        add(orange);
    }else if(character == 4){
        add(pink);
    }else if(character == 5){
        add(glasses);
    }else if(character == 6){
        add(blue);
    }else if(character == 7){
        add(green);
    }
    
    red_guy.setPosition(getWidth()/60,getHeight()/60);
    
    //adds obstacles
	obstacles();
	
	how_to_play = new WebImage("https://codehs.com/uploads/cf56b3083c1c2514ee34b330df8448f1");
	how_to_play.setSize(25,25);
	how_to_play.setPosition(getWidth()-how_to_play.getWidth()-vertical_walls.getWidth(),0+horizontal_walls.getHeight());
	add(how_to_play);
	
//text
	you = new Text("YOU","10pt Limelight");
	you.setPosition(red_guy.getX() + red_guy.getWidth()/2 - you.getWidth()/2,red_guy.getY() + red_guy.getHeight() + you.getHeight());
	you.setColor("#FFD700");
	add(you);
	
//sets score and adds white background
	score_circle = new Circle(20);
	score_circle.setPosition(red_guy.getX() + red_guy.getWidth() + score_circle.getWidth()/2+10,red_guy.getY() + red_guy.getHeight()/2);
	score_circle.setColor(Color.white);
	add(score_circle);
	
	score = new Text(count,"20pt Limelight");
	score.setPosition(score_circle.getX() - score.getWidth()/2,score_circle.getY() + score.getHeight()/2 - 3);
	add(score);
	
	reload.setSize(25,25);
	reload.setPosition(how_to_play.getX()-reload.getWidth()-5,horizontal_walls.getHeight());
	add(reload);
	
//sets ball parameters
	ball.setPosition(getWidth()-80,getHeight()-80);
	ball.setColor(Color.white);
	
//adds hole and puts in in left or right position(randomized)
	hole = new Circle(15);
	var hole_position = Randomizer.nextInt(1,2);
	if(hole_position == 1){
	    hole.setPosition(getWidth()/4,getHeight()/4);
	}else{
	    hole.setPosition(getWidth()-getWidth()/4,getHeight()/4);
	}
	add(hole);
	
//adds flag over hole
	var flag = new WebImage("https://codehs.com/uploads/ef8f4786667fd0ad7a809737f541b1d0");
	flag.setSize(25,50);
	flag.setPosition(hole.getX(),hole.getY()-flag.getHeight());
	add(flag);
	
	add(ball);
}

//inside timer to move ball and check walls
function draw(){
	checkWalls();
	ball.move(x,y);
}

//checks walls, position, and slows down ball
function checkWalls(){
    var color = new Color(0,255,0);
    var distance = Math.sqrt(Math.pow(ball.getX()-hole.getX(),2)+Math.pow(ball.getY()-hole.getY(),2));
//checks if ball is over hole
    if(distance<=ball.getRadius()+hole.getRadius()|| cheats == "Hole In One"){
        stopTimer(draw);
        removeAll();
        music.pause();
            
        var background2 = new Rectangle(getWidth(),getHeight());
        background2.setColor(color);
        add(background2);
                    
        add(volume);
        add(vol_rectangle);
        add(vol_slider);
        add(vol_slider2);
            
        mouseDragMethod(volumeMethod);
            
            //win conditions
            if(count == 1){
                if(level < 3){
                    win_music.currentTime = 0;
                    win_music.play();
                    win_music.loop = true;
                }else if(level == 3){
                    we_are_champions.currentTime = 0;
                    we_are_champions.play();
                }
                
                var congrats = new Text("HOLE IN ONE!", "30pt Arial");
                congrats.setColor(Color.white);
                congrats.setPosition(getWidth()/2 - congrats.getWidth()/2, getHeight()/2 - congrats.getHeight()/2);
                add(congrats);
            }else{
                
                var congrats = new Text("Congratulations!");
                congrats.setColor(Color.white);
                congrats.setPosition(getWidth()/2 - congrats.getWidth()/2, getHeight()/2 - congrats.getHeight()/2);
                add(congrats);
                    
                if(level == 3){
                    we_are_champions.currentTime = 0;
                    we_are_champions.play();
                        
                    var congrats_p2 = new Text("You finished the FINAL level in " + count + " strokes", "14pt Arial");
                    congrats_p2.setColor(Color.white);
                    congrats_p2.setPosition(getWidth()/2 - congrats_p2.getWidth()/2, congrats.getY() + congrats_p2.getHeight() + 10);
                    add(congrats_p2);
                }else{
                    win_music.currentTime = 0;
                    win_music.play();
                    win_music.loop = true;
                        
                    var congrats_p2 = new Text("You finished in level " + level + " in " + count + " strokes", "14pt Arial");
                    congrats_p2.setColor(Color.white);
                    congrats_p2.setPosition(getWidth()/2 - congrats_p2.getWidth()/2, congrats.getY() + congrats_p2.getHeight() + 10);
                    add(congrats_p2);
                }
            if(level == 3){
                add(play_again_button);
                add(play_again);
            }else{
                add(next_level_button);
                add(next_level);
            }
        }
    }
    
    //slows ball down if over hole and speed is too high
    if(distance<=ball.getRadius()+hole.getRadius()){
        if(x < 0){
            x+=3;
        }else if(x > 0){
            x-=3;
        }
            
        if(y < 0){
            y+=3;
        }else if(y > 0){
            y-=3;
        }
    }
    

// Bounce off right wall
	if(ball.getX() + ball.getRadius() > getWidth() - vertical_walls.getWidth()){
		x = -x;
// Bounce off left wall
	}else if(ball.getX() - ball.getRadius() < vertical_walls.getWidth()){
		x = -x;
	}
	
// Bounce off bottom wall
	if(ball.getY() + ball.getRadius() > getHeight() - horizontal_walls.getHeight()){
		y = -y;
// Bounce off top wall
	}else if(ball.getY() - ball.getRadius() < horizontal_walls.getHeight()){
		y = -y;
	}
	
	//checks collision against inside walls
	if(cheats != "No Walls"){
	    collisionDetection();
	}
	
	slowBall();
}

//slows ball down
function slowBall(){
    var x_decrease;
    var y_decrease;
    stopBall();
    if(level >= 2){
        var distance = Math.sqrt(Math.pow(ball.getX()-water.getX(),2)+Math.pow(ball.getY()-water.getY(),2));
        //slows ball down
        if(ball.getRadius()+water.getRadius()>=distance){
            x_decrease = x*0.04;
            y_decrease = y*0.04;
            x -= x_decrease;
            y -= y_decrease;
        }else{
            x_decrease = x*0.01;
            y_decrease = y*0.01;
            x -= x_decrease;
            y -= y_decrease;
        }
    }else{
        //slows ball down
        x_decrease = x*0.01;
        y_decrease = y*0.01;
        x -= x_decrease;
        y -= y_decrease;
    }
}

//checks direction of ball and sets it on opposite path of mouse drag
function move(e){
    stopTimer(draw);
    
    for(var i = 0; i < balls.length; i++){
        remove(balls[i]);
    }
    
//checks mouse position and sets move speed accordingly
    x = (ball.getX() - e.getX())/20;
    y = (ball.getY() - e.getY())/20;
    
//max speed
    if(x >= 6){
        x = 6;
    }else if(x <= -6){
        x = -6;
    }
    
    if(y >= 6){
        y = 6;
    }else if(y <= -6){
        y = -6;
    }

    //adds balls in opposite direction of mouse drag
    var increment = 4;
    
    for(var i = 0; i < balls.length; i++){
        balls[i].setColor(Color.white);
        balls[i].setPosition(ball.getX() + x * increment, ball.getY() + y * increment);
        add(balls[i]);
        increment += 4;
    }
   
//sets timer and score after mouse button is lifted
    mouseClickMethod(mouseUp);
}

//checks if clicked on how to play button
function click(e){
    var elem = getElementAt(e.getX(),e.getY());
    if(elem == how_to_play){
        info();
    }else if(elem == close){
        closeBox();
        mouseDragMethod(move);
    //checks if reload icon is clicked
    }else if(elem == reload){
        count = 0;
        level = 0;
        startClick();
        //mouse methods
	    //moves ball
	    mouseDragMethod(move);
	    //checks if blue instruction button is clicked
	    mouseClickMethod(click);
    }
}

//changes score
function mouseUp(e){
    stopTimer(draw);
    var elem = getElementAt(e.getX(),e.getY());
    
    for(var i = 0; i < balls.length; i++){
        remove(balls[i]);
    }
    
//counts up and sets new score position and text
    if(elem == how_to_play){
        info();
    }else if(elem == close){
        closeBox();
        mouseDragMethod(move);
    }else if(elem == reload){
        level = 0;
        count = 0;
        startClick();
        //mouse methods
	    //moves ball
	    mouseDragMethod(move);
	    //checks if blue instruction button is clicked
	    mouseClickMethod(click);
    }else if(elem == play_again || elem == play_again_button || elem == next_level || elem == next_level_button){
        win_music.pause();
        we_are_champions.pause();
        count = 0;
        
        if(elem == play_again || elem == play_again_button){
            level = 0;
        }
        
        startClick();
        //mouse methods
	    //moves ball
	    mouseDragMethod(move);
	    //checks if blue instruction button is clicked
	    mouseClickMethod(click);
    }else if(elem.getColor() == Color.green || elem.getColor() == Color.white || elem.getColor() == Color.cyan || elem.getColor() == Color.black && elem != play_again && elem != play_again_button && elem != next_level && elem != next_level_button){
        count++;
        score.setText(count);
        score.setPosition(score_circle.getX()-score.getWidth()/2,score_circle.getY()+score.getHeight()/2-3);
        setTimer(draw,1);
    }
}

//circle to circle collision
function collide(p1, p2){
    var dx = p1.getX() - p2.getX();
    var dy = p1.getY() - p2.getY();
    
    var dist = Math.sqrt(Math.pow(dx,2) + Math.pow(dy,2));
    if(dist <= p1.getRadius() + p2.getRadius()){
        var tangent = Math.atan2(dy, dx);
        var angle = 0.5 * Math.PI + tangent;

        x += Math.sin(angle);
        y -= Math.cos(angle);
    }
}

//checks for collision against inside walls
function collisionDetection(){
    for(var i = 0; i < vertical.length; i++){
        rectCollision(vertical[i]);
    }
    
    for(var i = 0; i < horizontal.length; i++){
        rectCollision(horizontal[i]);
    }
    
    if(level >=3){
        for(var i = 0; i < 2; i++){
            collide(ball,bouncy_circles[i]);
        }
    }
}

function rectCollision(rect){
    var distX = Math.abs(ball.x - rect.x-rect.w/2);
    var distY = Math.abs(ball.y - rect.y-rect.h/2);

    if (distX > (rect.getWidth()/2 + ball.getRadius())) { return false; }
    if (distY > (rect.getHeight()/2 + ball.getRadius())) { return false; }

    if (distX <= (rect.getWidth()/2)) { return true; } 
    if (distY <= (rect.getHeight()/2)) { return true; }

    var dx=distX-rect.getWidth()/2;
    var dy=distY-rect.getHeight()/2;
    return (dx*dx+dy*dy<=(ball.getRadius()*ball.getRadius()));
}

//puts obstacles
function obstacles(){
    var hy = 0;
    var vx = 0;
    
    if(level >= 2){
	    water = new Circle(Randomizer.nextInt(50,100));
	    water.setColor(Color.cyan);
	    water.setPosition(Randomizer.nextInt(water.getRadius(),getWidth()/2 - water.getRadius()),Randomizer.nextInt(getHeight()/2,getHeight()-water.getRadius()));
	    add(water);
	}
    
    for(var i = 0; i < 2; i++){
        horizontal_walls = new Rectangle(getWidth(),getHeight()/60);
	    horizontal_walls.setColor(Color.white);
	    horizontal_walls.setPosition(0,hy);
	    add(horizontal_walls);
	    hy = getHeight() - horizontal_walls.getHeight(); 
    }
	
	for(i=0; i < 2; i++){
	    vertical_walls = new Rectangle(getWidth()/60,getHeight());
	    vertical_walls.setPosition(vx,0);
	    vertical_walls.setColor(Color.white);
	    add(vertical_walls);
	    vx = getWidth() - vertical_walls.getWidth(); 
	}
	
	if(cheats != "No Walls"){
	    if(level >= 2){
	        for(var i = 0; i < horizontal.length; i++){
            	horizontal[i].setColor(Color.white);
            	horizontal[i].setPosition(Randomizer.nextInt(getWidth()/2,getWidth() - horizontal[i].getWidth() - vertical_walls.getWidth()),Randomizer.nextInt(getHeight()/3, getHeight()-getHeight()/3));
            	add(horizontal[i]);
	        }
        	
        	for(var i = 0; i < vertical.length; i++){
            	vertical[i].setColor(Color.white);
            	vertical[i].setPosition(Randomizer.nextInt(water.getX()+water.getRadius(),ball.getX()-ball.getRadius()-vertical[i].getWidth()),Randomizer.nextInt(vertical[i].getHeight(),getHeight() - vertical[i].getHeight() - ball.getRadius()*2 - horizontal_walls.getHeight()));
            	add(vertical[i]);
        	}
	    }else{
	        for(var i = 0; i < horizontal.length; i++){
            	horizontal[i].setColor(Color.white);
            	horizontal[i].setPosition(Randomizer.nextInt(getWidth()/2,getWidth() - horizontal[i].getWidth() - vertical_walls.getWidth()),Randomizer.nextInt(getHeight()/3, getHeight()-getHeight()/3));
            	add(horizontal[i]);
	        }
            
            for(var i = 0; i < vertical.length; i++){
            	vertical[i].setColor(Color.white);
            	vertical[i].setPosition(Randomizer.nextInt(getWidth()/3,ball.getX()-ball.getRadius()-vertical[i].getWidth()),Randomizer.nextInt(vertical[i].getHeight()+horizontal_walls.getHeight(),getHeight() - ball.getRadius()*2 - vertical[i].getHeight()-horizontal_walls.getHeight()));
            	add(vertical[i]);
            }
	    }
	}
	
	if(level == 3){
	    for(var i = 0; i < bouncy_circles.length; i++){
    	    bouncy_circles[i].setColor(Color.yellow);
    	    bouncy_circles[i].setPosition(Randomizer.nextInt(vertical_walls.getWidth()+bouncy_circles[i].getRadius(),getWidth()/2-bouncy_circles[i].getRadius()),Randomizer.nextInt(hole.getY()+hole.getRadius(),getHeight()/2));
    	    add(bouncy_circles[i]);
	    }
	}
}

//adds and removes items when blue how to play button is clicked
function info(){
    for(var i = 0; i < horizontal.length; i++){
        remove(vertical[i]);
        remove(horizontal[i]);
    }
    remove(water);
    remove(how_to_play);
    remove(ball);
        
    close = new WebImage("https://codehs.com/uploads/66717b486c745c85accf7ebce590dfb3");
    close.setSize(25,25);
    close.setPosition(how_to_play.getX(),how_to_play.getY());
    add(close);

    rectangle = new Rectangle(getWidth() - 100, getHeight()/3 + 40);
    rectangle.setPosition(getWidth()/2-rectangle.getWidth()/2,getHeight()/2-rectangle.getHeight()/2);
    rectangle.setColor(Color.white);
    add(rectangle);
    
    instructions = new Text("How To Play");
    instructions.setPosition(getWidth()/2 - instructions.getWidth()/2,rectangle.getY() + instructions.getHeight());
    add(instructions);
    
    instruction1 = new Text("Drag your mouse to move the ball.","9pt Arial");
    instruction1.setPosition(getWidth()/2 - instruction1.getWidth()/2, instructions.getY() + instruction1.getHeight()*2);
    add(instruction1);
    
    instruction_cont = new Text("Try to get the ball in the hole in as little hits as possible.","9pt Arial");
    instruction_cont.setPosition(getWidth()/2 - instruction_cont.getWidth()/2, instruction1.getY() + instruction_cont.getHeight() + 5);
    add(instruction_cont);
    
    line5 = new Text("There are three levels all with a different feature", "9pt Arial");
    line5.setPosition(getWidth()/2-line5.getWidth()/2,instruction_cont.getY()+line5.getHeight()+10);
    add(line5);
    
    line3 = new Text("Do not touch the ball until it is fully stopped","9pt Arial");
    line3.setPosition(getWidth()/2-line3.getWidth()/2,line5.getY()+line3.getHeight()+10);
    add(line3);
    
    line4 = new Text("Level too hard? Just click the reload icon.","9pt Arial");
    line4.setPosition(getWidth()/2-line4.getWidth()/2,line3.getY()+line4.getHeight()+10);
    add(line4);
    
    add(volume);
    add(vol_rectangle);
    add(vol_slider);
    add(vol_slider2);
    
    mouseDragMethod(volumeMethod);
}

function closeBox(){
    remove(close);
    remove(rectangle);
    remove(instructions);
    remove(instruction1);
    remove(instruction_cont);
    remove(line3);
    remove(line4);
    remove(line5);
    remove(volume);
    remove(vol_rectangle);
    remove(vol_slider);
    remove(vol_slider2);
    add(how_to_play);
    add(ball);
    if(level >= 2){
        add(water);
    }
    if(cheats != "No Walls"){
        for(var i = 0; i < horizontal.length; i++){
            add(vertical[i]);
            add(horizontal[i]);
        }
    }
}

function stopBall(){
    if(x<0.1&&x>0||x>-0.1&&x<0){
        x=0;
    }
   
    if(y<0.1&&y>0||y>-0.1&&y<0){
        y=0;
    }
}