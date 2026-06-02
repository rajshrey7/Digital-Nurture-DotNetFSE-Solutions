const events = [
    {
        name: "Music Festival",
        category: "Music",
        seats: 50
    },
    {
        name: "Food Fair",
        category: "Food",
        seats: 30
    },
    {
        name: "Book Exhibition",
        category: "Education",
        seats: 20
    }
];

const container =
    document.querySelector("#eventsContainer");

events.forEach(event => {

    const card =
        document.createElement("div");

    card.className = "event-card";

    const title =
        document.createElement("h3");

    title.textContent = event.name;

    const seats =
        document.createElement("p");

    seats.textContent =
        `Available Seats: ${event.seats}`;

    const registerBtn =
        document.createElement("button");

    registerBtn.textContent = "Register";

    const cancelBtn =
        document.createElement("button");

    cancelBtn.textContent = "Cancel";

    registerBtn.onclick = function () {

        if (event.seats > 0) {

            event.seats--;

            seats.textContent =
                `Available Seats: ${event.seats}`;

        }

    };

    cancelBtn.onclick = function () {

        event.seats++;

        seats.textContent =
            `Available Seats: ${event.seats}`;

    };

    card.appendChild(title);
    card.appendChild(seats);
    card.appendChild(registerBtn);
    card.appendChild(cancelBtn);

    container.appendChild(card);

});