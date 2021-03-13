// giphy key : aWmCF38aWZNhbJoi236yO2yuW4smGy9q
// url "https://api.giphy.com/v1/" 

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
