
//variables

var totalClicks = 0;
var $lemon = $('#lemon');
var $littleLemon = $('#lemon2');

//items
var $itemLemon = $('#itemLemon');
var $itemIce = $('#itemIce');
var $itemSugar = $('#itemSugar');
var $itemPeppermint = $('#itemPeppermint');

//Amount
var $lemonAmount = $('#lemonAmount');
var $iceAmount = $('#iceAmount');
var $sugarAmount = $('#sugarAmount');
var $peppermintAmount = $('#peppermintAmount');

//price

var $lemonPrice = $('#lemonPrice');
var $icePrice = $('#icePrice');
var $sugarPrice = $('#sugarPrice');
var $peppermintPrice = $('#peppermintPrice');



//Lemon clicker points
$lemon.click(function () {
    var audio = $('#audio')[0];
    audio.play();
    totalClicks++;
    document.getElementById("lemons").innerHTML = totalClicks;
    document.title = totalClicks + ' ' + 'lemons';

    $littleLemon.css('display', 'inline');
    $littleLemon.hide('fast');

    blockUpgrades();
});

//Bonus function 

function bonus(){

    $('#bonus1').css('display', 'inline');
        $('#bonus1').animate({
            opacity: 0.25,
            top: "400px",
            height: "toggle"
        }, 5000);
    $("#bonus1").delay().hide(1);
}

function bonusTwo(){
    $('#bonus2').css('display', 'inline');
        $('#bonus2').animate({
            opacity: 0.25,
            top: "800px",
            height: "toggle"
        }, 4000);
    
}

window.setInterval(function(){
  bonus();

  var $bonus1 = $('#bonus1');
  $bonus1.css({
    top: "0",
  });
  
}, 5000);

window.setInterval(function(){
  bonusTwo();

  var $bonus2 = $('#bonus2');
  $bonus2.css({
    top: "0",
  });
}, 1000);

//Bonus Events 

$('#bonus1').click(function(){
    totalClicks = totalClicks + 100;
    blockUpgrades();
});

$('#bonus2').click(function(){
    totalClicks = totalClicks + 4000;
    blockUpgrades();
});

$('#bonus3').click(function(){
    totalClicks = totalClicks + 500;
    blockUpgrades();
});


//Prototype for Autoclickers

function autoClicker(amount, cost, increment) {
this.amount = amount;
this.cost = cost;
this.increment = increment;
}

//new instances
var moreLemons = new autoClicker(0, 100, 1);
var ice = new autoClicker(0, 1000, 100);
var sugar = new autoClicker(0, 5000, 500);
var peppermint = new autoClicker(0, 10000, 1000);


/* Run the AutoClicker */
var runAutoClicker = setInterval(function(){
    totalClicks = totalClicks + (moreLemons.increment * moreLemons.amount);
    document.getElementById('lemons').innerHTML = totalClicks;
}, 1000);
var runAutoClicker = setInterval(function(){
    totalClicks = totalClicks + (ice.increment * ice.amount);
    document.getElementById('lemons').innerHTML = totalClicks;
}, 2000);
var runAutoClicker = setInterval(function(){
    totalClicks = totalClicks + (sugar.increment * sugar.amount);
    document.getElementById('lemons').innerHTML = totalClicks;
}, 3000);
var runAutoClicker = setInterval(function(){
    totalClicks = totalClicks + (peppermint.increment * peppermint.amount);
    document.getElementById('lemons').innerHTML = totalClicks;
}, 5000);


//auto clicker

//auto Lemons
$itemLemon.click(function(){

    if (totalClicks >= 100){
        totalClicks = totalClicks - moreLemons.cost;
        moreLemons.amount++;
        moreLemons.cost = moreLemons.cost + 20;
        $lemonAmount.html(moreLemons.amount);
        $lemonPrice.html('price:' + ' ' + moreLemons.cost + ' ' + 'lemons');
        return false;
    }

});

//auto Ice
$itemIce.click(function(){

    if (totalClicks >= 1000){
        totalClicks = totalClicks - ice.cost;
        ice.amount++;
        ice.cost = ice.cost + 100;
        $iceAmount.html(ice.amount);
        $icePrice.html('price:' + ' ' + ice.cost + ' ' + 'lemons');
        return false;
    }
});

//auto Sugar
$itemSugar.click(function(){

    if (totalClicks >= 5000){
        totalClicks = totalClicks - sugar.cost;
        sugar.amount++;
        sugar.cost = sugar.cost + 500;
        $sugarAmount.html(sugar.amount);
        $sugarPrice.html('price:' + ' ' + sugar.cost + ' ' + 'lemons');
        return false;
    }
});

//auto Peppermint
$itemPeppermint.click(function(){

    if (totalClicks >= 10000){
        totalClicks = totalClicks - peppermint.cost;
        peppermint.amount++;
        peppermint.cost = peppermint.cost + 1000;
        $peppermintAmount.html(peppermint.amount);
        $peppermintPrice.html('price:' + ' ' + peppermint.cost + ' ' + 'lemons');
        return false;
    }
});



//Function for Unlockup Items

function blockUpgrades(){
    // Unlockup Item lemmons
    if (totalClicks >= 100) {
        $itemLemon.first().show( "fast", function showNext() {
          $( this ).next( "div" ).show( "fast", showNext );
          });

        $lemonPrice.first().show( "fast", function showNext() {
          $( this ).next( "div" ).show( "fast", showNext );
          });
    }else{
      $itemLemon.disabled = true;
    }

    // Unlockup Item Ice

    if (totalClicks >= 1000) {
        $itemIce.first().show( "fast", function showNext() {
          $( this ).next( "div" ).show( "fast", showNext );
          });

        $icePrice.first().show( "fast", function showNext() {
          $( this ).next( "div" ).show( "fast", showNext );
          });
    }else{
      $itemLemon.disabled = true;
    }

    // Unlockup Item Sugar
    if (totalClicks >= 5000) {
       $itemSugar.first().show( "fast", function showNext() {
          $( this ).next( "div" ).show( "fast", showNext );
          });

        $sugarPrice.first().show( "fast", function showNext() {
          $( this ).next( "div" ).show( "fast", showNext );
          });
    }else{
      $itemLemon.disabled = true;
    }

    // Unlockup Item Peppermint
    if (totalClicks >= 10000) {
       $itemPeppermint.first().show( "fast", function showNext() {
          $( this ).next( "div" ).show( "fast", showNext );
          });

        $peppermintPrice.first().show( "fast", function showNext() {
          $( this ).next( "div" ).show( "fast", showNext );
          });
    }else{
      $itemLemon.disabled = true;
    }
}

//Time


function Timer(){
  var secTime = 0,
      minTime = 0,
      hourTime = 0;

  setInterval(function(){
    var maxSec = 59,
        maxMin = 59,
        maxHour = 59;

    if( secTime > maxSec ){
      minTime++;
      if( minTime > maxMin ){
        hourTime++;
        if( hourTime > maxHour ){
          hourTime = 0;
          minTime = 0;
          secTime = 0;
        }
        minTime = 0
      }
      secTime = 0;
    }

        var newSec = (secTime.toString().length == 1) ? '0' + secTime : secTime,
            newMin = (minTime.toString().length == 1) ? '0' + minTime : minTime,
            newHour = (hourTime.toString().length == 1) ? '0' + hourTime : hourTime;

        document.getElementById('timer').innerHTML = newHour + ':' + newMin + ':' + newSec;

    secTime++;

  }, 1000);
}

Timer();



//Audio of the game///


$('html').easyAudioEffects({
  mp3: "http://soundimage.org/wp-content/uploads/2014/03/Monkey-Island-Band.mp3",
  playType: 'loop',
  volume: 20
});

$itemLemon.easyAudioEffects({
   mp3 : "http://www.soundjay.com/button/sounds/button-11.mp3",
   eventType : "click",
   playType : "loop"
});

$itemIce.easyAudioEffects({
   mp3 : "http://www.soundjay.com/button/sounds/button-47.mp3",
   eventType : "click",
   playType : "loop"
});

$itemSugar.easyAudioEffects({
   mp3 : "http://www.soundjay.com/button/sounds/button-16.mp3",
   eventType : "click",
   playType : "loop"
});

$itemPeppermint.easyAudioEffects({
   mp3 : "http://www.soundjay.com/button/sounds/button-20.mp3",
   eventType : "click",
   playType : "loop"
});

//Local storage


function save(){
    localStorage.setItem('totalClicks', totalClicks);
    localStorage.setItem('moreLemons.amount', moreLemons.amount);
    localStorage.setItem('moreLemons.cost', moreLemons.cost);
    localStorage.setItem('ice.amount', ice.amount);
    localStorage.setItem('ice.cost', ice.cost);
    localStorage.setItem('sugar.amount', sugar.amount);
    localStorage.setItem('sugar.cost', sugar.cost);
    localStorage.setItem('peppermint.amount', peppermint.amount);
    localStorage.setItem('peppermint.cost', peppermint.cost);

  };

function load(){

    totalClicks = localStorage.getItem('totalClicks');
    totalClicks = parseInt(totalClicks);
    document.getElementById('lemons').value = totalClicks;
    document.tittle = totalClicks + 'lemons';

    moreLemons.amount = localStorage.getItem('moreLemons.amount');
    moreLemons.amount = parseInt(moreLemons.amount);
    $lemonAmount = moreLemons.amount;

    moreLemons.cost = localStorage.getItem('moreLemons.cost');
    moreLemons.cost = parseInt(moreLemons.cost);
    $lemonPrice = moreLemons.cost;

    ice.amount = localStorage.getItem('ice.amount');
    ice.amount = parseInt(ice.amount);
    $iceAmount = ice.amount;

    ice.cost = localStorage.getItem('ice.cost');
    ice.cost = parseInt(ice.cost);
    $icePrice = ice.cost;

    sugar.cost = localStorage.getItem('sugar.cost');
    sugar.cost = parseInt(sugar.cost);
    $sugarPrice = sugar.cost;

    sugar.amount = localStorage.getItem('sugar.amount');
    sugar.amount = parseInt(sugar.amount);
    $sugarAmount = sugar.amount;

    peppermint.cost = localStorage.getItem('peppermint.cost');
    peppermint.cost = parseInt(peppermint.cost);
    $peppermintPrice = peppermint.cost;

    peppermint.amount = localStorage.getItem('peppermint.amount');
    peppermint.amount = parseInt(peppermint.amount);
    $peppermintAmount = peppermint.amount;


    blockUpgrades();

    Timer();

};
