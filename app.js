const btn = document.querySelectorAll(".pointer");
const radioButtonNumber = document.querySelectorAll(".float");
const numberOfStarsOne = document.querySelector("#one");

radioButtonNumber.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.color = "white";
  });
});

btn.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.nextElementSibling.style.color = "white";
  });
});

// btn.forEach((item) => {
//   item.addEventListener("mouseout", () => {
//     item.nextElementSibling.style.color = "hsl(217, 12%, 63%)";
//   });
// });

btn.forEach((item) => {
  item.addEventListener("click", () => {
    item.style.background = "hsl(25, 97%, 53%)";
    item.nextElementSibling.style.color = "white";
  });
});
