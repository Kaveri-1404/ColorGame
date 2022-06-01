
var colors=RandomColors(6);

var squares=document.querySelectorAll(".square");

var pickedColor=pickColor(6);

var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton=document.querySelector("#easy");
var hardButton=document.querySelector("#hard");



colorDisplay.textContent=pickedColor;


for(var i=0;i<squares.length;i++){
	//colors of the boxes
	squares[i].style.background=colors[i];
    //add click listeners to the boxes
	squares[i].addEventListener("click", function(){
     var clickedColor=this.style.background;
     if(clickedColor === pickedColor){
     	messageDisplay.textContent="Correct!";
     	changeColor(clickedColor);
     	resetButton.textContent="Play again!";

     }else{
     	this.style.background="#232323";
     	messageDisplay.textContent="Try Again!"
     	resetButton.textContent="New colors";
     }
     
	});
}


function changeColor(color){
	for(var i=0; i<squares.length; i++){
	squares[i].style.background=color;
	}
	h1.style.background=color;
}

function pickColor(number){
	if(number===6){
	var random =Math.floor(Math.random()*6);
	return colors[random];}
	else {
		var random =Math.floor(Math.random()*3);
	return colors[random];
	}
}

function RandomColors(num){
	var colors =[]
for(var i=0;i<num;i++){
   colors[i]=rgb();
}
return colors;
}

function rgb(){
var r= Math.floor(Math.random()*256);
var g= Math.floor(Math.random()*256);
var b= Math.floor(Math.random()*256);


return "rgb("+r+", "+g+", "+b+")";

}

resetButton.addEventListener("click", function(){
	colors=RandomColors(6);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	messageDisplay.textContent="";
	for(var i=0;i<squares.length;i++){
		squares[i].style.background=colors[i];
	}
      h1.style.background="steelblue";
	if(resetButton.textContent==="Play again!"){

		resetButton.textContent="New colors";
	}
});

easyButton.addEventListener("click", function(){
    h1.style.background="steelblue";
	hardButton.classList.remove("selected");
	easyButton.classList.add("selected");
	colors=RandomColors(3);
	
	pickedColor=pickColor(3);
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.background=colors[i];
		}
		else{
			squares[i].style.display="none";

		}
	}

});

hardButton.addEventListener("click", function(){
	h1.style.background="steelblue";
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");

	colors=RandomColors(6);
	
	pickedColor=pickColor(6);
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		squares[i].style.display="block";
	    squares[i].style.background=colors[i];
		}
	
});