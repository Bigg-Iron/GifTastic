// CAT Button
// ============================================================================================
$("#cat").on("click", function () {

    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cats";

    // ajax request
    $.ajax({
            url: queryURL,
            method: "GET"
    })
        // callback
        .done(function (response) {
            console.log(response);
            //
            var imageUrl = response.data.image_original_url;

            //
            var catImage = $("<img>");

            //
            catImage.attr("src", imageUrl);
            catImage.attr("alt", "cat image");

            //
            $("#animals").prepend(catImage);

        });
});



// DOG Button
// ============================================================================================
$("#dog").on("click", function () {

    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=dogs";

    // ajax request
    $.ajax({
            url: queryURL,
            method: "GET"
    })

        // callback
        .done(function (response) {
            console.log(response);
            //
            var imageUrl = response.data.image_original_url;

            //
            var dogImage = $("<img>");

            //
            dogImage.attr("src", imageUrl);
            dogImage.attr("alt", "dog image");

            //
            $("#animals").prepend(dogImage);

        });
});


// BIRD Button
// ============================================================================================
$("#bird").on("click", function () {

    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=birds";

    // ajax request
    $.ajax({
            url: queryURL,
            method: "GET"
    })

        // callback
        .done(function (response) {
            console.log(response);
            //
            var imageUrl = response.data.image_original_url;

            //
            var birdImage = $("<img>");

            //
            birdImage.attr("src", imageUrl);
            birdImage.attr("alt", "dog image");

            //
            $("#animals").prepend(birdImage);

        });
});



