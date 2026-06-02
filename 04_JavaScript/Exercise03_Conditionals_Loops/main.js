const events = [
    {
        name: "Music Festival",
        seats: 50,
        date: "2026-07-15"
    },
    {
        name: "Food Fair",
        seats: 0,
        date: "2026-08-10"
    },
    {
        name: "Old Marathon",
        seats: 20,
        date: "2024-01-01"
    }
];

const today = new Date();

events.forEach(event => {

    const eventDate = new Date(event.date);

    if (eventDate > today && event.seats > 0) {

        const li = document.createElement("li");

        li.textContent =
            `${event.name} - Seats Available: ${event.seats}`;

        document
            .getElementById("eventList")
            .appendChild(li);
    }

});

function registerEvent(eventName) {

    try {

        const event = events.find(
            e => e.name === eventName
        );

        if (!event) {
            throw new Error("Event not found");
        }

        if (event.seats <= 0) {
            throw new Error("No seats available");
        }

        event.seats--;

        console.log(
            `Registered successfully for ${event.name}`
        );

    }
    catch (error) {

        console.error(
            "Registration Error:",
            error.message
        );

    }

}

registerEvent("Music Festival");
registerEvent("Food Fair");
registerEvent("Unknown Event");