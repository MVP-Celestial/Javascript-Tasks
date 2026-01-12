let a = 0;

let num = document.querySelector('h2');

let btn = document.querySelector('#inc');

let btn2 = document.querySelector('#dec');

let reset = document.querySelector('#res')

btn.addEventListener('click', function() {
    a++
    num.innerHTML = a;
})

btn2.addEventListener('click', function() {
    a--
    num.innerHTML = a;
})

reset.addEventListener('click', function() {
    a = 0
    num.innerHTML = a
})



