function scuberGreetingForFeet(f){
  // Write your code here!
  let test;
  if (f<= 400) {
    return "This one is on me!"
  } 
  else if (f> 2000  && f <2500){
    return "I will gladly take your thirty bucks."
  }
  else if(f>= 2501){
    return "No can do."  }
  }

function ternaryCheckCity(city){
  // Write your code here!
  var locationCheck = city === 'NYC' ? "Ok, sounds good." : "No go.";
  return locationCheck;
}
function switchOnCharmFromTip(message){
  // Write your code here!
  let charm;

  switch(message){

  case 'generous':
    charm = 'Thank you so much.'
  break;

  case 'not as generous':
    charm = 'Thank you.'
  break;

  default:
    charm = 'Bye.'

  }
  return charm;
}