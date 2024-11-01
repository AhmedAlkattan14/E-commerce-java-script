///////////////////////////////////////////////////////////////
function addToCart(productName, productPrice, productImage) {
  const user = localStorage.getItem("username");
  if (user) {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.push({
      name: productName,
      price: productPrice,
      image: productImage,
      quantity: 1,
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    window.location.href = "../cart.html"; // تحويل للصفحة الثانية
  } else {
    alert("Must Login Fist To See All Features!");
  }
}

window.onload = function () {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  let tableBody = document.querySelector("tbody");
  let subtotal = 0;

  cartItems.forEach((item) => {
    let row = document.createElement("tr");
    row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td><input type="number" value="${
              item.quantity
            }" class="quantity form-control"></td>
            <td class="total">$${(item.price * item.quantity).toFixed(2)}</td>
            <td><button class="btn btn-danger remove"><i class="fas fa-trash-alt"></i></button></td>
        `;
    tableBody.appendChild(row);
    subtotal += item.price * item.quantity;
  });

  // تحديث الأسعار في الـ DOM
  document.getElementById("price").textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById("subtotal").textContent = `$${(subtotal + 50).toFixed(
    2
  )}`; // إضافة خدمة التوصيل 50
  document.getElementById("total-cost").textContent = `$${(
    subtotal + 50
  ).toFixed(2)}`; // تحديث إجمالي التكلفة

  // تحديث الكميات
  document.querySelectorAll(".quantity").forEach((input, index) => {
    input.addEventListener("change", function () {
      cartItems[index].quantity = parseInt(input.value);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      updateRow(index); // تحديث الصف الحالي
    });
  });

  // إزالة المنتج
  document.querySelectorAll(".remove").forEach((button, index) => {
    button.addEventListener("click", function () {
      cartItems.splice(index, 1);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      location.reload(); // تحديث الصفحة بعد الإزالة
    });
  });
};

// كود تحديث المجموع للصف الحالي
function updateRow(index) {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  let totalCell = document.querySelectorAll(".total")[index];
  let quantityInput = document.querySelectorAll(".quantity")[index];

  // تحديث المجموع في الصف
  totalCell.textContent = `$${(
    cartItems[index].price * quantityInput.value
  ).toFixed(2)}`;

  // إعادة حساب الإجمالي الكلي
  updateSummary();
}

// كود تحديث المجموع
function updateSummary() {
  let total = 0;
  document.querySelectorAll(".total").forEach((item) => {
    total += parseFloat(item.textContent.replace("$", ""));
  });

  // تحديث كل القيم في الـ DOM
  document.querySelector("#price").textContent = `$${total.toFixed(2)}`;
  document.querySelector("#subtotal").textContent = `$${(total + 50).toFixed(
    2
  )}`; // إضافة رسوم التوصيل
  document.querySelector("#total-cost").textContent = `$${(total + 50).toFixed(
    2
  )}`; // تحديث إجمالي التكلفة
}
// /////////////////////////////////////graddddddddddddddddddddddddddd
document.getElementById("checkout-btn").addEventListener("click", function () {
  const totalPrice = document.getElementById("price").textContent;
  const subTotal = document.getElementById("subtotal").textContent;
  const totalCost = document.getElementById("total-cost").textContent;

  // تخزين البيانات في localStorage
  localStorage.setItem("totalPrice", totalPrice);
  localStorage.setItem("subTotal", subTotal);
  localStorage.setItem("totalCost", totalCost);

  // الانتقال للصفحة الثانية
  window.location.href = "../abbas/bootstrap/assets/html/checkout.html";
});
////////////////////////////////////////////////////////////////////////////////////
