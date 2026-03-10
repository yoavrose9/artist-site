const tracks = [
  { title: "Track 1", file: "assets/music/track1.mp3" },
  { title: "Track 2", file: "assets/music/track2.mp3" },
];

const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const eq = document.getElementById("eq");
const tracksEl = document.getElementById("tracks");

tracksEl.innerHTML = tracks.map(t => `<div class="card" data-file="${t.file}">${t.title}</div>`).join("");

let ctx, src, analyser, dataArray, raf;
const bars = [];
for (let i = 0; i < 48; i++) {
  const b = document.createElement("div");
  b.className = "bar";
  eq.appendChild(b);
  bars.push(b);
}

function initAudio() {
  if (ctx) return;
  ctx = new AudioContext();
  src = ctx.createMediaElementSource(audio);
  analyser = ctx.createAnalyser();
  analyser.fftSize = 2048;
  dataArray = new Uint8Array(analyser.frequencyBinCount);
  src.connect(analyser);
  analyser.connect(ctx.destination);
}

function draw() {
  analyser.getByteFrequencyData(dataArray);
  const step = Math.floor(dataArray.length / bars.length);
  bars.forEach((bar, i) => {
    const v = dataArray[i * step] / 255;
    bar.style.height = `${Math.max(16, v * 250)}px`;
    bar.style.opacity = 0.25 + v * 0.75;
  });

  // Canvas reactive backdrop
  const canvas = document.getElementById("viz");
  const c = canvas.getContext("2d");
  canvas.width = window.innerWidth * devicePixelRatio;
  canvas.height = window.innerHeight * devicePixelRatio;

  c.clearRect(0,0,canvas.width,canvas.height);
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;
  c.fillStyle = "rgba(255,255,255,0.05)";
  c.beginPath();
  const radius = 80 + (dataArray[5] / 255) * 140;
  c.arc(cx, cy, radius, 0, Math.PI * 2);
  c.fill();

  raf = requestAnimationFrame(draw);
}

playBtn.addEventListener("click", async () => {
  initAudio();
  await ctx.resume();
  if (audio.paused) { audio.play(); playBtn.textContent = "⏸ Pause"; raf = requestAnimationFrame(draw); }
  else { audio.pause(); playBtn.textContent = "▶︎ Play"; cancelAnimationFrame(raf); }
});

tracksEl.addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (!card) return;
  audio.src = card.dataset.file;
  playBtn.click();
});
