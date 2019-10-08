
var Input=document.getElementById('input')


function initialQuestion(){

    var Input=document.getElementById("input").value;
    var text;
    switch(Input){
      case Input='admin':
        text = "You have reached Admin";
        break;
      case Input='helpdesk':
        text = "You have reached Helpdesk";
        break;
      default:
        text = "I'm sorry, I don't understand";}
        document.getElementById("Helpdesk").innerHTML=  text;

}