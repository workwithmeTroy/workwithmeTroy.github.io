//You need a swipe function instead of a click function
// make this more responsive for a desktop version and be able to carosel through hundreds of photos

//if in mobile mode other pictures can be overflow hidden but it still needs to carousl through all pictures
//


///to make this dynamic the picture property needs to be an array of objects, that has a few different properties like dimensions of the picture, src,
//there needs to be a function that accounts all pictues and makes the container that will have overflow hidden wide enough to accomadate pictures for the time being we will max out at 10 pictures

import { swipe } from "./swipe";

class Carosel{
    constructor(pictures){
        this.pictures=pictures;
        
    }
   


    /// below PostOne-three is the element that is holding the current pictures we are going to move these by....

///// dot notating the style property and adding the animation for the picture to start moving to the next spot 

// these variables below are holding the sources that are currently at each position


//This setTimeOut function is used to keep up with when the animation stops at a 2sec transition.. we then switch it to none so the animation stops and the pictures are at their new position that they moved too
// setTimeout(()=>{
//     postOne.src=postThreeSrc
//     postTwo.src=postOneSrc
//     postThree.src=postTwoSrc
//     postOne.style.animation="none"
//     postTwo.style.animation="none"
//     postThree.style.animation="none"
// },2000)



}
Carosel.prototype={
    swipe:swipe(),
    leftNextPic:{},
    rightNextPic:{}
}
/// we then added a event listener to p1 only because p1 is the only one that needs to be clicked to see pictures move
let swipe=document.getElementById("p1")
swipe.addEventListener("click", carosel)