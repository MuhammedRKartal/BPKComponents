// Import the BPKDialog component from the bpk-components module

import { BPKDialog } from "./bpk-components";
import "./theme/index.css";

// Define a function to render your components or functionality
function renderApp() {
  new BPKDialog();
  const dialogDiv = document.createElement("div");
  dialogDiv.innerHTML = `<bpk-dialog modalTitle="hey" id="dialogId">
  this is the content of our dialog element <button>I love it</button>
  </bpk-dialog>`;

  document.body.appendChild(dialogDiv);

  const but = document.createElement("button");
  but.innerText = "a";

  const dialog = document.querySelector("#dialogId") as BPKDialog;

  dialog.addEventListener("onOpen", () => console.log("opened"));
  but.addEventListener("click", () => {
    dialog.toggle();
  });
  document.body.appendChild(but);
}

// Call the render function when the DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
  renderApp();
});
