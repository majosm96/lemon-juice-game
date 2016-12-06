//Audio

$('html').easyAudioEffects({
  mp3: "http://soundimage.org/wp-content/uploads/2014/03/Monkey-Island-Band.mp3",
  playType: 'loop'
});


////////////////// Instruction /////////////////////////

var xhr;
function fileInstruction(){
	if (window.XMLHttpRequest) {
          xhr = new XMLHttpRequest();
    }else if(window.ActiveXObject) {
          xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }

    xhr.open('GET', 'data/instruction.json',true);
    xhr.send();

    xhr.onreadystatechange = function showInfo(){
     if (xhr.readyState == 4 && xhr.status == 200) {
      var data = JSON.parse(xhr.responseText);
      for (var i = 0; i < data.rules.length; i++) {
      	document.getElementById('btn').disabled = true;
      	var ul = document.getElementById('instruc');
      	var li = document.createElement('li');
      	li.innerHTML = data.rules[i];
      	ul.appendChild(li);
      }
     }
    }
}
document.getElementById('btn').addEventListener('click', fileInstruction);

///Rain lemons

var all_p = [];
function lemonGif(){
  var lemons = $('<div class = "lemon"></div>');
  $('#lemonGif').prepend(lemons);
  lemX = Math.floor(Math.random() * $('body').width());
  lemSpd = Math.floor(Math.random() + 6000);

  lemons.css({'left':lemX+'px'});
  lemons.animate({
            top: "600px",
            opacity : "0",

        }, lemSpd, function(){
            $(this).remove();
            lemonGif();
        });
}
    var timer = Math.floor(Math.random() +1000);

    window.setInterval(function(){
        lemonGif();
    }, timer);



