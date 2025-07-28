const a = document.querySelectorAll(".item"), n = document.createElement("img");
n.src = "./src/images/vlad-2.jpg";
const u = document.createElement("img");
u.src = "./src/images/blood.png";
const r = document.getElementById("start-btn"), l = document.getElementById("soundBu"), g = document.getElementById("soundShot"), i = document.getElementById("sound-btn"), y = document.getElementById("hit-counter"), p = document.getElementById("miss-counter");
let s = 0, c = 0, d, m;
const t = document.querySelector(".container");
t.style = "background-image: url('https://idei.club/uploads/posts/2021-10/1634162331_31-idei-club-p-koridor-v-podezde-interer-krasivo-foto-31.jpg');";
function h() {
  if (c >= 5) {
    clearInterval(m), n.remove(), r.textContent = "START";
    const e = document.createElement("h1");
    e.style = "text-content: center; color: white; font-weight: bold;", e.textContent = "game over (((";
    const o = document.createElement("img");
    return o.src = "./src/images/vlad.jpg", t.style = "display: block;", t.innerHTML = "", t.append(e, o), !0;
  } else if (s >= 15) {
    clearInterval(m), n.remove(), r.textContent = "START";
    const e = document.createElement("h1");
    e.style = "text-content: center; color: white; font-weight: bold;", e.textContent = "You win!!!! Good killer!!!";
    const o = document.createElement("img");
    return o.src = "./src/images/win_man.jpg", t.style = "display: block;", t.innerHTML = "", t.append(e, o), !0;
  }
  return !1;
}
function v(e) {
  return Math.floor(Math.random() * e.length);
}
function C() {
  s = 0, c = 0, y.textContent = s, p.textContent = c, t.querySelectorAll("h1").forEach((o) => o.remove()), m = setInterval(() => {
    n.parentElement && (c++, p.textContent = c), !h() && (d = v(a), a[d].append(n), u.remove());
  }, 790);
}
r.onclick = function() {
  r.textContent === "START" ? (r.textContent = "STOP", C()) : (clearInterval(m), n.remove(), r.textContent = "START");
};
i.onclick = function() {
  l.currentTime ? (l.pause(), l.currentTime = 0, i.textContent = "SOUND ON") : (l.play(), i.textContent = "SOUND OFF");
};
n.addEventListener("click", () => {
  y.textContent = s++, g.currentTime = 0, g.play(), n.remove(), a[d].append(u), h();
});
//# sourceMappingURL=my-bundle.es.js.map
