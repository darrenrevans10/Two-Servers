
var http = require("http");
var inquirer = require("inquirer");

var PORT1 = 7000;
var PORT2 = 7500;

function whichNote() {
	inquirer
		.prompt({
			name: "action",
			type: "list",
			message: "Which note would you like to read?",
			choices: [
				"Nice Note",
				"Mean Note"
			]
		})
		.then(function(answer) {
			switch (answer.action) {
				case "Nice Note":
				note1();
				break;

				case "Mean Note":
				note2();
				break;
			}
		});
};

whichNote();

function note1() {

	var server1 = http.createServer(niceNote);

	server1.listen(PORT1, function() {

		console.log("Server listening on: http://localhost:" + PORT1);
	});

	function niceNote(request, response) {
		
		response.end("You look great today!");		
	};
};

function note2() {

	var server2 = http.createServer(meanNote);

	server2.listen(PORT2, function() {
		
		console.log("Server listening on: http://localhost:" + PORT2);
	});

	function meanNote(request, response) {
	
		response.end("You look awful today!");

	};
};