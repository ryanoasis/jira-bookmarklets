javascript:(function(){
	var lines = [],
	    possible_inputs  = document.getElementsByClassName('wiki-textfield'),
	    last_input_index = possible_inputs.length - 1,
	    input = possible_inputs[last_input_index],
	    user_repo = prompt("Repository:"),
	    user_trunk_branch = prompt("Forked from Trunk:"),
	    user_branch = prompt("Branch:"),
	    user_browsers = prompt("Browsers Tested on:"),
	    user_work_summary = prompt("Work Summary:"),
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

		if (user_work_summary != "")
		{
			lines['work_summary'] = '||*Work Summary:* | * '+user_work_summary+'| |\n ';
		}
		else
		{
			lines['work_summary'] = '||*Work Summary:* | * See Commit Message| |\n ';
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
			||*Final QA:* |*{color:orange}PASS ✔{color}*| *Notes* |\n\ 
			||*QA Prep:* | * Pulled latest branch: *'+user_branch+'* (Repo: _'+user_repo+'_) \n\
			* Pulled latest *'+user_trunk_repo+'* \n\
			* Merged latest *'+user_trunk_repo+'* into *'+user_branch+'* \n\
			* Cleared symfony cache \n\
			* Cleared browser cache and/or force refreshed affected views | |\n\
			'+lines.browsers+'
			||Verified code||*{color:green}PASS ✔{color}*| | \n\
			||Verified replication of issue||*{color:green}PASS ✔{color}*| | \n\
			||Verified replication of fix||*{color:green}PASS ✔{color}*| | \n\
			||*Branches:* | *'+user_branch+'* | |\n\ 
			||*Repos:* | *'+user_repo+'* | |\n\ 
			'+lines.forked+'
			||*Changesets:* | * ___ | |\n\ 
			'+lines.work_summary+' 
			'+lines.additional_notes+'
		'
	;
})();
