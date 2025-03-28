const boxes = document.querySelectorAll(".box");
const radios = document.querySelectorAll('input[name="unit"]');
const total = document.querySelector(".total");

const prices = {
  1: "$10.00 USD",
  2: "$18.00 USD",
  3: "$24.00 USD",
};

radios.forEach((radio) => {
  radio.addEventListener("change", () => {
    boxes.forEach((box) => {
      box.classList.remove("active");
      box.querySelector(".options").style.display = "none";
    });
    const selected = radio.closest(".box");
    selected.classList.add("active");
    selected.querySelector(".options").style.display = "block";

    total.textContent = prices[radio.value];
  });
});
