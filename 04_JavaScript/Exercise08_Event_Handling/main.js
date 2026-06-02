const events = [
    {
        name: "Music Festival",
        category: "Music"
    },
    {
        name: "Food Fair",
        category: "Food"
    },
    {
        name: "Book Exhibition",
        category: "Education"
    },
    {
        name: "Rock Concert",
        category: "Music"
    }
];

const container =
    document.getElementById("eventsContainer");

function displayEvents(eventList) {

    container.innerHTML = "";

    eventList.forEach(event => {

        const card =
            document.createElement("div");

        card.className = "event-card";

        const title =
            document.createElement("h3");

        title.textContent = event.name;

        const category =
            document.createElement("p");

        category.textContent =
            `Category: ${event.category}`;

        const registerBtn =
            document.createElement("button");

        registerBtn.textContent =
            "Register";

        registerBtn.onclick = function () {

            alert(
                `Registered for ${event.name}`
            );

        };

        card.appendChild(title);
        card.appendChild(category);
        card.appendChild(registerBtn);

        container.appendChild(card);

    });

}

displayEvents(events);

document
    .getElementById("categoryFilter")
    .onchange = function () {

        const selectedCategory =
            this.value;

        if (selectedCategory === "All") {

            displayEvents(events);

        }
        else {

            const filteredEvents =
                events.filter(
                    event =>
                        event.category === selectedCategory
                );

            displayEvents(filteredEvents);

        }

    };

document
    .getElementById("searchBox")
    .onkeydown = function () {

        setTimeout(() => {

            const searchText =
                this.value.toLowerCase();

            const filteredEvents =
                events.filter(
                    event =>
                        event.name
                            .toLowerCase()
                            .includes(searchText)
                );

            displayEvents(filteredEvents);

        }, 0);

    };