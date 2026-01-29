let btn = document.querySelector('button');

let h1 = document.querySelector('h1');

let loader = document.querySelector('.status');

let num = 50+Math.floor(Math.random()*50);

let progress = 0

btn.addEventListener('click', function(){

   let int = setInterval(() => {
        progress++
        h1.innerHTML = progress + "%";
        loader.style.width = progress + "%"
        console.log(progress);
        btn.style.pointerEvents = "none"
        
    },num);
    
    setTimeout(() => {
        clearInterval(int)
        btn.innerHTML = "Downloaded..."
        btn.style.opacity = "0.5"
        
 
    },num*100);

    console.log("your download will be completed in " + num/10 + " seconds");

})