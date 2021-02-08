function data(){
    this.val = [];
};
document.getElementById("btn").addEventListener("click", send);
        
function send(){
    var input =  document.getElementById("values").value;
    var dat = new data ();
    dat.interface(input);

}
//data function to receive convert form input to integer array
data.prototype.interface = function (vals){
    var arr = vals.split(", ");
    var i = 0;
   
    for (i; i<arr.length; i++){
        if(String(arr[i]).match(/strike/gi) != null){
            arr[i] = 10;
        }
        if(String(arr[i]).match(/miss/gi) != null){
            arr[i] = 0;
        }
        if(String(arr[i]).match(/spare/gi) != null){
            arr[i] = 10 - arr[i-1];
        }
        if(arr[i] > 10 || isNaN(arr[i]) || (arr.length>21)){
            printError();
            process.exit(0);
            break;
        }

    }
    this.val = arr.map(x=>+x);
    var game = new scores();
    for( var j = 0; j<this.val.length; j++){
        var fr = new frame();
        game.rollOne = this.val[j];
          if(game.rollOne == 10){
              fr.roll(10);
// logic for scoring if strike on the first roll of the final frame 
              if(game.isFinalFrame()){
                game.rollTwo = this.val[j+1];
                game.rollThree = this.val[j+2];
                fr.roll(game.rollTwo); fr.roll(game.rollThree);
                fr.score=game.frameScore();
                game.storeFrame(fr);
                break;
              }
              game.storeFrame(fr);
          }
          else{
//Store rolls in frame type, store the frames in the scores type before proceeding to iterate through the values
            fr.roll(game.rollOne);
            game.rollTwo = this.val[j+1];
            fr.roll(game.rollTwo);
            fr.score = game.frameScore();
            game.storeFrame(fr);
            j++;

          }
        }
        var index;
//Add bonus for special case rolls using addBonus from scores.js
    if(game.allFrames.length > 1 && game.allFrames.length < 9){
         for(index =0; index< game.allFrames.length; index++){
            var s = game.allFrames[index].case; 
            if(s === "Strike"){
                 game.allFrames[index].score += game.allFrames[index+1].addBonus(s);
            }
            if(s === "Spare"){
                 game.allFrames[index].score += game.allFrames[index+1].addBonus(s);
            }
    }
  
}
    printInfo(game);
  
};


