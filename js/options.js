// select elements
const options = document.querySelector(".options");
const gameOverElement = document.querySelector(".gameover");

// select buttons
const computerBtn = document.querySelector(".computer");
const friendBtn = document.querySelector(".friend");
const xBtn = document.querySelector(".x");
const oBtn = document.querySelector(".o");
const playBtn = document.querySelector(".play");

//variables for oser's options
let OPPONENT;
const player = new Object;

// event listener to every button
computerBtn.addEventListener("click", function(){
	OPPONENT = "computer";

	switchActive(friendBtn, computerBtn);
});

friendBtn.addEventListener("click", function(){
	OPPONENT = "friend";

	switchActive(computerBtn, friendBtn);
});
xBtn.addEventListener("click", function(){
	player.man = "X";
	player.computer = "O";
	player.friend = "O";

	switchActive(oBtn, xBtn);

});
oBtn.addEventListener("click", function(){
	player.man = "O";
	player.computer = "X";
	player.friend = "X";

	switchActive(xBtn, oBtn);

});
playBtn.addEventListener("click", function(){
	
	// checking
	if( !OPPONENT){
		computerBtn.style.backgroundColor = "gray";
		friendBtn.style.backgroundColor = "gray";
		return;
	}

	if( !player.man ){
			oBtn.style.backgroundColor = "gray";
			xBtn.style.backgroundColor = "gray";
			return;
	}

	// run the game
	init(player, OPPONENT);
	options.classList.add("hide");

});

// switch active class between two element
function switchActive(off, on){
	off.classList.remove("active");
	on.classList.add("active");
}