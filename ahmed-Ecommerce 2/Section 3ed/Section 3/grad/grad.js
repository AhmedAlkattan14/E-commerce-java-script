function toggleMenu() {
  const navList = document.querySelector(".nav-list");
  navList.classList.toggle("show");
}

const totalPrice = localStorage.getItem("totalPrice");
const subTotal = localStorage.getItem("subTotal");
const totalCost = localStorage.getItem("totalCost");

if (totalPrice && subTotal && totalCost) {
  document.getElementById("price1").textContent = totalPrice;
  document.getElementById("subtotal1").textContent = subTotal;
  document.getElementById("total-cost1").textContent = totalCost;
}
