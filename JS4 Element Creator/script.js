let btn = document.querySelector('button');
let main = document.querySelector('main')

let arr = [ "Believe in yourself",
    "Go beyond your limits",
    "I will never give up",
    "Power comes from will",
    "CONSISTENCY",
    "This is my resolve",
    "I choose my own path",
    "Stand and fight",
    "Awaken your power",
    "Destiny can change"];

btn.addEventListener('click', function() {

    let h1 = document.createElement('h1')

    let r = Math.floor(Math.random()*arr.length);
    let x = Math.floor(Math.random()*100);
    let y = Math.floor(Math.random()*100);

    let c1 = Math.floor(Math.random() * 256);
    let c2 = Math.floor(Math.random() * 256);
    let c3 = Math.floor(Math.random() * 256);

    let rotate = Math.floor(Math.random()*361)

    h1.innerHTML = arr[r];
    h1.style.color = `rgb(${c1},${c2},${c3})`
    h1.style.position = "absolute"
    h1.style.top = y+"%"
    h1.style.left = x+"%"

    h1.style.rotate = rotate + "deg"

    main.appendChild(h1)
   
})