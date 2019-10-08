
var Input=document.getElementById('input')


function initialQuestion(){

    var Input=document.getElementById("input").value;
    var text;
    switch(Input){
      case Input='comedy':
        text = "You have reached Comedy, you can ask me for a joke";
        break;
      case Input='business':
        text = "You have reached Business,You can ask me where Babies come from";
        break;
      default:
        text = "I'm sorry, I don't understand";}
        document.getElementById("Helpdesk").innerHTML=  text;

}