const chatWindow = document.querySelector("#chatWindow");

document.addEventListener("click", (e) => {
  const target = e.target;

  if (target.classList.contains("chat-button")) {
    chatWindow.classList.toggle("chat-window-active");
  }
  if (target.classList.contains("close-btn")) {
    chatWindow.classList.toggle("chat-window-active");
  }
});
