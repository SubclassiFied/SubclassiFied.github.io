const arr1 = ["Champ,", "Fact:", "Everybody says", 
  "Dang...", "Check it:", "Just saying...", 
  "Superstar,", "Tiger,", "Self,", "Know this:",
  "News alert:", "News alert:", "Girl,", "Ace,",
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

function pepTalkGenerator() {
  const obj1 = arr1[Math.floor(Math.random() * arr1.length)];
  const obj2 = arr2[Math.floor(Math.random() * arr2.length)];
  const obj3 = arr3[Math.floor(Math.random() * arr3.length)];
  const obj4 = arr4[Math.floor(Math.random() * arr4.length)];

  textOut = obj1 + " " + obj2 + " " + obj3 + " " + obj4; // Store output text
}

function setup() {
  createCanvas(800, 600);
  generateBtn(); // Move button creation here
}

function draw() {
  background(255);

  push();
  stroke(0);
  strokeWeight(10);
  rect(0, 0, 800, 600);
  pop();
  // Display the generated pep talk
  push();
  textFont('Courier New');
  textSize(16);
  textAlign(CENTER, BASELINE);
  //fill(0);
  text(textOut, width / 2, height / 3); // Center the text
  pop();
}

function generateBtn() {
  let button = createButton('Say something nice!');
  button.position(350, 300);
  button.mousePressed(pepTalkGenerator); // Set the function reference without calling it
}
