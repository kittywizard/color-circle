const circle = document.querySelector(".circle");
let deg = 45;

// circle.addEventListener('mouseenter', colorChange);
// circle.addEventListener('mouseleave', colorChange);

circle.addEventListener('mousemove', colorChange);

function colorChange() {

    if(deg < 180){
        deg++;
    } else if(deg > 180){
        deg--;
    } else {
        deg = 45;
    }
    console.log(deg);
    circle.style.background = `linear-gradient(${deg}deg, rgba(0,0,0,1) 12%, rgba(104,121,197,1) 40%, rgba(39,226,222,1) 76%)`;
    //circle.style.boxShadow = `box-shadow: 0 10px 20px linear-gradient(${deg}deg, rgba(104,121,197,1) 40%, rgba(39,226,222,1) 76%, rgba(0,0,0,1) 12%)`
}