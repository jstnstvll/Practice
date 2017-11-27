var button;
var mouseOver;
var car;
let person1;




function setup() {
createCanvas(2700, 2150);
background(140);
person1 = new Person();
ellipse(750, 350, 200, 200);
fill(0, random(0,255), 0);


button = createImg('AI.png');
button.position(950, 300);
button.mouseOver(history);
button2 = createButton('Vehicles');
button2.style("background-color", color(0,0,0,0));
button2.style("border", "none");
button2.style("padding","15px 100px");
button2.style("text-shadow", "5px 5px #558ABB");
button2.position(1100, 1000);
button2.mousePressed(page2);



}

function history() {
textSize(50);
text("Artificial-Intelligence", 700, 350);
fill(0, 120, 153);
}

function draw() {
  background(140);
  person1.drawPerson();
  textSize(80);
  text("Artificial-Intelligence", 950, 200, 100, 200);
  textSize(30);
  text("Artificial Intelligence is the creation of intelligent machines. The ultimate goal of creating these machines, is having it be able to solve any problem a human could. ", 20, 100, 500, 200);
  text("Artificial intelligence emerged after World War II. One of the first of the early researchers of artificial intelligence was English mathematician Alan Turing, who gave a lecture on the topic in 1947.", 20, 400, 500, 300);
  text("In 1950, Turing published an article, “Computing Machinery and Intelligence,” that discussed the conditions for considering a machine intelligent. He developed what has come to be called the Turing test. The Turing test is that if an A.I can convince a human that they are human it should be considered intelligent. One idea of how to create an A.I which would pass the Turing test, is to have it learn from literature like a child. The term Machine Learning refers to this. One drawback is that it is hard to simulate physical experience.",1800, 100, 700, 500);
  text("One of the major limitations in defining and measuring intelligence in human and nonhuman species as well as machines is the lack of adequate measurement tools. Most human measurement tools rely on rather basic reading, comprehension, and mathematical problems. For instance, to examine working memory on an IQ test, children must repeat back a list of digits. However, working memory, as a component process of intelligence, is much more complex a process than simply repeating back a series of digits. Thus, there are many types of intelligence that are not measured adequately or that are not measured at all and therefore are unable to make a contribution to the final measure of intelligence.", 1800, 600, 700, 600);
  text("My interests in artificial intelligenc are the use of artificial intelligence to generate literature, and also how it could be implemented into video games.", 20, 700, 500, 300);


}

function mousePressed(){
  	person1.movePerson(); //change that person's location using the movePerson function
}


function page2() {
  //createCanvas(2700, 2150);
  //background(140);
  //textSize(30);
  //text("Artificial Intelligence is the creation of intelligent machines. The ultimate goal of creating these machines, is having it be able to solve any problem a human could. ", 20, 100, 500, 200);
  //text("Artificial intelligence emerged after World War II. One of the first of the early researchers of artificial intelligence was English mathematician Alan Turing, who gave a lecture on the topic in 1947.", 20, 400, 500, 300);
  //text("In 1950, Turing published an article, “Computing Machinery and Intelligence,” that discussed the conditions for considering a machine intelligent. He developed what has come to be called the Turing test. The Turing test is that if an A.I can convince a human that they are human it should be considered intelligent. One idea of how to create an A.I which would pass the Turing test, is to have it learn from literature like a child. The term Machine Learning refers to this. One drawback is that it is hard to simulate physical experience.",1800, 100, 700, 500);
  //text("One of the major limitations in defining and measuring intelligence in human and nonhuman species as well as machines is the lack of adequate measurement tools. Most human measurement tools rely on rather basic reading, comprehension, and mathematical problems. For instance, to examine working memory on an IQ test, children must repeat back a list of digits. However, working memory, as a component process of intelligence, is much more complex a process than simply repeating back a series of digits. Thus, there are many types of intelligence that are not measured adequately or that are not measured at all and therefore are unable to make a contribution to the final measure of intelligence.", 1800, 600, 700, 600);

}

class Person {
	constructor(x,y){
		this.x = 100;
    		this.y = 150;
	}

	drawPerson(){
		ellipse(this.x,this.y,50,50);
		line(this.x,this.y,this.x,this.y+200);
	}

	movePerson(){
		this.x = mouseX;
		this.y = mouseY;
	}
}
