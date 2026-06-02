const event = {
    name: "Music Festival",
    category: "Music",
    seats: 50
};

const { name, category, seats } = event;

function registerUser(userName = "Guest") {
    return `${userName} registered successfully`;
}

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
    }
];

const clonedEvents = [...events];

const output =
    document.getElementById("output");

output.innerHTML = `
    <h3>Event Details</h3>

    <p>Name: ${name}</p>
    <p>Category: ${category}</p>
    <p>Seats: ${seats}</p>

    <h3>Default Parameter Example</h3>

    <p>${registerUser()}</p>
    <p>${registerUser("Shreyansh")}</p>

    <h3>Spread Operator Example</h3>

    <p>Original Events: ${events.length}</p>
    <p>Cloned Events: ${clonedEvents.length}</p>
`;

console.log("Destructured Values:");
console.log(name);
console.log(category);
console.log(seats);

console.log("Original Events:", events);
console.log("Cloned Events:", clonedEvents);