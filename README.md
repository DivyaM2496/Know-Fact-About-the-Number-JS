# 🔢 Number Facts App

## 📌 Overview

The **Number Facts App** is a JavaScript web application that fetches interesting facts about numbers from an API. Users can input any number, and the app displays a fun or educational fact about that number.

This project is useful for practicing **fetch API**, **DOM manipulation**, **event handling**, and **real-time data fetching** in JavaScript.

---

## 🧩 Features

* Input any number and fetch a fact about it
* Displays facts dynamically on the webpage
* Shows a loading spinner while fetching data
* Supports pressing the `Enter` key to fetch facts

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (Fetch API)

---

## ⚙️ How It Works

1. User types a number in the input field.
2. Pressing `Enter` triggers the `factdisplay()` function.
3. The function validates the input.
4. Calls `getFactText()` which fetches data from the API:

   * URL: `https://apis.ccbp.in/numbers-fact?number=<user_input>`
   * Toggles spinner visibility
   * Parses JSON response
   * Displays the fact in the `fact` element

---

## 📂 Project Structure

```
number-facts-app/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🧪 JavaScript Logic

```js
function getFactText(input) {
    let url = "https://apis.ccbp.in/numbers-fact?number=" + input;
    let options = { method: "GET" };
    spinner.classList.toggle("d-none");
    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            spinner.classList.toggle("d-none");
            fact.textContent = JSON.stringify(data.fact);
        });
}

function factdisplay(event) {
    let input = userInputEl.value;
    if (event.key === "Enter") {
        if (input === "") {
            alert("Enter valid number!");
            return;
        }
        getFactText(input);
    }
}

userInputEl.addEventListener("keydown", factdisplay);
```

---

## 📚 Concepts Covered

* Fetch API for HTTP requests
* Handling JSON data
* DOM element selection and update
* Event handling (`keydown` event)
* Using CSS classes to show/hide loading spinner

---

## 🚀 Future Improvements

* Add button to fetch facts instead of `Enter` key only
* Handle non-numeric inputs gracefully
* Display multiple facts for the same number
* Style facts dynamically with animations

---

## 👩‍💻 Author

Created as a practice project to strengthen **JavaScript Fetch API**, **DOM manipulation**, and **event handling skills**.

---

⭐ If you find this project useful, feel free to star the re
