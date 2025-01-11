const likeButton = document.querySelector(".like-button");
const container = document.querySelector(".container2");

likeButton.addEventListener("click", () => {
  createHeart();
});

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  const trajectories = [
    [50, -50, 0, 200],
    [-50, 50, 0, 200],
    [0, 0, 50, 200],
    [50, 0, -50, 200],
  ];
  const randomTrajectory =
    trajectories[Math.floor(Math.random() * trajectories.length)];

  heart.style.left = "50%";
  heart.style.bottom = "0";
  heart.style.transform = "translate(-50%, 0)";

  container.appendChild(heart);

  heart.animate(
    [
      { transform: `translate(-50%, 0)` },
      { transform: `translate(${randomTrajectory[0]}px, -50px)` },
      { transform: `translate(${randomTrajectory[1]}px, -100px)` },
      { transform: `translate(${randomTrajectory[2]}px, -150px)` },
      { transform: `translate(${randomTrajectory[3]}px, -200px)`, opacity: 0 },
    ],
    {
      duration: 500,
      easing: "ease-out",
    },
  ).onfinish = () => {
    heart.remove();
  };
}
