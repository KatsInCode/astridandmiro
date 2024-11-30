// script.js
const floating_object = document.getElementById('floating_object');
let position = 0;
let direction = 1;

function moveObject() 
{
    position += direction * 2;
    
    if (position > window.innerWidth - 50 || position < 0) 
        {
            direction *= -1;
        }
        
    floating_object.style.left = position + 'px';
        
    requestAnimationFrame(moveObject);
}

moveObject();
