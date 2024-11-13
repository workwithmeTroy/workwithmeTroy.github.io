
          
        

          const swipeMouse=(event,start)=> {
            return new Promise((resolve) => {
                let startX=start
                let element=document.getElementById("swipediv")
                
                // const touchStartHandler = (event) => {
                    // console.log('activate touchStartHandler')
                    // const touch = event.touches[0];
                    // startX = touch.clientX;
                   
                // };
        
                const touchEndHandler = (event) => {
                    console.log("activate touchendhandler")
                    const touch = event.changedTouches[0];
                    const endX = touch.clientX;
                    
                    
                    const diffX = endX - startX;
                    
                    console.log("startX ",startX, "endX ", endX)
                    let swipeDirection;
                   
                    swipeDirection = diffX > 0 ? 'right' : 'left';
                  
        
                    // Clean up the event listeners
                    // element.removeEventListener('touchstart', touchStartHandler);
                    element.removeEventListener('mouseup', touchEndHandler);
                    
                    // Resolve the promise with the swipe direction
                    resolve(swipeDirection)
        
                // element.addEventListener('touchstart', touchStartHandler);
                element.addEventListener('mouseup', touchEndHandler);
            });
        }   
          const swipeTouch=(event,start)=> {
            return new Promise((resolve) => {
                let startX=start
                let element=document.getElementById("swipediv")
                
                // const touchStartHandler = (event) => {
                    // console.log('activate touchStartHandler')
                    // const touch = event.touches[0];
                    // startX = touch.clientX;
                   
                // };
        
                const touchEndHandler = (event) => {
                    console.log("activate touchendhandler")
                    const touch = event.changedTouches[0];
                    const endX = touch.clientX;
                    
                    
                    const diffX = endX - startX;
                    
                    console.log("startX ",startX, "endX ", endX)
                    let swipeDirection;
                   
                    swipeDirection = diffX > 0 ? 'right' : 'left';
                  
        
                    // Clean up the event listeners
                    // element.removeEventListener('touchstart', touchStartHandler);
                    element.removeEventListener('touchend', touchEndHandler);
                    
                    // Resolve the promise with the swipe direction
                    resolve(swipeDirection);
                };
        
                // element.addEventListener('touchstart', touchStartHandler);
                element.addEventListener('touchend', touchEndHandler);
            });
        }   

        const carosel=(event)=>{
          
            let element=document.getElementById('swipediv')
            // element.removeEventListener('touchstart', carosel);
            console.log(element)
            console.log(event.type,"event that has activated")

            const touch = event.touches[0];
            let startX=0
            startX = touch.clientX;

        let eventType=""
        let directionSwipe=""
        
           if(event.type==="touchstart"){
            console.log("check event.type")
        eventType="touchstart"
        
        swipeTouch(event,startX).then((direction) => {
            console.log("set directSwipe ",direction)
           directionSwipe=direction

           let postOne=document.getElementById("p1")
           let postTwo=document.getElementById("p2")
           let postThree=document.getElementById("p3")
           ///// dot notating the style property and adding the animation for the picture to start moving to the next spot 
           console.log(directionSwipe," directionSwipe")
           if("right"===directionSwipe){
           
               postOne.style.animation=" p1ToP2 2s forwards"
               postTwo.style.animation="p2ToP3 1.5s forwards"
               postThree.style.animation="p3ToP1 2s forwards"
           } else if("left"===directionSwipe){
               postOne.style.animation=" p1ToP3 2s forwards"
               postTwo.style.animation="p2ToP1 1.5s forwards"
               postThree.style.animation="p3ToP2 2s forwards"
           }
           
           
           // these variables below are holding the sources that are currently at each position
           
           let postOneSrc=postOne.src
           let postTwoSrc=postTwo.src
           let postThreeSrc=postThree.src
           
           console.log(postOneSrc)
           console.log(postTwoSrc)
           console.log(postThreeSrc)
           //This setTimeOut function is used to keep up with when the animation stops at a 2sec transition.. we then switch it to none so the animation stops and the pictures are at their new position that they moved too
           setTimeout(()=>{
               if("right"===directionSwipe){
                   postOne.src=postThreeSrc
                   postTwo.src=postOneSrc
                   postThree.src=postTwoSrc
               
               } else if("left"===directionSwipe){
                   postOne.src=postTwoSrc 
                   postTwo.src= postThreeSrc
                   postThree.src=postOneSrc
               
               }
               
               postOne.style.animation="none"
               postTwo.style.animation="none"
               postThree.style.animation="none"
           },2500)
        });
        }else if (event.type==="mousedown"){
          directionSwipe=swipeMouse()
          eventType="mousedown"
        
        }
        /// below PostOne-three is the element that is holding the current pictures we are going to move these by....
        
        
        // element.addEventListener("touchstart", carosel)
        }


/// we then added a event listener to p1 only because p1 is the only one that needs to be clicked to see pictures move
let swipediv=document.getElementById("swipediv")
// swipediv.addEventListener("mousedown", carosel)
swipediv.addEventListener("touchstart", carosel)
// swipediv.addEventListener("touchstart", swipeTouch)
