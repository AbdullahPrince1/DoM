let h1 = document.querySelector("h1");
h1.innerHTML = "Hello from js";
h1.addEventListener("click", () => {
  h1.innerHTML = "Tailwind CSS";
  h1.style.backgroundColor = "red";
  h1.style.color = "white";
});
