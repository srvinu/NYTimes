var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + " &api-key=WRrl018IfzEP8wsGN2FNnsle1kwhLj5S"

$("#search").on("click", function() {
    event.preventDefault();
    var searchTerm = $("#searchTerm").val().trim();
    var numOfRecords = $('#numOfRecords').val().trim();
    var startYear = $('#startYear').val().trim();
    var endYear = $('#endYear').val().trim();
   });

$.ajax({
    url: queryURL,
    method: "GET"
})

