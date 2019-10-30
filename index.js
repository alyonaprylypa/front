window.onload = function () {
  document.getElementById("loading").style.display = "none";
  inactivityTime();
};

window.addEventListener('orientationchange', doOnOrientationChange);

function doOnOrientationChange() {
  switch (window.orientation) {
    case -90 || 90:
      slide.style.backgroundImage = "url(loopme/twinings_assets/not_available.png)";
    default:
      break;
  }
}

function checkBtn() {
  document.getElementById(teaArr[index.value].name).checked = true;
};

function showTea(obj) {
  slide.style.backgroundImage = obj.background;
  source.src = obj.video;
  video.load();
  packshot.src = obj.packshot;
  button.src = obj.button;
};

const Defence = {
  name: "Defence",
  background: "url(loopme/twinings_assets/background_Defence.png)",
  video: "loopme/twinings_assets/Defense.mp4",
  packshot: "loopme/twinings_assets/Defence_packshot.png",
  button: "loopme/twinings_assets/CTA_Defence.png",
};
const Matcha = {
  name: "Matcha",
  background: "url(loopme/twinings_assets/background_Matcha.png)",
  video: "loopme/twinings_assets/Matcha.mp4",
  packshot: "loopme/twinings_assets/Matcha_packshot.png",
  button: "loopme/twinings_assets/CTA_Matcha.png",
};
const Glow = {
  name: "Glow",
  background: "url(loopme/twinings_assets/background_Glow.png)",
  video: "loopme/twinings_assets/Glow.mp4",
  packshot: "loopme/twinings_assets/Glow_packshot.png",
  button: "loopme/twinings_assets/CTA_Glow.png",
};
const Energise = {
  name: "Energise",
  background: "url(loopme/twinings_assets/background_Energise.png)",
  video: "loopme/twinings_assets/Energise.mp4",
  packshot: "loopme/twinings_assets/Energise_packshot.png",
  button: "loopme/twinings_assets/CTA_Energise.png",
};

const teaArr = [Defence, Matcha, Glow, Energise];
const background = document.getElementById("slide");
const video = document.getElementById('video');
const source = document.getElementById('source');
const packshot = document.getElementById('packshot');
const button = document.getElementById('button');

button.addEventListener("click", () => window.location.replace("http://www.google.com"));

let index = {
  value: 0,
  indexUp() {
    if (this.value == 3) {
      this.value = 0;
    } else {
      this.value++;
    }
  },
  indexDown() {
    if (this.value == 0) {
      this.value = 3;
    } else {
      this.value--;
    }

  },
}

showTea(teaArr[index.value]);
checkBtn();

document.getElementById("Defence").onclick = function () {
  showTea(Defence);
};
document.getElementById("Matcha").onclick = function () {
  showTea(Matcha);
};
document.getElementById("Glow").onclick = function () {
  showTea(Glow);
};
document.getElementById("Energise").onclick = function () {
  showTea(Energise);
};

document.addEventListener('DOMContentLoaded', function (slide) {
  let swipeSlide = document.getElementById('slide');
  let startPoint = {};
  let nowPoint;
  let ldelay;
  swipeSlide.addEventListener('touchstart', function (event) {
    startPoint.x = event.changedTouches[0].pageX;
    startPoint.y = event.changedTouches[0].pageY;
    ldelay = new Date();
  }, false);
  swipeSlide.addEventListener('touchmove', function (event) {
    let otk = {};
    nowPoint = event.changedTouches[0];
    otk.x = nowPoint.pageX - startPoint.x;

    if (Math.abs(otk.x) > 200) {
      if (otk.x < 0) {
        index.indexUp();
        showTea(teaArr[index.value]);
        checkBtn();
      }
      if (otk.x > 0) {
        index.indexDown();
        showTea(teaArr[index.value]);
        checkBtn();
      }
      startPoint = { x: nowPoint.pageX, y: nowPoint.pageY };
    }
  }, false);

  swipeSlide.addEventListener('touchend', function (event) {
    let pdelay = new Date();
    nowPoint = event.changedTouches[0];
    let xAbs = Math.abs(startPoint.x - nowPoint.pageX);
    let yAbs = Math.abs(startPoint.y - nowPoint.pageY);
    if ((xAbs > 20 || yAbs > 20) && (pdelay.getTime() - ldelay.getTime()) < 200) {
      if (xAbs > yAbs) {
        if (nowPoint.pageX < startPoint.x) {
          index.indexUp();
          showTea(teaArr[index.value]);
          checkBtn();
        }
        else {
          index.indexDown();
          showTea(teaArr[index.value]);
          checkBtn();
        }
      }
    }
  }, false);
}, false);

let inactivityTime = function () {
  let time;
  window.onload = resetTimer;
  window.onmousemove = resetTimer;
  window.onmousedown = resetTimer;
  window.ontouchstart = resetTimer;
  window.onclick = resetTimer;
  window.onkeypress = resetTimer;

  function slideShow() {
    setInterval(() => {
      index.indexUp();
      showTea(teaArr[index.value]);
      checkBtn();
    }
      , 4000);
  };

  function resetTimer() {
    clearTimeout(time);
    time = setTimeout(slideShow, 3000);
  }
};
