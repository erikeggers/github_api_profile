(function(){
  'use strict';

var baseUrl = "https://api.github.com/users/erikeggers";
// var gitHubT = "?access_token=" + token;

$(document).ready(function() {

  if(typeof token !== 'undefined'){
      $.ajaxSetup({
        headers: { 'Authorization': 'token ' + token }
      });
    }

  var $userInfoOutput = $('.user-info');
  var $orgsOutput = $('.orgs');
  var $repoOutput = $('.repo-container');

  //templates
  var renderUserTemplate = _.template($('.user-items').text());
  var renderOrgsTemplate = _.template($('.user-orgs').text());
  var renderRepoTemplate = _.template($('.repo-info').text());

  //sidebar
  $.ajax(baseUrl).done(function(userData) {
    $userInfoOutput.append(renderUserTemplate(userData));
  });

  //sidebar-starred
  $.ajax(baseUrl + '/starred').done(function(starredData) {
    $('.starred-count').text(starredData.length);
  });

  //sidebar-orgs
  $.ajax(baseUrl + '/orgs').done(function(userOrgs) {
    _.each(userOrgs, function(item) {
    $orgsOutput.append(renderOrgsTemplate(item));
    });
  });

  //repo
  $.ajax(baseUrl + '/repos').done(function(userRepos) {
    _.each(userRepos, function(item) {
      $repoOutput.append(renderRepoTemplate(item));
  });
  });
 });
})();
