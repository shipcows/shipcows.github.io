(function () {
  // Nomaini tikai šo failu projekta saknē: favicon.png (32×32 vai 64×64 PNG).
  var file = "favicon.png";
  var dir = document.currentScript.src.replace(/[^/]*$/, "");
  var href = dir + file;

  function add(rel, type) {
    var link = document.createElement("link");
    link.rel = rel;
    link.href = href;
    if (type) link.type = type;
    document.head.appendChild(link);
  }

  add("icon", "image/png");
  add("apple-touch-icon");
})();
