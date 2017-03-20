// Real for js bookmarklet:

javascript:(function(){
	var possible_inputs  = document.getElementsByClassName('wiki-textfield'),
	    last_input_index = possible_inputs.length - 1,
	    input = possible_inputs[last_input_index],
	    user_repo = prompt("Repository:"),
	    user_trunk_repo = prompt("Forked from Branch:"),
	    user_browsers = prompt("Browsers Tested on:"),
	    user_branch = prompt("Branch:");
	
	input.value =
		'
			||*QA Prep:* | * Pulled latest branch (_repo_): *'+user_branch+'* (Repo: _'+user_repo+'_) \n\
			* Pulled latest *master* \n\
			* Merged latest *master* into *'+user_branch+'* \n\
			* Cleared symfony cache \n\
			* Cleared browser cache and/or force refreshed affected view(s) | |\n\
			||Tested on: | *'+user_browsers+'* | |\n\
			||Final QA Completed: ||*{color:green}PASS ✔{color} / {color:red}FAIL{color}*| *NOTES* \n\
			||SOMETHING||*{color:green}PASS ✔{color}*| | \n\
			||*Changesets*|| * ___ | | \n\
			||*Additional Notes:* || * ___ | |\n
			||OVERALL||*{color:green}PASS ✔{color}*|* Merged and pushed latest *master* |
		'
	;
})();
