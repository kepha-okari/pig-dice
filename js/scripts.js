// this will hide the input fields for the players names
$(document).ready(function(){
    $("button#playButton").click(function(e){
    	e.preventDefault();
        $("div#player-names-section").toggle();
    });
});
