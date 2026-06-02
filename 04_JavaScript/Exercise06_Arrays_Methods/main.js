const events = [];

events.push({
    name: "Music Festival",
    category: "Music"
});

events.push({
    name: "Food Fair",
    category: "Food"
});

events.push({
    name: "Rock Concert",
    category: "Music"
});

events.push({
    name: "Book Exhibition",
    category: "Education"
});

const allEventsList =
    document.getElementById("allEvents");

events.forEach(event => {

    const li =
        document.createElement("li");

    li.textContent = event.name;

    allEventsList.appendChild(li);

});

const musicEvents =
    events.filter(
        event => event.category === "Music"
    );

const musicEventsList =
    document.getElementById("musicEvents");

musicEvents.forEach(event => {

    const li =
        document.createElement("li");

    li.textContent = event.name;

    musicEventsList.appendChild(li);

});

const formattedEvents =
    events.map(
        event => `Workshop on ${event.name}`
    );

const formattedEventsList =
    document.getElementById("formattedEvents");

formattedEvents.forEach(event => {

    const li =
        document.createElement("li");

    li.textContent = event;

    formattedEventsList.appendChild(li);

});

console.log(events);
console.log(musicEvents);
console.log(formattedEvents);