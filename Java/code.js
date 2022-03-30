// Button shows catfacts if user clicks it.
document.querySelector("#factButton").addEventListener("click", factFunction);

function factFunction() {

    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "https://catfact.ninja/fact", true)

    // Send request
    xmlhttp.send();

    // Event handler
    xmlhttp.onreadystatechange = function () {

        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            document.getElementById("facts").innerHTML = xmlhttp.responseText
        }
    }
}

// Made http request
let xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "http://hp-api.herokuapp.com/api/characters", true)

// Send request
xmlhttp.send();

// Event handler
xmlhttp.onreadystatechange = function () {

    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        let answerObject = JSON.parse(this.response);

        document.getElementById("facts2").innerHTML = answerObject[answerObject.length - 380].name

        let characters = '<img src ="http://hp-api.herokuapp.com/images/norris.JPG">';
        document.getElementById("facts3").innerHTML = characters;
    }
}

// Button shows feedback for user.
document.querySelector("#positive").addEventListener("click", posFunction);

function posFunction() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "http://hp-api.herokuapp.com/api/characters", true)

    // Send request
    xmlhttp.send();

    xmlhttp.onreadystatechange = function () {

        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            let answerObject = JSON.parse(this.response);

            document.getElementById("feedback").innerHTML = "<p>Hienoa että sait hymyn huulillesi<p>" + answerObject[answerObject.length - 393].name

            let characters = '<img src="' + answerObject[answerObject.length - 393].image + '">';
            document.getElementById("feedbackImage").innerHTML = characters;
        }
    }
}

// Button shows feedback for user
document.querySelector("#neutral").addEventListener("click", neutFunction);

function neutFunction() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "http://hp-api.herokuapp.com/api/characters", true)

    // Send request
    xmlhttp.send();

    xmlhttp.onreadystatechange = function () {

        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {

            let answerObject = JSON.parse(xmlhttp.response);

            document.getElementById("feedback").innerHTML = "<p>Ehkäpä ensi keralla onnistumme paremmin<p>" + answerObject[answerObject.length - 384].name

            let characters = '<img src="' + answerObject[answerObject.length - 384].image + '">';
            document.getElementById("feedbackImage").innerHTML = characters;
        }
    }
}

document.querySelector("#negative").addEventListener("click", negaFunction);

function negaFunction() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "http://hp-api.herokuapp.com/api/characters", true)

    // Send request
    xmlhttp.send();

    xmlhttp.onreadystatechange = function () {

        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            let answerObject = JSON.parse(this.response);

            document.getElementById("feedback").innerHTML = "<p>Missä epäonnistumme?<p>" + answerObject[answerObject.length - 399].name

            let characters = '<img src="' + answerObject[answerObject.length - 399].image + '">';
            document.getElementById("feedbackImage").innerHTML = characters;
        }
    }
}

// Button shows feedback input so user can send message.
document.querySelector("#negative").addEventListener("click", negaFeedFunction);

function negaFeedFunction() {
    document.getElementById("feedback2").innerHTML = "<p>Lähettämällä palautetta autat meitä parantamaan sivustoamme! <p> <input type='text' id='feedbackText'> <button onclick='sendFeed()' id='sendButton'>Lähetä</button>"

    document.getElementById("feedbackText").focus();
}

// Shows alert when send message.
function sendFeed() {
    alert("Palautteesi on lähetetty onnistuneesti!")
    document.getElementById("feedback2").innerHTML = "";
}
