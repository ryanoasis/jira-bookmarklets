javascript:(function(){
	var lines = [],
	    possible_inputs  = document.getElementsByClassName('wiki-textfield'),
	    last_input_index = possible_inputs.length - 1,
	    input = possible_inputs[last_input_index],
	    user_repo = prompt("Repository:"),
	    user_trunk_branch = prompt("Forked from Trunk:"),
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

		if (user_trunk_branch != "")
		{
			lines['forked'] = '||*Forked from branch:* |*'+user_trunk_branch+'* | |\n ';
		}
		else
		{
			lines['forked'] = '';
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
			||*Final QA:* |*{color:green}PASS ✔{color}*| *Notes* |\n\ 
			||*QA Prep:* | * Pulled latest branches on repos \n\ 
			* Pulled latest *master_prod* \n\ 
			* Pulled latest *master* \n\ 
			* Merged latest *master_prod* into *'+user_branch+'* \n\ 
			* Merged latest *master_prod* into *master* | | \n\ 
			||Verified code||*{color:green}PASS ✔{color}*| | \n\ 
			||Verified replication of issue||*{color:green}PASS ✔{color}*| | \n\ 
			||Verified replication of fix||*{color:green}PASS ✔{color}*| | \n\ 
			'+lines.browsers+'
			||*Branches:* | *'+user_branch+'* | |\n\ 
			||*Repos:* | *'+user_repo+'* | |\n\ 
			'+lines.forked+'
			||*Changesets:* | * ___ | |\n\ 
			'+lines.additional_notes+'
			||OVERALL||*{color:green}PASS ✔{color}*|* Merged and pushed latest *master* and *master_prod* |
		'
	;

})();
