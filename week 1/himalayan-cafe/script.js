

function showMessage() {

    document.getElementById("welcome").innerHTML =
        "Thank You for Visiting Himalayan Cafe!";

}


function filterMenu(category) {

    let items = document.querySelectorAll(".menu-item");

    items.forEach(function(item) {

        if (category === "all" ||
            item.dataset.category === category) {

            item.style.display = "block";

        } else {

            item.style.display = "none";

        }

    });

}


document.getElementById("contactForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    document.getElementById("response").innerHTML =
        "Thank you, " + name +
        "! Your message has been received.";

    this.reset();

});
