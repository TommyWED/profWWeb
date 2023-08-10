let messageArray = ["I 'm a Front-End Developer"]
let textPosition = 0;
let speed = 100;
var count = 0;

typewriter=() =>{
  document.querySelector("#message").innerHTML = messageArray[0].substring(0,textPosition) +"|"
  
  if(textPosition == 0 ||  textPosition == messageArray[0].length){
    count++
    console.log(count)
  }
  if(count %2 != 0){
    if(textPosition++ != messageArray[0].length){
      setTimeout(typewriter, speed)
    }
  }else if(count %2 == 0){
    if(textPosition-- != 0){
      setTimeout(typewriter, speed)
    }
  }
    
}

const nothing = () =>{

}

window.addEventListener("load",typewriter)


const boxes = document.querySelectorAll(".leftimg");
const boxes2 = document.querySelectorAll(".rightimg");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });

  boxes2.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });


}