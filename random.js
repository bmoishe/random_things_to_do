
var ran = Math.floor((Math.random() * 4) + 1)
var type
var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var x = JSON.parse(this.responseText)
      console.log(x.activity)
      var type = x.type
      console.log(x.type)
      document.getElementById("idea").innerHTML = x.activity;
    }
  };
  xhttp.open("GET", "http://www.boredapi.com/api/activity/", true);
  xhttp.send();

  // var yhttp = new XMLHttpRequest();
  //   yhttp.onreadystatechange = function() {
  //     if (this.readyState == 4 && this.status == 200) {
  //       var y = JSON.parse(this.responseText)
  //       console.log(y.data[ran].embed_url)
  //       console.log(y.data)
  //       document.getElementById("gif").setAttribute('src', y.data[ran].images.downsized.url);
  //     }
  //   };
  //
  // yhttp.open("GET", 'http://api.giphy.com/v1/gifs/search?q=' + type + '&api_key='+ process.env.API_KEY, true);
  //
  // yhttp.send();
