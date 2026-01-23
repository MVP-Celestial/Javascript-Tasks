let videos = document.querySelector('section')
const reels = [
    {
      isMuted: true,
      username: "son_goku",
      likeCount: 12400,
      isLiked: false,
      commentCount: 532,
      shareCount: 210,
      isFollowed: true,
      caption:"Power level rising… Ultra instincts loading",
      video: "./videos/video1.mp4",
      userProfile: "https://i.pinimg.com/736x/be/16/ac/be16acc42863a1d6224048cbb6b8aaf3.jpg"
    },
    {
      isMuted: true,
      username: "naruto_uzumaki",
      likeCount: 9800,
      isLiked: true,
      commentCount: 421,
      shareCount: 178,
      isFollowed: false,
      video: "./videos/video2.mp4",
      caption:"From zero to Hokage — believe it",

      userProfile: "https://i.pinimg.com/736x/f2/9a/18/f29a182b042671c6ab1989b1eb3f3de1.jpg"
    },
    {
      isMuted: true,
      username: "luffy_d_monkey",
      likeCount: 15320,
      isLiked: true,
      commentCount: 689,
      shareCount: 305,
      isFollowed: true,
      video: "./videos/video3.mp4",
      caption: "Freedom tastes better on the open sea",
      userProfile: "https://i.pinimg.com/736x/cf/4c/9a/cf4c9a5707f3a8bbec681a1fa19f42a0.jpg"
    },
    {
      isMuted: true,
      username: "gojo_satoru",
      likeCount: 22100,
      isLiked: false,
      commentCount: 812,
      shareCount: 492,
      isFollowed: false,
      video: "./videos/video4.mp4",
      caption: "Blindfold on. Limits off. ",
      userProfile: "https://i.pinimg.com/1200x/ae/b6/86/aeb686e9dc3cad99f56bbdd87027e6fe.jpg"
    },
    {
      isMuted: true,
      username: "eren_yeager",
      likeCount: 18750,
      isLiked: true,
      commentCount: 640,
      shareCount: 399,
      isFollowed: true,
      video: "./videos/video5.mp4",
      caption: "If freedom has a cost… I'll pay it.",
      userProfile: "https://i.pinimg.com/736x/bd/bd/00/bdbd00d54430062fc9f124501ab92e53.jpg"
    },
    {
      isMuted: true,
      username: "tanjiro_kamado",
      likeCount: 13460,
      isLiked: false,
      commentCount: 488,
      shareCount: 266,
      isFollowed: false,
      video: "./videos/video6.mp4",
      caption: "Kindness is the strongest blade ",
      userProfile: "https://i.pinimg.com/736x/ef/b9/fa/efb9fa23bf599069b298b4502f525879.jpg"
    },
    
   
  ];

  

  function addData() { 
  
  let sum = '';
  reels.forEach(function(elem,idx) {

    sum = sum + `<div class="reel">
    <video id=${idx} autoplay loop ${elem.isMuted ? 'muted' : '' } src="${elem.video}"></video>
    <div id=${idx} class="mute">
    ${elem.isMuted ? '<i class="ri-volume-mute-fill"></i>' : '<i class="ri-volume-up-line"></i>'}
            
           </div>   
    <img class="main-img" src="https://i.pinimg.com/1200x/bf/a1/40/bfa140fdc7d7bebe6a995147ec39811b.jpg" alt="">

    <div class="bottom">
        <div class="user">
            <img src="${elem.userProfile}" alt="">
            <h4>${elem.username}</h4>
            <button id=${idx} class='follow'>${elem.isFollowed ? "Unfollow" : "Follow"}</button>
        </div>
        <h3>${elem.caption}
        </h3>
    </div>
    <div  class="right">
        <div id=${idx} class="like">
           <h4> <i  class="">${elem.isLiked ? '<i  class=" love ri-heart-fill"></i>': '<i class=" ri-heart-line"></i>'}</i> <h4>
            <h4>${elem.likeCount}</h4>

        </div>

        <div id=${idx} class="comment">
            <i class="ri-message-2-line"></i>
            <h4>${elem.commentCount}</h4>

        </div>

        <div class="share">
            <i class="ri-share-forward-line"></i>
            <h4>Share</h4>
        </div>

        <div class="remix">
            <i class="ri-remix-line"></i>
            <h4>remix</h4>

        </div>
    </div>

</div>`
  })

  console.log(sum)

  videos.innerHTML = sum
}

addData();

videos.addEventListener('click', function(dets) {

  if(dets.target.className == 'like') {
    if(!reels[dets.target.id].isLiked) {
      reels[dets.target.id].likeCount++
      reels[dets.target.id].isLiked = true;
    }else {
      reels[dets.target.id].likeCount--
      reels[dets.target.id].isLiked = false;

    }
    addData();
  }

  if(dets.target.className == 'follow') {
    if(!reels[dets.target.id].isFollowed){
      reels[dets.target.id].isFollowed = true
    }else {
      reels[dets.target.id].isFollowed = false;

    }
    addData();
  }

  if(dets.target.className == 'mute') {
    if(!reels[dets.target.id].isMuted){
      reels[dets.target.id].isMuted = true
    }else {
      reels[dets.target.id].isMuted = false;

    }
    addData();
  }
 
})


  