// background container
const background = document.querySelector(".container");

// Acak Warna
const acakWarna = document.getElementById("acakWarna");
acakWarna.addEventListener("click", function () {
  r = Math.floor(Math.random() * 255 + 1);
  g = Math.floor(Math.random() * 255 + 1);
  b = Math.floor(Math.random() * 255 + 1);
  background.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

// Slider Warna
const sMerah = document.querySelector("input[name=kotak-merah]");
const vMerah = document.querySelector(".merah");

const sHijau = document.querySelector("input[name=kotak-hijau]");
const vHijau = document.querySelector(".hijau");

const sBiru = document.querySelector("input[name=kotak-biru]");
const vBiru = document.querySelector(".biru");

sMerah.addEventListener("input", () => {
  r = sMerah.value;
  g = sHijau.value;
  b = sBiru.value;

  vMerah.innerText = sMerah.value;
  background.style.backgroundColor = `rgb(${r},${g},${b})`;
});

sHijau.addEventListener("input", () => {
  r = sMerah.value;
  g = sHijau.value;
  b = sBiru.value;

  vHijau.innerText = sHijau.value;
  background.style.backgroundColor = `rgb(${r},${g},${b})`;
});

sBiru.addEventListener("input", () => {
  r = sMerah.value;
  g = sHijau.value;
  b = sBiru.value;

  vBiru.innerText = sBiru.value;
  background.style.backgroundColor = `rgb(${r},${g},${b})`;
});

// Mousemove Warna
background.addEventListener("mousemove", (event) => {
  // posisi mousemove from scaleX
  const xPos = Math.round((event.clientX / window.innerWidth) * 255);

  // posisi mousemove from scaleY
  const yPos = Math.round((event.clientX / window.innerWidth) * 255);

  //   const midScale = Math.floor(Math.random() + yPos + xPos) / xPos;
  //   console.log(midScale);

  if (event.target == background) {
    background.style.backgroundColor = `rgb(100,${xPos},${yPos})`;
    console.log(background.style.backgroundColor);
  }
});
