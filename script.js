//class to create objects that float on the screen (for home page)
class Float {
	constructor(elem, dir, speed, rotate, angle, rdir) {
	  this.elem = elem; //the element from the DOM
	  this.dir = dir; //the direct of float ("left" or "right")
	  this.speed = speed; //the speed of float ("the number by which the position of the floating object changes in one iteration")
	  this.rotate = rotate; //true or false value to specify if the floating object has to rotate or not
	  this.angle = angle;//to control the angle of rotation for the object in each iteration
	  this.rdir = rdir;//the direction of rotation ("ac" for anticlockwise or "c" for clockwise)
	}
  }
// the function called by the myMove function every 10ms to create the effect of moving animation
function frame(id, lpos, element) {
    if (lpos < -150 || lpos > 1500) { //checks if the object has reached outside the visible screen
      clearInterval(id); //stops the animation
	  element.angle = 0; //reset the angle to 0
    } else {
		element.elem.style.left = lpos + 'px'; //move the element
		if(element.rotate){ //rotate the element according to its specification
			if(element.rdir==="ac"){
				element.elem.style.transform = `rotate(${--element.angle}deg)`;
			}
			else if(element.rdir==="c"){
				element.elem.style.transform = `rotate(${++element.angle}deg)`;
			}
		}		
    }
  }
var pos;
//the function to initiate the animation
function myMove(element) {
  if (element.elem){
	pos = element.elem.getBoundingClientRect();//get the position of the element
	let lpos = pos.left;//get the left alignment of the position of the element (which will be altered to control the movement of the element)
	var id = setInterval(()=>{
		//setup for the movement of the element based on desired direction and speed
		if(element.dir==="left"){
			lpos-=element.speed;
		}
		else if(element.dir==="right"){
			lpos+=element.speed;
		}
		else{
			return;
		}
		frame(id, lpos, element);
	}, 10);
  } 
}

//get the elements to be floated from the DOM and set the parameters
const elem1 = new Float(document.getElementById("float"), "left", 3, true, 0, "ac")
const elem2 = new Float(document.getElementById("float2"), "right", 4, true, 0, "c")

//animation for object1
myMove(elem1);
var animation = setInterval(() => {
	elem1.elem.style.left = window.innerWidth + 'px';
	elem1.elem.style.transform = 'rotate(0deg)';
	myMove(elem1)
}, 10000);

//animation for object2
myMove(elem2);
var animation = setInterval(() => {
	elem2.elem.style.left = 0;
	elem2.elem.style.transform = 'rotate(0deg)';
	myMove(elem2)
}, 6000);

//zoom on first panel when scrolled
$(window).scroll(function () {
	var scrollPos = $(this).scrollTop();
	$("#panel1").css({
	  "background-size": 100 + scrollPos + "%",
	});
	$("#path1").css({
		"background-size": 100 + (scrollPos*0.5) + "%",
	});
	$("#path2").css({
		"background-size": 100 + (scrollPos*0.5) + "%",
	});
  });

//control audio on panels 1,2,3 & 4

//function to stop all audios
function stopAll(){
	for (let i =0; i<audios.length; i++){
		audios[i].pause();
	}
}
var audios = document.querySelectorAll(".audio")
stopAll()
//play the first audio when starting
audios[0].play()

window.addEventListener('scroll', playAudio)

function playAudio(){
    if (window.scrollY < window.innerHeight){ // panel1 audio
		stopAll()
		audios[0].play()
	}
	else if (window.scrollY > window.innerHeight && window.scrollY < window.innerHeight * 4){ //audo for panels 2,3,4
		stopAll()
		audios[1].play()
	}  
}
