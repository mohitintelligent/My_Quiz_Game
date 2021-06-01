class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question();
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();
    //write code to change the background color here
    background("lightblue");
    //write code to show a heading for showing the result of Quiz
      
    //call getContestantInfo( ) here
Contestant.getContestantInfo();

    //write condition to check if contestantInfor is not undefined
      textSize(20);
      fill("brown");
      text("So the results are :- ",100,275)
    //write code to add a note here
    if(allContestants!==undefined){
      fill("black");
      textSize(20);
      text("NOTE: Contestant who answered correctly are highlighted in green colour!!",100,225);
    }
    //write code to highlight contest who answered correctly
    for(var plr in allContestants){
     
      var correctAnswer="2";
      if(correctAnswer===allContestants[plr].answer){
        fill("green");
        text(allContestants[plr].name+":"+allContestants[plr].answer,100,300);
      }else{
        fill("red");
        text(allContestants[plr].name+":"+allContestants[plr].answer,100,325);
      }
    }
  }
}
