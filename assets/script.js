var queryURL = 

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {

    console.log(response);
    var results = response.data;

    
    for (var i = 0; i < results.length; i++) {
      var = $("<div>");
      var rating = results[i].rating;
      var p = $("<p>").text("Rating: " + rating);
      var = $("<img>");
      .attr("src", results[i].images.fixed_height.url);
      .prepend(p);
      .prepend();

    