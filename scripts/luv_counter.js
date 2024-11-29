let luv_counter = document.querySelectorAll("#luvcounter");
let counter = 0;

luv_counter.forEach(function(button) 
{
    button.addEventListener('click', function() 
    {
        counter++;
        document.querySelector("#result").innerHTML = counter;
    });
});
