let arr = [{
    name: "Asa Mitaka",
    description: "socially isolated high school protagonist of Chainsaw Man's second part, a guilt-ridden girl revived by the War Devil",
    img: "https://i.pinimg.com/736x/da/d5/17/dad517be876112bfc417974554364a41.jpg",
    border: " rgb(253, 135, 109)"
},
{
    name: "Monkey D. Luffy",
    description: "a cheerful pirate captain who wants to become the Pirate King and believes in absolute freedom",
    img: "https://i.pinimg.com/736x/cf/4c/9a/cf4c9a5707f3a8bbec681a1fa19f42a0.jpg",
    border: "red"

  },
  
  {
    name: "Naruto Uzumaki",
    description: "a loud and determined ninja who grows from an outcast into the hero of his village",
    img: "https://i.pinimg.com/736x/f2/9a/18/f29a182b042671c6ab1989b1eb3f3de1.jpg",
    border: "orange"
  },
  
  {
    name: "Gojo Satoru",
    description: "a powerful jujutsu sorcerer with a playful personality and unmatched cursed techniques",
    img: "https://i.pinimg.com/1200x/ae/b6/86/aeb686e9dc3cad99f56bbdd87027e6fe.jpg",
    border: "blueviolet"
  },
  
  {
    name: "Light Yagami",
    description: "a brilliant student who gains a notebook that kills and slowly becomes obsessed with god-like justice",
    img: "https://i.pinimg.com/1200x/9d/32/d8/9d32d8e2266f91620cad354b2a04df77.jpg",
    border: "gray"
  },
  
  {
    name: "Eren Yeager",
    description: "a boy who seeks freedom and walks a dark path to protect what he believes in",
    img: "https://i.pinimg.com/736x/bd/bd/00/bdbd00d54430062fc9f124501ab92e53.jpg",
    border: "cyan"
  },
  
  {
    name: "Tanjiro Kamado",
    description: "a kind-hearted demon slayer who fights to save his sister and protect innocent lives",
    img: "https://i.pinimg.com/736x/ef/b9/fa/efb9fa23bf599069b298b4502f525879.jpg",
    border: "green"
  },
  
  {
    name: "Ichigo Kurosaki",
    description: "a high school student who gains soul reaper powers and must protect both humans and spirits",
    img: "https://i.pinimg.com/1200x/3c/56/84/3c56846fe03846ea76b6bbc52fd2eb78.jpg",
    border: "orange"
  },
  
  ];

  let sum = '';

  arr.forEach(function(val){
    sum = sum + `<div class="card" style="border-color:${val.border}">
    <div class="image">
    <img src="${val.img}" alt="">

    </div>
    <h2>${val.name}</h2>
    <h4>Description:</h4>
    <p>${val.description}</p>
</div>`;
})

let main = document.querySelector('main');

main.innerHTML = sum;