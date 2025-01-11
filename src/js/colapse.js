const toggleButton = document.querySelector("#toggleButton");
const textBox = document.querySelector(".text-box"); 
const copyButton = document.querySelector("#copyButton");

toggleButton.addEventListener("click", () => {
  textBox.classList.toggle("text-box-active");
  if (toggleButton.textContent === "Expand") {
    toggleButton.textContent = "Colapse";
  } else {
    toggleButton.textContent = "Expand";
  }
});

copyButton.addEventListener("click", () => {
  navigator.clipboard
    .writeText(textBox.textContent)
    .then(() => {
      copyButton.classList.add("copy-succes");
      copyButton.textContent = "Succes";
      setTimeout(() => {
        copyButton.classList.remove("copy-succes");
        copyButton.textContent = "Copy";
      }, 2000);
    })
    .catch(() => {
      copyButton.classList.add("copy-failed");
      copyButton.textContent = "Failed";
      setTimeout(() => {
        copyButton.classList.remove("copy-failed");
        copyButton.textContent = "Copy";
      }, 2000);
    });
});
