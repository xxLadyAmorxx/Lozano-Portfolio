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
    "#loveeyyy-launcher{position:fixed;right:22px;bottom:22px;z-index:300;width:58px;height:58px;border-radius:50%;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;background:linear-gradient(155deg,var(--red,#d81324),var(--red-deep,#7d0d18));box-shadow:0 12px 28px rgba(216,19,36,.4);transition:transform .3s cubic-bezier(.22,.9,.32,1),box-shadow .3s;}\n" +
    "#loveeyyy-launcher:hover{transform:translateY(-4px) scale(1.05);box-shadow:0 18px 36px rgba(216,19,36,.5);}\n" +
    "#loveeyyy-launcher svg{width:26px;height:26px;color:#fff;transition:transform .3s;}\n" +
    "#loveeyyy-launcher svg.lv-heart{width:23px;height:auto;}\n" +
    "#loveeyyy-launcher.is-open svg.lv-heart{transform:scale(0);position:absolute;}\n" +
    "#loveeyyy-launcher svg.lv-close{position:absolute;transform:scale(0);}\n" +
    "#loveeyyy-launcher.is-open svg.lv-close{transform:scale(1);}\n" +
    "#loveeyyy-badge{position:absolute;top:-2px;right:-2px;width:14px;height:14px;border-radius:50%;background:var(--red-glow,#ff3b4e);border:2px solid var(--bg,#0a0a0c);animation:lvPulse 1.8s ease-in-out infinite;}\n" +
    "@keyframes lvPulse{0%,100%{box-shadow:0 0 0 0 rgba(216,19,36,.5);}70%{box-shadow:0 0 0 6px rgba(216,19,36,0);}}\n" +
    "#loveeyyy-panel{position:fixed;right:22px;bottom:92px;z-index:300;width:min(360px,calc(100vw - 32px));height:min(520px,calc(100vh - 140px));background:var(--bg-elev,#141417);border:1px solid var(--border-strong,rgba(247,245,241,.28));border-radius:var(--radius-lg,24px);box-shadow:var(--shadow,0 20px 50px rgba(0,0,0,.55));display:flex;flex-direction:column;overflow:hidden;opacity:0;transform:translateY(18px) scale(.96);pointer-events:none;transition:opacity .28s cubic-bezier(.22,.9,.32,1),transform .28s cubic-bezier(.22,.9,.32,1);font-family:var(--font-body,'Inter',sans-serif);}\n" +
    "#loveeyyy-panel.is-open{opacity:1;transform:translateY(0) scale(1);pointer-events:auto;}\n" +
    "#loveeyyy-head{display:flex;align-items:center;gap:12px;padding:16px 18px;background:linear-gradient(155deg,var(--red,#d81324),var(--red-deep,#7d0d18));color:#fff;flex-shrink:0;}\n" +
    "#loveeyyy-avatar{width:38px;height:38px;border-radius:50%;background:rgba(255,255,255,.18);display:flex;align-items:center;justify-content:center;flex-shrink:0;color:#fff;}\n" +
    "#loveeyyy-avatar svg{width:24px;height:auto;}\n" +
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
    ".lv-avatar-sm{width:24px;height:24px;border-radius:50%;background:linear-gradient(155deg,var(--red,#d81324),var(--red-deep,#7d0d18));display:flex;align-items:center;justify-content:center;flex-shrink:0;color:#fff;}\n" +
    ".lv-avatar-sm svg{width:13px;height:auto;}\n" +
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

  /* ---------- Bot icon: original cute line-art robot with antenna + heart,
     drawn as inline SVG so it stays crisp at any size and inherits the
     site's colors (white outline on a red badge, red heart accent). ---------- */
  var HEART_PATH = "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z";
  function botIconSVG(extraClass) {
    return (
      '<svg' + (extraClass ? ' class="' + extraClass + '"' : '') + ' viewBox="0 0 64 76" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
        '<line x1="32" y1="10" x2="32" y2="22" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>' +
        '<circle cx="32" cy="7" r="3" fill="none" stroke="currentColor" stroke-width="3"/>' +
        '<path d="M38 11 L43 6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>' +
        '<path d="M41 16 L48 9" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>' +
        '<path transform="translate(40,0) scale(.3)" d="' + HEART_PATH + '" fill="currentColor"/>' +
        '<rect x="14" y="22" width="36" height="24" rx="13" fill="#fff" stroke="currentColor" stroke-width="3"/>' +
        '<circle cx="10" cy="34" r="5" fill="#fff" stroke="currentColor" stroke-width="3"/>' +
        '<circle cx="54" cy="34" r="5" fill="#fff" stroke="currentColor" stroke-width="3"/>' +
        '<path d="M23 35 Q26 31 29 35" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" fill="none"/>' +
        '<path d="M35 35 Q38 31 41 35" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" fill="none"/>' +
        '<rect x="12" y="46" width="40" height="28" rx="14" fill="#fff" stroke="currentColor" stroke-width="3"/>' +
        '<circle cx="8" cy="58" r="6" fill="#fff" stroke="currentColor" stroke-width="3"/>' +
        '<circle cx="56" cy="58" r="6" fill="#fff" stroke="currentColor" stroke-width="3"/>' +
        '<path transform="translate(26,53) scale(.5)" d="' + HEART_PATH + '" fill="var(--red,#d81324)"/>' +
      '</svg>'
    );
  }

  /* ---------- 3. Markup ---------- */
  var launcher = document.createElement("button");
  launcher.id = "loveeyyy-launcher";
  launcher.setAttribute("aria-label", "Open chat with Loveeyyy");
  launcher.innerHTML =
    botIconSVG("lv-heart") +
    '<svg class="lv-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M6 6l12 12M18 6L6 18"/></svg>' +
    '<span id="loveeyyy-badge" aria-hidden="true"></span>';
  document.body.appendChild(launcher);

  var panel = document.createElement("div");
  panel.id = "loveeyyy-panel";
  panel.setAttribute("role", "dialog");
  panel.setAttribute("aria-label", "Chat with Loveeyyy");
  panel.innerHTML =
    '<div id="loveeyyy-head">' +
      '<div id="loveeyyy-avatar">' + botIconSVG() + '</div>' +
      '<div id="loveeyyy-head-text">' +
        '<strong><span>Loveeyyy</span><span class="lv-status"><span id="loveeyyy-status-dot"></span>Online</span></strong>' +
      '</div>' +
      '<button id="loveeyyy-panel-close" aria-label="Close chat">' +
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
    } catch (e) { /* storage unavailable or corrupt — fall through */ }
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
      row.innerHTML = '<div class="lv-avatar-sm">' + botIconSVG() + '</div><div class="lv-bubble"></div>';
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
    row.innerHTML = '<div class="lv-avatar-sm">' + botIconSVG() + '</div><div class="lv-bubble"><div class="lv-typing"><span></span><span></span><span></span></div></div>';
    msgsEl.appendChild(row);
    msgsEl.scrollTop = msgsEl.scrollHeight;
  }

  function removeTyping() {
    var row = document.getElementById("loveeyyy-typing-row");
    if (row) row.remove();
  }

  var LLM_CONFIG = {
    enabled: true, 
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

  panel.querySelectorAll(".lv-chip").forEach(function (chip) {
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