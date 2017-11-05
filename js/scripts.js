// this will hide the input fields for the players names
/*$(document).ready(function(){
*/    $("button#playButton").click(function(e){
    	e.preventDefault();
        $("div#player-names-section").toggle();
    });

    // refresh the page for new players or new game
    $('.newGame').click(function() {
    location.reload();
	});

/*});*/// end ready


// Business Logic
function randomGen(){
	var diceNumber = Math.floor((Math.random()*6)+1);
	return diceNumber;
}