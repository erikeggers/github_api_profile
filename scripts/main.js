(function(){
  'use strict';

  var $output = $('.data');

  var renderSidebarTemplate = _.template($('.sidebar-items').text());

  $.ajax({
    url: "https://api.github.com/users/erikeggers",
    type: 'GET',
    dataType: 'json',
  }).done(function(userData) {
    console.log(userData);
    console.log(renderSidebarTemplate(userData));

    // sign up for an api key
    // go to your settings
    // application

    // generate a new token
    // type in password
    // repo, public repo & user
    // generate token ... do not push to github
    // grab your token
    // copy it!!!!
    // in your project create a javascript file just for your token
    // token.js
    // window.githubToken = "paste the string you copied"
    // save the file
    // .gitignore token.js
    // link to the file in your html at the end of your body
    // in main.js, include token when you make ajax calls
    // access_token=OAUTH-
    // $.ajax({
    // url: githubURL + "&access_token=" + githubToken
    // })


  });

})();
