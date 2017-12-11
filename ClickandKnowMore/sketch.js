var button;
var mouseOver;
var car;

var textCount = 0
function preload () {
Bree = loadFont('BreeSerif-Regular.ttf');

}

function setup() {
createCanvas(2700, 2150);
background(140);
img = loadImage("Arrows-curved-arrow-clipart-2.png");
ellipse(750, 350, 200, 200);
fill(0, random(0,255), 0);


button = createImg('AI.png');
button.position(950, 300);
button.mousePressed(ChangePage);
button2 = createButton('Back');
button2.style("Home", color(0,0,0,0));
button2.style("border", "none");
button2.style("padding","15px 100px");
button2.style("text-size","300%");
button2.position(1100, 1000);
button2.size()
button2.mousePressed(BackPage);
}
function ChangePage() {
  textCount = textCount + 1
}

function BackPage() {
  textCount = textCount - 1
}
function history() {
textSize(50);
//text("Artificial-Intelligence", 700, 350);
fill(0, 0, 0);
createCanvas(windowWidth, windowHeight);
background(140);

}

function draw() {
  background(140);

  textSize(80);
  textFont(Bree);
  fill(0, 0, 0);
  text("Artificial-Intelligence", 900, 150, 100, 200);
  createCanvas(windowWidth, windowHeight);
 background(200);
 if (textCount == 1) {
 page1();
 } else if (textCount==2) {
   page2();
 } else if (textCount==3) {
   page3();
 } else if (textCount==4) {
   page4();
 } else if (textCount==5) {
   page5();
 }

}



function page2() {
  createCanvas(windowWidth, windowHeight);
  background(140);
  textSize(50);
  text("Artificial Intelligence is the creation of intelligent machines. The ultimate goal of creating these machines, is having it be able to solve any problem a human could. ", 20, 100, 1000, 400);
  text("Artificial intelligence emerged after World War II. One of the first of the early researchers of artificial intelligence was English mathematician Alan Turing, who gave a lecture on the topic in 1947.", 20, 400, 1000, 500);

}
function page1() {
  textSize(50);
  text("Artificial-Intelligence", 700, 350);
  fill(0, 0, 0);
  createCanvas(windowWidth, windowHeight);
  background(140);

}
function page3() {
  background(140);
  textSize(50);
  text("In 1950, Turing published an article, “Computing Machinery and Intelligence,” that discussed the conditions for considering a machine intelligent. He developed what has come to be called the Turing test. The Turing test is that if an A.I can convince a human that they are human it should be considered intelligent. One idea of how to create an A.I which would pass the Turing test, is to have it learn from literature like a child. The term Machine Learning refers to this. One drawback is that it is hard to simulate physical experience.",1600, 100, 1000, 900);
}

function color() {
  bagkround(random(0,255), random(0,255), random(0,255));

}

function page4() {
  background(140);
  textSize(50);
  text("One of the major limitations in defining and measuring intelligence in human and nonhuman species as well as machines is the lack of adequate measurement tools. Most human measurement tools rely on rather basic reading, comprehension, and mathematical problems. For instance, to examine working memory on an IQ test, children must repeat back a list of digits. However, working memory, as a component process of intelligence, is much more complex a process than simply repeating back a series of digits. Thus, there are many types of intelligence that are not measured adequately or that are not measured at all and therefore are unable to make a contribution to the final measure of intelligence.", 10, 100, 1000, 1200);

}
function page5() {
  background(140);
  textSize(50);
  text("My interests in artificial intelligenc are the use of artificial intelligence to generate literature, and also how it could be implemented into video games as a step beyond precedural generation which has already been implemented into a few games.", 20, 50, 900, 900);
  text("One example of this would be to use the Rita p5 library which is designed for generative literature to right a story by running sources through two competing A.I.", 20, 1000, 900, 500);

}
