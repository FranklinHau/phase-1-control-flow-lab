function scuberGreetingForFeet(perFeet){
  let cost;
  if (perFeet <= 400){
    cost = 'This one is on me!';
  }else if (perFeet <= 2000){ 
    cost = 'That will be twenty bucks.';
  }else if (perFeet <= 2500){
    cost = 'I will gladly take your thirty bucks.';
  }else {
    cost = 'No can do.';
  }
  return cost
}

function ternaryCheckCity(city){
  const destination = city === 'NYC'? 'Ok, sounds good.' : 'No go.';
  return destination;
}

function switchOnCharmFromTip(string){
  let response;
  switch(string){
    case 'generous':
      response = 'Thank you so much.';
      break;
    case 'not as generous':
      response = 'Thank you.';
      break;
    default:
      response = "Bye."
      break; 
  } return response
}