//frame object constructor with helper functions
function frame(){
    this.rolls = [];
    this.score=0;
    this.case = null;   
};
frame.prototype.storeRoll = function (input){
    this.rolls.push(input);
    this.score += input;

}
frame.prototype.roll = function (input){
    if(input == 10){
       
        this.case = 'Strike';
    }
    if(this.rolls[0] + input == 10 && this.rolls[0] < 10){
        this.case = 'Spare';
    }

    this.storeRoll(input)

};
frame.prototype.addBonus = function(s){
    if (s == 'Strike'){
        return this.score;
    }
    if(s == 'Spare'){
        return this.rolls[0];
    }
};