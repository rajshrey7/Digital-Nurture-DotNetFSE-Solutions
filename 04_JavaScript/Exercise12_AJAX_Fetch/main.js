const button =
    document.getElementById("submitBtn");

const message =
    document.getElementById("message");

button.addEventListener("click", function () {

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const userData = {
        name,
        email
    };

    message.textContent =
        "Submitting registration...";

    setTimeout(() => {

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

            console.log(data);

            message.style.color = "green";

            message.textContent =
                "Registration submitted successfully";

        })

        .catch(error => {

            console.error(error);

            message.style.color = "red";

            message.textContent =
                "Registration failed";

        });

    }, 2000);

});