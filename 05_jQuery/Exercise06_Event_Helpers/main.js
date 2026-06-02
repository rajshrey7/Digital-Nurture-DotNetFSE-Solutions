$(document).ready(function () {

    $("#eventBox").click(function () {

        $("#message").text(
            "Box Clicked"
        );

    });

    $("#eventBox").dblclick(function () {

        $("#message").text(
            "Box Double Clicked"
        );

    });

    $("#eventBox").mouseenter(function () {

        $(this).css(
            "background-color",
            "lightgreen"
        );

        $("#message").text(
            "Mouse Entered Box"
        );

    });

    $("#eventBox").mouseleave(function () {

        $(this).css(
            "background-color",
            "lightgray"
        );

        $("#message").text(
            "Mouse Left Box"
        );

    });

    $("#textInput").keypress(function (event) {

        $("#message").text(
            "Key Pressed: " +
            event.key
        );

    });

});