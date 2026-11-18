
const KEY = "cdaps_db";
const DEF = [9.5953, 123.7896];    
const OLD_DEF = [14.676, 121.0437];


const LV = ["None", "Low", "Moderate", "High", "Critical"];
const LVCOL = ["#475569", "#15803d", "#b45309", "#c2410c", "#b91c1c"];  // alert level colors on the map
const TYPES = ["Typhoon", "Flood", "Earthquake", "Fire", "Landslide", "Other"];
const RTYPES = ["Flood", "Fire", "Damaged road", "Power outage", "Other"];


const ICON = { Typhoon: "🌀", Flood: "🌊", Earthquake: "🏚️", Fire: "🔥", Landslide: "⛰️", Other: "⚠️" };

const DO_NOW = {
  Typhoon: "Stay indoors, secure your home, and move to an evacuation center if told to.",
  Flood: "Move to higher ground, switch off electricity, and never cross floodwater.",
  Earthquake: "Drop, cover, and hold on. Expect aftershocks and check for gas leaks.",
  Fire: "Get out, stay out, and call 911 once you are safe.",
  Landslide: "Move away from the slope, uphill sideways, and avoid the slide path.",
  Other: "Follow the instructions above and listen to your barangay officials."
};

const LV_MEANING = [
  "",
  "Be aware. Monitor updates.",
  "Be prepared. Review your go-bag and route.",
  "Take action. Get ready to leave.",
  "Act now. Evacuate or take shelter immediately."
];


const BAG = [
  "Drinking water (3 days)", "Canned food and can opener", "Flashlight and batteries",
  "First aid kit and medicines", "Power bank and charger", "Whistle",
  "Copies of IDs in a waterproof bag", "Cash in small bills", "Battery-powered radio", "Clothes and blanket"
];

const TIPS = [
  "Keep your phone charged before a storm arrives.",
  "Know two ways out of every room.",
  "Never walk or drive through floodwater.",
  "Drop, cover, and hold on during an earthquake.",
  "Store drinking water: 3 liters per person per day.",
  "Agree on a family meeting point.",
  "Turn off the main power switch if your home floods.",
  "Check on elderly neighbors after a disaster.",
  "Learn your barangay's evacuation route before you need it.",
  "Keep a printed list of emergency numbers in your go-bag.",
  "After an earthquake, expect aftershocks and check for gas leaks.",
  "Keep important documents in a waterproof bag."
];

const TOPICS = ["Typhoon", "Flood", "Earthquake", "Fire", "Landslide", "Volcano"];  
const BAG_ICON = ["💧", "🥫", "🔦", "🩹", "🔋", "📣", "🪪", "💵", "📻", "🧥"];      


const MYTHS = [
  { s: "Standing in a doorway is the safest place during an earthquake.", fact: false,
    why: "Doorways are not stronger in modern buildings. Drop, cover, and hold on under sturdy furniture." },
  { s: "Shallow floodwater is safe to drive through.", fact: false,
    why: "About 15 cm of moving water can knock an adult off their feet, and about 30 cm can float a car." },
  { s: "Taping your windows stops them from breaking in a typhoon.", fact: false,
    why: "Tape does not prevent breakage. Stay away from windows and use shutters or boards if you have them." },
  { s: "After a flood, tap water is always safe to drink.", fact: false,
    why: "Floods can contaminate water. Boil it or use bottled water until officials say it is safe." },
  { s: "A small house fire can become deadly within minutes.", fact: true,
    why: "Smoke and heat build up fast. Get out, stay out, and call 911 from a safe place." },
  { s: "Your go-bag should be packed before a disaster, not during one.", fact: true,
    why: "Alerts can leave little time. A ready bag lets you leave in seconds." }
];



const QUIZ = [
  { q: "What should you do during an earthquake?",
    o: ["Run outside right away", "Drop, cover, and hold on", "Stand in a doorway", "Use the elevator"], a: 1,
    why: "Drop, cover, and hold on protects you from falling objects." },
  { q: "How much drinking water should you store per person each day?",
    o: ["1 liter", "3 liters", "10 liters", "None, tap water is enough"], a: 1,
    why: "Store about 3 liters per person per day, for at least 3 days." },
  { q: "Is it safe to walk or drive through floodwater?",
    o: ["Yes, if it is shallow", "Yes, if you wear boots", "Only at night", "No, avoid it"], a: 3,
    why: "Floodwater can hide holes, carry current, and may be electrified." },
  { q: "Which items belong in a go-bag?",
    o: ["Flashlight, first aid kit, copies of IDs", "A large television", "A full set of dishes", "Heavy furniture"], a: 0,
    why: "A go-bag holds light essentials you can grab quickly." },
  { q: "A fire starts in your home. What do you do?",
    o: ["Hide under the bed", "Go back for your belongings", "Get out, stay out, and call 911", "Open every window"], a: 2,
    why: "Get out and stay out. Call 911 once you are safe." },
  { q: "After a typhoon you see a fallen power line. What should you do?",
    o: ["Move it with a stick", "Stay far away and report it", "Step over it quickly", "Pour water on it"], a: 1,
    why: "Fallen wires may still carry electricity. Keep away and report them to your barangay or the utility." },
  { q: "A flood warning is issued for your area. What comes first?",
    o: ["Wait and see how high the water gets", "Move family and valuables to higher ground", "Drive through to reach work", "Open all doors"], a: 1,
    why: "Floods rise fast. Move early, before roads are cut off." },
  { q: "The shaking has stopped after an earthquake. What should you expect?",
    o: ["Nothing more will happen", "Aftershocks", "A typhoon", "A heat wave"], a: 1,
    why: "Aftershocks can follow for hours or days. Stay ready to drop, cover, and hold on." },
  { q: "You smell gas after an earthquake. What is the safest action?",
    o: ["Light a candle to see", "Switch on the lights to check", "Open windows, leave, and avoid any spark", "Stay inside and wait"], a: 2,
    why: "Sparks can ignite leaking gas. Ventilate, leave, and call for help from outside." },
  { q: "Why should your family agree on a meeting point?",
    o: ["To save phone data", "So everyone can find each other if separated", "To skip evacuation", "It is required by law"], a: 1,
    why: "Phone lines often fail in disasters. A known meeting point helps families reunite." }
];


const NAV = {
  resident: [
    ["dash", "Dashboard"], ["alerts", "Alerts and History"], ["weather", "Weather"], ["guide", "Learn"],
    ["gobag", "Go-Bag"], ["quiz", "Quiz"], ["centers", "Evacuation Centers"], ["hotlines", "Hotlines"],
    ["report", "Report Incident"], ["map", "Map"]
  ],
  admin: [
    ["dash", "Dashboard"], ["alerts", "Manage Alerts"], ["weather", "Weather"], ["centers", "Centers"],
    ["hotlines", "Contacts"], ["report", "Reports"], ["news", "Announcements"], ["users", "Users"],
    ["logs", "Activity Logs"], ["map", "Map"]
  ]
};



const $ = id => document.getElementById(id);
const now = () => new Date().toLocaleString();
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 5);


function esc(text) {
  const d = document.createElement("div");
  d.textContent = text;
  return d.innerHTML;
}

function fill(id, items, row, empty) {
  $(id).innerHTML = items.length ? items.map(row).join("") : `<li class="empty">${empty}</li>`;
}

// Small action button used inside cards
const btn = (label, act, id, to = "", cls = "") =>
  `<button class="btn small ${cls}" data-act="${act}" data-id="${id}" data-to="${to}">${label}</button>`;

// Wraps buttons so only the administrator sees them
const adm = (...buttons) => `<div class="acts admin-only">${buttons.join("")}</div>`;


/* ==========================================================================
   3. DATA AND STATE (localStorage)
   ========================================================================== */

// Sample evacuation centers. Pin positions are approximate: the admin should edit them to the real places.
function sampleCenters() {
  return [
    { id: "c1", name: "Lourdes National High School (sample pin)", address: "Lourdes, Panglao, Bohol", capacity: 400, lat: 9.5960, lng: 123.7900 },
    { id: "c2", name: "Lourdes Barangay Hall (sample pin)", address: "Lourdes, Panglao, Bohol", capacity: 150, lat: 9.5945, lng: 123.7885 },
    { id: "c3", name: "Looc Barangay Hall (sample pin)", address: "Looc, Panglao, Bohol", capacity: 150, lat: 9.5933, lng: 123.7542 }
  ];
}

// First-run data, including the demo administrator
function seed() {
  return {
    users: [{ id: "u1", name: "Administrator", user: "admin", pass: "admin123", role: "admin", active: true, joined: now() }],
    alerts: [], reports: [], logs: [], news: [], bags: {},
    seedv: 2,
    centers: sampleCenters(),
    contacts: [
      { id: "h1", name: "National Emergency Hotline", number: "911" },
      { id: "h2", name: "Philippine Red Cross", number: "143" }
    ],
    weather: {
      condition: "Partly cloudy", temp: 31, humidity: 70, wind: "15 km/h", time: now(),
      forecast: ["Tomorrow: Rain showers, 28°C", "Day 2: Cloudy, 29°C", "Day 3: Sunny, 32°C"]
    }
  };
}

// Read saved data and upgrade older versions of it
function load() {
  let d;
  try { d = JSON.parse(localStorage.getItem(KEY)) || seed(); }
  catch (e) { d = seed(); }

  d.quiz = d.quiz || {};  // quiz scores per user (older saved data may not have this)
  d.read = d.read || {};  // safety topics each user has read

  // Older data: move the sample data from Quezon City to Lourdes, Panglao
  if (d.seedv !== 2) {
    (d.reports || []).forEach(r => {
      if (r.lat !== undefined) {
        r.lat = Number(r.lat) - OLD_DEF[0] + DEF[0];
        r.lng = Number(r.lng) - OLD_DEF[1] + DEF[1];
      }
    });
    d.centers = (d.centers || []).filter(c => !["c1", "c2", "c3"].includes(c.id)).concat(sampleCenters());
    d.seedv = 2;
  }

  // Oldest data used X/Y percent positions: convert them to real coordinates
  const fixPosition = o => {
    if (o.lat === undefined) {
      o.lat = DEF[0] + (50 - (o.y || 50)) * 0.0004;
      o.lng = DEF[1] + ((o.x || 50) - 50) * 0.0004;
    }
  };
  (d.centers || []).forEach(fixPosition);
  (d.reports || []).forEach(fixPosition);
  return d;
}

function save() {
  try { localStorage.setItem(KEY, JSON.stringify(db)); }
  catch (e) { alert("Could not save. Browser storage may be full or blocked."); }
}

// Add a line to the activity log (newest first, keeps the last 200)
function log(action) {
  db.logs.unshift({ t: now(), who: me ? me.user : "guest", action: action });
  db.logs = db.logs.slice(0, 200);
}

// ---------- Shared state ----------
let db = load();
let me = db.users.find(u => u.id === sessionStorage.getItem("cdaps_me") && u.active) || null;  // session = this tab only
let tipN = 0;                          // which safety tip is showing
let map = null, layer = null;          // Leaflet map and its marker layer
let here = null;                       // [lat, lng] of the user once found
save();


/* ==========================================================================
   4. LOGIN, REGISTRATION, LOGOUT
   ========================================================================== */
$("login-form").addEventListener("submit", e => {
  e.preventDefault();
  const f = e.target, err = f.querySelector(".error");
  const u = f.elements.user.value.trim(), p = f.elements.pass.value;
  if (!u || !p) { err.textContent = "Enter your username and password."; return; }

  const acc = db.users.find(x => x.user.toLowerCase() === u.toLowerCase() && x.pass === p);
  if (!acc) { err.textContent = "Wrong username or password."; return; }
  if (!acc.active) { err.textContent = "This account is deactivated. Contact the administrator."; return; }

  err.textContent = "";
  f.reset();
  me = acc;
  sessionStorage.setItem("cdaps_me", acc.id);
  log("Logged in");
  save();
  enter();
});

$("reg-form").addEventListener("submit", e => {
  e.preventDefault();
  const f = e.target, el = f.elements, err = f.querySelector(".error");
  const name = el.fullname.value.trim(), user = el.user.value.trim(), pass = el.pass.value;

  if (name.length < 3) { err.textContent = "Enter your full name (3+ characters)."; return; }
  if (!/^[a-zA-Z0-9_]{4,15}$/.test(user)) { err.textContent = "Username must be 4-15 letters, numbers, or _."; return; }
  if (db.users.some(x => x.user.toLowerCase() === user.toLowerCase())) { err.textContent = "That username is taken."; return; }
  if (pass.length < 6) { err.textContent = "Password must be at least 6 characters."; return; }

  err.textContent = "";
  f.reset();
  me = { id: uid(), name: name, user: user, pass: pass, role: "resident", active: true, joined: now() };
  db.users.push(me);
  sessionStorage.setItem("cdaps_me", me.id);
  log("Registered");
  save();
  enter();
});

$("logout").addEventListener("click", () => {
  log("Logged out");
  save();
  leave();
});

// Show the app for the signed-in user
function enter() {
  document.body.dataset.role = me.role;
  $("who-name").textContent = `${me.name} (${me.role})`;
  $("nav").innerHTML = NAV[me.role].map(n => `<button class="tab" data-v="${n[0]}">${n[1]}</button>`).join("");

  $("f-status").value = "published";  // residents never see the draft filter
  document.querySelector('#f-status option[value="draft"]').hidden = me.role !== "admin";
  show("dash");
}

// Back to the login screen
function leave() {
  sessionStorage.removeItem("cdaps_me");
  me = null;
  document.body.dataset.role = "guest";
  $("who-name").textContent = "";
  $("nav").innerHTML = "";
  show("auth");
}


/* ==========================================================================
   5. NAVIGATION
   ========================================================================== */
function show(view) {
  document.querySelectorAll(".view").forEach(s => s.classList.toggle("hidden", s.id !== "v-" + view));
  document.querySelectorAll(".tab").forEach(b => b.classList.toggle("active", b.dataset.v === view));

  if (view === "quiz" && me) renderQuiz();

  // Put the current weather into the admin form
  if (view === "weather" && me && me.role === "admin") {
    const el = $("weather-form").elements, w = db.weather;
    el.condition.value = w.condition;
    el.temp.value = w.temp;
    el.humidity.value = w.humidity;
    el.wind.value = w.wind;
    el.forecast.value = w.forecast.join("\n");
  }
  renderAll();
}

$("nav").addEventListener("click", e => {
  const b = e.target.closest(".tab");
  if (b) show(b.dataset.v);
});


/* ==========================================================================
   6. REUSABLE ADD / EDIT / REMOVE
   Used for alerts, evacuation centers, contacts, and announcements.
   c = { coll, form, list, label, fields, check, extra? }
   ========================================================================== */
function crud(c) {
  const f = $(c.form), err = f.querySelector(".error");

  // Save (add new or update existing)
  f.addEventListener("submit", e => {
    e.preventDefault();
    const rec = {};
    c.fields.forEach(k => rec[k] = f.elements[k].value.trim());
    if (c.extra) Object.assign(rec, c.extra(e));

    const problem = c.check(rec);
    if (problem) { err.textContent = problem; return; }
    err.textContent = "";

    const id = f.elements.id.value;
    const name = rec[c.fields[0]];
    if (id) {
      Object.assign(db[c.coll].find(r => r.id === id), rec);
      log(`Edited ${c.label}: ${name}`);
    } else {
      db[c.coll].unshift(Object.assign({ id: uid(), time: now() }, rec));
      log(`Added ${c.label}: ${name}`);
    }
    if (rec.status === "published") log(`Published ${c.label}: ${name}`);

    f.reset();
    save();
    renderAll();
  });

  // Edit, change status, or delete from the list buttons
  $(c.list).addEventListener("click", e => {
    const b = e.target.closest("button");
    if (!b) return;
    const r = db[c.coll].find(x => x.id === b.dataset.id);
    if (!r) return;
    const act = b.dataset.act;

    if (act === "edit") {
      c.fields.forEach(k => f.elements[k].value = r[k]);
      f.elements.id.value = r.id;
      f.scrollIntoView();
      return;
    }
    if (act === "status") {
      r.status = b.dataset.to;
      log(`${b.dataset.to} ${c.label}: ${r.title}`);
    } else if (act === "del" && confirm(`Remove this ${c.label}?`)) {
      db[c.coll] = db[c.coll].filter(x => x !== r);
      log(`Removed ${c.label}: ${r[c.fields[0]]}`);
    } else {
      return;
    }
    save();
    renderAll();
  });
}

crud({
  coll: "alerts", form: "alert-form", list: "alert-list", label: "alert",
  fields: ["title", "type", "level", "zone", "location", "details"],
  extra: e => ({ status: (e.submitter && e.submitter.dataset.status) || "draft" }),
  check: r =>
    r.title.length < 5 ? "Title needs at least 5 characters."
    : !r.location ? "Enter the location."
    : r.details.length < 10 ? "Tell residents what to do (10+ characters)."
    : ""
});

crud({
  coll: "centers", form: "center-form", list: "center-list", label: "evacuation center",
  fields: ["name", "address", "capacity", "lat", "lng"],
  check: r =>
    r.name.length < 3 ? "Enter the center name."
    : !r.address ? "Enter the address."
    : !(Number(r.capacity) > 0) ? "Capacity must be more than 0."
    : !(r.lat !== "" && Math.abs(r.lat) <= 90 && r.lng !== "" && Math.abs(r.lng) <= 180)
      ? "Enter a valid latitude (-90 to 90) and longitude (-180 to 180)."
    : ""
});

crud({
  coll: "contacts", form: "contact-form", list: "contact-list", label: "contact",
  fields: ["name", "number"],
  check: r =>
    r.name.length < 3 ? "Enter the contact name."
    : !/^[0-9+\-\s()]{3,15}$/.test(r.number) ? "Enter a valid phone number."
    : ""
});

crud({
  coll: "news", form: "news-form", list: "news-admin", label: "announcement",
  fields: ["title", "message"],
  check: r =>
    r.title.length < 3 ? "Enter a title."
    : r.message.length < 10 ? "Message needs at least 10 characters."
    : ""
});


/* ==========================================================================
   7. RENDERING
   ========================================================================== */
function renderAll() {
  updateBanner();
  if (!me) return;
  renderDash();
  renderAlerts();
  renderWeather();
  renderBag();
  renderLearn();
  renderCenters();
  renderContacts();
  renderReports();
  renderNews();
  renderUsers();
  renderLogs();
  renderMap();
}

// ---------- Banner ----------
function updateBanner() {
  const live = db.alerts.filter(a => a.status === "published");
  const top = live.reduce((m, a) => Math.max(m, Number(a.level)), 0);
  $("banner").className = "banner lv" + top;
  $("banner").textContent = live.length ? `${live.length} active alert(s). Highest level: ${LV[top]}` : "No active alerts";
}

// ---------- Dashboard ----------
const logRow = l => `<li class="card"><b>${esc(l.who)}</b> ${esc(l.action)} <span class="meta">${esc(l.t)}</span></li>`;

const newsRow = n => `<li class="card"><h3>${esc(n.title)}</h3><p>${esc(n.message)}</p><p class="meta">${esc(n.time)}</p></li>`;

function renderDash() {
  const live = db.alerts.filter(a => a.status === "published");

  // Residents
  fill("dash-alerts", live, alertCard, "No active alerts. Stay prepared.");
  fill("news-list", db.news.slice(0, 5), newsRow, "No announcements.");
  $("quick").innerHTML = db.contacts.slice(0, 3)
    .map(c => `<a class="btn" href="tel:${esc(c.number)}">${esc(c.name)}: ${esc(c.number)}</a>`).join("");
  $("tip").textContent = "Tip: " + TIPS[tipN % TIPS.length];

  // Administrator
  const stats = [
    ["Residents", db.users.filter(u => u.role === "resident").length],
    ["Active alerts", live.length],
    ["Pending reports", db.reports.filter(r => r.status === "Pending").length],
    ["Evacuation centers", db.centers.length]
  ];
  $("stats").innerHTML = stats.map(s => `<div class="stat"><b>${s[1]}</b>${s[0]}</div>`).join("");
  fill("recent", db.logs.slice(0, 5), logRow, "No activity yet.");
  renderProgress();
}

$("next-tip").addEventListener("click", () => { tipN++; renderDash(); });

// ---------- Alerts ----------
function alertCard(a) {
  const zone = a.zone && a.zone !== "none" ? " | Zone " + esc(a.zone) : "";
  const toggle = a.status === "published"
    ? btn("Archive", "status", a.id, "archived")
    : btn("Publish", "status", a.id, "published");

  return `<li class="card lv${a.level}">
    <h3>${ICON[a.type] || ICON.Other} ${esc(a.title)}</h3>
    <span class="tag">${LV[a.level]}</span>
    <span class="meta">${esc(a.type)} | ${esc(a.location)}${zone} | ${esc(a.status)}</span>
    <p>${esc(a.details)}</p>
    <p class="do-now"><b>Do now:</b> ${esc(DO_NOW[a.type] || DO_NOW.Other)}</p>
    <p class="meta">${LV_MEANING[a.level]} Posted ${esc(a.time)}</p>
    ${adm(btn("Edit", "edit", a.id), toggle, btn("Delete", "del", a.id, "", "danger"))}</li>`;
}

function renderAlerts() {
  const q = $("f-q").value.toLowerCase(), type = $("f-type").value, status = $("f-status").value;
  const list = db.alerts.filter(a =>
    (me.role === "admin" || a.status !== "draft")
    && (status === "all" || a.status === status)
    && (type === "all" || a.type === type)
    && (a.title + a.location + a.details).toLowerCase().includes(q));
  fill("alert-list", list, alertCard, "No alerts match.");
}

// ---------- Weather ----------
function renderWeather() {
  const w = db.weather;
  $("weather-card").innerHTML = `<h2>${esc(w.condition)}, ${esc(w.temp)}°C</h2>
    <p>Humidity ${esc(w.humidity)}% | Wind ${esc(w.wind)}</p>
    <h3>Forecast</h3>
    <ul>${w.forecast.map(x => `<li>${esc(x)}</li>`).join("")}</ul>
    <p class="meta">Updated ${esc(w.time)}</p>`;
}

$("weather-form").addEventListener("submit", e => {
  e.preventDefault();
  const el = e.target.elements, err = e.target.querySelector(".error");
  const temp = Number(el.temp.value), hum = Number(el.humidity.value);

  if (!el.condition.value.trim()) { err.textContent = "Enter the weather condition."; return; }
  if (el.temp.value === "" || temp < -10 || temp > 50) { err.textContent = "Temperature must be between -10 and 50."; return; }
  if (el.humidity.value === "" || hum < 0 || hum > 100) { err.textContent = "Humidity must be between 0 and 100."; return; }

  err.textContent = "";
  db.weather = {
    condition: el.condition.value.trim(),
    temp: temp,
    humidity: hum,
    wind: el.wind.value.trim() || "n/a",
    forecast: el.forecast.value.split("\n").map(s => s.trim()).filter(Boolean).slice(0, 5),
    time: now()
  };
  log("Updated weather");
  save();
  renderAll();
});

// ---------- Go-bag ----------
function renderBag() {
  const done = db.bags[me.id] || [];
  const percent = Math.round(done.length / BAG.length * 100);

  $("bag-list").innerHTML = BAG.map((item, i) => `<li class="${done.includes(item) ? "done" : ""}"><label>
    <input type="checkbox" data-i="${i}" ${done.includes(item) ? "checked" : ""}>${BAG_ICON[i]} ${esc(item)}</label></li>`).join("");
  $("bag-bar").style.width = percent + "%";
  $("bag-text").textContent = `${done.length} of ${BAG.length} items packed (${percent}%)`;
}

$("bag-list").addEventListener("change", e => {
  const item = BAG[e.target.dataset.i], done = db.bags[me.id] || [];
  db.bags[me.id] = e.target.checked ? done.concat(item) : done.filter(x => x !== item);
  save();
  renderBag();
});

// ---------- Evacuation centers ----------
function renderCenters() {
  const q = $("c-q").value.toLowerCase();
  fill("center-list", db.centers.filter(c => (c.name + c.address).toLowerCase().includes(q)),
    c => `<li class="card"><h3>${esc(c.name)}</h3><p>${esc(c.address)}</p>
      <p class="meta">Capacity: ${esc(c.capacity)} people</p>
      ${adm(btn("Edit", "edit", c.id), btn("Remove", "del", c.id, "", "danger"))}</li>`,
    "No evacuation centers found.");
}

// ---------- Hotlines ----------
function renderContacts() {
  fill("contact-list", db.contacts,
    c => `<li class="card"><span class="num">${esc(c.number)}</span><h3>${esc(c.name)}</h3>
      ${adm(btn("Edit", "edit", c.id), btn("Remove", "del", c.id, "", "danger"))}</li>`,
    "No contacts yet.");
}

// ---------- Announcements (admin) ----------
function renderNews() {
  fill("news-admin", db.news,
    n => `<li class="card"><h3>${esc(n.title)}</h3><p>${esc(n.message)}</p><p class="meta">${esc(n.time)}</p>
      ${adm(btn("Edit", "edit", n.id), btn("Remove", "del", n.id, "", "danger"))}</li>`,
    "No announcements yet.");
}

// ---------- Incident reports ----------
$("report-form").addEventListener("submit", e => {
  e.preventDefault();
  const f = e.target, el = f.elements, err = f.querySelector(".error");
  const loc = el.location.value.trim(), desc = el.description.value.trim(), type = el.type.value;

  if (loc.length < 3) { err.textContent = "Enter where it is happening."; return; }
  if (desc.length < 10) { err.textContent = "Describe the incident (10+ characters)."; return; }
  err.textContent = "Sending report...";

  // Pin the report at the resident's location
  where(pos => {
    db.reports.unshift({
      id: uid(), user: me.id, by: me.name, type: type, location: loc, description: desc,
      status: "Pending", time: now(), lat: pos[0], lng: pos[1]
    });
    log("Submitted report: " + type);
    err.textContent = "";
    f.reset();
    save();
    renderAll();
  });
});

function renderReports() {
  const q = $("r-q").value.toLowerCase(), status = $("r-status").value, admin = me.role === "admin";
  const list = db.reports.filter(r =>
    (admin || r.user === me.id)
    && (status === "all" || r.status === status)
    && (r.type + r.location + r.description).toLowerCase().includes(q));

  const statusOptions = r => ["Pending", "Under Review", "Resolved"]
    .map(x => `<option ${x === r.status ? "selected" : ""}>${x}</option>`).join("");

  fill("report-list", list, r => `<li class="card"><h3>${esc(r.type)}: ${esc(r.location)}</h3>
    <p>${esc(r.description)}</p>
    <p class="meta">By ${esc(r.by)} | ${esc(r.time)}</p>` +
    (admin
      ? `<select data-id="${r.id}" aria-label="Report status">${statusOptions(r)}</select>`
      : `<span class="tag">${esc(r.status)}</span>`) + "</li>",
    "No reports to show.");
}

$("report-list").addEventListener("change", e => {
  const r = db.reports.find(x => x.id === e.target.dataset.id);
  if (!r) return;
  r.status = e.target.value;
  log(`Set report to ${r.status}: ${r.type} at ${r.location}`);
  save();
  renderAll();
});

// ---------- Users (admin) ----------
function renderUsers() {
  fill("user-list", db.users.filter(u => u.role === "resident"), u => `<li class="card"><h3>${esc(u.name)}</h3>
    <p class="meta">@${esc(u.user)} | joined ${esc(u.joined)} | ${u.active ? "Active" : "Deactivated"}</p>
    <div class="acts">${btn(u.active ? "Deactivate" : "Activate", "tog", u.id)}${btn("Delete", "del", u.id, "", "danger")}</div></li>`,
    "No registered residents yet.");
}

$("user-list").addEventListener("click", e => {
  const b = e.target.closest("button");
  if (!b) return;
  const u = db.users.find(x => x.id === b.dataset.id);
  if (!u) return;

  if (b.dataset.act === "tog") {
    u.active = !u.active;
    log((u.active ? "Activated " : "Deactivated ") + u.user);
  } else if (confirm("Delete this account?")) {
    db.users = db.users.filter(x => x !== u);
    delete db.bags[u.id];   // remove the resident's saved progress too
    delete db.quiz[u.id];
    delete db.read[u.id];
    log("Deleted user " + u.user);
  } else {
    return;
  }
  save();
  renderAll();
});

// ---------- Activity logs (admin) ----------
function renderLogs() {
  fill("log-list", db.logs, logRow, "No activity yet.");
}


/* ==========================================================================
   8. LEARNING AND QUIZ
   ========================================================================== */
// ---------- Safety guide: reading progress ----------
function renderLearn() {
  const read = db.read[me.id] || [];
  document.querySelectorAll("#v-guide [data-topic]").forEach(d => d.classList.toggle("read", read.includes(d.dataset.topic)));
  $("learn-bar").style.width = Math.round(read.length / TOPICS.length * 100) + "%";
  $("learn-text").textContent = `${read.length} of ${TOPICS.length} topics read`;
}

// Opening a topic marks it as read ("toggle" does not bubble, so listen in the capture phase)
$("v-guide").addEventListener("toggle", e => {
  const d = e.target;
  if (!me || !d.open || !d.dataset.topic) return;
  const read = db.read[me.id] || [];
  if (read.includes(d.dataset.topic)) return;
  db.read[me.id] = read.concat(d.dataset.topic);
  log("Read safety topic: " + d.dataset.topic);
  save();
  renderLearn();
}, true);

// ---------- Dashboard: learning progress ----------
function renderProgress() {
  const best = db.quiz[me.id] ? db.quiz[me.id].best : 0;
  const rows = [
    ["Safety topics read", (db.read[me.id] || []).length, TOPICS.length, "guide"],
    ["Go-bag packed", (db.bags[me.id] || []).length, BAG.length, "gobag"],
    ["Quiz best score", best, QUIZ.length, "quiz"]
  ];
  $("progress").innerHTML = rows.map(r => `<div class="meter">
    <span>${r[0]}: <b>${r[1]} of ${r[2]}</b></span>
    <div class="progress"><div style="width:${Math.round(r[1] / r[2] * 100)}%"></div></div>
    <button class="btn small alt" data-go="${r[3]}">Open</button></div>`).join("");
}

// Buttons marked data-go jump to another screen
document.addEventListener("click", e => {
  const g = e.target.closest("[data-go]");
  if (g && me) show(g.dataset.go);
});

// ---------- Myth or fact ----------
$("myths").addEventListener("click", e => {
  const b = e.target.closest("button");
  if (!b) return;
  const m = MYTHS[b.dataset.i], ok = (b.dataset.guess === "fact") === m.fact;
  const res = b.closest("li").querySelector(".myth-res");
  res.className = "myth-res " + (ok ? "right" : "wrong");
  res.textContent = `${ok ? "Correct." : "Not quite."} This is a ${m.fact ? "fact" : "myth"}. ${m.why}`;
});

function quizBest() {
  const b = db.quiz[me.id];
  $("quiz-best").textContent = b ? `Your best score: ${b.best} of ${QUIZ.length}` : "You have not taken the quiz yet.";
}

function renderQuiz() {
  quizBest();
  $("quiz-qs").innerHTML = QUIZ.map((q, i) => `<fieldset><legend>${i + 1}. ${esc(q.q)}</legend>` +
    q.o.map((o, j) => `<label class="opt"><input type="radio" name="q${i}" value="${j}">${esc(o)}</label>`).join("") +
    "</fieldset>").join("");
  $("quiz-form").classList.remove("hidden");
  $("quiz-result").classList.add("hidden");
}

$("quiz-form").addEventListener("submit", e => {
  e.preventDefault();
  const f = e.target, err = f.querySelector(".error");

  // Every question must be answered
  for (let i = 0; i < QUIZ.length; i++) {
    if (!f.elements["q" + i].value) { err.textContent = `Answer question ${i + 1} first.`; return; }
  }
  err.textContent = "";

  // Score and build the explanations
  let score = 0, html = "";
  QUIZ.forEach((q, i) => {
    const ok = Number(f.elements["q" + i].value) === q.a;
    if (ok) score++;
    html += `<p class="${ok ? "right" : "wrong"}"><b>${i + 1}. ${ok ? "Correct" : "Not quite"}.</b> ${esc(q.why)}</p>`;
  });

  // Save the best score
  const old = db.quiz[me.id] || { best: 0 };
  db.quiz[me.id] = { best: Math.max(old.best, score), last: score, time: now() };
  log(`Took preparedness quiz: ${score}/${QUIZ.length}`);
  save();
  quizBest();

  const msg = score === QUIZ.length ? "Perfect! You are ready."
    : score >= QUIZ.length * 0.6 ? "Good job. Review the Safety Guide for the rest."
    : "Read the Safety Guide, then try again.";
  $("quiz-result").innerHTML = `<h2>You scored ${score} of ${QUIZ.length}</h2><p>${msg}</p>${html}
    <button id="quiz-retry" class="btn alt">Try again</button>
    <button class="btn alt" data-go="guide">Review the guide</button>`;
  $("quiz-result").classList.remove("hidden");
  f.classList.add("hidden");
});

$("quiz-result").addEventListener("click", e => {
  if (e.target.id === "quiz-retry") renderQuiz();
});


/* ==========================================================================
   9. MAP AND LOCATION (Leaflet + OpenStreetMap)
   ========================================================================== */

// Gives [lat, lng] of the user, or the default center with a small random offset if location is blocked
function where(cb) {
  const fallback = () => cb([DEF[0] + (Math.random() - 0.5) * 0.02, DEF[1] + (Math.random() - 0.5) * 0.02]);
  if (here) { cb(here); return; }
  if (!navigator.geolocation) { fallback(); return; }
  navigator.geolocation.getCurrentPosition(p => {
    here = [p.coords.latitude, p.coords.longitude];
    cb(here);
  }, fallback, { timeout: 8000 });
}

// Ask the browser for the user's position and move the map there
function locate() {
  const msg = $("map-msg");
  if (!navigator.geolocation) { msg.textContent = "Your browser cannot share location. Showing Lourdes, Panglao."; return; }

  msg.textContent = "Finding your location...";
  navigator.geolocation.getCurrentPosition(p => {
    here = [p.coords.latitude, p.coords.longitude];
    msg.textContent = "Map centered on your current location.";
    map.setView(here, 15);
    renderMap();
  }, () => {
    msg.textContent = "Location blocked or unavailable. Showing Lourdes, Panglao. Allow location access, then press the button again.";
  }, { timeout: 10000 });
}

$("locate").addEventListener("click", () => { if (map) locate(); });

function renderMap() {
  if ($("v-map").classList.contains("hidden")) return;  // only draw when the Map tab is open
  if (typeof L === "undefined") {
    $("map").innerHTML = '<p class="empty">The map could not load. Check your internet connection.</p>';
    return;
  }

  // First time: create the map
  if (!map) {
    map = L.map("map").setView(here || DEF, 14);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19, attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);
    layer = L.layerGroup().addTo(map);
    locate();
  }
  map.invalidateSize();
  layer.clearLayers();

  // Alert zones = four squares around the map center
  const c = here || DEF, d = 0.03;
  const zones = {
    NW: [[c[0], c[1] - d], [c[0] + d, c[1]]],
    NE: [[c[0], c[1]], [c[0] + d, c[1] + d]],
    SW: [[c[0] - d, c[1] - d], [c[0], c[1]]],
    SE: [[c[0] - d, c[1]], [c[0], c[1] + d]]
  };

  db.alerts.filter(a => a.status === "published" && zones[a.zone]).forEach(a =>
    L.rectangle(zones[a.zone], { color: LVCOL[a.level], weight: 1, fillOpacity: 0.25 })
      .bindPopup(`<b>${esc(a.title)}</b><br>${LV[a.level]} alert`).addTo(layer));

  db.centers.forEach(x =>
    L.marker([Number(x.lat), Number(x.lng)])
      .bindPopup(`<b>Evacuation center</b><br>${esc(x.name)}<br>${esc(x.address)}`).addTo(layer));

  db.reports.filter(r => r.status !== "Resolved").forEach(r =>
    L.circleMarker([Number(r.lat), Number(r.lng)], { radius: 9, color: "#fff", weight: 2, fillColor: "#dc2626", fillOpacity: 1 })
      .bindPopup(`<b>${esc(r.type)}</b><br>${esc(r.location)}<br>${esc(r.status)}`).addTo(layer));

  if (here) {
    L.circleMarker(here, { radius: 8, color: "#fff", weight: 3, fillColor: "#2563eb", fillOpacity: 1 })
      .bindPopup("You are here").addTo(layer);
  }
}

// Admin: fill the evacuation center form with the current location
$("use-loc").addEventListener("click", () => {
  const err = $("center-form").querySelector(".error");
  if (!navigator.geolocation) { err.textContent = "Your browser cannot share location."; return; }

  navigator.geolocation.getCurrentPosition(p => {
    const el = $("center-form").elements;
    el.lat.value = p.coords.latitude.toFixed(5);
    el.lng.value = p.coords.longitude.toFixed(5);
    err.textContent = "";
  }, () => {
    err.textContent = "Location blocked or unavailable. Type the coordinates instead.";
  }, { timeout: 10000 });
});


/* ==========================================================================
   10. LIVE NOTIFICATIONS
   When another tab (for example the admin) saves new data, this tab gets a "storage" event.
   ========================================================================== */
function toast(msg, level) {
  const t = $("toast");
  t.textContent = msg;
  t.className = "toast lv" + level;
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => t.classList.add("hidden"), 7000);
}

window.addEventListener("storage", e => {
  if (e.key !== KEY || !me) return;

  const seen = db.alerts.filter(a => a.status === "published").map(a => a.id);
  db = load();
  me = db.users.find(u => u.id === me.id && u.active) || null;
  if (!me) { leave(); return; }

  db.alerts.filter(a => a.status === "published" && !seen.includes(a.id))
    .forEach(a => toast(`New ${LV[a.level]} alert: ${a.title}`, a.level));
  renderAll();
});


/* ==========================================================================
   11. LIGHT AND DARK THEME
   ========================================================================== */
function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  $("theme").textContent = theme === "dark" ? "Light mode" : "Dark mode";
  try { localStorage.setItem("cdaps_theme", theme); }
  catch (e) { /* storage blocked: the theme just won't be remembered */ }
}

$("theme").addEventListener("click", () => {
  setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
});


/* ==========================================================================
   12. START
   ========================================================================== */
// Fill the hazard and incident type dropdowns
document.querySelectorAll(".types").forEach(s => s.insertAdjacentHTML("beforeend", TYPES.map(t => `<option>${t}</option>`).join("")));
document.querySelectorAll(".rtypes").forEach(s => s.insertAdjacentHTML("beforeend", RTYPES.map(t => `<option>${t}</option>`).join("")));

// Myth or fact cards (drawn once so answers stay on screen)
$("myths").innerHTML = MYTHS.map((m, i) => `<li class="card"><p><b>${esc(m.s)}</b></p>
  <div class="acts"><button class="btn small alt" data-i="${i}" data-guess="myth">Myth</button>
  <button class="btn small alt" data-i="${i}" data-guess="fact">Fact</button></div><p class="myth-res"></p></li>`).join("");

// Search boxes and filters redraw their lists as you type
["f-q", "f-type", "f-status", "c-q", "r-q", "r-status"].forEach(id => $(id).addEventListener("input", renderAll));

// Apply the saved theme, or follow the device setting
let savedTheme = null;
try { savedTheme = localStorage.getItem("cdaps_theme"); } catch (e) { /* ignore */ }
setTheme(savedTheme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));

// Show the right screen
if (me) enter(); else leave();
