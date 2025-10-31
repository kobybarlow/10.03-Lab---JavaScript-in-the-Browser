

// Form Submission listener
document.getElementById("lineupForm").addEventListener("submit", myLineup);

function myLineup(event) {
    event.preventDefault();

    // Get Status
    const status = document.querySelector('input[name="status"]:checked').value;

    // Get Date
    const date = document.getElementById("Dates").value;


    // Convert Node list into array
    const checkedPlayers = document.querySelectorAll('input[name="players"]:checked');
    const Players = Array.from(checkedPlayers).map(p => p.value);


    // Print all selected information
    console.log("status: ", status);
    console.log("Date: ", date);
    console.log("Players: ", Players.join(" , "));

    const lineupInfo = `Status: ${status} | Date: ${date} | Players: ${Players.join(" , ")}`;


    // Display the string onto the page
    document.getElementById("Output").textContent = lineupInfo;
}