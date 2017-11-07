


// BUSINESS LOGIC
function Player(playerName, turnScore, totalScore) {
  this.playerName = playerName;
  this.turnScore = turnScore;
  this.totalScore = totalScore;
}

Player.prototype.roll = function() {
  var diceValues = [1, 2, 3, 4, 5, 6];
  var rollValue = diceValues[Math.floor(Math.random() * diceValues.length)];
  if (rollValue === 1) {
    this.turnScore = 0;
  } else {
    this.turnScore = this.turnScore + rollValue;
  };
  return rollValue;
}

Player.prototype.score = function() {
  this.totalScore += this.turnScore ;
  this.turnScore = 0;
}
Player.prototype.totalScore = function() {
  this.totalScore += this.turnScore ;
  return this.totalScore;
}

// USER INTERFACE
// this will hide the input fields for the players names
$(document).ready(function(){
	//global variables
	var player1;
	var player2;

	// refresh the page for new players or new game
    $('.newGame').click(function() {
    location.reload();
    //clears inputs fields after every refresh
    $("#player1Name").val("");
    $("#player2Name").val("");

	});

  	$("button#playButton").click(function(event){
    	event.preventDefault();

        $("div#player-names-section").toggle();
	        var player1Name = $("#player1Name").val();
			var player2Name = $("#player2Name").val();

			player1 = new Player (player1Name,0,0);
			player2 = new Player (player2Name,0,0);

		//stores and display the names of players and the initial score
	  $(".player1NameOutput").text(player1.playerName);
	  $(".player2NameOutput").text(player2.playerName);
	  $(".player1-total-score").html("<span class='player1-total-score'>" + player1.totalScore + "</span>");
    });

    $("#roll1").click(function(event) {
    event.preventDefault();
    var player1RolledNumber = player1.roll();

    	if (player1RolledNumber === 1) {
    		$(".player1-turn-score").text(player1.turnScore);
    		$(".player1-total-score").text(player1.score());

    		alert("Oop! You rolled a 1, it is   " + player2.playerName + "'s turn");// display turn is over
    		$("#player1").show().fadeOut(1200);
    		$("#player2").show();
    	} 		   
		   	$(".player1-rolled-number").text(player1RolledNumber);
		    $(".player1-turn-score").text(player1.turnScore);
		    $(".player1-total-score").text(player1.totalScore);

  });

    $("#hold1").click(function(event) {
    event.preventDefault();
    player1.score();
    $(".player1-total-score").text(player1.totalScore);
    $(".player1-rolled-number").text("");
    $(".player1-turn-score").text("");
      
  });

 	$("#roll2").click(function(event) {
    event.preventDefault();
    var player2RolledNumber = player2.roll();

    	if (player2RolledNumber === 1) {
    		$(".player2-turn-score").text(player2.turnScore);
    		$(".player2-total-score").text(player2.score());
    		/*alert(player2.score);*/
    		alert("Oop! You rolled a 1, it is   " + player1.playerName + "'s turn");// display turn is over// display turn is over
    		$("#player2").show().fadeOut(1200);
    		$("#player1").show();
    	} 		   
		   	$(".player2-rolled-number").text(player2RolledNumber);
		    $(".player2-turn-score").text(player2.turnScore);
		    $(".player2-total-score").text(player2.totalScore);
		    
  });

 // hold button for player 2	

  $("#hold2").click(function(event) {
    event.preventDefault();
    player2.score();
    $(".player2-total-score").text(player2.totalScore);
    $(".player2-rolled-number").text("");
    $(".player2-turn-score").text("");
 
  });


 

});
// end ready