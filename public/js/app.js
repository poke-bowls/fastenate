var feed = document.getElementById( 'container' );

window.onload = function() {
  $.getJSON( './api/get_the_app.json', function( data ){
    var title = data.data.children[0].data.title;
    var image = data.data.children[0].data.thumbnail;
    console.log( title );

    $( feed ).append('<h1>' + title + '</h1>');
    $( feed ).append('<img src="' + image + '"</img>');

  });


};

