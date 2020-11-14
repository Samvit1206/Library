function isTouching(Object1,Object2) {
    if (Object1.x - Object2.x < Object2.width/2 + Object1.width/2
      && Object2.x - Object1.x < Object2.width/2 + Object1.width/2
      && Object2.y - Object2.y < Object2.height/2 + Object1.height/2
      && Object2.y - Object1.y < Object2.height/2 + Object1.height/2) {
   return true;
    
  }
  else {
    return false;
  } 
  }
  function bounceOff(OB1,OB2){
    if (OB1.x - OB2.x < OB2.width/2 + OB1.width/2
      && OB2.x - OB1.x < OB2.width/2 + OB1.width/2) {
    OB1.velocityX = OB1.velocityX * (-1);
   OB2.velocityX = OB2.velocityX * (-1);
  }
  if (OB1.y - OB2.y < OB2.height/2 + OB1.height/2
    && OB2.y - OB1.y < OB2.height/2 + OB1.height/2){
   OB1.velocityY = OB1.velocityY * (-1);
    OB2.velocityY = OB2.velocityY * (-1);
  }
  }