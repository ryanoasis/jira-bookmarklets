javascript:(function(){
	var possible_inputs  = document.getElementsByClassName('wiki-textfield'),
	    last_input_index = possible_inputs.length - 1,
	    input = possible_inputs[last_input_index],
	    user_repo = prompt("Repository:"),
	    user_trunk_branch = prompt("Forked from Trunk:"),
	    user_browsers = prompt("Browsers Tested on:"),
	    user_branch = prompt("Branch:");

	input.value =
		'
			||*QA Prep:* | * Pulled latest branch: *'+user_branch+'* (Repo: _'+user_repo+'_) \n\
			* Pulled latest *'+user_trunk_branch+'* \n\
			* Merged latest *'+user_trunk_branch+'* into *'+user_branch+'* \n\
			* Cleared symfony cache \n\
			* Cleared browser cache and/or force refreshed affected views | |\n\
			||Browers Tested on: ||*'+user_browsers+'* | |\n\
			||SOMETHING||*{color:green}PASS ✔{color}*|* _ | \n\
			||OVERALL||*{color:green}PASS ✔{color}*|* _ |\n\
			||*Status:* |Peer QA Completed; Final QA Ready
		'
	;

})();
