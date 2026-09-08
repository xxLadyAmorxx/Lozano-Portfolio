/* ============================================================
   Interactive 3D Student ID Card
   - Drag (mouse / touch) to freely spin the card
   - A tap/click with no drag flips it to the back and vice versa
   - On release, it settles: tilt resets to flat, spin snaps to
     the nearest face (front or back)
   ============================================================ */
(function () {
  "use strict";

  var card = document.getElementById("idCard");
  if (!card) return;

  var flipBtn = document.querySelector("[data-id-flip]");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var rotateX = 0;
  var rotateY = 0;
  var dragging = false;
  var startX = 0, startY = 0;
  var moved = 0;
  var lastX = 0, lastY = 0;

  function apply(withTransition) {
    card.style.transition = withTransition
      ? "transform .55s cubic-bezier(.22,.9,.32,1)"
      : "none";
    card.style.transform =
      "rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";
  }

  function settle() {
    rotateX = 0;
    rotateY = Math.round(rotateY / 180) * 180;
    apply(true);
  }

  function flip() {
    rotateY += 180;
    apply(true);
  }

  function pointerDown(e) {
    dragging = true;
    moved = 0;
    var p = e.touches ? e.touches[0] : e;
    startX = lastX = p.clientX;
    startY = lastY = p.clientY;
    card.style.transition = "none";
    window.addEventListener("mousemove", pointerMove);
    window.addEventListener("touchmove", pointerMove, { passive: false });
    window.addEventListener("mouseup", pointerUp);
    window.addEventListener("touchend", pointerUp);
  }

  function pointerMove(e) {
    if (!dragging) return;
    if (e.cancelable) e.preventDefault();
    var p = e.touches ? e.touches[0] : e;
    var dx = p.clientX - lastX;
    var dy = p.clientY - lastY;
    lastX = p.clientX;
    lastY = p.clientY;
    moved += Math.abs(dx) + Math.abs(dy);

    rotateY += dx * 0.5;
    rotateX -= dy * 0.5;
    rotateX = Math.max(-25, Math.min(25, rotateX));
    apply(false);
  }

  function pointerUp() {
    dragging = false;
    window.removeEventListener("mousemove", pointerMove);
    window.removeEventListener("touchmove", pointerMove);
    window.removeEventListener("mouseup", pointerUp);
    window.removeEventListener("touchend", pointerUp);

    if (moved < 6) {
      // Treated as a click/tap, not a drag: flip the card.
      flip();
    } else {
      settle();
    }
  }

  card.addEventListener("mousedown", pointerDown);
  card.addEventListener("touchstart", pointerDown, { passive: true });

  card.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      flip();
    }
  });

  if (flipBtn) {
    flipBtn.addEventListener("click", flip);
  }

  if (!reduceMotion) apply(false);
})();
