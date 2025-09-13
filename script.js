// Global DNEDL array
let DNEDL = ["Box", "Card", "Loader", "Modal"];

// Utility function (reusable)
function logAction(action, target) {
  console.log(`Action: ${action} on ${target}`);
}

// Local vs global scope demo
function calculateValue(base, factor) {
  let result = base * factor; // local variable
  return result;
}

// Animate Box on button click
const box = document.getElementById("box");
document.getElementById("animateBtn").addEventListener("click", () => {
  let value = calculateValue(50, 2); // use function
  box.style.transform = `translateX(${value}px) scale(1.2)`;
  box.style.opacity = 0.7;
  logAction("Animate", DNEDL[0]);
});

// Card flip (toggle on click)
const card = document.getElementById("card");
card.addEventListener("click", () => {
  card.classList.toggle("flip");
  logAction("Flip", DNEDL[1]);
});

// Loader toggle
const loader = document.getElementById("loader");
document.getElementById("toggleLoading").addEventListener("click", () => {
  loader.classList.toggle("active");
  logAction("Toggle", DNEDL[2]);
});

// Modal control
const modal = document.getElementById("modal");
document.getElementById("openModal").addEventListener("click", () => {
  modal.classList.add("show");
  logAction("Open", DNEDL[3]);
});
document.getElementById("closeModal").addEventListener("click", () => {
  modal.classList.remove("show");
  logAction("Close", DNEDL[3]);
});

// Extra: dynamically add element from DNEDL array
function createDynamicElement(name) {
  let el = document.createElement("div");
  el.textContent = `Dynamic ${name}`;
  el.style.margin = "10px";
  el.style.padding = "10px";
  el.style.background = "#f39c12";
  el.style.color = "white";
  document.body.appendChild(el);
}
DNEDL.forEach(item => createDynamicElement(item));