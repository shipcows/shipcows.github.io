(function () {
  var TOTAL = 21;
  var page = Number(document.body.getAttribute("data-page"));
  if (!page || page < 1 || page > TOTAL) return;

  var prev = document.querySelector(".nav-prev");
  var next = document.querySelector(".nav-next");
  var video = document.querySelector("video");

  if (prev) {
    if (page <= 1) prev.hidden = true;
    else prev.setAttribute("href", "../" + (page - 1) + "/");
  }
  if (next) {
    if (page >= TOTAL) next.hidden = true;
    else next.setAttribute("href", "../" + (page + 1) + "/");
  }

  if (video) {
    video.setAttribute("playsinline", "");
    try {
      var play = video.play();
      if (play && typeof play.catch === "function") play.catch(function () {});
    } catch (e) {}
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft" && page > 1) {
      window.location.href = "../" + (page - 1) + "/";
    } else if (event.key === "ArrowRight" && page < TOTAL) {
      window.location.href = "../" + (page + 1) + "/";
    }
  });
})();
