const container = document.querySelector(".container");
const button = document.querySelector(".cta-button");
const posX = document.querySelector(".posX span");
const posY = document.querySelector(".posY span");

button.addEventListener("click", () => {
    button.classList.toggle("active");
    console.log("Button was clicked!");
}, false);


const mousePosition = (event) =>{
    posX.innerHTML = event.pageX;
    posY.innerHTML = event.pageY;
};

window.addEventListener("mousemove", mousePosition, false);

//change color
container.addEventListener("mousemove",  () => {
    container.classList.add("blue");
},
    false
);

container.addEventListener(
    "mouseleave" , 
    () => {
        container.classList.remove("blue");
    },
    false
);

