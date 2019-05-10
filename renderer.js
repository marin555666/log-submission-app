// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const { remote, ipcRenderer } = require("electron");
const { handleForm } = remote.require("./main");
const currentWindow = remote.getCurrentWindow();

const submitFormButton = document.querySelector("#newLogForm");
const responseParagraph = document.getElementById("para");

submitFormButton.addEventListener("submit", function(event) {
  event.preventDefault();
  let taskId = document.getElementById("taskId").value;
  handleForm(currentWindow, taskId);
});

ipcRenderer.on("form-received", function(event, args) {
  responseParagraph.innerHTML = args;
});
