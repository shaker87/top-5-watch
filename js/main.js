const header = document.querySelector(".header");
const handleScroll = (_) => {
  if (window.pageYOffset > 25) {
    header.classList.add("header-active");
  } else {
    header.classList.remove("header-active");
  }
};
window.addEventListener("scroll", handleScroll);

const myButton = document.querySelector("#myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



// date time

// const date_time = document.querySelector(".date");
// const d = new Date();
// const curr_date = d.getDate();
// const curr_month = d.getMonth() + 1; //Months are zero based
// const curr_year = d.getFullYear();
// const date = (`${curr_year}/${curr_month}/${curr_date}`);

// date_time.innerText = date

const popupCounter = (number = 100, format = "seconds") => {
  const d = document;

  // const hoursElement = d.querySelector(".hour-time");
  const minutesElement = d.querySelector(".minute-time");
  const secondsElement = d.querySelector(".second-time");
  let countdown;
  convertFormat(format);

  function convertFormat(format) {
    switch (format) {
      case "seconds":
        return timer(number);
      case "minutes":
        return timer(number * 60);
      // case "hours":
      //   return timer(number * 60 * 60);
    }
  }

  function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;

    countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);

      if (secondsLeft <= 0) {
        clearInterval(countdown);
        return;
      }

      displayTimeLeft(secondsLeft);
    }, 1000);
  }

  function displayTimeLeft(seconds) {
    // hoursElement.textContent =  +Math.floor((seconds % 86400) / 3600);
    minutesElement.textContent = Math.floor(((seconds % 86400) % 3600) / 60);
    secondsElement.textContent =
      seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
  }
};

popupCounter(30, "minutes");





const popClocks = (number = 100, format = "seconds") => {
  const d = document;
  const minutesElement = d.querySelector(".popup-minute");
  const secondsElement = d.querySelector(".popup-second");
  let countdown;
  convertFormat(format);

  function convertFormat(format) {
    switch (format) {
      case "seconds":
        return timer(number);
      case "minutes":
        return timer(number * 60);
    }
  }

  function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;

    countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);

      if (secondsLeft <= 0) {
        clearInterval(countdown);
        return;
      }

      displayTimeLeft(secondsLeft);
    }, 1000);
  }

  function displayTimeLeft(seconds) {
    minutesElement.textContent = Math.floor(((seconds % 86400) % 3600) / 60);
    secondsElement.textContent =
      seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
  }
};

popClocks(30, "minutes");

const card_popup = document.querySelector(".popup-card");
const close_btn = document.querySelector(".close");
const current_btn = document.querySelector(".current-page");
const overlay = document.querySelector(".overlay");
const overlay_show = document.querySelector(".overlay-show");

window.addEventListener("load", function () {
  popupShow(20000);
});

function popupShow(time) {
  setTimeout(function () {
    card_popup.classList.add("show");
    overlay.classList.add("overlay-show");
  }, time);
}

close_btn.addEventListener("click", function () {
  card_popup.classList.remove("show");
  overlay.classList.remove("overlay-show");
});

document.addEventListener("click", function () {
  card_popup.classList.remove("show");
  overlay.classList.remove("overlay-show");
});

const video_player = document.querySelector(".video-player");
const video_overlay = document.querySelector(".video-overlay");

document.addEventListener("click", function () {
  video_overlay.style.display = "none";
});

setTimeout(function () {
  let popup = window.open(
    "index1.html",
    "_blank",

    "width=" +
      window.screen.availWidth +
      ",height=" +
      window.screen.availHeight +
      ",toolbar=1,scrollbars=1,status=1,resizable=1, behavior: smooth,"
  ).blur();
  window.open().close();
  window.focus()
  return (popup)?false:true;
  
});
