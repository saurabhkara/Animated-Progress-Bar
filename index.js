const root = document.getElementById("root");
let count = 0;
function create(time = 2) {
  const elem = document.createElement("div");
  elem.classList.add("line");
  elem.style = `transition: width ${time}s ease;`;
  root.appendChild(elem);

  setTimeout(() => {
    elem.classList.add("fullWidth");
  }, 200);

  elem.addEventListener("transitionend", () => {
    if (count > 1) {
      count--;
      create();
    }
  });

  elem.removeEventListener("transitionend", () => {
    console.log("REMoved");
  });
}

function add() {
  console.log("Working");
  if (count === 0) {
    create();
  }
  count++;
}
