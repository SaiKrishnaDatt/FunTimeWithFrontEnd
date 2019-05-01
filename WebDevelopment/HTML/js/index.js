
/* 

index.js
*/
/*$(document).ready(function(){

"use strict"

var reslutList = $("#resultList");
reslutList.text("This is from jquery");

var toggleButton = $("#toggleButton");
toggleButton.on("click",function (){
      reslutList.toggle(500);

      if(toggleButton.text() == "Hide") toggleButton.text("Show");
      else toggleButton.text("Hide");
});

});

$("header nav li").css("font-weight","bold");

var listItems = $("header nav li");
listItems.css("font-weight","bold");
listItems.filter(":first").css("font-size","18px"); //only setting font-size of the first element of the listItems
*/
"use strict"

var reslutList = $("#resultList");
reslutList.text("This is from jquery  yes");
            var msg = "Hello JavaScript";
            console.log(msg);
            var resultsDiv = document.getElementById("results");
           // resultsDiv.innerHTML = "<p>This is from javascript </p>";
var toggleButton = $("#toggleButton");
toggleButton.on("click",function (){
      reslutList.toggle(500);

      if(toggleButton.text() == "Hide") toggleButton.text("Show");
      else toggleButton.text("Hide");
});

$("#gitHubSearchForm").on("submit",function(){

      var searchPhrase = $("#searchPhrases").val();
      var useStars = $("#useStars").val();
      var langChoice = $("#langChoice").val();
      if(searchPhrase){

      reslutList.text("performing search...");

      var gitHubSearch ="https://api.github.com/search/repositories?q=" + encodeURIComponent(searchPhrase);
      if(langChoice != "All")
      {
            gitHubSearch += "+language:" + encodeURIComponent(langChoice);
      }
      if(useStars){
            gitHubSearch += "&sort=stars";
      }

//var gitHubSearch ="https://api.github.com/search/repositories?q=jquery+language:javascript&sort=stars";

/*$.get(gitHubSearch)
.success(function(r){
      //console.log(r.items.length);
      displayResults(r.items);
})
.fail(function (err){
     cosole.log("Failed to query Github"); 
})
.done(function(){
      //in either success or fail it will be exeuted at the end
});*/
$.get(gitHubSearch,function(r){
      displayResults(r.items);
});

}
      return false;
});


/*
var resluts = [{
      name : "jquery",
      language : "JavaScript",
      score: 4.5,
      showLog : function (){
            
      }
,
owner: {
      login : "krishnadutt",
      id : 5967
}
},{
      name : "jquery UI",
      language : "JavaScript",
      score: 4.5,
      showLog : function (){
            
      }
,
owner: {
      login : "krishnadutt",
      id : 5967
}
}];
*/
function displayResults(resluts){


reslutList.empty();


$.each(resluts, function(i,item){
var newResult =  $("<div class='result'>" + 
"<div class = 'title' > " + item.name + "</div>" +
"<div> Language: " + item.language + "</div>" +
"<div> Owner:" + item.owner.login + "</div>" +
"</div>");


newResult.hover(function(){
      //make it darker
      $(this).css("background-color","lightgrey");
},function(){
      //reverse
      $(this).css("background-color","transparent");
});
reslutList.append(newResult);

});

}
