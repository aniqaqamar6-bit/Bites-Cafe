const form = document.querySelector("form");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    const username = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;

    if (username !== "" && email !== "") {

        document.querySelector("#form-message").textContent =
            "Thank you for visiting, " + username +
            "! We will contact you at " + email + ".";

    } else {

        document.querySelector("#form-message").textContent =
            "Please fill in your name and email.";

    }

});




const rows = document.querySelectorAll("#menu-table tbody tr");

rows.forEach(function(row) {

    row.addEventListener("mouseover", function() {

        row.style.backgroundColor = "#f5e6d3";

    });

    row.addEventListener("mouseout", function() {

        row.style.backgroundColor = "white";

    });

});




const themeButton = document.querySelector("#theme-button");

themeButton.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

});




const menuItems = document.querySelectorAll(".menu-item");

const total = document.querySelector("#total");

menuItems.forEach(function(item) {

    item.addEventListener("change", function() {

        let price = 0;

        menuItems.forEach(function(item) {

            if (item.checked) {

                price = price + parseInt(item.value);

            }

        });

        total.textContent = "Total: $" + price;

    });

});




const birthYear = document.querySelector("#birth-year");

birthYear.addEventListener("change", function() {

    const year = parseInt(birthYear.value);

    const age = 2026 - year;

    if (age <= 25 || age >= 60) {

        document.querySelector("#form-message").textContent =
            "You qualify for a special discount! Your age is " + age + ".";

    }

});




const readMoreButton = document.querySelector("#read-more");

const moreText = document.querySelector("#more-text");

readMoreButton.addEventListener("click", function() {

    if (moreText.style.display === "none") {

        moreText.style.display = "block";

        readMoreButton.textContent = "Read Less";

    } else {

        moreText.style.display = "none";

        readMoreButton.textContent = "Read More";

    }

});




const filterButtons = document.querySelectorAll(".filter-button");

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const category = button.getAttribute("data-category");

        rows.forEach(function(row) {

            if (category === "all") {

                row.style.display = "";

            } 
            else if (row.getAttribute("data-category") === category) {

                row.style.display = "";

            } 
            else {

                row.style.display = "none";

            }

        });

    });

});




const status = document.querySelector("#status");

const currentHour = new Date().getHours();

if (currentHour >= 8 && currentHour < 21) {

    status.textContent = "We are Open!";

    status.style.color = "lightgreen";

} 
else {

    status.textContent = "Closed - Open at 8 AM";

    status.style.color = "red";

}



const specialNotes = document.querySelector("#special-notes");

const counter = document.querySelector("#counter");

specialNotes.addEventListener("input", function() {

    const remaining = 100 - specialNotes.value.length;

    counter.textContent = remaining + " characters remaining";

});