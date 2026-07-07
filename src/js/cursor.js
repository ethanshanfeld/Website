(function () {
  if (window.matchMedia("(pointer: coarse)").matches) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  document.documentElement.classList.add("custom-cursor");

  var dot = document.createElement("div");
  dot.className = "cursor-dot";
  document.body.appendChild(dot);

  var targetX = window.innerWidth / 2;
  var targetY = window.innerHeight / 2;
  var currentX = targetX;
  var currentY = targetY;

  window.addEventListener("mousemove", function (event) {
    targetX = event.clientX;
    targetY = event.clientY;
  });

  function render() {
    currentX += (targetX - currentX) * 0.2;
    currentY += (targetY - currentY) * 0.2;
    dot.style.transform = "translate3d(" + currentX + "px," + currentY + "px,0)";
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);

  document.querySelectorAll("a, button").forEach(function (el) {
    el.addEventListener("mouseenter", function () {
      dot.classList.add("cursor-dot--hover");
    });
    el.addEventListener("mouseleave", function () {
      dot.classList.remove("cursor-dot--hover");
    });
  });
})();
