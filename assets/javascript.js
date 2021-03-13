// giphy key : aWmCF38aWZNhbJoi236yO2yuW4smGy9q
// url "https://api.giphy.com/v1/" 

<<<<<<< HEAD
//Suejin's Javascript for the two apis:
var ApiKey = "774092c9-0b11-4331-9432-a0aac1f1ca4a"
var link = "https://api.thedogapi.com/v1/images/search" + "?api_key=" + ApiKey;
var containerEl = $("#container")
var displayName = $("#displayname")
var displayImg = $("#displayImg")
var link2 = "https://namey.muffinlabs.com/name.json?frequency=all"

fetch (link)
    .then(function(response) {
        console.log(response);
        return response.json();
    })
    .then(function(data){
        console.log(data);
        var url = document.createElement("img");
        url.src = data[0].url;
        url.width= "200"
        displayImg.append(url);
    })


fetch(link2)
    .then(function(response) {
        console.log(response);
        return response.json();
    })
    .then(function(data){
        console.log(data);
        var names = document.createElement("h2");
        names.textContent = data[0];
        displayName.append(names);
        console.log(names)
    })

    .catch(err => {
        console.error(err);
    });
=======
$(document).ready(function() {
    var textNameEl = $("#textName");
    var dogImageEl = $("#dogImage");
    //Suejin's Javascript for the two apis:
    var ApiKey = "774092c9-0b11-4331-9432-a0aac1f1ca4a";
    var dogLink = "https://api.thedogapi.com/v1/images/search" + "?api_key=" + ApiKey;
    var nameLink = "https://namey.muffinlabs.com/name.json?frequency=all";

fetchName();
fetchDog();

$("#btnImage").on("click", function() {
    fetchDog();
})



function fetchName () {
    fetch(nameLink)
        .then(function(response) {
            //console.log(response);
            return response.json();
        })
        .then(function(data){
            //console.log(data);
            var names = $("<h2>");
            names.text(data[0])
            textNameEl.append(names);
        })
}

function fetchDog() {
    fetch (dogLink)
        .then(function(response) {
            console.log(response);
            return response.json();
        })
        .then(function(data){
            //console.log(data);
            var dogImg = $("<img>");
            dogImg.attr("src", data[0].url);
            dogImg.width= "200"
            dogImageEl.append(dogImg);
        })
}


})
>>>>>>> 0fd809ad3cc09b53e10ef7ac1452bbf4e51c4d3b
