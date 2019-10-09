
var Input=document.getElementById('input')

document.onkeypress = enter;
function enter(e) {
  if (e.which == 13) initialQuestion()};

function initialQuestion(){

    var Input=document.getElementById("input").value;
    var text;
    var title;
    switch(Input){
      case Input='comedy':
        text = "You have reached Comedy, Say joke for a joke";
        title = "Comedy"
        document.getElementById("span").style.backgroundColor = "lightgreen";
        break;
      case Input='business':
        text = "You have reached Business,You can ask me: 'where do babies come from'";
        title = "Business"
        document.getElementById("span").style.backgroundColor = "sandybrown";
        break;
        case Input='joke':
          text = "Why is apple so dark? It has no windows.";
          title = "The Joke"
          document.getElementById("span").style.backgroundColor = "lightgreen";
          break;
          case Input='where do babies come from':
            text = "You take the moon And you take the sun You take everything that sounds like fun. You stir it all together and then you're done. Rada rada rada rada rada rada. So come on in, feel free to do some looking.Stay a while 'cause somethings always cooking.Come on in, feel free to do some looking. Stay a while 'cause somethings always cooking. Yeah!!!";
            title = "Facts Of Life"
            document.getElementById("span").style.backgroundColor = "sandybrown";
            break;
            case Input='':
              text= "you know what you did...";
              title= "You weren't supposed to do that"
              document.getElementById("span").style.backgroundColor = "Crimson";
              break;
      default:
        text = "I'm sorry, your vibes are rancid, Please ask for 'Comedy' or 'Business'";
        title = "Comedy Or Business"
        document.getElementById("span").style.backgroundColor = "lightcoral";}
      
        document.getElementById("Helpdesk").innerHTML=  text;
        document.getElementById("firstChoice").innerHTML= title
        document.getElementById('input').value = ''

}