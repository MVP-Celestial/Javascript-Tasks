let para = document.querySelector('h1');
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const text = para.innerText

para.addEventListener('mouseenter', ()=>{
    
let iteration = 0.5;

function randomText() {
            const str = text.split("").map((char,index)=> {
                if(index<iteration) {
                    return char
                }
                return characters.split("")[Math.floor(Math.random() * 52)]
            }).join("")
            para.innerText = str;
            iteration += 0.25
        }


        setInterval(randomText,30);
})


