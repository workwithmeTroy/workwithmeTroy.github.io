const swipeTouch=()=> {
    return new Promise((resolve) => {
        let startX, startY;
        let element=document.getElementById("swipediv")

        const touchStartHandler = (event) => {
            const touch = event.touches[0];
            startX = touch.clientX;
            startY = touch.clientY;
        };

        const touchEndHandler = (event) => {
            const touch = event.changedTouches[0];
            const endX = touch.clientX;
            const endY = touch.clientY;

            const diffX = endX - startX;
            const diffY = endY - startY;

            let swipeDirection;
            if (Math.abs(diffX) > Math.abs(diffY)) {
                swipeDirection = diffX > 0 ? 'right' : 'left';
            } else {
                swipeDirection = diffY > 0 ? 'down' : 'up';
            }

            // Clean up the event listeners
            element.removeEventListener('touchstart', touchStartHandler);
            element.removeEventListener('touchend', touchEndHandler);

            // Resolve the promise with the swipe direction
            resolve(swipeDirection);
        };

        element.addEventListener('touchstart', touchStartHandler);
        element.addEventListener('touchend', touchEndHandler);
    });
}

// Usage example:

swipetouch(myElement).then((direction) => {
   
});
