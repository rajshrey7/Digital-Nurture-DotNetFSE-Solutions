function Event(name, category, seats) {

    this.name = name;
    this.category = category;
    this.seats = seats;

}

Event.prototype.checkAvailability = function () {

    return this.seats > 0
        ? "Seats Available"
        : "Event Full";

};

const event1 = new Event(
    "Music Festival",
    "Music",
    50
);

const event2 = new Event(
    "Food Fair",
    "Food",
    0
);

console.log(
    event1.checkAvailability()
);

console.log(
    event2.checkAvailability()
);

const container =
    document.getElementById("eventInfo");

[event1, event2].forEach(event => {

    const card =
        document.createElement("div");

    card.style.marginBottom = "20px";

    let html =
        `<h3>${event.name}</h3>`;

    html +=
        `<p>${event.checkAvailability()}</p>`;

    html += "<ul>";

    Object.entries(event).forEach(
        ([key, value]) => {

            html +=
                `<li>${key}: ${value}</li>`;

        }
    );

    html += "</ul>";

    card.innerHTML = html;

    container.appendChild(card);

});