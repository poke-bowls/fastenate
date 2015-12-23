window.onload = function() {

  var rando = './api/random.json';
  var myBoards = './api/my_boards.json';
  var getApps = './api/get_the_app.json';

  var loadFeed = function( data ){
    for( var i = 0; i < data.data.children.length; i++ ) {
      var $newDiv = $( "<div id = 'story' + i class = 'feature'/>" );

      var image = '<img src="' + data.data.children[i].data.url + '"</img>';
      var title = '<h1>' + data.data.children[i].data.title + '</h1>';
      var author = data.data.children[i].data.author;
      var age = moment(data.data.children[i].data.created, 'X').fromNow();
      var views = data.data.children[i].data.score + ' views';
      var info = '<p>' + 'by ' + author + ' • ' +  age + ' • ' + views + '</p>';
      var description = '<p>' + 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis cursus augue, a consectetur tellus. Sed placerat urna ac orci egestas, eget malesuada ex malesuada...' + '</p>' ;

      $( container ).append( $newDiv );
      $( story[i] ).append( image, title, info, description );
    }
  };

  $.getJSON( myBoards, loadFeed );

  document.getElementById( 'random' ).addEventListener( 'click', function(){
    document.getElementById( 'container' ).innerHTML = '';
    $.getJSON( rando, loadFeed );
  });

  document.getElementById( 'boards' ).addEventListener( 'click', function(){
    document.getElementById( 'container' ).innerHTML = '';
    $.getJSON( myBoards, loadFeed);
  });

  document.getElementById( 'apps' ).addEventListener( 'click', function(){
    document.getElementById( 'container' ).innerHTML = '';
    $.getJSON( getApps, loadFeed );
  });


  // $.getJSON( './api/my_boards.json', function( data ){

  //   for( var i = 0; i < data.data.children.length; i++ ) {
  //     var container = document.getElementById( 'container' );
  //     var $newDiv = $( "<div id = 'story' + i class = 'feature'/>" );

  //     var image = '<img src="' + data.data.children[i].data.url + '"</img>';
  //     var title = '<h1>' + data.data.children[i].data.title + '</h1>';
  //     var author = data.data.children[i].data.author;
  //     var age = moment(data.data.children[i].data.created, 'X').fromNow();
  //     var views = data.data.children[i].data.score + ' views';
  //     var info = '<p>' + 'by ' + author + ' • ' +  age + ' • ' + views + '</p>';
  //     var description = '<p>' + 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis cursus augue, a consectetur tellus. Sed placerat urna ac orci egestas, eget malesuada ex malesuada...' + '</p>' ;

  //     $( container ).append( $newDiv );
  //     $( story[i] ).append( image, title, info, description );
  //   }

  // });
};

