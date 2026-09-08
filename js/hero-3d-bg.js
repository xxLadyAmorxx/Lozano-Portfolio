
(function () {
  "use strict";

  var canvas = document.getElementById("heroCanvas");
  if (!canvas) return;
  var ctx = canvas.getContext("2d");
  var hero = canvas.closest(".hero") || canvas.parentElement;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var W, H, DPR;
  function resize() {
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    W = hero.clientWidth;
    H = hero.clientHeight;
    canvas.width = W * DPR;
    canvas.height = H * DPR;
    canvas.style.width = W + "px";
    canvas.style.height = H + "px";
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  }
  window.addEventListener("resize", resize);
  resize();

  /* ---- perspective floor grid ---- */
  var COLS = 14, ROWS = 10, SPACING = 90;
  var gridPoints = [];
  for (var r = 0; r < ROWS; r++) {
    for (var c = 0; c < COLS; c++) {
      gridPoints.push({ x: (c - COLS / 2) * SPACING, y: 160, z: r * SPACING });
    }
  }

  /* ---- floating node network above the grid ---- */
  var NODE_COUNT = 32;
  var nodes = [];
  for (var i = 0; i < NODE_COUNT; i++) {
    var baseY = -Math.random() * 260 - 20;
    nodes.push({
      x: (Math.random() - 0.5) * 1300,
      y: baseY,
      baseY: baseY,
      z: Math.random() * ROWS * SPACING,
      phase: Math.random() * Math.PI * 2,
      speed: 0.4 + Math.random() * 0.6,
      r: 1.6 + Math.random() * 2.2
    });
  }

  var links = [];
  for (var a = 0; a < nodes.length; a++) {
    for (var b = a + 1; b < nodes.length; b++) {
      var dx = nodes[a].x - nodes[b].x, dz = nodes[a].z - nodes[b].z;
      if (Math.sqrt(dx * dx + dz * dz) < 260 && Math.random() < 0.35) links.push([a, b]);
    }
  }

  var rotX = 0.35, rotY = 0, targetRotX = 0.35, targetRotY = 0;
  var shiftX = 0, targetShiftX = 0;
  var hovering = false;
  var mouse = { x: -9999, y: -9999 };

  function onMove(clientX, clientY) {
    var rect = hero.getBoundingClientRect();
    var px = (clientX - rect.left) / rect.width - 0.5;
    var py = (clientY - rect.top) / rect.height - 0.5;
    targetRotY = px * 0.6;
    targetRotX = 0.35 - py * 0.35;
    targetShiftX = px * 40;
    mouse.x = clientX - rect.left;
    mouse.y = clientY - rect.top;
    hovering = true;
  }
  function onLeave() {
    hovering = false;
    targetRotX = 0.35;
    targetRotY = 0;
    targetShiftX = 0;
  }
  hero.addEventListener("mousemove", function (e) { onMove(e.clientX, e.clientY); });
  hero.addEventListener("mouseleave", onLeave);
  hero.addEventListener("touchmove", function (e) {
    if (e.touches && e.touches[0]) onMove(e.touches[0].clientX, e.touches[0].clientY);
  }, { passive: true });
  hero.addEventListener("touchend", onLeave);

  var FOCAL = 480;
  function project(p, cx, cy) {
    var cosX = Math.cos(rotX), sinX = Math.sin(rotX);
    var y1 = p.y * cosX - p.z * sinX;
    var z1 = p.y * sinX + p.z * cosX;

    var cosY = Math.cos(rotY), sinY = Math.sin(rotY);
    var x1 = p.x * cosY + z1 * sinY;
    var z2 = -p.x * sinY + z1 * cosY;

    var z = z2 + 640;
    var scale = FOCAL / z;
    return { x: cx + (x1 + shiftX) * scale, y: cy + y1 * scale, scale: scale };
  }

  function draw(t) {
    ctx.clearRect(0, 0, W, H);
    var cx = W / 2, cy = H * 0.42;

    ctx.lineWidth = 1;
    for (var r = 0; r < ROWS; r++) {
      ctx.beginPath();
      for (var c = 0; c < COLS; c++) {
        var sp = project(gridPoints[r * COLS + c], cx, cy);
        if (c === 0) ctx.moveTo(sp.x, sp.y); else ctx.lineTo(sp.x, sp.y);
      }
      ctx.strokeStyle = "rgba(216,19,36," + (0.16 * (1 - r / ROWS)) + ")";
      ctx.stroke();
    }
    for (var c2 = 0; c2 < COLS; c2++) {
      ctx.beginPath();
      for (var r2 = 0; r2 < ROWS; r2++) {
        var sp2 = project(gridPoints[r2 * COLS + c2], cx, cy);
        if (r2 === 0) ctx.moveTo(sp2.x, sp2.y); else ctx.lineTo(sp2.x, sp2.y);
      }
      ctx.strokeStyle = "rgba(216,19,36,0.08)";
      ctx.stroke();
    }

    links.forEach(function (pair) {
      var s1 = project(nodes[pair[0]], cx, cy), s2 = project(nodes[pair[1]], cx, cy);
      ctx.beginPath();
      ctx.moveTo(s1.x, s1.y);
      ctx.lineTo(s2.x, s2.y);
      ctx.strokeStyle = "rgba(247,245,241,0.06)";
      ctx.stroke();
    });

    nodes.forEach(function (n, idx) {
      if (t !== null) n.y = n.baseY + Math.sin(t * n.speed + n.phase) * 10;
      var sp = project(n, cx, cy);
      if (sp.scale <= 0) return;
      var radius = n.r * sp.scale * 1.4;

      var glow = 0;
      if (hovering) {
        var dx = sp.x - mouse.x, dy = sp.y - mouse.y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        glow = Math.max(0, 1 - dist / 160);
      }

      var isRed = idx % 3 !== 0;
      var baseAlpha = Math.min(0.9, sp.scale * 0.9);

      if (glow > 0.05) {
        ctx.beginPath();
        ctx.arc(sp.x, sp.y, radius * 4, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,59,78," + glow * 0.08 + ")";
        ctx.fill();
      }

      ctx.beginPath();
      ctx.arc(sp.x, sp.y, radius + glow * 3, 0, Math.PI * 2);
      ctx.fillStyle = isRed
        ? "rgba(255,59,78," + (baseAlpha * 0.7 + glow * 0.3) + ")"
        : "rgba(247,245,241," + (baseAlpha * 0.5 + glow * 0.3) + ")";
      ctx.fill();
    });
  }

  if (reduceMotion) {
    draw(null);
  } else {
    var t0 = 0;
    (function animate() {
      t0 += 0.016;
      rotX += (targetRotX - rotX) * 0.06;
      rotY += (targetRotY - rotY) * 0.06;
      shiftX += (targetShiftX - shiftX) * 0.06;
      draw(t0);
      requestAnimationFrame(animate);
    })();
  }
})();