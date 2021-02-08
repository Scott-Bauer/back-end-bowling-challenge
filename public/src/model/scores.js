//scores object constructor to store frame data
function scores()  {
    this.fr = new frame();
    this.rollOne = 0;
    this.rollTwo = 0;
    this.rollThree = 0;
    this.allFrames = [];
};
//Use frame score to calculate total score
scores.prototype.calculateTotal = function()
{
    var total = 0;
    if(this.allFrames.length == 0){
        total += this.rollOne;
    }
    else{
    this.allFrames.forEach(frame => {
        if(isNaN(frame['score'])){
            total+=frame['rolls'][0]}
            else{
        total += frame['score'];
        }
    })
    return total;
}
};

scores.prototype.frameScore = function()
{
    return this.rollOne + this.rollTwo + this.rollThree;
}
//store frame in allFrames attribute of scores
scores.prototype.storeFrame = function(frame)
{
    this.allFrames.push(frame);
}
//helper function for update.js to display frame score and rolls of the game
scores.prototype.getFrameData = function(){
    var str = "";
    var index = 0;
for(index; index<this.allFrames.length; index++)
{
    if(!isNaN(parseInt(this.allFrames[index].score))){
    str += "Frame "+ (index+1) + " Score: " + parseInt(this.allFrames[index].score) + " | ";}}
    return str;
};
scores.prototype.isFinalFrame = function(){
    return this.allFrames.length === 9;
};


