function toggleMenu() {
  const navList = document.querySelector(".nav-list");
  navList.classList.toggle("show");
}

const totalPrice = localStorage.getItem("totalPrice");
const subTotal = localStorage.getItem("subTotal");
const totalCost = localStorage.getItem("totalCost");

console.log(totalCost);

// if (totalPrice && subTotal && totalCost) {
document.getElementById("price1").innerHTML = totalPrice;
document.getElementById("subtotal1").innerHTML = subTotal;
document.getElementById("total-cost1").innerHTML = totalCost;
// }
