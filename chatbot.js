(function () {
  "use strict";

  /* ---------- 1. Knowledge base ---------- */
  var KB = {
    greeting: [
      "Hiii! I'm Loveeyyy \uD83D\uDC96 Christyne's little portfolio buddy. Ask me anything about her \u2014 projects, skills, education, background, or how to reach her!",
    ],
    "your name": [
      "I'm Loveeyyy! \uD83D\uDC96 I'm the little chat assistant living on Christyne's portfolio \u2014 nice to meet you!"
    ],
    "my name": [
      "Aww, I don't know your name yet \uD83E\uDD7A I only know Christyne's portfolio details for now \u2014 but you're welcome to tell me your name, or ask me about her projects, skills, or contact info!"
    ],
    "what's my": ["__alias:my name"],
    "whats my": ["__alias:my name"],
    "who are you": ["__alias:your name"],
    whoisshe: [
      "This portfolio belongs to Christyne Love Lozano \u2014 a 3rd year BSIT student at Philippine Christian University \u2013 Manila and an aspiring full stack developer \uD83D\uDC69\u200D\uD83D\uDCBB\uD83D\uDC97"
    ],
    "who is christyne": ["__alias:whoisshe"],
    "who is this": ["__alias:whoisshe"],
    "her name": ["__alias:whoisshe"],
    about: ["__alias:whoisshe"],
    "full name": [
      "Her full name is Christyne Love Neri Lozano \u2014 \u201CLove\u201D is right there in the middle, how cute is that? \uD83D\uDC97"
    ],
    "middle name": ["__alias:full name"],
    birthday: [
      "She was born on October 28, 2005 \uD83C\uDF82 A Scorpio, if you're into that!"
    ],
    birthdate: ["__alias:birthday"],
    "born": ["__alias:birthday"],
    age: [
      "She was born October 28, 2005 \u2014 do the math and you'll get her current age! \uD83D\uDE09"
    ],
    zodiac: [
      "She's a Scorpio \u2014 born October 28, 2005 \u2648\uFE0F"
    ],
    parents: [
      "Her mom is Annabelle Tagab Neri and her dad is Rogelio Sarmiento Lozano \uD83D\uDC6A"
    ],
    mother: [
      "Her mom's name is Annabelle Tagab Neri \uD83D\uDC69"
    ],
    mom: ["__alias:mother"],
    father: [
      "Her dad's name is Rogelio Sarmiento Lozano \uD83D\uDC68"
    ],
    dad: ["__alias:father"],
    family: ["__alias:parents"],
    residence: [
      "She's based in Malibay, Pasay City, Philippines \uD83C\uDDF5\uD83C\uDDED"
    ],
    address: ["__alias:residence"],
    "live": ["__alias:residence"],
    hometown: ["__alias:residence"],
    "based in": ["__alias:residence"],
    school: ["__alias:education"],
    university: ["__alias:education"],
    projects: [
      "She's built a few cool things! \uD83D\uDCBB\n\n\u2022 Wirechat\n\u2022 Penny Juice\n\u2022 Group Portfolio\n\u2022 HealthBuddy\n\u2022 Personal Portfolio\n\nJust type a name and I'll tell you more!"
    ],
    wirechat: [
      "Wirechat \uD83D\uDCAC\nBuilt with Laravel 12, Bootstrap, HTML, CSS, Java & PHP.\n\n\u2022 Register & log in\n\u2022 Edit your profile\n\u2022 Add friends & message them (text, pics, files)\n\u2022 Read receipts (\u201Cseen\u201D indicator)\n\u2022 Group chats \u2014 create or delete anytime"
    ],
    "penny juice": [
      "Penny Juice \uD83E\uDD64\nAn organic juice ordering site \u2014 no account needed!\n\n\u2022 Enter your info\n\u2022 Pick a payment method\n\u2022 Add your delivery address\n\u2022 Choose your juice + quantity\n\u2022 Hit submit \u2014 done!"
    ],
    pennyjuice: ["__alias:penny juice"],
    healthbuddy: [
      "HealthBuddy \uD83E\uDE7A\nA mobile consultation app.\n\n\u2022 Log your symptoms\n\u2022 Set a preferred doctor, time & chief complaint\n\u2022 Get matched with doctors \u2014 swipe to browse\n\u2022 Consult via app or face-to-face, your choice"
    ],
    "group portfolio": [
      "Group Portfolio \u2728\nBuilt using for, while, and do-while loops in JS for the animations.\n\n\u2022 Shows the team's info\n\u2022 Their shared dream\n\u2022 Pictures & hobbies"
    ],
    "personal portfolio": [
      "That's this very site! \uD83C\uDF19 It holds:\n\n\u2022 Education background\n\u2022 Skills\n\u2022 Work experience\n\u2022 Projects\n\u2022 Certificates\n\u2022 Contact details"
    ],
    skills: [
      "Her skillset \uD83D\uDCBB\n\n\u2022 Computer Programming \u2014 HTML, CSS, JavaScript, Laravel, MySQL\n\u2022 Video & Photo Editing \u2014 Photoshop, Illustrator, After Effects, CapCut, Canva, ibisPaint X\n\u2022 Writing \u2014 formal & informal, confidently \uD83D\uDCDD"
    ],
    education: [
      "Her academic path \uD83C\uDF93\n\n\u2022 2024\u20132028 \u2014 BS Information Technology, PCU Manila (current)\n\u2022 2022\u20132024 \u2014 SHS, PCU\u2013Dasmari\u00F1as (ICT strand)\n\u2022 2018\u20132022 \u2014 JHS, Mahonri Academy and Science High School\n\u2022 2012\u20132018 \u2014 Elementary, Paliparan III Elementary School\n\nFull transcript + 15 certifications/awards on the Education page!"
    ],
    awards: [
      "Her award wall \uD83C\uDFC6 (15 credentials on file)\n\n\u2022 GWA 1.05, Top 1 \u2014 Most Outstanding Dean's Lister (PCU, 1st yr)\n\u2022 GWA 1.09, Top 1 \u2014 Gold Medal Awardee (PCU, 2nd yr)\n\u2022 2nd Placer \u2014 PCU Hackathon, Java category\n\u2022 High Honors \u2014 SHS, JHS & Elementary diplomas\n\u2022 Best in Social Sciences (SHS)\n\u2022 Scout of the Year (Elementary)\n\u2022 4 Udemy certificates \u2014 Java, Python, HTML/CSS\n\nFull wall of certificates is on the Education page \u2728"
    ],
    certifications: ["__alias:awards"],
    certificates: ["__alias:awards"],
    honors: ["__alias:awards"],
    achievements: ["__alias:awards"],
    gwa: [
      "Her GWA at PCU Manila \uD83E\uDD47\n\n\u2022 1st year \u2014 1.05, Top 1, Most Outstanding Dean's Lister\n\u2022 2nd year \u2014 1.09, Top 1, Gold Medal Awardee"
    ],
    hackathon: [
      "She placed 2nd in PCU's university-wide Hackathon, Java category, in 2026 \uD83D\uDC69\u200D\uD83D\uDCBB"
    ],
    udemy: [
      "Her 4 Udemy certificates \uD83D\uDCDC\n\n\u2022 Java Training Crash Course\n\u2022 Java Training Complete Course (All in One)\n\u2022 Python Development: First Steps\n\u2022 Learn HTML and CSS from Beginning to Advanced"
    ],
    scout: [
      "Back in elementary, she was District VIII Troop Leader for Girl Scouts of the Philippines and was named Scout of the Year \uD83C\uDF97\uFE0F"
    ],
    extracurricular: [
      "Outside class \uD83C\uDF1F\n\n\u2022 Rotaract Club of PCU-Manila (current)\n\u2022 PCU Folkloric Dance Troupe\n\u2022 Strand Student Council \u2014 Deputy Strand President, then Public Information Officer\n\u2022 Youth for Environment in Schools \u2014 Secretary\n\u2022 School Newspaper \u2014 Feature Campus Journalist\n\u2022 Girl Scouts \u2014 District VIII Troop Leader"
    ],
    clubs: ["__alias:extracurricular"],
    experience: [
      "Work experience \uD83D\uDCBC\n\n\u2022 Feb 2025\u2013present \u2014 Market Research Interviewer I, Concentrix (Makati)\n\u2022 Aug 2025\u2013Jan 2026 \u2014 Virtual Assistant / Social Media Manager"
    ],
    work: ["__alias:experience"],
    contact: [
      "Reach her here \uD83D\uDCE9\n\n\u2022 Email \u2014 christyne.lozano@gmail.com\n\u2022 Facebook & Instagram \u2014 @chrstynlv\n\u2022 LinkedIn \u2014 Christyne Love Lozano\n\u2022 Phone \u2014 on the Contact page\n\nOr just head to the Contact page for everything at once!"
    ],
    email: ["__alias:contact"],
    thanks: [
      "Aww, you're so welcome! \uD83D\uDC96 Anything else you'd like to know?",
    ],
    bye: [
      "Bye bye! Thanks for stopping by \u2014 come back anytime! \uD83D\uDC9D",
    ],
  };

  var FALLBACKS = [
    "Hmm, I'm still learning that one! \uD83E\uDD7A Try asking about her projects, skills, education, experience, or contact info.",
    "I don't have an answer for that yet \u2014 but I'd love to help you find her projects, skills, or how to get in touch!",
  ];

  var GREET_WORDS = ["hi", "hello", "hey", "yo", "sup", "kumusta", "hai"];
  var THANK_WORDS = ["thank", "thanks", "salamat"];
  var BYE_WORDS = ["bye", "goodbye", "see ya", "paalam"];

  function matchReply(raw) {
    var text = raw.toLowerCase().trim();
    if (!text) return null;

    if (GREET_WORDS.some(function (w) { return text.indexOf(w) !== -1; })) return pick(KB.greeting);
    if (THANK_WORDS.some(function (w) { return text.indexOf(w) !== -1; })) return pick(KB.thanks);
    if (BYE_WORDS.some(function (w) { return text.indexOf(w) !== -1; })) return pick(KB.bye);

    var keys = Object.keys(KB).sort(function (a, b) { return b.length - a.length; });
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (text.indexOf(key) !== -1) {
        var entry = KB[key];
        if (entry[0] && entry[0].indexOf("__alias:") === 0) {
          return pick(KB[entry[0].replace("__alias:", "")]);
        }
        return pick(entry);
      }
    }
    return null;
  }

  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

  /* ---------- 2. Styles ---------- */
  var css = "\n" +
    "#loveeyyy-launcher{position:fixed;right:22px;bottom:22px;z-index:300;width:58px;height:58px;border-radius:50%;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;background:linear-gradient(155deg,var(--red,#d81324),var(--red-deep,#7d0d18));box-shadow:0 12px 28px rgba(216,19,36,.4);transition:transform .3s cubic-bezier(.22,.9,.32,1),box-shadow .3s;overflow:hidden;}\n" +
    "#loveeyyy-launcher:hover{transform:translateY(-4px) scale(1.05);box-shadow:0 18px 36px rgba(216,19,36,.5);}\n" +
    "#loveeyyy-launcher svg{width:26px;height:26px;color:#fff;transition:transform .3s;}\n" +
    "#loveeyyy-launcher svg.lv-close{position:absolute;transform:scale(0);}\n" +
    "#loveeyyy-launcher.is-open svg.lv-close{transform:scale(1);}\n" +
    ".lv-launcher-img{width:100%;height:100%;object-fit:cover;border-radius:50%;position:relative;z-index:1;transition:transform .3s;display:block;}\n" +
    "#loveeyyy-launcher.is-open .lv-launcher-img{transform:scale(0);position:absolute;}\n" +
    "#loveeyyy-badge{position:absolute;top:-2px;right:-2px;width:14px;height:14px;border-radius:50%;background:var(--red-glow,#ff3b4e);border:2px solid var(--bg,#0a0a0c);animation:lvPulse 1.8s ease-in-out infinite;}\n" +
    "@keyframes lvPulse{0%,100%{box-shadow:0 0 0 0 rgba(216,19,36,.5);}70%{box-shadow:0 0 0 6px rgba(216,19,36,0);}}\n" +
    "#loveeyyy-panel{position:fixed;right:22px;bottom:92px;z-index:300;width:min(360px,calc(100vw - 32px));height:min(520px,calc(100vh - 140px));background:var(--bg-elev,#141417);border:1px solid var(--border-strong,rgba(247,245,241,.28));border-radius:var(--radius-lg,24px);box-shadow:var(--shadow,0 20px 50px rgba(0,0,0,.55));display:flex;flex-direction:column;overflow:hidden;opacity:0;transform:translateY(18px) scale(.96);pointer-events:none;transition:opacity .28s cubic-bezier(.22,.9,.32,1),transform .28s cubic-bezier(.22,.9,.32,1);font-family:var(--font-body,'Inter',sans-serif);}\n" +
    "#loveeyyy-panel.is-open{opacity:1;transform:translateY(0) scale(1);pointer-events:auto;}\n" +
    "#loveeyyy-head{display:flex;align-items:center;gap:12px;padding:16px 18px;background:linear-gradient(155deg,var(--red,#d81324),var(--red-deep,#7d0d18));color:#fff;flex-shrink:0;}\n" +
    "#loveeyyy-avatar{width:38px;height:38px;border-radius:50%;background:rgba(255,255,255,.18);display:flex;align-items:center;justify-content:center;flex-shrink:0;color:#fff;overflow:hidden;}\n" +
    "#loveeyyy-avatar svg{width:24px;height:auto;}\n" +
    ".lv-header-img{width:100%;height:100%;object-fit:cover;border-radius:50%;display:block;}\n" +
    "#loveeyyy-head-text{line-height:1.25;min-width:0;}\n" +
    "#loveeyyy-head-text strong{display:flex;align-items:center;gap:8px;font-family:var(--font-display,'Anton',sans-serif);font-weight:400;font-size:15px;letter-spacing:.4px;text-transform:uppercase;}\n" +
    ".lv-status{display:flex;align-items:center;gap:5px;font-family:var(--font-mono,'Space Mono',monospace);font-size:9.5px;letter-spacing:1px;text-transform:uppercase;opacity:.85;}\n" +
    "#loveeyyy-status-dot{width:6px;height:6px;border-radius:50%;background:#7CFF9E;flex-shrink:0;}\n" +
    "#loveeyyy-panel-close{margin-left:auto;background:rgba(255,255,255,.14);border:none;width:28px;height:28px;border-radius:50%;color:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0;}\n" +
    "#loveeyyy-panel-close svg{width:13px;height:13px;}\n" +
    "#loveeyyy-msgs{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;background:var(--bg,#0a0a0c);}\n" +
    ".lv-row{display:flex;gap:8px;align-items:flex-end;max-width:88%;}\n" +
    ".lv-row.bot{align-self:flex-start;}\n" +
    ".lv-row.user{align-self:flex-end;flex-direction:row-reverse;}\n" +
    ".lv-avatar-sm{width:24px;height:24px;border-radius:50%;background:linear-gradient(155deg,var(--red,#d81324),var(--red-deep,#7d0d18));display:flex;align-items:center;justify-content:center;flex-shrink:0;color:#fff;overflow:hidden;}\n" +
    ".lv-avatar-sm svg{width:13px;height:auto;}\n" +
    ".lv-avatar-sm-img{width:100%;height:100%;object-fit:cover;border-radius:50%;display:block;}\n" +
    ".lv-bubble{padding:10px 14px;border-radius:16px;font-size:13.5px;line-height:1.65;word-wrap:break-word;white-space:pre-line;}\n" +
    ".lv-row.bot .lv-bubble{background:var(--bg-elev,#141417);border:1px solid var(--border,rgba(247,245,241,.12));color:var(--text,#f7f5f1);border-bottom-left-radius:4px;}\n" +
    ".lv-row.user .lv-bubble{background:linear-gradient(155deg,var(--red,#d81324),var(--red-deep,#7d0d18));color:#fff;border-bottom-right-radius:4px;}\n" +
    ".lv-typing{display:flex;gap:4px;padding:12px 14px;}\n" +
    ".lv-typing span{width:6px;height:6px;border-radius:50%;background:var(--text-muted,#a6a6ad);animation:lvBounce 1.1s infinite;}\n" +
    ".lv-typing span:nth-child(2){animation-delay:.15s;}.lv-typing span:nth-child(3){animation-delay:.3s;}\n" +
    "@keyframes lvBounce{0%,60%,100%{transform:translateY(0);opacity:.5;}30%{transform:translateY(-5px);opacity:1;}}\n" +
    "#loveeyyy-suggest{display:flex;gap:6px;flex-wrap:wrap;padding:0 16px 10px;flex-shrink:0;}\n" +
    ".lv-chip{font-family:var(--font-mono,'Space Mono',monospace);font-size:10px;letter-spacing:.5px;text-transform:uppercase;padding:6px 11px;border-radius:999px;border:1px solid var(--border-strong,rgba(247,245,241,.28));color:var(--text-muted,#a6a6ad);background:var(--bg-elev,#141417);cursor:pointer;transition:border-color .2s,color .2s,background .2s;}\n" +
    ".lv-chip:hover{border-color:var(--red,#d81324);color:var(--text,#f7f5f1);background:var(--bg-elev-2,#1c1c20);}\n" +
    "#loveeyyy-form{display:flex;gap:8px;padding:12px;border-top:1px solid var(--border,rgba(247,245,241,.12));background:var(--bg-elev,#141417);flex-shrink:0;}\n" +
    "#loveeyyy-input{flex:1;min-width:0;border:1px solid var(--border-strong,rgba(247,245,241,.28));background:var(--bg,#0a0a0c);color:var(--text,#f7f5f1);border-radius:999px;padding:10px 16px;font-family:var(--font-body,'Inter',sans-serif);font-size:13.5px;outline:none;transition:border-color .2s;}\n" +
    "#loveeyyy-input:focus{border-color:var(--red,#d81324);}\n" +
    "#loveeyyy-send{width:38px;height:38px;border-radius:50%;border:none;flex-shrink:0;background:linear-gradient(155deg,var(--red,#d81324),var(--red-deep,#7d0d18));color:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:transform .2s;}\n" +
    "#loveeyyy-send:hover{transform:scale(1.08);}\n" +
    "#loveeyyy-send svg{width:15px;height:15px;}\n" +
    "#loveeyyy-msgs::-webkit-scrollbar{width:6px;}\n" +
    "#loveeyyy-msgs::-webkit-scrollbar-thumb{background:var(--border-strong,rgba(247,245,241,.28));border-radius:3px;}\n" +
    "@media (max-width:480px){#loveeyyy-panel{right:16px;bottom:84px;}#loveeyyy-launcher{right:16px;bottom:16px;}}\n" +
    "@media (prefers-reduced-motion: reduce){#loveeyyy-launcher,#loveeyyy-panel,.lv-typing span,#loveeyyy-badge{transition:none !important;animation:none !important;}}\n";

  var styleTag = document.createElement("style");
  styleTag.textContent = css;
  document.head.appendChild(styleTag);

  /* ---------- Avatar ----------
     The chibi image is embedded directly as a base64 data URI below.
     This is intentional: with a separate assets/chatbot.png file, the
     image only shows up if that exact file exists at that exact path
     relative to every HTML page that loads this script, which is a very
     common source of "nothing happens" (wrong folder, wrong filename,
     wrong relative path when a page lives one directory deeper, etc.).
     Embedding it here means the icon just always works, on every page,
     with zero file-placement steps. If you ever want to swap the image
     again, replace the long string after "data:image/png;base64," with
     a new base64-encoded PNG (any online "image to base64" tool works). */
  var AVATAR_SRC = "data:image/png;base64,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";

  function avatarImg(extraClass) {
    return '<img src="' + AVATAR_SRC + '"' +
      (extraClass ? ' class="' + extraClass + '"' : '') +
      ' alt="Loveeyyy">';
  }

  /* ---------- 3. Markup ---------- */
  var launcher = document.createElement("button");
  launcher.id = "loveeyyy-launcher";
  launcher.type = "button";
  launcher.setAttribute("aria-label", "Open chat with Loveeyyy");
  launcher.innerHTML =
    avatarImg("lv-launcher-img") +
    '<svg class="lv-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M6 6l12 12M18 6L6 18"/></svg>' +
    '<span id="loveeyyy-badge" aria-hidden="true"></span>';
  document.body.appendChild(launcher);

  var panel = document.createElement("div");
  panel.id = "loveeyyy-panel";
  panel.setAttribute("role", "dialog");
  panel.setAttribute("aria-label", "Chat with Loveeyyy");
  panel.innerHTML =
    '<div id="loveeyyy-head">' +
      '<div id="loveeyyy-avatar">' + avatarImg("lv-header-img") + '</div>' +
      '<div id="loveeyyy-head-text">' +
        '<strong><span>Loveeyyy</span><span class="lv-status"><span id="loveeyyy-status-dot"></span>Online</span></strong>' +
      '</div>' +
      '<button id="loveeyyy-panel-close" type="button" aria-label="Close chat">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M6 6l12 12M18 6L6 18"/></svg>' +
      '</button>' +
    '</div>' +
    '<div id="loveeyyy-msgs"></div>' +
    '<div id="loveeyyy-suggest">' +
      '<button class="lv-chip" type="button" data-q="projects">Projects</button>' +
      '<button class="lv-chip" type="button" data-q="skills">Skills</button>' +
      '<button class="lv-chip" type="button" data-q="education">Education</button>' +
      '<button class="lv-chip" type="button" data-q="awards">Awards</button>' +
      '<button class="lv-chip" type="button" data-q="contact">Contact</button>' +
    '</div>' +
    '<form id="loveeyyy-form">' +
      '<input id="loveeyyy-input" type="text" autocomplete="off" placeholder="Ask me something cute\u2026" aria-label="Message">' +
      '<button id="loveeyyy-send" type="submit" aria-label="Send">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>' +
      '</button>' +
    '</form>';
  document.body.appendChild(panel);

  var msgsEl = document.getElementById("loveeyyy-msgs");
  var inputEl = document.getElementById("loveeyyy-input");
  var formEl = document.getElementById("loveeyyy-form");
  var closeBtn = document.getElementById("loveeyyy-panel-close");
  var badge = document.getElementById("loveeyyy-badge");

  /* ---------- Persist across page navigations (multi-page site) ----------*/
  var STORAGE_KEY = "loveeyyy-state-v1";
  var MAX_HISTORY = 40;

  function loadState() {
    try {
      var raw = sessionStorage.getItem(STORAGE_KEY);
      var parsed = raw ? JSON.parse(raw) : null;
      if (parsed && Array.isArray(parsed.history)) return parsed;
    } catch (e) { /* storage unavailable or corrupt \u2014 fall through */ }
    return { open: false, badgeSeen: false, history: [] };
  }
  function saveState() {
    try { sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) { /* ignore */ }
  }

  var state = loadState();

  function addMessage(text, who, persist) {
    var row = document.createElement("div");
    row.className = "lv-row " + who;
    if (who === "bot") {
      row.innerHTML = '<div class="lv-avatar-sm">' + avatarImg("lv-avatar-sm-img") + '</div><div class="lv-bubble"></div>';
    } else {
      row.innerHTML = '<div class="lv-bubble"></div>';
    }
    row.querySelector(".lv-bubble").textContent = text;
    msgsEl.appendChild(row);
    msgsEl.scrollTop = msgsEl.scrollHeight;
    if (persist !== false) {
      state.history.push({ t: text, w: who });
      if (state.history.length > MAX_HISTORY) state.history.shift();
      saveState();
    }
  }

  function showTyping() {
    var row = document.createElement("div");
    row.className = "lv-row bot";
    row.id = "loveeyyy-typing-row";
    row.innerHTML = '<div class="lv-avatar-sm">' + avatarImg("lv-avatar-sm-img") + '</div><div class="lv-bubble"><div class="lv-typing"><span></span><span></span><span></span></div></div>';
    msgsEl.appendChild(row);
    msgsEl.scrollTop = msgsEl.scrollHeight;
  }

  function removeTyping() {
    var row = document.getElementById("loveeyyy-typing-row");
    if (row) row.remove();
  }

  /* ---------- LLM (optional) ----------
     Off by default. There is no "/api/chat" backend running on a plain
     localhost/portfolio/index.html static page, so leaving this "on"
     with nothing listening on that endpoint makes every single message
     silently fail and fall back anyway \u2014 which is a big part of why
     things felt broken. The offline KB above already answers everything
     about Christyne, so the widget works immediately with this off.
     Flip enabled to true ONLY once you actually have a real server
     running at LLM_CONFIG.endpoint that forwards to Gemini. */
  var LLM_CONFIG = {
    enabled: false,
    endpoint: "/api/chat",
    model: "gemini-3.6-flash",
    maxTokens: 400
  };

  var SYSTEM_PROMPT =
    "You are Loveeyyy, a cute, warm chat assistant embedded on Christyne Love Lozano's personal portfolio website. " +
    "Answer visitor questions about Christyne using ONLY the facts below \u2014 never invent anything not listed here. " +
    "Keep replies short and friendly (roughly 2\u20135 sentences, or a short bullet list for multi-part answers), with the occasional light emoji. " +
    "If something isn't covered by these facts, say so honestly and suggest checking the relevant page or the Contact page, instead of guessing.\n\n" +
    "FACTS ABOUT CHRISTYNE:\n" +
    "- Full name: Christyne Love Neri Lozano. Goes by Christyne Love Lozano. Initials/badge mark: CLL. Born October 28, 2005 (Scorpio). Mother: Annabelle Tagab Neri. Father: Rogelio Sarmiento Lozano. Based in Malibay, Pasay City, Philippines.\n" +
    "- Currently: 3rd year BS Information Technology student at Philippine Christian University \u2013 Manila (2024\u20132028), Student ID No. 202211835. Aspiring Full Stack Developer.\n" +
    "- Contact: email christyne.lozano@gmail.com; Facebook facebook.com/chrstynlv; Instagram @chrstynlv; LinkedIn linkedin.com/in/christyne-love-lozano-453876324; phone 0950 084 0839; resume downloadable from the homepage.\n" +
    "- Education history: Paliparan III Elementary School 2012\u20132018 (graduated with Honors) \u2192 Mahonri Academy and Science High School, JHS, 2018\u20132022 (graduated with High Honors) \u2192 PCU Dasmari\u00F1as, SHS, ICT\u2013Computer Programming strand/TVL track, 2022\u20132024 (graduated with High Honors) \u2192 PCU Manila, BSIT, 2024\u20132028 (current, 3rd year).\n" +
    "- Awards/certifications (15 total): PCU Manila \u2014 GWA 1.05 Top 1 Most Outstanding Dean's Lister (1st yr), GWA 1.09 Top 1 Gold Medal Awardee (2nd yr), 2nd Placer PCU Hackathon Java category (2026). Udemy (4, all 2024) \u2014 Java Training Crash Course, Java Training Complete Course (All in One), Python Development: First Steps, Learn HTML and CSS from Beginning to Advanced. SHS \u2014 Diploma with High Honors, Best in Social Sciences (2024). JHS \u2014 Diploma with High Honors (2022), Finalist ASMEPPS Math Quiz Bee, Finalist Panlalawigan Mind Challenge. Elementary \u2014 Diploma with Honors (2018), Conduct Awardee, Scout of the Year.\n" +
    "- Extracurriculars: Rotaract Club of PCU-Manila, Chapter Member (2025\u2013present). PCU Folkloric Dance Troupe, Dancer (2024). Strand Student Council \u2014 Deputy Strand President (2023\u20132024), then Public Information Officer (2022\u20132023, headed Grade 11 ICT media team). Youth for Environment in Schools, Organization Secretary (2017\u20132018). School Newspaper, Feature Campus Journalist (2017\u20132018). Girl Scouts of the Philippines, District VIII Troop Leader (2017\u20132018).\n" +
    "- Work experience: Market Research Interviewer I, Concentrix, Makati (Feb 2025\u2013present) \u2014 conducts structured interviews, maintains data quality, communicates with respondents. Virtual Assistant / Social Media Manager (Aug 2025\u2013Jan 2026) \u2014 planned/scheduled content, edited photos/videos, tracked engagement.\n" +
    "- Skills: Computer Programming \u2014 Proficient (85%). Video & Photo Editing \u2014 Proficient (80%). Formal & Informal Writing \u2014 Advanced (90%). Tools: VS Code, HTML, CSS, JavaScript, Laravel, MySQL, Adobe Photoshop/Illustrator/After Effects, CapCut, Canva, ibisPaint X, Microsoft Office, and AI tools Perplexity, Gemini, and Claude.\n" +
    "- Projects: (1) Wirechat \u2014 chat app, Laravel 12/Bootstrap/HTML/CSS/Java/PHP; register/login, editable profile, friend messaging with pics/files, seen indicator, group chats (create/delete). (2) Penny Juice \u2014 organic juice ordering site, HTML/CSS/JS, no login needed, enter info + payment + delivery address + juice/quantity, submit. (3) Group Portfolio \u2014 team site, HTML/CSS/JS, uses for/while/do-while loops for animation, shows team info/dream/pictures/hobbies. (4) HealthBuddy \u2014 mobile consultation app; log symptoms, schedule with preferred doctor/time/complaint, get matched doctors (swipe to browse), consult via app or face-to-face. (5) Personal Portfolio \u2014 this website itself, HTML/CSS/JS, holds education/skills/work/projects/certificates/contact.\n" +
    "- About this website: red/black/white color palette; fonts Anton (headings), Inter (body), Space Mono (labels); light/dark theme toggle; Three.js particle 'storm' background in dark mode, animated node-network canvas in light mode; draggable flippable 3D student ID card on the homepage; flippable credential card + 'Verse of the Day' (1 Corinthians 13:13) on the Contact page; swipeable circular project gallery and a filterable certificate wall on other pages; and Loveeyyy herself, the chat widget the visitor is currently using.\n" +
    "- Not listed on the site (say so if asked): specific hobbies/personality description, siblings, and firm future career plans beyond 'aspiring Full Stack Developer.'";

  function callLLM(userText) {
    var history = state.history.slice(-16).map(function (m) {
      return { role: m.w === "user" ? "user" : "model", parts: [{ text: m.t }] };
    });
    history.push({ role: "user", parts: [{ text: userText }] });

    return fetch(LLM_CONFIG.endpoint, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ systemPrompt: SYSTEM_PROMPT, history: history })
    }).then(function (res) {
      if (!res.ok) {
        return res.json().catch(function () { return {}; }).then(function (errBody) {
          throw new Error(errBody.error || ("HTTP " + res.status));
        });
      }
      return res.json();
    }).then(function (data) {
      var candidate = data.candidates && data.candidates[0];
      if (!candidate) {
        var reason = data.promptFeedback && data.promptFeedback.blockReason;
        throw new Error(reason ? "blocked (" + reason + ")" : "no response from Gemini");
      }
      var parts = (candidate.content && candidate.content.parts) || [];
      return parts.map(function (p) { return p.text || ""; }).join("").trim();
    });
  }

  function llmIsConfigured() {
    return LLM_CONFIG.enabled && !!LLM_CONFIG.endpoint;
  }

  function respond(userText) {
    if (llmIsConfigured()) {
      showTyping();
      callLLM(userText).then(function (reply) {
        removeTyping();
        addMessage(reply || pick(FALLBACKS), "bot");
      }).catch(function (err) {
        removeTyping();
        if (window.console && console.error) console.error("Loveeyyy LLM error:", err);
        addMessage(
          "Hmm, I couldn't reach my AI brain just now (" + err.message + "). Here's my best offline answer instead:\n\n" + (matchReply(userText) || pick(FALLBACKS)),
          "bot"
        );
      });
      return;
    }
    var reply = matchReply(userText) || pick(FALLBACKS);
    showTyping();
    var delay = 450 + Math.min(700, reply.length * 8);
    setTimeout(function () {
      removeTyping();
      addMessage(reply, "bot");
    }, delay);
  }

  function openPanel(opts) {
    opts = opts || {};
    if (opts.silent) {
      panel.style.transition = "none";
      panel.classList.add("is-open");
      launcher.classList.add("is-open");
      void panel.offsetWidth; /* force reflow so the transition-none applies before re-enabling it */
      panel.style.transition = "";
    } else {
      panel.classList.add("is-open");
      launcher.classList.add("is-open");
    }
    if (badge) badge.style.display = "none";
    state.open = true;
    state.badgeSeen = true;
    saveState();
    if (!state.history.length) {
      showTyping();
      setTimeout(function () {
        removeTyping();
        addMessage(pick(KB.greeting), "bot");
      }, 500);
    }
    if (!opts.silent) {
      setTimeout(function () { inputEl.focus(); }, 300);
    }
  }
  function closePanel() {
    panel.classList.remove("is-open");
    launcher.classList.remove("is-open");
    state.open = false;
    saveState();
  }
  function togglePanel() {
    if (panel.classList.contains("is-open")) closePanel(); else openPanel();
  }

  /* ---------- Restore whatever was true on the previous page ---------- */
  if (state.history.length) {
    state.history.forEach(function (m) { addMessage(m.t, m.w, false); });
  }
  if (badge && state.badgeSeen) badge.style.display = "none";
  if (state.open) openPanel({ silent: true });

  launcher.addEventListener("click", togglePanel);
  closeBtn.addEventListener("click", closePanel);

  formEl.addEventListener("submit", function (e) {
    e.preventDefault();
    var text = inputEl.value.trim();
    if (!text) return;
    addMessage(text, "user");
    inputEl.value = "";
    respond(text);
  });

  Array.prototype.forEach.call(panel.querySelectorAll(".lv-chip"), function (chip) {
    chip.addEventListener("click", function () {
      var q = chip.getAttribute("data-q");
      addMessage(chip.textContent, "user");
      respond(q);
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && panel.classList.contains("is-open")) closePanel();
  });
})();
