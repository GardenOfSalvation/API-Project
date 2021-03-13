// giphy key : aWmCF38aWZNhbJoi236yO2yuW4smGy9q
// url "https://api.giphy.com/v1/" 

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
