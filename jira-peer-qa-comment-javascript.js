javascript:(function(){
	var lines = [],
	    possible_inputs  = document.getElementsByClassName('wiki-textfield'),
	    last_input_index = possible_inputs.length - 1,
	    input = possible_inputs[last_input_index],
	    user_repo = prompt("Repository:"),
	    user_branch = prompt("Branch:"),
	    user_browsers = prompt("Browsers Tested on:"),
	    user_additional_notes = prompt("Additional Notes:");

		if (user_browsers != "")
		{
			lines['browsers'] = '||Browers Tested on: |'+user_browsers+' | |\n ';
		}
		else
		{
			lines['browsers'] = '';
		}

		if (user_additional_notes != "")
		{
			lines['additional_notes'] = '||*Additional Notes:* | * '+user_additional_notes+'| |\n ';
		}
		else
		{
			lines['additional_notes'] = '';
		}


	input.value =
		'
			||*Peer QA:* |*{color:green}PASS ✔{color}*| *Notes* |\n\ 
			||*Final QA:* |*{color:orange}Ready/Pending{color}*| |\n\ 
			'+lines.browsers+'
			|SOMETHING||*{color:green}PASS ✔{color}*|* _ | \n\
			||*Branches:* | *'+user_branch+'* | |\n\ 
			||*Repos:* | *'+user_repo+'* | |\n\ 
			'+lines.additional_notes+'
		'
	;

})();
