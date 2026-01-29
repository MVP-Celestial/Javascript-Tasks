let box = document.querySelector("#box");

let btn = document.querySelector("button");

btn.addEventListener('click', function() {

    let a = Math.floor(Math.random()*256);

    let b = Math.floor(Math.random()*256);
    
    let c = Math.floor(Math.random()*256);

    box.style.backgroundColor = `rgb(${a},${b},${c})`


})