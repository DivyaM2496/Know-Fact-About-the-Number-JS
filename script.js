let userInputEl = document.getElementById("userInput");
let fact = document.getElementById("fact");
let spinner = document.getElementById("spinner");


function getFactText(input) {
    let url = "https://apis.ccbp.in/numbers-fact?number=" + input;
    let options = {
        method: "GET"
    }
    spinner.classList.toggle("d-none");
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            spinner.classList.toggle("d-none");
            fact.textContent = JSON.stringify(data.fact);
        });
}

function factdisplay(event) {
    let input = userInputEl.value;
    if (event.key === "Enter") {
        if (userInputEl.value === "") {
            alert("Enter valid number!");
            return;
        }
        getFactText(input);
    }
}

userInputEl.addEventListener("keydown", factdisplay);
