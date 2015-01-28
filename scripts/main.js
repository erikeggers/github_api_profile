(function(){
  'use strict';

$(document).ready(function() {

  var $sidebarOutput = $('.sidebar-container');
  var $repoOutput = $('.repo-container');
  var gitHubT = "?access_token=" + token;


  var renderSidebarTemplate = _.template($('.sidebar-items').text());
  var renderRepoTemplate = _.template($('.repo-info').text());

  //sidebar
  $.ajax({
    url: "https://api.github.com/users/erikeggers" + gitHubT
  }).done(function(userData) {
    // console.log(userData);
    $sidebarOutput.append(renderSidebarTemplate(userData));
  });

  //repo
  $.ajax({
    url: "https://api.github.com/users/erikeggers/repos" + gitHubT
  }).done(function(userData) {
    console.log(userData);
    _.each(userData, function(item) {
      var data = {
        name: item.name
      };
      console.log(data);
      $repoOutput.append(renderRepoTemplate(data));
    });
  });

 });
})();
