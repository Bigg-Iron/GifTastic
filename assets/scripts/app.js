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





// $("button").on("click", function () {
//     var animal = $(this).attr("data-animal");
//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//         animal + "&api_key=dc6zaTOxFJmzC&limit=10";

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).done(function (response) {

//         // since the image information is inside of the data key...
//         var results = response.data; 
//         console.log(results);
//         $("#animals").append(" cat giphy ");




//         for (var i = 0; i < results.length; i++) {

//             var animalDiv = $("<div>");
//             var p = $("<p>").text;

// TODO:
// Make a div with jQuery and store it in a variable named animalDiv.
// Make a paragraph tag with jQuery and store it in a variable named p.
// Set the inner text of the paragraph to the rating of the image in results[i].
// Make an image tag with jQuery and store it in a variable named animalImage.
// Set the image's src to results[i]'s fixed_height.url.
// Append the p variable to the animalDiv variable.
// Append the animalImage variable to the animalDiv variable.
// Prepend the animalDiv variable to the element with an id of gifs-appear-here.


//         };






//     });
// });