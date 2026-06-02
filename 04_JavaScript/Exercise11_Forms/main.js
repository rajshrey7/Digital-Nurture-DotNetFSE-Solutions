const form =
    document.getElementById("registrationForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("eventError").textContent = "";
    document.getElementById("successMessage").textContent = "";

    const name =
        form.elements["name"].value.trim();

    const email =
        form.elements["email"].value.trim();

    const selectedEvent =
        form.elements["event"].value;

    let valid = true;

    if (name === "") {

        document.getElementById("nameError")
            .textContent = "Name is required";

        valid = false;

    }

    if (email === "") {

        document.getElementById("emailError")
            .textContent = "Email is required";

        valid = false;

    }

    if (selectedEvent === "") {

        document.getElementById("eventError")
            .textContent = "Please select an event";

        valid = false;

    }

    if (valid) {

        document.getElementById("successMessage")
            .textContent =
            `Registration successful for ${selectedEvent}`;

        console.log({
            name,
            email,
            selectedEvent
        });

    }

});