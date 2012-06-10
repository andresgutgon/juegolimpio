/* Author: andresgutgon*/        
function tweetIntentToAnalytics(intent_event) {
  if (intent_event) {
    var label = "tweet";
    pageTracker._trackEvent('twitter_web_intents', intent_event.type, label);
  };                                           
}      

$(function() { 
    $("#explanation").click(function(){
       $.facebox({ div: '#explanation_box' }); 
       return false;
    });           
    $(".heroes li a").each(function(){                                        
        var player = $(this).text();
        var url = encodeURIComponent('http://bit.ly/Lr7Gnf');            
        var text = encodeURIComponent(player + " por favor, renuncia a la Eurocopa en protesta por el Rescate a la Banca");
        var tweet_url = "http://twitter.com/intent/tweet?url=" + url + "&text=" + text + "&hashtags=JuegoLimpio";        
        $(this).attr('href', tweet_url);              
    });              
});
