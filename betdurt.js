
var Input=document.getElementById('input')


function initialQuestion(){

    var Input=document.getElementById("input").value;
    var text;
    switch(Input){
      case Input='comedy':
        text = "You have reached Comedy, Say joke for a joke";
        break;
      case Input='business':
        text = "You have reached Business,You can ask me where Babies come from";
        break;
        case Input='joke':
          text = "Why is apple so dark? It has no windows.";
          break;
          case Input='where do babies come from':
            text = "Storks go fwoosh and bring them to people"
            break;
      default:
        text = "I'm sorry, I don't understand";}
        document.getElementById("Helpdesk").innerHTML=  text;

}