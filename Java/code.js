/*let xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", 'https://catfact.ninja/fact?max_length=140', true)
//-header ,'Accept: application/json'

// Send request
xmlhttp.send();

// Event handler
xmlhttp.onreadystatechange=function() {

    if(xmlhttp.readyState === 4 && xmlhttp.status === 200)
    {        
        document.getElementById("facts").innerHTML = xmlhttp.responseText
    }

}*/

let xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "https://catfact.ninja/fact", true)
//https://catfact.ninja/facts
//https://cat-fact.herokuapp.com/facts

// Send request
xmlhttp.send();

// Event handler
xmlhttp.onreadystatechange=function() {

    if(xmlhttp.readyState === 4 && xmlhttp.status === 200)
    {        
        document.getElementById("facts2").innerHTML = xmlhttp.responseText
    }

  }
/*
  function ajax_get(url, callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        console.log('responseText:' + xmlhttp.responseText);
        try {
          var data = JSON.parse(xmlhttp.responseText);
        } catch (err) {
          console.log(err.message + " in " + xmlhttp.responseText);
          return;
        }
        callback(data);
      }
    };
  
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  }
  
  ajax_get('https://api.thecatapi.com/v1/images/search?size=full', function(data) {
    document.getElementById("id").innerHTML = data[0]["id"];
    document.getElementById("url").innerHTML = data[0]["url"];
  
    var html = '<img src="' + data[0]["url"] + '">';
    document.getElementById("image").innerHTML = html;
  });
  */