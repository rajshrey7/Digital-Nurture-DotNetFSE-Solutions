const eventName = "Music Festival";
const eventDate = "15 July 2026";

let availableSeats = 100;

const eventInfo = `
Event Name: ${eventName}
Date: ${eventDate}
Available Seats: ${availableSeats}
`;

console.log(eventInfo);

document.getElementById("eventInfo").innerText = eventInfo;

availableSeats++;

console.log("After adding one seat:", availableSeats);

availableSeats--;

console.log("After registration:", availableSeats);