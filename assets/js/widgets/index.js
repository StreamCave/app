// TOP BAR
import './topbar';
import './bottombar';
import { showVideoVersus } from './lib/video_versus';

console.log("Index Widgets OK");

// window.x = function(...) permet de pouvoir lancer la fonction dans la console commme :
// >> x.call()

export const test = () => {
 console.log("test")
 topbar.className = 'slide-out-top'
 setTimeout(() => {
  topbar.className = 'display_none'
 }, 1000);
}

window.showTopbar = function showTopBar() {
 topbar.className = 'swing-in-top-fwd'
 console.log("TOP")
}
window.showVersus = function showVersus() {
 versuscontainer.className = 'container_versus slide-in-left'
 showVideoVersus.call(this);
}
window.showBreak = function showBreak() {
 breakk.className = 'slide-in-left'
 leftbreak.className = 'left'
 rightbreak.className = 'right'
 centerbreak.className = 'center'
 topbreak.className = 'top'
 setTimeout(() => {
  topbreak.className = 'topbg swing-in-top-fwd'
 }, 500);
}
window.showText = function showText() {
 leftpopuptext.className = 'left slide-in-left'
 setTimeout(() => {
  textpopuptext.className = 'text slide-in-left-popup-text'
 }, 500);
}
window.showNext = function showNext() {
 document.getElementById('next_teams').className = 'teams slide-in-left'
 setTimeout(() => {
  document.getElementById('next_text').className = 'text swing-in-top-fwd'
 }, 500)
}
window.showBottomBar = function showBottomBar() {
 bottombar.className = 'slide-in-bottom'
}
window.showTweetSample = function showTweetSample() {
 tweet_sample_text.className = 'slide-in-bottom'
 sound.innerHTML = `<figure>
 <figcaption>Listen to the T-Rex:</figcaption>
 <audio id="audio" controls autoplay src="https://cdn.artaic.fr/images/pio_new.mp3">
 </audio>
</figure>`;
}
window.showTweetImg = function showTweetImg() {
 tweet_img.className = 'slide-in-bottom'
 sound.innerHTML = `<figure>
 <figcaption>Listen to the T-Rex:</figcaption>
 <audio id="audio" controls autoplay src="https://cdn.artaic.fr/images/pio_new.mp3">
 </audio>
</figure>`;
}

window.showTweetVideo = function showTweetVideo() {
 tweet_video.className = 'slide-in-bottom'
 sound.innerHTML = `<figure>
 <figcaption>Listen to the T-Rex:</figcaption>
 <audio id="audio" controls autoplay src="https://cdn.artaic.fr/images/pio_new.mp3">
 </audio>
</figure>`;
}
window.showCamsTeamAlpha = function showCamsTeamAlpha() {
 cameras_alpha.className = 'fade-in';
}
window.showCamsTeamBeta = function showCamsTeamBeta() {
 cameras_beta.className = 'fade-in';
}
window.showResults = function showResults() {
 marquee_games.className = 'slide-in-bottom'
}



window.offTopbar = function offTopBar() {
 topbar.className = 'slide-out-top'
 setTimeout(() => {
  topbar.className = 'display_none'
 }, 1000);
}
window.offVersus = function offVersus() {
 versuscontainer.className = 'container_versus slide-out-left'
 video_versus.className = 'fade-out'
 setTimeout(() => {
  versuscontainer.className = 'display_none'
  video_versus.className = 'display_none'
 }, 1000)
}
window.offBreak = function offBreak() {
 breakk.className = 'slide-out-left'
 setTimeout(() => {
  breakk.className = 'display_none'
  topbreak.className = 'display_none'
  leftbreak.className = 'display_none'
  rightbreak.className = 'display_none'
  centerbreak.className = 'display_none'
 }, 1000)
}

window.offText = function offText() {
 textpopuptext.className = 'text slide-out-left-popup-text'
 setTimeout(() => {
  leftpopuptext.className = 'left slide-out-left'
 }, 500);
 setTimeout(() => {
  leftpopuptext.className = 'display_none'
  textpopuptext.className = 'display_none'
 }, 1200)
}
window.offNext = function offNext() {
 next_text.className = 'text swing-out-top-bck'
 setTimeout(() => {
  next_teams.className = 'teams slide-out-left'
 }, 1000)

 setTimeout(() => {
  next_teams.className = 'display_none'
  next_text.className = 'display_none'
 }, 2000)
}
window.offBottomBar = function offBottomBar() {
 bottombar.className = 'top slide-out-bottom'
 setTimeout(() => {
  bottombar.className = 'display_none'
 }, 1000)
}

window.offTweetSampleText = function offTweetSampleText() {
 tweet_sample_text.className = 'fade-out'
 setTimeout(() => {
  tweet_sample_text.className = 'display_none'
 }, 1000)
}

window.offTweetImg = function offTweetImg() {
 tweet_img.className = 'fade-out'
 setTimeout(() => {
  tweet_img.className = 'display_none'
 }, 1000)
}

window.offTweetVideo = function offTweetVideo() {
 tweet_video.className = 'fade-out'
 setTimeout(() => {
  tweet_video.className = 'display_none'
 }, 1000)
}

window.offPoll = function offPoll() {
 poll.className = 'slide-out-left'
 setTimeout(() => {
  poll.className = 'display_none'
 }, 1000)
}
window.offCamsTeamAlpha = function offCamsTeamAlpha() {
 cameras_alpha.className = 'fade-out';
 setTimeout(() => {
  cameras_alpha.className = 'display_none'
 }, 1000)
}
window.offCamsTeamBeta = function offCamsTeamBeta() {
 cameras_beta.className = 'fade-out';
 setTimeout(() => {
  cameras_beta.className = 'display_none'
 }, 1000)
}
window.offResults = function offResults() {
 marquee_games.className = 'slide-out-bottom'
 setTimeout(() => {
  marquee_games.className = 'display_none'
 }, 1000)
}

let gamesDom = document.getElementById('games');
console.log(gamesDom);


function gameApi() {
 gamesDom.innerHTML = '';
 fetch('https://app.streamcave.tv/api/games.json').then((response) => {
  return response.json();
 }).then(data => {
  console.log(data);
  data.map((game) => {
   console.log(game);

   let separator = document.createElement('span');
   separator.innerText = '|';

   // INFO: <div class="game">
   let divGame = document.createElement('div');
   divGame.classList.add('game');

   // INFO: 2x <span class="team">
   let spanTeamA = document.createElement('span')
   let spanTeamB = document.createElement('span')
   spanTeamA.classList.add('team');
   spanTeamA.innerText = game['gameIdTeamAlpha']['teamName'];
   spanTeamB.classList.add('team');
   spanTeamB.innerText = game['gameIdTeamBeta']['teamName'];

   let spanMiddle = document.createElement('span')
   if (!game['gameScoreTeamAlpha'] && !game['gameScoreTeamBeta']) {
    // INFO: <span class="iconify" data-icon="fluent-emoji-flat:vs-button">
    spanMiddle.classList.add('iconify');
    spanMiddle.setAttribute('data-icon', 'fluent-emoji-flat:vs-button');
    // INFO: Imbriquement des div
    divGame.append(spanTeamA);
    divGame.append(spanMiddle);
    divGame.append(spanTeamB);
   } else {
    spanMiddle.classList.add('score');
    let strong = document.createElement('strong');
    let score = document.createElement('span');
    let tiret = document.createElement('span');
    tiret.innerText = ' - ';

    if (game['gameScoreTeamAlpha'] > game['gameScoreTeamBeta']) {
     strong.innerText = game['gameScoreTeamAlpha'];
     score.innerText = game['gameScoreTeamBeta'];

     spanMiddle.append(strong);
     spanMiddle.append(tiret);
     spanMiddle.append(score);

     // INFO: Imbriquement des div
     divGame.append(spanTeamA);
     divGame.append(spanMiddle);
     divGame.append(spanTeamB);
    } else if (game['gameScoreTeamBeta'] > game['gameScoreTeamAlpha']) {
     strong.innerText = game['gameScoreTeamBeta'];
     score.innerText = game['gameScoreTeamAlpha'];

     spanMiddle.append(strong);
     spanMiddle.append(tiret);
     spanMiddle.append(score);

     // INFO: Imbriquement des div
     divGame.append(spanTeamB);
     divGame.append(spanMiddle);
     divGame.append(spanTeamA);
    }

   }



   gamesDom.append(divGame);
   gamesDom.append(separator);
  })
 })
}

if (document.getElementById('games')) {
 gameApi();

 setInterval(() => {
  gameApi();
 }, 120000);
}