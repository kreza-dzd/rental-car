const navSlide = () => {
    const menuIcon = document.querySelector('#menu-icon');
    const nav = document.querySelector('.navbar');
    const navbar = document.querySelectorAll('.navbar li');
   
 
  
 
    menuIcon.addEventListener('click', () => {
       nav.classList.toggle('nav-active');
 
       navbar.forEach((link, index) => {
 
          if (link.style.animation) {
             link.style.animation = '';
          } else {
             link.style.animation = `navLinkFade 0.5 ease forwards ${index / 7 + 0.3}s`;
          }
       });
    });
 
 
 
 }
 
 navSlide();
 
 
 
 window.addEventListener("load", () => {
     autoSlide();
  })
  
  function autoSlide() {
     setInterval(() => {
        slide(getItemActiveIndex() + 1);
     }, 3000); // slide speed = 3s
  }
  
  function slide(toIndex) {
     const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
     const itemActive = document.querySelector(".carousel_item__active");
  
     // check if toIndex exceeds the number of carousel items
     if (toIndex >= itemsArray.length) {
        toIndex = 0;
     }
  
     const newItemActive = itemsArray[toIndex];
  
     // start transition
     newItemActive.classList.add("carousel_item__pos_next");
     setTimeout(() => {
        newItemActive.classList.add("carousel_item__next");
        itemActive.classList.add("carousel_item__next");
     }, 20);
  
     // remove all transition class and switch active class
     newItemActive.addEventListener("transitionend", () => {
        itemActive.className = "carousel_item";
        newItemActive.className = "carousel_item carousel_item__active";
     }, {
        once: true
     });
  }
  
  function getItemActiveIndex() {
     const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
     const itemActive = document.querySelector(".carousel_item__active");
     const itemActiveIndex = itemsArray.indexOf(itemActive);
     return itemActiveIndex;
  }
 
 
 
 
 
  document.getElementById("myButton").onclick = function () {
    location.href = "formular.html";
 
 };
  document.getElementById("aboutBtn").onclick = function () {
    location.href = "uber.html";
 
 };


 var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('video-player', {
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !event.target.isFullscreen()) {
    event.target.playVideo();
    event.target.setPlaybackQuality('hd1080');
  }
  if (event.data == YT.PlayerState.ENDED) {
    event.target.playVideo();
  }
}

function playVideo() {
  player.playVideo();
}

function pauseVideo() {
  player.pauseVideo();
}

function stopVideo() {
  player.stopVideo();
}

function muteVideo() {
  player.mute();
}

function unMuteVideo() {
  player.unMute();
}

function toggleMuteVideo() {
  if (player.isMuted()) {
    player.unMute();
  } else {
    player.mute();
  }
}

function setVolume(volume) {
  player.setVolume(volume);
}

function getVolume() {
  return player.getVolume();
}

function seekTo(seconds) {
  player.seekTo(seconds);
}

function getDuration() {
  return player.getDuration();
}

function getCurrentTime() {
  return player.getCurrentTime();
}

function enterFullScreen() {
  var iframe = document.getElementById('video-player');
  if (iframe.requestFullscreen) {
    iframe.requestFullscreen();
  } else if (iframe.webkitRequestFullscreen) {
    iframe.webkitRequestFullscreen();
  } else if (iframe.mozRequestFullScreen) {
    iframe.mozRequestFullScreen();
  } else if (iframe.msRequestFullscreen) {
    iframe.msRequestFullscreen();
  }
}

function exitFullScreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}
