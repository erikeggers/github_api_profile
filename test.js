(function(){
  'use strict';

var baseUrl = "http://api.github.com/users/erikeggers";

$(document).ready(function(){
  $.ajax(baseUrl + "repos").done(function(data){
      _.each(repos, function(repo){
        console.log(repo.name, repo.pushed_at, repo.language,
                    repo.stargazers_count, repo.forks_cout,
                    repo.stargazers_url, repo.forks.url, repo.url);
      });
    });
  });

})();
