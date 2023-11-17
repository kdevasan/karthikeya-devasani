var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };



// Function to calculate and display average and highest scores
function displayResults() {
    // Calculate the average score
    var total = 0;
    var highestScore = 0;
    for (var i = 0; i < scores.length; i++) {
        total += scores[i];
        if (scores[i] > highestScore) {
            highestScore = scores[i];
        }
    }
    var average = total / scores.length;

    // Display results in the "results" div
    var resultsDiv = $("results");
    resultsDiv.innerHTML = "<h2>Results</h2>" +
        "<p>Average Score: " + average + "</p>" +
        "<p>Highest Score: " + highestScore + "</p>";
}

// Function to display scores in a table
function displayScores() {
    var scoresTable = $("scores_table");
    scoresTable.innerHTML = ""; // Clear previous content

	var tableCaption = scoresTable.createCaption();
    tableCaption.innerHTML = "<h2>Scores</h2>"; 

    // Create a table header row
    var tableHeader = scoresTable.insertRow(0);
    var nameHeader = tableHeader.insertCell(0);
    var scoreHeader = tableHeader.insertCell(1);
	nameHeader.classList.add("header-cell");
    scoreHeader.classList.add("header-cell");
    nameHeader.innerHTML = "Name";
    scoreHeader.innerHTML = "Score";

    // Populate the table with data
    for (var i = 0; i < names.length; i++) {
        var newRow = scoresTable.insertRow(i + 1);
        var nameCell = newRow.insertCell(0);
        var scoreCell = newRow.insertCell(1);
        nameCell.innerHTML = names[i];
        scoreCell.innerHTML = scores[i];
    }
}

// Function to add a name and score to the arrays
function addScore() {
    var nameInput = $("name").value;
    var scoreInput = parseInt($("score").value);
	nameError.textContent = "";

	if (nameInput.trim() === "" || !/^[a-zA-Z]+$/.test(nameInput)) {
        nameError.textContent = "Name cannot be empty";
        return; 
    }

    // Validate input
    if (nameInput && !isNaN(scoreInput)) {
        names.push(nameInput);
        scores.push(scoreInput);

        // Clear input fields
        $("name").value = "";
        $("score").value = "";

		nameError.textContent = "";
        // Display updated scores
        displayScores();
    } else {
        alert("Please enter a valid name and score.");
    }
}




window.onload = function () {
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
};


