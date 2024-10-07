const arr1 = ["Champ,", "Fact:", "Everybody says", 
  "Dang...", "Check it:", "Just saying...", 
  "Superstar,", "Tiger,", "Self,", "Know this:",
  "News alert:", "Girl,", "Ace,",
  "Excuse me but", "Experts agree:", "In my opinion,",
  "Her ye, hear ye:", "Okay, listen up:"];

const arr2 = ["the mere idea of you", "your soul", "your hair today",
  "everything you do", "your personal style", 
  "every thought you have", "that sparkle in your eye", 
  "your presence here", "what you got going on", 
  "the essential you", "your life's journey", 
  "that saucy personality", "your DNA", "that brain of yours", 
  "your choice of attire", "the way you roll", 
  "whatever your secret is", " all of y'all"];

const arr3 = ["has serious game,", "rains magic,", 
  "deserves the Nobel Prize,", "raises the roof,", 
  "breeds miracles,", "is paying off big time,",
  "shows mad skills,", "just shimmers,", 
  "is a national treasure,", "gets the party hopping,", 
  "is the next big thing,", "roars like a lion,",
  "is a rainbow factory,", "is made of diamonds,", 
  "makes birds sing,", "should be taught in school,", 
  "makes my world go round,", "is 100% legit,"];

const arr4 = ["24/7.", "can I get an amen?", "and that's a fact.", 
  "so treat yourself.", "you feel me?", 
  "that's just science.", "would I lie?", "for reals", 
  "mic drop.", "you hidden gem.", "snuggle bear.", 
  "period.", "word up.", "now let's dance.", 
  "high five.", "say it again!", "according to CNN.",
  "so get used to it."];

let textOut = ""; // Variable to hold the output text
let textDiv; // Variable for the text output element
let button; // Variable for the button

function setup() {
  createCanvas(windowWidth, windowHeight); // Set canvas to full window size
  createTextOutput(); // Create a text output element
  createButtonElement(); // Create the button
  pepTalkGenerator(); // Generate initial pep talk
}

function draw() {
  background(255);
  
  // Draw a black border around the canvas
  stroke(0);
  strokeWeight(10);
  noFill();
  rect(0, 0, width, height); // Draw border

  // Position elements to keep them centered
  positionElements();
}

function createButtonElement() {
  button = createButton('Say something nice!');
  button.mousePressed(pepTalkGenerator); // Generate a new pep talk
  button.style('font-size', '16px');
}

function createTextOutput() {
  textDiv = createDiv(textOut);
  textDiv.size(700, 'auto'); // Set width, auto height
  textDiv.style('font-family', 'Courier New');
  textDiv.style('font-size', '24px');
  textDiv.style('text-align', 'center');
  textDiv.style('padding', '20px');
  textDiv.style('border', '1px solid black');
  textDiv.style('background-color', 'rgba(255, 255, 255, 0.8)'); // Semi-transparent background
}

function positionElements() {
  // Center the text and button within the canvas
  const rectWidth = width;
  const rectHeight = height;

  // Center the text
  textDiv.position((rectWidth - textDiv.elt.offsetWidth) / 2, rectHeight / 3);
  
  // Center the button below the text
  button.position((rectWidth - button.elt.offsetWidth) / 2, rectHeight / 2 + 20);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Resize canvas to window size
  positionElements(); // Reposition elements on resize
}

function pepTalkGenerator() {
  const obj1 = arr1[Math.floor(Math.random() * arr1.length)];
  const obj2 = arr2[Math.floor(Math.random() * arr2.length)];
  const obj3 = arr3[Math.floor(Math.random() * arr3.length)];
  const obj4 = arr4[Math.floor(Math.random() * arr4.length)];

  textOut = obj1 + " " + obj2 + " " + obj3 + " " + obj4; // Store output text
  updateTextOutput(); // Update the text in the HTML element
}

function updateTextOutput() {
  textDiv.html(textOut); // Update the content of the text div
  positionElements(); // Reposition after text update
}
