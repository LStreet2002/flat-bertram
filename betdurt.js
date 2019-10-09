
var Input=document.getElementById('input')


function initialQuestion(){

    var Input=document.getElementById("input").value;
    var text;
    var title;
    switch(Input){
      case Input='comedy':
        text = "You have reached Comedy, Say joke for a joke";
        title = "Comedy";
        break;
      case Input='business':
        text = "You have reached Business,You can ask me where Babies come from";
        title = "Business";
        break;
        case Input='joke':
          text = "Why is apple so dark? It has no windows.";
          title = "The Joke";
          break;
          case Input='where do babies come from':
            text = "You take the moon And you take the sun You take everything that sounds like fun. You stir it all together and then you're done. Rada rada rada rada rada rada. So come on in, feel free to do some looking.Stay a while 'cause somethings always cooking.Come on in, feel free to do some looking. Stay a while 'cause somethings always cooking. Yeah!!!";
            title = "Facts Of Life";
            break;
      default:
        text = "I'm sorry, I don't understand";
        title = "Comedy Or Business"}
      
        document.getElementById("Helpdesk").innerHTML=  text;
        document.getElementById("firstChoice").innerHTML= title
        document.getElementById('input').value = ''

}