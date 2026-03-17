const { ipcRenderer } = require("electron");

const cat = document.getElementById("cat");

let dragging = false;

cat.addEventListener("mousedown", () => {
  dragging = true;
});

document.addEventListener("mouseup", () => {
  dragging = false;
});

document.addEventListener("mousemove", (e) => {
  if (dragging) {
    window.moveBy(e.movementX, e.movementY);
  }
});
// bloquear drag nativo de imagen
cat.addEventListener("dragstart",(e)=>{
    e.preventDefault()
})    