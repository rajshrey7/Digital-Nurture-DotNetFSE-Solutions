const form =
    document.getElementById("registrationForm");

const message =
    document.getElementById("message");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    console.log("Form submission started");

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    console.log("Name:", name);
    console.log("Email:", email);

    const userData = {
        name,
        email
    };

    console.log("Payload:", userData);

    fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
            method: "POST",

            headers: {
                "Content-Type":
                "application/json"
            },

            body: JSON.stringify(userData)
        }
    )
    .then(response => response.json())

    .then(data => {

        console.log(
            "Server Response:",
            data
        );

        message.textContent =
            "Registration Successful";

    })

    .catch(error => {

        console.error(
            "Fetch Error:",
            error
        );

        message.textContent =
            "Registration Failed";

    });

});