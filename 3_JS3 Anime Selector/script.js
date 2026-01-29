let btn = document.querySelector('button');

let h1 = document.querySelector('h1');

let h4 = document.querySelector('h4');

let main = document.querySelector('main');

let box = document.querySelector('#box');

let img = document.querySelector('img')



let arr = [{
    character: "Monkey.D.Luffy",
    anime: "One Piece",
    img: "https://i.pinimg.com/736x/4b/e4/3e/4be43ebfd3ed09676fef9d53b900be0e.jpg",
    primary: "yellow",
    secondary: "red"
},

{
    character: "Son Goku",
    img: "https://i.pinimg.com/736x/de/50/08/de50081cd613f1fc5f54f92ec4f9db54.jpg",
    anime: "Dragon Ballz",
    primary: "blue",
    secondary: "orange"
},

{
    character: "Kamado Tanjiro",
    img: "https://i.pinimg.com/736x/71/0e/9c/710e9c79a9ccff681caa521a2ee0ac73.jpg",
    anime: "Demon Slayer",
    primary: "black",
    secondary: "green"
},

{
    character: "Denji",
    img: "https://i.pinimg.com/736x/d7/cc/22/d7cc225915aa736cf754580608275248.jpg",
    anime:"Chainsaw Man",
    primary:"gold",
    secondary:"white"
},

{
    character: "Yagami Light",
    img: "https://i.pinimg.com/736x/b4/cc/25/b4cc25e12f1bfcc816486d073ac3b17d.jpg",
    anime:"Death Note",
    primary:"silver",
    secondary:"black"
},

{
    
    character: "Gojo Satoru",
    img: "https://i.pinimg.com/736x/b8/78/e1/b878e1fd2aa11d36e83a0e19c3122498.jpg",
    anime:"JJK",
    primary:"red",
    secondary:"cyan"
}
]


btn.addEventListener('click', function() {

    let a = Math.floor(Math.random()*arr.length);
    
    h1.innerHTML = arr[a].team;
    h1.style.backgroundColor = arr[a].primary;
    main.style.backgroundColor = arr[a].secondary
})

btn.addEventListener('click', function() {
    let num = Math.floor(Math.random()*arr.length);
    console.log(num)

    h1.innerHTML = arr[num].character;
    h4.innerHTML = arr[num].anime;
    h1.style.backgroundColor = arr[num].primary;
    main.style.backgroundColor = arr[num].secondary;
    box.style.backgroundImage = `url(${arr[num].img})`;
    // box.style.backgroundPosition = "center";

})

// var heading = document.createElement('h1');

// heading.innerHTML = 'YOOOOO CULTURED'

// var select = document.querySelector('nav')

// select.appendChild(heading);
