function setup() {
    createCanvas(600, 600);
    background("green");
  }
  
  function draw() {
    
    stroke("purple")
  fill("blue") 
   
    // console.log(mouseIsPressed);
    
    if(mouseIsPressed) {
      rect(mouseX, mouseY, 30, 45) ;
    }
  }
  