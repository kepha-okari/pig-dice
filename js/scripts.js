
$("#menu-toggle").click(function(e) {
	  e.preventDefault();
	  console.log("click");
	    $("#wrapper").toggleClass("toggled");
	 });


/*
//business logic

$(document).ready(function() {
	$("form#ping").submit(function(e){

		var loopLimit = $("input#text-area").val();// to pick the limit from the input box

		var provitionalTotal = 0;                 //initialize the total

		var convertedLimit = parseInt(loopLimit);


		for (var i =1; i <=convertedLimit; i++) {

			if(i%3===0 && i%5!==0){                 // display number divisible only 3
				$(".verb").append(provitionalTotal);

			} else if(i%3!==0 && i%5===0) {         // display number divisible only 5
				$(".verb").append(provitionalTotal);

			} else if(i%15===0 ) {                 // display number divisible by 15
				$(".verb").append(provitionalTotal);

			} else {							// display numericals
				$(".verb").append(provitionalTotal);
			}
			
		}

		$("#showResult").show();
		e.preventDefault();
	});

  });*/


	//Back End Logic
	//A function to count up the inputted number while changing the multiples of 3, 5 and 15 to ping, pong and pingpong respectively.
	function countUp(input) {
	    var total = [];
	    for (var index = 1; index <= input; index++) {
	        //test
	        //console.log(index)
	        if (index % 3 === 0 && index % 5 === 0) {
	            total.push("pingpong");
	        } else if (index % 5 === 0) {
	            total.push("pong");
	        } else if (index % 3 === 0) {
	            total.push("ping");
	        } else {
	            total.push(index);
	        }
	    };
	    return total;
	};
	//A function to clear the input field after successful submission of a number.
	function clearForm(form) {
	    // $(':input').not(':button, :submit').val('');
	    //
	    $("#text-area").val(""); // to only clear the text box
	};

// Front End Logic
$(document).ready(function () {
    $("form#ping ").submit(function (event) {
        event.preventDefault();
        //Clear previously displayed output
        $("p#output").empty();
      
        //Store the user input into a variable
        var enteredNumber = parseInt($("#text-area").val());
        //Call the function countUp to work on the new variable enteredNumber inside a new variable
        var countedNumbers = countUp(enteredNumber);
        console.log(countedNumbers);// this has no impact on the out put..just used it for debuging from the browsers console
        //Print out the processed numbers in list form.
        for (var index = 0; index <= countedNumbers.length - 1; index++) {
            $("p#output").append(countedNumbers[index]+"</br>");
            $("p#output").append("<hr>")
        };

        // countedNumbers.forEach(function (num) {
        // 	$("p#output").append(num+"</br>");
        //     $("p#output").append("<hr>")
        // });
       
        //Clear the previously filled input by calling the function clearForm to empty out the input field
        //clearForm("input");
        // alternatively:
         //$("#text-area").val("");
    });
});


$("#text-area").click(function(){
	$("p#output").text("");
});
















