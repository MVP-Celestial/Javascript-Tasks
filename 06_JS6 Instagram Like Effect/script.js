let img = document.querySelector('img');

let heart = document.querySelector('.heart');

img.addEventListener('dblclick', function(){
    heart.style.opacity = 1
    heart.style.transform = "translate(-50%,-50%) scale(1) rotate(0deg)"

    setTimeout(function() {
        heart.style.transform = "translate(-50%,-600%) scale(1) rotate(60deg)"  
    },800)

    setTimeout(function() {
        heart.style.opacity = 0
    },1000)

    
    setTimeout(function() {
        heart.style.transform = "translate(-50%,-50%) scale(0) rotate(-60deg)"
    },1200)
})

