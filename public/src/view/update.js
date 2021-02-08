//function to display output (total score and frame data) to index.html
function printInfo(game)
{
    var total = 0;
    total = parseInt(game.calculateTotal());  
    document.getElementById("framedata").innerHTML = game.getFrameData();
    document.getElementById("out").innerHTML = "Total score: " + parseInt(total);
    
    console.log(game.allFrames.length)
    if(game.allFrames.length == 10){
        document.getElementById("out").innerHTML = "Final score: " + parseInt(total);
        document.getElementById("btn").disabled = true;
    }
 
};
//function to display error message is input parameters are of the incorrect format
function printError()
{
    var err = document.getElementById("error");
    err.innerHTML = "Error, please check to make sure your values are entered correctly. Use case: 5, 3, Strike, 3, Miss <br> **Please hit New Game to try again**";
    document.getElementById("btn").disabled = true;
};


