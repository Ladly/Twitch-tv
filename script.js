window.onload = function() {
  var frequentStreamers = [
    "ESL_SC2",
    "OgamingSC2",
    "cretetion",
    "freecodecamp",
    "storbeck",
    "habathcx",
    "RobotCaleb",
    "noobs2ninjas"
  ];
  for (var i = 0; i < frequentStreamers.length; i++) {
    $.ajax({
      url:
        'https://wind-bow.gomix.me/twitch-api/streams/' + frequentStreamers[i],
      dataType: "jsonp",
      type: "POST",
      headers: { "Api-User-Agent": "Example/1.0" },
      success: function(response) {
        var displayOnline = document.getElementById("display-online");
        var displayOffline = document.getElementById("display-offline");
        var linkTo = document.createElement("a");
        var displayingDiv = document.createElement("div");
        var logo = document.createElement("img");
        var status = document.createElement("span");
        linkTo.setAttribute("class", "links");
        linkTo.target = "_blank";
        displayingDiv.setAttribute("class", "divHolder text-center");
        if (response.stream === null) {
          var url = response._links.channel;
          var name = url.split("/")
          for (var k = 0; k < name.lenght; k++ ){
          }
          linkTo.href = url;
          linkTo.innerHTML = name[name.length - 1];
          status.innerHTML = "offline";
          displayingDiv.append(linkTo);
          displayingDiv.append(status);
          displayOffline.append(displayingDiv);
        } else {
          var url = response.stream.channel.url;
          linkTo.href = url;
          linkTo.innerHTML =response.stream.channel.game
          status.innerHTML = response.stream.channel.display_name
          logo.src = response.stream.channel.logo;
          displayingDiv.append(linkTo);
          displayingDiv.append(status);
          displayingDiv.append(logo);
          displayOnline.append(displayingDiv);
        }
      }
    });
  }
};
