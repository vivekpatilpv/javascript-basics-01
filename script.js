const side = document.querySelectorAll(".sides");
const button = document.querySelector(".button");
const result = document.querySelector("#result");

const hypo = () => {
    if (side[0].value > 0 && side[1].value > 0){
        const hypotenuse = (Math.hypot(side[0].value, side[1].value));;
        result.innerText = "Hypotenuse is :- " + hypotenuse ;
    }else{
        result.innerText = "Oops! Enter positive values.";
    }
};

button.addEventListener("click",hypo);