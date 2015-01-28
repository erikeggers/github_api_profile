(function(){
  'use strict';

var baseUrl = "https://api.github.com/users/erikeggers";
var gitHubT = "?access_token=" + token;

$(document).ready(function() {

  var $userInfoOutput = $('.user-info');
  var $orgsOutput = $('.orgs');
  var $repoOutput = $('.repo-container');

  var renderUserTemplate = _.template($('.user-items').text());
  var renderOrgsTemplate = _.template($('.user-orgs').text());
  var renderRepoTemplate = _.template($('.repo-info').text());

  //sidebar
  $.ajax( baseUrl + gitHubT).done(function(userData) {
    console.log(userData);
    $userInfoOutput.append(renderUserTemplate(userData));
  });

  //sidebar-starred
  $.ajax(baseUrl + '/starred' + gitHubT).done(function(starredData) {
    // console.log("starred: ", starredData);
    $('.starred-count').text(starredData.length);
  });

  //sidebar-orgs
  $.ajax(baseUrl + '/orgs' + gitHubT).done(function(userOrgs) {
    // console.log(userOrgs);
    _.each(userOrgs, function(item) {
    $orgsOutput.append(renderOrgsTemplate(item));
    });
  });

  //repo
  $.ajax(baseUrl + '/repos' + gitHubT).done(function(userRepos) {
    // console.log(userRepos);
    _.each(userRepos, function(item) {
      $repoOutput.append(renderRepoTemplate(item));
    });
  });

 });
})();
