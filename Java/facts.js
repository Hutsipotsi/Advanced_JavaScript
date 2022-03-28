// Button which shows information if user clicks it.
document.querySelector("#factButton").addEventListener("click", newFunction);


function newFunction() {
   
let xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "https://catfact.ninja/fact", true)

// Send request
xmlhttp.send();

// Event handler
xmlhttp.onreadystatechange=function() {

    if(xmlhttp.readyState === 4 && xmlhttp.status === 200)
    {        
        document.getElementById("facts").innerHTML = xmlhttp.responseText
    }

  }
}

