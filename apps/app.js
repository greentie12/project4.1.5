$(function() {
    $('#search-term').submit(function(event) {

        event.preventDefault();

        var searchTerm = $('#query').val();

        getRequest(searchTerm);

        $('#query').val("");

    });

});

function getRequest(searchTerm) {

    url = 'https://www.googleapis.com/youtube/v3/search';

    var params = {
        key: 'AIzaSyANHaYdOzLuu4yEuAogqMoxxqyLx8IQdWs',
        part: 'snippet',
        q: searchTerm,
        maxResults: 15
    };

    $.getJSON(url, params, function(data) {
        console.log(data.items);
        showResults(data);
        //console.log(params)
    });
}

function showResults(result) {
    var html = "";
    var video = "";
    $.each(result.items, function(index, item) {

        html += '<a href="https://www.youtube.com/watch?v=' + item.id.videoId + '">' + item.snippet.title + '</a>';
        // console.log(result.items);
        //video += '<a href="https://www.youtube.com/watch?v='+ item.id.videoId +'"><img src="http://img.youtube.com/vi/'+ item.id.videoId + '/0.jpg"></a><br><p>' + item.snippet.title + '</p>';

        video += '<div class="thumbDiv"><a href="https://www.youtube.com/watch?v=' + item.id.videoId + '"><img src="http://img.youtube.com/vi/' + item.id.videoId + '/0.jpg" target="_blank"></a><br><p><a href="https://www.youtube.com/watch?v=' + item.id.videoId + '">' + item.snippet.title + '</a></p><br></div>';

    });

    //$('#search-results').append("<br>" + value.Title + "<br />");
    $('#searchResults').html(video);
}
