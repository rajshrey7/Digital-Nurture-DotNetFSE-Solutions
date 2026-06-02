const events = [];

function addEvent(name, category) {

    events.push({
        name,
        category
    });

}

function registerUser(userName, eventName) {

    console.log(
        `${userName} registered for ${eventName}`
    );

}

function filterEventsByCategory(category, callback) {

    const filteredEvents = events.filter(
        event => event.category === category
    );

    callback(filteredEvents);

}

function registrationTracker() {

    let totalRegistrations = 0;

    return function () {

        totalRegistrations++;

        return totalRegistrations;

    };

}

const musicRegistrations = registrationTracker();

addEvent("Music Festival", "Music");
addEvent("Food Fair", "Food");
addEvent("Rock Concert", "Music");
addEvent("Book Exhibition", "Education");

registerUser("Shreyansh", "Music Festival");

console.log(
    "Music Registrations:",
    musicRegistrations()
);

console.log(
    "Music Registrations:",
    musicRegistrations()
);

console.log(
    "Music Registrations:",
    musicRegistrations()
);

filterEventsByCategory(
    "Music",
    function (filteredEvents) {

        const eventList =
            document.getElementById("eventList");

        filteredEvents.forEach(event => {

            const li =
                document.createElement("li");

            li.textContent = event.name;

            eventList.appendChild(li);

        });

    }
);