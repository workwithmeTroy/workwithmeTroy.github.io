 const swipeTouch=(element,callback)=>{
console.log("activate swipe function")
   // first variable is to tell well you first touched the screen
  

        let touchStartX = 0;
        //second variable tell you how far you were from the first touch
        let touchEndX = 0;
      // this is the event listner that will set the touchStartX variable to compare distance from the touch end
       
     
       
        element.addEventListener('touchstart', function(event) {
          touchStartX = event.changedTouches[0].clientX;
        });
      // this is capturing the touchend to compare to touchstartX
        element.addEventListener('touchend', function(event) {
          touchEndX = event.changedTouches[0].clientX;
      // this is the minimum distance you must have from your touch start if you pick your finger up before that many pixels it will not be considered a swipe
          const threshold = 30; // Minimum distance for a swipe
          // this is the difference in how much distance there is to the touchstartx and touchendx
          const diffX = touchEndX - touchStartX;
      //we are using Math.abs to change the negative number into a positive number to compare if it is greater than threshold
          if (Math.abs(diffX) > threshold) {
            /// My callback which will allow me to move my pictures either left or right
            if (diffX > 0) {
              callback('right'); // Swiped right
            } else {
              callback('left'); // Swiped left
            }
          }
        });
      }
 const swipeMouse=(element,callback)=>{
console.log("activate swipe function")
   // first variable is to tell well you first touched the screen
  

        let touchStartX = 0;
        //second variable tell you how far you were from the first touch
        let touchEndX = 0;
      // this is the event listner that will set the touchStartX variable to compare distance from the touch end
       
     
       
        element.addEventListener('mouseDown', function(event) {
          touchStartX = event.changedTouches[0].clientX;
        });
      // this is capturing the touchend to compare to touchstartX
        element.addEventListener('mouseUp', function(event) {
          touchEndX = event.changedTouches[0].clientX;
      // this is the minimum distance you must have from your touch start if you pick your finger up before that many pixels it will not be considered a swipe
          const threshold = 30; // Minimum distance for a swipe
          // this is the difference in how much distance there is to the touchstartx and touchendx
          const diffX = touchEndX - touchStartX;
      //we are using Math.abs to change the negative number into a positive number to compare if it is greater than threshold
          if (Math.abs(diffX) > threshold) {
            /// My callback which will allow me to move my pictures either left or right
            if (diffX > 0) {
              callback('right'); // Swiped right
            } else {
              callback('left'); // Swiped left
            }
          }
        });
      }
      
    
    // Example usage
    const element = document.getElementById('swipediv');
    
    swipe(element, function(direction) {
      return direction;
    });

