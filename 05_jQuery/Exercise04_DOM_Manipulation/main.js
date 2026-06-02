$(document).ready(function () {

    $("#addBtn").click(function () {

        const eventName =
            $("#eventInput").val().trim();

        if (eventName !== "") {

            $("#eventList").append(
                `<li>${eventName}</li>`
            );

            $("#eventInput").val("");

        }

    });

    $("#removeBtn").click(function () {

        $("#eventList").empty();

    });

});