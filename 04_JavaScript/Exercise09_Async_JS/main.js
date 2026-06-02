const container =
    document.getElementById("eventsContainer");

const loading =
    document.getElementById("loading");

fetch("events.json")
    .then(response => response.json())
    .then(data => {

        loading.style.display = "none";

        data.forEach(event => {

            const card =
                document.createElement("div");

            card.className = "event-card";

            card.innerHTML = `
                <h3>${event.name}</h3>
                <p>${event.category}</p>
            `;

            container.appendChild(card);

        });

    })
    .catch(error => {

        loading.innerHTML =
            "Failed to load events";

        console.error(error);

    });

async function loadEvents() {

    try {

        loading.style.display = "block";

        const response =
            await fetch("events.json");

        const events =
            await response.json();

        console.log(
            "Loaded using async/await",
            events
        );

    }
    catch (error) {

        console.error(
            "Async Error:",
            error
        );

    }

}

loadEvents();