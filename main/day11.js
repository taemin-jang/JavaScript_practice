let i = 0;

function UpCount() {
  const pEl = document.querySelector("p");
  i = i + 1;
  pEl.textContent = `count : ${i}`;
}

function DownCount() {
  const pEl = document.querySelector("p");
  i = i - 1;
  pEl.textContent = `count : ${i}`;
}
