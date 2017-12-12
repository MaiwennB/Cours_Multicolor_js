var interval = 1000;
var isStart = false;
var index = 0;

function StartStop(){
    isStart= !isStart;
    if(isStart){
        interval = setInterval(color,interval);
    }
    else{
        clearInterval(interval);
        document.style.backgroundColor = "white";
    }

}
function getcolor(){
    var arrayColor = [
        "black",
        "white",
        "red",
        "blue",
        "green",
        "yelow"
    ];
    var color = arrayColor[index%arrayColor.length];
    index++;
    return color;

}
function color(){
    document.body.style.backgroundColor = getcolor();

    
}