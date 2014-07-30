var socialMedia = {
  facebook : 'http://facebook.com/viewsource',
  twitter: 'http://twitter.com/planetoftheweb',
  flickr: 'http://flickr.com/planetotheweb',
  youtube: 'http://youtube.com/planetoftheweb'
};


var social = function() {

  // var output = '<ul>',
  //     myList = document.getElementsByClassName("js-social-media-icons");

  // for ( var key in arguments[0] ) {
  //   output += '<li><a href="' + socialMedia[key] + '">' +
  //   '<img src="images/' + key + '.png" alt="icon for ' + key + '">' +
  //   '</a></li>';
  // }

  // output += '</ul>';

  var myList = document.getElementsByClassName("js-social-media-icons"),
      ul;

  for ( var key in arguments[0] ) {
    ul = document.createElement("ul");
    
    var li = document.createElement("li"),
        a = document.createElement("a"),
        img = document.createElement("img");

    img.setAttribute("src", "images/" + key + ".png");

    ul.appendChild("img");




  }


  for (var i = myList.length - 1; i >= 0; i--) {
    myList[i].innerHTML = ul;
  };

}(socialMedia);

