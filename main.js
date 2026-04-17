const epochEl = document.getElementById("epoch-display");

function updateTime() {
  const now = Date.now();
  epochEl.textContent = now.toString();
}

updateTime();
setInterval(updateTime, 1000);
